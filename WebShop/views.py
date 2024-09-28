
from rest_framework import generics
from django.db.models import Q
from inventory.models import Product
from inventory.serializers import ProductListSerializer, ProductSerializer
from drf_spectacular.utils import extend_schema, OpenApiParameter


class ProductListView(generics.ListAPIView):
    permission_classes = []
    serializer_class = ProductListSerializer
    queryset = Product.objects.all()

    class Meta:
        ordering = ['created_at']

    @extend_schema(
        parameters=[
            OpenApiParameter(
                name='search',
                type=str,
                description='Search term for filtering products by title or description.',
                required=False
            ),
        ],
    )
    def get_queryset(self):
        queryset = super().get_queryset()
        search_term = self.request.query_params.get('search', None)

        if search_term is not None and search_term.strip():
            queryset = queryset.filter(Q(title__icontains=search_term) | Q(
                description__icontains=search_term))

        return queryset
