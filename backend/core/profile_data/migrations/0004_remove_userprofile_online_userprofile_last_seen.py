# Generated by Django 5.1 on 2024-11-13 16:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profile_data', '0003_userprofile_friends_userprofile_online'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='online',
        ),
        migrations.AddField(
            model_name='userprofile',
            name='last_seen',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
