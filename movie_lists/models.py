from django.db import models
from user_api.models import AppUser
# Create your models here.
class MovieLists(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    movies_list = models.CharField(max_length=100, blank=True)
    created_by = models.ForeignKey( AppUser, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    is_public = models.BooleanField(default=True)   
    shared_users = models.ManyToManyField(AppUser, related_name='shared_lists', blank=True)

    def __str__(self):
        return self.title + ' -by ' + self.created_by.username
