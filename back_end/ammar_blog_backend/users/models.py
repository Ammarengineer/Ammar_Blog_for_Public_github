from django.db import models
from django.contrib.auth.models import User


class UserImageProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='user_profile_images', max_length=500)
    def __str__(self) -> str:
        return f'{self.user.username} -> image {self.image.url}'