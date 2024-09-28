from jsonschema import ValidationError
from core.views import BaseDetailView, BaseListView
from .models import Product
from .serializers import ProductListSerializer, ProductSerializer
from drf_spectacular.utils import extend_schema, OpenApiParameter, OpenApiTypes


class ProductListView(BaseListView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    VALID_TYPES = ['sale', 'purchased', 'sold']

    @extend_schema(
        parameters=[
            OpenApiParameter(
                name='type',
                type=OpenApiTypes.STR,
                enum=['sale', 'purchased', 'sold'],
                description='Filter by product status: sale, purchased, sold'
            ),
        ]
    )
    def get(self, request, *args, **kwargs):
        """
        Retrieve a list of products, optionally filtered by the 'type' query parameter.
        """
        # Call the base class's get method to perform the actual retrieval
        return super().get(request, *args, **kwargs)

    def get_queryset(self):
        """
        Optionally restrict the returned products based on the 'type' query parameter.
        The available types are: sale, purchased, sold.
        """

        if self.request.method == 'POST':
            return self.queryset

        user = self.request.user
        queryset = Product.objects.all()

        inventory_type = self.request.query_params.get('type', None)

        if inventory_type not in self.VALID_TYPES:
            raise ValidationError(f"Invalid type. Allowed values are: {', '.join(self.VALID_TYPES)}")

        if inventory_type == 'sale':
            return queryset.filter(owner=user, purchaser__isnull=True)

        elif inventory_type == 'sold':
            return queryset.filter(purchaser__isnull=False, owner=user)

        elif inventory_type == 'purchased':
            return queryset.filter(purchaser=user)


class ProductDetailsView(BaseDetailView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
