from django.urls import re_path
from . import views

urlpatterns = [
    # path() method doesn't work with react router for some reason
    # `(?!api)` negative lookahead, not a match if the path starts with 'api'
    re_path(r'^(?!api)(?!admin)(?:.*)/?$', views.index),
]
