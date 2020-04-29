from rest_framework import serializers
from .models import Post, Tag, Showcase, Label, Tech


class ListingField(serializers.RelatedField):
    def to_representation(self, value):
        return "{}".format(value.name)


class PostSerializer(serializers.ModelSerializer):
    tags = ListingField(many=True, read_only=True)

    class Meta:
        model = Post
        fields = '__all__'


class ShowcaseSerializer(serializers.ModelSerializer):
    labels = ListingField(many=True, read_only=True)
    techs = ListingField(many=True, read_only=True)

    class Meta:
        model = Showcase
        fields = '__all__'


class LabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Label
        fields = '__all__'


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'
