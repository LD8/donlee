from django.urls import re_path, path
from . import views
from django.views.generic.base import TemplateView

app_name = "frontend"
urlpatterns = [
    # path() method doesn't work with react router for some reason
    # `(?!api)` negative lookahead, not a match if the path starts with 'api'
    path('cv/', TemplateView.as_view(template_name="frontend/cv.html"), name="cv-en"),
    path('cv-zh/', TemplateView.as_view(template_name="frontend/cv_zh.html"), name="cv-zh"),
    re_path(r'^(?!api)(?!admin)(?!cv)(?:.*)/?$', views.index),
]
