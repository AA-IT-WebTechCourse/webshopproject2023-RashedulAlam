
from django.utils import timezone
from rest_framework import generics
from django.db.models import Q
from WebShop.serializers import ProductListSerializer, ProductPaymentSerializer
from inventory.models import Product
from drf_spectacular.utils import extend_schema, OpenApiParameter
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response


class ProductListView(generics.ListAPIView):
    permission_classes = []
    serializer_class = ProductListSerializer
    queryset = Product.objects.all().order_by('-created_at')

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
        queryset = queryset.filter(purchaser__isnull=True)
        search_term = self.request.query_params.get('search', None)

        if search_term is not None and search_term.strip():
            queryset = queryset.filter(Q(title__icontains=search_term) | Q(
                description__icontains=search_term))

        return queryset


class ProductPaymentCreateView(APIView):
    permission_classes = [IsAuthenticated]
    price_updated_error_message = 'Product has been updated by new price.'
    product_does_not_exist_message = 'Either Product does not exsit or it has been removed from system.'
    product_already_sold = 'Product has been already purchased.'

    @extend_schema(
        request=ProductPaymentSerializer(many=True),
        responses={201: ProductPaymentSerializer(many=True)},
        description='API to buy the selected product.'
    )
    def post(self, request, *args, **kwargs):
        product_data = request.data
        error = {}

        if isinstance(product_data, list):
            serializer = ProductPaymentSerializer(data=product_data, many=True)

            if serializer.is_valid():
                for product in serializer.validated_data:
                    product_id = str(product['id'])
                    product_price = product['price']
                    try:
                        product_db_model = Product.objects.get(id=product_id)

                        if product_db_model.price != product_price:
                            error[product_id] = self.price_updated_error_message
                        elif product_db_model.purchaser is not None:
                            error[product_id] = self.product_already_sold
                    except:
                        error[product_id] = self.product_does_not_exist_message

                if not error.items():
                    for product in serializer.validated_data:
                        product_db_model = Product.objects.get(
                            id=product['id'])
                        product_db_model.purchaser = request.user
                        product_db_model.purchased_at = timezone.now()
                        product_db_model.save()
                else:
                    product_ids = [product['id']
                                   for product in serializer.validated_data]
                    updated_products = Product.objects.filter(
                        id__in=product_ids)
                    response_serializer = ProductListSerializer(
                        updated_products, many=True)

                    return Response({"error": error, "updated_products": response_serializer.data}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

                return Response(status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Expected a list of product objects."}, status=status.HTTP_400_BAD_REQUEST)
