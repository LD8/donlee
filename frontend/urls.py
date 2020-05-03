from django.urls import re_path, path
from . import views
from django.views.generic.base import TemplateView

urlpatterns = [
    # path() method doesn't work with react router for some reason
    # `(?!api)` negative lookahead, not a match if the path starts with 'api'
    path('cv/', TemplateView.as_view(template_name="frontend/cv.html")),
    re_path(r'^(?!api)(?!admin)(?!cv)(?:.*)/?$', views.index),
]
