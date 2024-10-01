import json
import os
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from inventory.models import Product

users_seed_file_path = os.path.join(settings.BASE_DIR, 'seed', 'users.json')
products_seed_file_path = os.path.join(
    settings.BASE_DIR, 'seed', 'products.json')


class InitializationView(APIView):

    """
    post:
    Initializes the system by creating six users with products.
    """
    permission_classes = []

    def post(self, request):

        response = None

        try:
            User.objects.all().delete()
            Product.objects.all().delete()

            with open(users_seed_file_path, 'r') as user_file:
                users_data = json.load(user_file)
        
                for user in users_data:
                    username = user['username']
                    email = user['email']
                    password = user['password']
                
                    User.objects.create_user(
                        username=username,
                        email=email,
                        password=password,
                    )

            with open(products_seed_file_path, 'r') as product_file:
                products_data = json.load(product_file)
                for product in products_data:
                    owner = User.objects.get(username=product['seller_name'],)
                    Product.objects.create(
                        title=product['name'],
                        price=product['price'],
                        description=product['description'],
                        owner=owner
                    )

            response = {"is_successful": True}

        except Exception as e:
            print(str(e))
            response = {"is_successful": False}

        return Response(response, status=status.HTTP_200_OK)
