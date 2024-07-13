from django.db import models
from core.models import BaseModel
from django.contrib.auth.models import User


class Product(BaseModel):
    """Model definition for Product."""

    title = models.CharField(max_length=512)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        """Meta definition for Product."""

        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        """Unicode representation of MODELNAME."""
        return f'{self.id} : {self.title}'
