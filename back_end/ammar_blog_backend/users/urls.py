from django.urls import path
from users import views


urlpatterns = [
    path('', view=views.ViewAllUsers.as_view()),
    path('add_new_user/', view=views.AddNewUser.as_view()),
    path('get_user_info_d/<int:pk>/', view=views.Get_User_Info_for_detailed_Page.as_view()),
    
]
