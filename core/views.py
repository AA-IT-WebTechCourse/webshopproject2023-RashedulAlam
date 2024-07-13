from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class BaseListView(generics.ListCreateAPIView):
    queryset = None
    serializer_class = None
    permission_classes = [IsAuthenticated]
    # authentication_classes = [JWTAuthentication]


class BaseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = None
    serializer_class = None
    permission_classes = [IsAuthenticated]
    # authentication_classes = [JWTAuthentication]
