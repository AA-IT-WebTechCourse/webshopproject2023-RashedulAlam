from core import serializers
from .models import Product


class ProductSerializer(serializers.BaseSerializer):
    class Meta:
        model = Product
        exclude = ['owner', 'created_at', 'updated_at']


class ProductListSerializer(serializers.BaseSerializer):
    owner_name = serializers.serializers.SerializerMethodField()
    purchaser_name = serializers.serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['id', 'created_at', 'title',
                  'price', 'description', 'owner_name', 'purchaser_name', 'purchased_at']
        depth = 1

    def get_owner_name(self, obj):
        return obj.owner.username
    
    def get_purchaser_name(self, obj):
        return obj.purchaser.username if obj.purchaser else None

    def create(self, validated_data):
        request = self.context.get('request')
        validated_data['owner'] = request.user

        return super().create(validated_data)
