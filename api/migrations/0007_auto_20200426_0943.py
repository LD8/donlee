# Generated by Django 3.0.4 on 2020-04-26 01:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20200424_1303'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Task',
        ),
        migrations.AlterField(
            model_name='post',
            name='uploaded_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='showcase',
            name='techs',
            field=models.ManyToManyField(blank=True, to='api.Tech'),
        ),
        migrations.AlterField(
            model_name='tech',
            name='name',
            field=models.CharField(max_length=250, verbose_name='Techniques for technical sheet'),
        ),
    ]