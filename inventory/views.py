from core.views import BaseDetailView, BaseListView
from .models import Product
from .serializers import ProductSerializer


class ProductListView(BaseListView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailsView(BaseDetailView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
