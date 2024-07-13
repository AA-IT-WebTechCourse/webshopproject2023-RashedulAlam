from rest_framework import serializers

class BaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = None
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        # Ensure that the model is defined before initializing
        if self.Meta.model is None:
            raise ValueError("You must define a Meta model.")
        super().__init__(*args, **kwargs)
