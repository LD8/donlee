from rest_framework import serializers
from .models import Post, Tag, Showcase, Label, Tech


class TagListingField(serializers.RelatedField):
    def to_representation(self, value):
        return "{}".format(value.name)


class PostSerializer(serializers.ModelSerializer):
    tags = TagListingField(many=True, read_only=True)

    class Meta:
        model = Post
        fields = '__all__'


class LabelListingField(serializers.RelatedField):
    def to_representation(self, value):
        return "{}".format(value.name)


class TechListingField(serializers.RelatedField):
    def to_representation(self, value):
        return "{}".format(value.name)


class ShowcaseSerializer(serializers.ModelSerializer):
    labels = LabelListingField(many=True, read_only=True)
    techs = TechListingField(many=True, read_only=True)

    class Meta:
        model = Showcase
        fields = '__all__'
