from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Blog(models.Model):
    title = models.CharField(max_length=40)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    short_content = models.CharField(max_length=100)
    content = models.TextField(max_length=500)
    date_of_post = models.DateTimeField(auto_now_add=timezone.now)


    def __str__(self):
        return self.title










