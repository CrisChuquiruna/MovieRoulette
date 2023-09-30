from rest_framework import serializers
from .models import MovieLists

class MovieListsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieLists
        fields = '__all__'