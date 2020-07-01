from backend.models import Register
from rest_framework import viewsets, permissions
from .serializers import RegisterSerializer

class RegisterViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = RegisterSerializer

    def get_queryset(self):
        return self.request.user.backend.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
