from rest_framework import serializers

from users.models import UserImageProfile
from django.contrib.auth.models import User



class UserSerializer(serializers.ModelSerializer):
    # user_name = serializers.ReadOnlyField(source='user.username')
    username = serializers.SerializerMethodField()
    class Meta:
        model = UserImageProfile
        fields = ['user', 'image', 'username']
        # lookup_field = 'username'


    def get_username(self, obj):
        print(f'obj = {obj.author}')
        return obj.user.username
    
    # def get_user_profile_pk(self, obj):
    #     pass


