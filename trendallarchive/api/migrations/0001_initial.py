# Generated by Django 3.0.10 on 2021-08-23 11:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Artist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('artistID', models.CharField(max_length=10)),
                ('artistName', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Collection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('collectionID', models.CharField(max_length=10)),
                ('collectionName', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Provenance',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ProvenanceID', models.CharField(max_length=10)),
                ('provenanceName', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Publication',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('publicationID', models.CharField(max_length=10)),
                ('publicationName', models.CharField(max_length=100)),
                ('publicationDate', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Scholar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('scholarID', models.CharField(max_length=10)),
                ('scholarName', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Shape',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shapeID', models.CharField(max_length=10)),
                ('shapeName', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Vase',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vaseID', models.CharField(max_length=10)),
                ('inscription', models.CharField(blank=True, max_length=255)),
                ('fabric', models.CharField(blank=True, max_length=100)),
                ('subject', models.CharField(blank=True, max_length=255)),
                ('technique', models.CharField(blank=True, max_length=100)),
                ('height', models.FloatField(blank=True, max_length=100)),
                ('diameter', models.FloatField(blank=True, max_length=100)),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Artist')),
                ('collection', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Collection')),
                ('provenance', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Provenance')),
                ('shape', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Shape')),
            ],
        ),
        migrations.CreateModel(
            name='PubSchoVase',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('publications', models.ManyToManyField(to='api.Publication')),
                ('scholar', models.ManyToManyField(to='api.Scholar')),
                ('vases', models.ManyToManyField(to='api.Vase')),
            ],
        ),
        migrations.CreateModel(
            name='Plate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plateRef', models.CharField(max_length=100)),
                ('vase', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Vase')),
            ],
        ),
        migrations.CreateModel(
            name='PastCollection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('collectionID', models.CharField(max_length=10)),
                ('vaseID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Vase')),
            ],
        ),
    ]