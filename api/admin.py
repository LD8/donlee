from django.contrib import admin
from .models import Post, Tag, Showcase, Label, Tech

admin.site.site_header = "Don Lee's | Site Administration | Such Fun!!"
admin.site.index_title = "Upload posts and project details"
admin.site.site_title = "Don Lee's Admin"


@admin.register(Tag)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('name', 'order', 'post_numbers_with_this_tag')


@admin.register(Label)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('name', 'order', 'showcase_numbers_with_this_label')


@admin.register(Tech)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('name', 'showcase_numbers_used_this_tech')


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'order', 'get_tags', 'uploaded_date')


@admin.register(Showcase)
class ShowcaseAdmin(admin.ModelAdmin):
    list_display = ('name', 'order', 'get_labels', 'get_techs', 'link_online',
                    'link_github', 'link_codesandbox')
