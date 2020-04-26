# Generated by Django 3.0.4 on 2020-04-24 04:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200424_1228'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='tag',
        ),
        migrations.AddField(
            model_name='post',
            name='tag',
            field=models.ManyToManyField(blank=True, null=True, to='api.Tag'),
        ),
        migrations.RemoveField(
            model_name='showcase',
            name='label',
        ),
        migrations.AddField(
            model_name='showcase',
            name='label',
            field=models.ManyToManyField(blank=True, null=True, to='api.Label'),
        ),
        migrations.RemoveField(
            model_name='showcase',
            name='tech',
        ),
        migrations.AddField(
            model_name='showcase',
            name='tech',
            field=models.ManyToManyField(blank=True, null=True, to='api.Tech', verbose_name='A list for technical sheet'),
        ),
    ]
