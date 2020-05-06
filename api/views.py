from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Post, Tag, Showcase, Label, Tech
from .serializers import PostSerializer, ShowcaseSerializer, LabelSerializer, TagSerializer
from rest_framework import generics


class LabelListView(generics.ListAPIView):
    queryset = Label.objects.all()
    serializer_class = LabelSerializer


# class ShowcaseLabelQ(generics.ListAPIView):
#     serializer_class = ShowcaseSerializer

#     def get_queryset(self):
#         label = get_object_or_404(Label, pk=self.kwargs['label_pk'])
#         return Showcase.objects.filter(labels=label)


class TagListView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


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


@api_view(['GET'])
def api_overview(request):
    api_urls = {
        'Showcases': '/showcases/',
        'Showcase Detail': '/showcases/<int:pk>/',
        'Showcase labels': '/showcases/labels/',
        'Showcases under one label': '/showcases/labels/<int:pk>',
        'Posts': '/posts/',
        'Post Detail': '/posts/<int:pk>/',
        'Post tags': '/posts/tags/',
        'Posts under one tag': '/posts/tags/<int:pk>',
    }
    return Response(api_urls)
