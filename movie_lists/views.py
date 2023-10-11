from rest_framework import viewsets
from .serializer import MovieListsSerializer
from .models import MovieLists
from django.http import JsonResponse
from rest_framework import permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication 

class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening
# Create your views here.
class MovieListView(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    permission_classes = (permissions.AllowAny,)
    serializer_class = MovieListsSerializer
    queryset = MovieLists.objects.all()


def getList(request, user_id):
    lists = list(MovieLists.objects.filter(created_by=user_id).values())
    lists.extend(list(MovieLists.objects.filter(shared_users=user_id).values()))
    return JsonResponse(lists, safe=False)