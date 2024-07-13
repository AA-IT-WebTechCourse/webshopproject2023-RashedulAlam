from django.urls import path
from .views import ProductListView, ProductDetailsView

urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<uuid:pk>/', ProductDetailsView.as_view(), name='product-detail'),
]
