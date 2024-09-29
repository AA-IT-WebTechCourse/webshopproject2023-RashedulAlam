from inventory.models import Product
from core import serializers


class ProductPaymentSerializer(serializers.serializers.ModelSerializer):
    id = serializers.serializers.UUIDField()
    price = serializers.serializers.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        model = Product
        fields = ['id', 'price']


class ProductListSerializer(serializers.BaseSerializer):
    owner_name = serializers.serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['id', 'created_at', 'title',
                  'price', 'description', 'owner_name']
        depth = 1

    def get_owner_name(self, obj):
        return obj.owner.username

    def create(self, validated_data):
        request = self.context.get('request')
        validated_data['owner'] = request.user

        return super().create(validated_data)
