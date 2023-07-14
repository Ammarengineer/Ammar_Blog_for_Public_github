from django.shortcuts import get_object_or_404, render

from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions
from users.models import UserImageProfile
from users.serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework import status


class ViewAllUsers(generics.ListAPIView):
    queryset = UserImageProfile.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]


class AddNewUser(generics.CreateAPIView):
    queryset = UserImageProfile.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


    def create(self, request, *args, **kwargs):
        my_data = {}
        print(f'request = {request.data}')
        my_data['username'] = request.data['name']
        my_data['email'] = request.data['email']
        my_data['password'] = request.data['password']
        my_data['image'] = request.data['file']
        print(f'my_data = {my_data}')
        for data in request.data:
            print(f'data = {data}, type = {type(data)}')
            

        if not User.objects.filter(username=my_data['username']):
            user = User.objects.create_user(username=my_data['username'], email=my_data['email'], password=my_data['password'])
            user.save()

            user_profile = UserImageProfile.objects.create(user=user, image=my_data['image'])
            user_profile.save()


            print(f'user = {user}')

            return Response(data={'msg': f'user is has been added !!!'}, status=status.HTTP_200_OK)

        else:
            return Response(data={'msg': f'this user with the name {my_data["username"]} is already exits !!!'}, status=status.HTTP_400_BAD_REQUEST)



        


class Get_User_Info_for_detailed_Page(generics.RetrieveAPIView):
    queryset = UserImageProfile.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]
    # lookup_field = 'username'

    def get(self, request, *args, **kwargs):
        print('get !!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        
        return super().get(request, *args, **kwargs)

    