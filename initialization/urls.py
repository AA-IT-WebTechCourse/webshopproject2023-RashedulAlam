from django.urls import path
from .views import InitializationView

urlpatterns = [
    path('', InitializationView.as_view(), name='system-initialization'),
]
