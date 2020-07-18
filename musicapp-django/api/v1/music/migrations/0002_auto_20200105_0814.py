# Generated by Django 2.2.4 on 2020-01-05 08:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='song',
            name='album',
        ),
        migrations.AlterField(
            model_name='song',
            name='artiste_fetures',
            field=models.ManyToManyField(blank=True, related_name='song_features', to='music.Artiste'),
        ),
    ]