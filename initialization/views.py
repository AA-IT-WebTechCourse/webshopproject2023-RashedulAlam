from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from inventory.models import Product


class InitializationView(APIView):

    """
    post:
    Initializes the system by creating six users with products.
    """
    permission_classes = []

    def post(self, request):

        response = None

        try:
            # turn on before submit
            # User.objects.all().delete()
            User.objects.filter(is_superuser=False).delete()
            Product.objects.all().delete()

            for i in range(1, 7):
                user_name = f'testuser{i}'
                email = f'testuser{i}@shop.aa'
                password = f'pass{i}'

                user = User.objects.create_user(
                    username=user_name,
                    email=email,
                    password=password,
                )

                if i < 4 : 
                    for j in range(1, 11):
                        Product.objects.create(
                            title=f'Product {j}',
                            price=i*100.00,
                            description=f'Product Description {j}',
                            owner=user
                        )

            response = {"is_successful": True}

        except Exception:
            response = {"is_successful": False}

        return Response(response, status=status.HTTP_200_OK)
