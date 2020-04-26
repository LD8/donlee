from django.shortcuts import render
# from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from rest_framework.views import APIView
from .models import Post, Tag, Showcase, Label, Tech
from .serializers import PostSerializer, ShowcaseSerializer

from rest_framework import generics
# from rest_framework import mixins


class ShowcaseListView(generics.ListAPIView):
    queryset = Showcase.objects.all()
    serializer_class = ShowcaseSerializer


class ShowcaseDetailView(generics.RetrieveAPIView):
    queryset = Showcase.objects.all()
    serializer_class = ShowcaseSerializer


class PostListView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetailView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


# class TaskListView(generics.ListCreateAPIView):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer


# class TaskDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer

# class TaskListView(
#         mixins.ListModelMixin,
#         mixins.CreateModelMixin,
#         generics.GenericAPIView):
#     """ List all tasks, create new tasks """

#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer

#     def get(self, request, *args, **kwargs):
#         return self.list(request, *args, **kwargs)

#     def post(self, request, *args, **kwargs):
#         return self.create(request, *args, **kwargs)


# class TaskDetailView(
#         mixins.RetrieveModelMixin,
#         mixins.UpdateModelMixin,
#         mixins.DestroyModelMixin,
#         generics.GenericAPIView):
#     """ List, update and delete a task """

#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer

#     def get(self, request, *args, **kwargs):
#         return self.retrieve(request, *args, **kwargs)

#     def put(self, request, *args, **kwargs):
#         return self.update(request, *args, **kwargs)

#     def delete(self, request, *args, **kwargs):
#         return self.destroy(request, *args, **kwargs)


@api_view(['GET'])
def api_overview(request):
    api_urls = {
        'List': '/tast-list',
        'Detail View': '/task-detail/<str:pk>/',
        'Create': '/task-create/',
        'Update': '/task-update/<str:pk>/',
        'Delete': '/task-delete/<str:pk>/',
    }
    return Response(api_urls)


# class TaskListView(APIView):
#     """ List all tasks """

#     def get(self, request, format=None):
#         tasks = Task.objects.all()
#         serializer = TaskSerializer(tasks, many=True)
#         return Response(serializer.data)


# class TaskDetailView(APIView):
#     """ List a single task, identified by its pk """

#     def get(self, request, pk, format=None):
#         task = get_object_or_404(Task, pk=pk)
#         serializer = TaskSerializer(task)
#         return Response(serializer.data)


# @api_view(['GET'])
# def task_list(request):
#     """ List all tasks """
#     tasks = Task.objects.all()
#     serializer = TaskSerializer(tasks, many=True)
#     return Response(serializer.data)
