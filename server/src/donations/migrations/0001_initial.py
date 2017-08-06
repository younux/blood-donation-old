# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-06 19:45
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Donation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(auto_now_add=True, verbose_name='Creation date')),
                ('deadline', models.DateTimeField(verbose_name='Deadline')),
                ('description', models.TextField(verbose_name='Description')),
                ('city', models.CharField(max_length=64, verbose_name='city')),
                ('phone_number', models.CharField(max_length=10, verbose_name='Phone number')),
                ('status', models.CharField(choices=[('URG', 'Urgent'), ('CLD', 'Closed'), ('EXP', 'Expired')], max_length=20, verbose_name='Status')),
                ('applicant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.UserProfile', verbose_name='Applicant')),
            ],
        ),
    ]
