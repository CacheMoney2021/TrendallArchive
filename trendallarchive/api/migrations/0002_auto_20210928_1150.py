# Generated by Django 3.0.10 on 2021-09-28 11:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vase',
            name='collectionName',
            field=models.CharField(blank=True, max_length=600, null=True),
        ),
        migrations.AlterField(
            model_name='vase',
            name='diameter',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='vase',
            name='height',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='vase',
            name='previousColl',
            field=models.CharField(blank=True, max_length=600, null=True),
        ),
        migrations.AlterField(
            model_name='vase',
            name='provenanceName',
            field=models.CharField(blank=True, max_length=600, null=True),
        ),
        migrations.AlterField(
            model_name='vase',
            name='publications',
            field=models.CharField(blank=True, max_length=700, null=True),
        ),
        migrations.AlterField(
            model_name='vase',
            name='subject',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]