from rest_framework.response import Response
from django.http import JsonResponse
from django.views import View
import jwt
from django.conf import settings
import requests

class VerifyTokenView(View):
    def get(self, request):
        auth_header = request.headers.get('Authorization')
        if not auth_header:
            return JsonResponse({"error": "Authorization header not provided"}, status=400)

        parts = auth_header.split()
        if len(parts) != 2 or parts[0] != 'Bearer':
            return JsonResponse({"error": "Authorization header must be 'Bearer <token>'"}, status=400)

        token = parts[1]

        try:
            decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            return JsonResponse({"error": "Token is valid", "payload": decoded_token}, status=200)
        except jwt.ExpiredSignatureError:
            return JsonResponse({"error": "Token has expired"}, status=401)
        except jwt.InvalidTokenError:
            return JsonResponse({"error": "Invalid token"}, status=401)
        

def get_user_id(request):
    auth_header = request.headers.get('Authorization')
    if not auth_header:
        return JsonResponse({"error": "Authorization header not provided"}, status=400)
    
    parts = auth_header.split()
    if len(parts) != 2 or parts[0] != 'Bearer':
        return JsonResponse({"error": "Authorization header must be 'Bearer <token>'"}, status=400)
    
    token = parts[1]

    url = 'http://authentication:8002/api/auth/user-info/'
    headers = {'Authorization': f'Bearer {token}'}
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        return response.json()['id']
    else:
        return None