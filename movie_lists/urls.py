from django.urls import path, include
from rest_framework import routers 
from rest_framework.documentation import include_docs_urls
from movie_lists import views

router = routers.DefaultRouter()
router.register(r'movie_lists', views.MovieListView, 'movie_list')

urlpatterns = [
    path('get_lists/<int:user_id>/', views.getList),
    path('', include(router.urls)),
    path('docs/', include_docs_urls(title='Movie Roulette API')),
]