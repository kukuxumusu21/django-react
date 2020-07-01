from django.db import models
from django.contrib.auth.models import User

def nameFile(instance, filename):
    return '/'.join(['images', str(instance.name), filename])

class Register(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)

    image = models.ImageField(upload_to=nameFile, max_length=254, blank=True, null=True)

    owner = models.ForeignKey(
        User, related_name='backend', on_delete=models.CASCADE, null=True
    )
