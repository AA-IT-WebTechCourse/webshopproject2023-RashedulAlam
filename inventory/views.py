from core.views import BaseDetailView, BaseListView
from .models import Product
from .serializers import ProductListSerializer, ProductSerializer


class ProductListView(BaseListView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer


class ProductDetailsView(BaseDetailView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
