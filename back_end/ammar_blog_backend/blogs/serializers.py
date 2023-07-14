from rest_framework import serializers

from blogs.models import Blog


class BlogsSerializer(serializers.ModelSerializer):
    author_name = serializers.ReadOnlyField(source='author.username', read_only=True)
    blog_number = serializers.SerializerMethodField(read_only=True)
    user_profile_pk = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Blog
        fields = [
            'id',
            'author',
            'blog_number',
            'author_name',
            'title',
            'short_content',
            'content',
            'date_of_post',
            'user_profile_pk'
        ]


    def get_blog_number(self, obj):
        
        return obj.pk
    

    def get_user_profile_pk(self, obj):
        print(f'obj !!!!! = {obj.author.userimageprofile.pk}')
        userProfile = obj.author.userimageprofile.pk
        return userProfile

    



