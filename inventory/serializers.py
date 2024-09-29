from core import serializers
from .models import Product
from rest_framework.exceptions import ValidationError


class ProductSerializer(serializers.BaseSerializer):
    is_readonly = serializers.serializers.SerializerMethodField()
    
    class Meta:
        model = Product
        exclude = ['owner', 'created_at', 'updated_at']
        
    def get_is_readonly(self, obj):
        return obj.purchaser is not None or obj.owner != self.context['request'].user

    def update(self, instance, validated_data):
        """
        Custom method for handling PUT requests and updating a Product instance.
        Returns 422 status code if purchaser is not null or owner is not the same.
        """
        request_user = self.context['request'].user

        if instance.purchaser is not None:
            raise ValidationError(
                {"error": "This product has already been purchased."}, code=422)

        if instance.owner != request_user:
            raise ValidationError(
                {"error": "You are not the owner of this product."}, code=422)

        instance = super().update(instance, validated_data)

        return instance


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
