from django.urls import path
from . import views

app_name = 'api'
urlpatterns = [
    path('', views.api_overview, name='api-overview'),
    # path('task-list/', views.task_list, name='task-list'),
    # path('task-list/', views.TaskListView.as_view(), name='task-list'),
    # path('task-list/<int:pk>/', views.TaskDetailView.as_view(), name='task-detail'),


    path('showcases/', views.ShowcaseListView.as_view()),
    path('showcases/<int:pk>/', views.ShowcaseDetailView.as_view()),


    path('posts/', views.PostListView.as_view()),
    path('posts/<int:pk>/', views.PostDetailView.as_view()),

]
