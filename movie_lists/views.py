from rest_framework import viewsets
from .serializer import MovieListsSerializer
from .models import MovieLists

# Create your views here.
class MovieListView(viewsets.ModelViewSet):
    serializer_class = MovieListsSerializer
    queryset = MovieLists.objects.all()