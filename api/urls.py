from django.urls import path
from . import views

app_name = 'api'
urlpatterns = [
    path('', views.api_overview),

    path('showcases/', views.ShowcaseListView.as_view()),
    path('showcases/<int:pk>/', views.ShowcaseDetailView.as_view()),
    path('showcases/labels/', views.LabelListView.as_view()),
    # path('showcases/labels/<int:label_pk>/', views.ShowcaseLabelQ.as_view()),

    path('posts/', views.PostListView.as_view()),
    path('posts/<int:pk>/', views.PostDetailView.as_view()),
    path('posts/tags/', views.TagListView.as_view()),
    # path('posts/tags/<int:pk>/', views.PostTagQ.as_view()),

]
