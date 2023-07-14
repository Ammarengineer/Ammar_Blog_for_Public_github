from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('', views.List_All_Blogs.as_view()),
    path('make_new_blog/', view=views.Make_New_Blog.as_view()),
    path('get_blog/<int:id>/', view=views.Get_Blog.as_view()),
    path('delete_blog/<int:pk>/', view=views.Delete_Blog.as_view()),
    path('update_blog/<int:pk>/', view=views.Update_Blog.as_view()),

    path('api-auth/', include('rest_framework.urls')),


    #auth
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
