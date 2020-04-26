from django.db import models


class Label(models.Model):
    name = models.CharField(
        max_length=50, verbose_name='Label of framework, library, language etc.')

    class Meta():
        verbose_name = 'Label'
        verbose_name_plural = 'Labels'
        ordering = ['name']

    def __str__(self):
        return self.name

    @property
    def showcase_numbers_with_this_label(self):
        return self.showcase_set.count()


class Tech(models.Model):
    name = models.CharField(
        max_length=250, verbose_name='Techniques for technical sheet')

    class Meta():
        verbose_name = 'Technique'
        verbose_name_plural = 'Techniques'
        ordering = ['name']

    def __str__(self):
        return self.name

    @property
    def showcase_numbers_used_this_tech(self):
        return self.showcase_set.count()


class Showcase(models.Model):
    name = models.CharField(max_length=200, verbose_name='Showcase Name')
    brief = models.CharField(
        max_length=200, verbose_name='A brief of the showcase')
    about = models.TextField(verbose_name='About the showcase')
    labels = models.ManyToManyField(
        Label, blank=True)
    techs = models.ManyToManyField(
        Tech, blank=True)
    link_online = models.CharField(
        max_length=300, blank=True, null=True, verbose_name='Link to online presence')
    link_github = models.CharField(
        max_length=300, blank=True, null=True, verbose_name='Link to GitHub')
    link_codesandbox = models.CharField(
        max_length=300, blank=True, null=True, verbose_name='Link to CodeSandbox')

    img_front = models.ImageField(
        upload_to='showcase_images', null=True, blank=True, verbose_name='Image (size: 600px x 400px) to show on the front of the card')
    img_back = models.ImageField(
        upload_to='showcase_images', null=True, blank=True, verbose_name='Image (size: 600px x 400px) to show on the back of the card')
    img_third = models.ImageField(
        upload_to='showcase_images', null=True, blank=True, verbose_name='Image (size: 600px x 400px) to show in detail page (optional)')

    class Meta():
        verbose_name = 'Showcase'
        verbose_name_plural = 'Showcases'
        ordering = ['name']

    def __str__(self):
        return self.name

    @property
    def get_labels(self):
        return ", ".join([l.name for l in self.labels.all()])
    @property
    def get_techs(self):
        return ", ".join([t.name for t in self.techs.all()])

class Tag(models.Model):
    name = models.CharField(
        max_length=50, verbose_name='Keywords of the post')

    class Meta():
        verbose_name = 'Tag'
        verbose_name_plural = 'Tags'
        ordering = ['name']

    def __str__(self):
        return self.name

    @property
    def post_numbers_with_this_tag(self):
        return self.post_set.count()


class Post(models.Model):
    title = models.CharField(max_length=200, verbose_name='Post Title')
    tags = models.ManyToManyField(
        Tag, blank=True)
    content = models.TextField()
    uploaded_date = models.DateTimeField(null=True, blank=True)

    class Meta():
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'
        ordering = ['-uploaded_date', 'title']

    def __str__(self):
        return self.title

    @property
    def get_tags(self):
        return ", ".join([t.name for t in self.tags.all()])