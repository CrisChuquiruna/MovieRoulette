# Generated by Django 4.2.5 on 2023-10-03 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie_lists', '0005_alter_movielists_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movielists',
            name='movies_list',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
