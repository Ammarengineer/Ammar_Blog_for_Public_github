import requests as re
import client_url


class APIClient:
    def __init__(self, user_name, user_email, user_password, auth_url):
        self.user_name = user_name
        self.user_email = user_email
        self.user_password = user_password
        self.auth_url = auth_url




    def auth(self):
        user_info = {
            'username': self.user_name,
            'email': self.user_email,
            'password': self.user_password
        }

        user_auth = re.post(url=self.auth_url, json=user_info)
        user_auth_python = user_auth.json()
        user_access_token = user_auth_python['access']
        user_refresh_token = user_auth_python['refresh']
        
        print(f'user_access_token = {user_access_token}')

        return user_access_token, user_refresh_token
    

    def get_all_blogs(self, get_all_blogs_url):
        access_token = self.auth()[0]
        print(f'access_token !!!!!!!!!!!!!!= {access_token}')

        all_blogs_req = re.get(url=get_all_blogs_url, headers={'Authorization': f"Bearer {access_token}"})

        all_blogs = all_blogs_req.json()
        status = all_blogs_req.status_code

        print(f'all_blogs = {all_blogs},  status = {status}')


    def add_new_blog(self, add_new_blog_url, title, author, short_content, content):
        blog = {
            'title': title,
            'author': author,
            'short_content': short_content,
            'content': content
        }
        # access_token = self.auth()[0]
        # headers = {'Authorization': f"Bearer {access_token}"}

        new_blog_re = re.post(url=add_new_blog_url, json=blog, 
                            #   headers=headers
                              )

        new_blog = new_blog_re.json()
        print(f'new_blog = {new_blog}')
        





first_client = APIClient(
    user_name='user1',
    user_email='aaaaengineer7777@gmail.com',
    user_password='ammar14863456',
    auth_url=client_url.auth_url,
    )


# first_client.get_all_blogs(get_all_blogs_url=client_url.all_blogs_url)
first_client.add_new_blog(add_new_blog_url=client_url.add_new_blog_url, title='my first blog', author=1, short_content='new short content', content='new content')