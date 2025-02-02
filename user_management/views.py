from rest_framework import generics, status
from .serializers import UserDetailsSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import ChangePasswordSerializer


class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = []


class ChangePasswordView(generics.GenericAPIView):
    serializer_class = ChangePasswordSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(
            data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response({"detail": "Password updated successfully."}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CurrentUserDetailsView(generics.RetrieveAPIView):
    """
    Retrieve the details of the currently authenticated user.
    """
    permission_classes = [IsAuthenticated]
    serializer_class = UserDetailsSerializer

    def get(self, request, *args, **kwargs):
        user =  self.request.user
        serializer = self.get_serializer(user)
        
        return Response(serializer.data)
