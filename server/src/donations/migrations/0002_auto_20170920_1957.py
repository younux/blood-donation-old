# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-20 19:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('donations', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donation',
            name='phone_number',
            field=models.CharField(max_length=20, verbose_name='Phone number'),
        ),
    ]
