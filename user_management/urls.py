from django.urls import path
from .views import ChangePasswordView, CurrentUserDetailsView, UserRegistrationView

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-register'),
    path('change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('current-user/', CurrentUserDetailsView.as_view(),
         name='current-user-details'),
]
