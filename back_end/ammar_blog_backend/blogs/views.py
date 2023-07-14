from django.shortcuts import render
from rest_framework import generics
from . Ammar_permissions import IsOwnerOrReadOnly
from blogs.serializers import BlogsSerializer
from blogs.models import Blog
from rest_framework import permissions
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import status
# from .Ammar_permissions import IsOwnerOrReadOnly



# class myIsOwnerOrReadOnly(permissions.DjangoModelPermissions):
#     """
#     Object-level permission to only allow owners of an object to edit it.
#     Assumes the model instance has an `owner` attribute.
#     """
    
#     def has_permission(self, request, view):
#         print(f'view = {view}')
#         return super().has_permission(request, view)

class List_All_Blogs(generics.ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogsSerializer
    permission_classes = [permissions.AllowAny]

    # def list(self, request, *args, **kwargs):
    #     print(f'request = {request}')
    #     print(f'headers = {request.headers}')
    #     return Response(data={'blogs': request.data})

    def list(self, request, *args, **kwargs):
        all_users = User.objects.all()
        list_of_users = []

        for user in all_users:
            print(f'user = {user}')
            list_of_users.append(user)
        print(f'req = {request}')
        print(f'*arg = {args}')
        print(f'kwargs = {kwargs}')
        print(f'list_of_user = {list_of_users}')
        
        try:
            print(f'request.user_image_profile_pk = {request.user.userimageprofile.pk}')
            
        except Exception as e:
            print(f'e = {e}')
        return super().list(request, *args, **kwargs)


class Get_Blog(generics.RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogsSerializer
    permission_classes = [permissions.AllowAny]

    lookup_field = 'id'
        

class Make_New_Blog(generics.CreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogsSerializer
    # permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    permission_classes = [permissions.AllowAny]


    def create(self, request, *args, **kwargs):
        print(f'request = {request.data}')
        print(f'type = {type(request.data)}')
        
        ser = self.serializer_class(data=request.data)
        if ser.is_valid(raise_exception=True):
            ser.save()

            return Response(data=request.data, status=status.HTTP_201_CREATED)
        
        return Response(data={'resp': 'invald data'}, status=status.HTTP_400_BAD_REQUEST)
        
        


class Update_Blog(generics.UpdateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogsSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]


class Delete_Blog(generics.DestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogsSerializer
    # permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    permission_classes = [permissions.AllowAny]

    






