from core import serializers
from .models import Product


class ProductSerializer(serializers.BaseSerializer):
    class Meta:
        model = Product
        fields = '__all__'
