# Generated by Django 3.1.1 on 2021-01-04 15:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('moons', '0004_auto_20201205_0626'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='miningobservation',
            name='frack',
        ),
    ]
