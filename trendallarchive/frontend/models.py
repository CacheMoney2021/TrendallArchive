from django.db import models;
from django.db.models.fields.related import ManyToManyField;
#classes to create models and initialise object-relational database 


#---------notes----------
# DjangoORM automatically creates a primary key, opted to keep  <entity>ID 
# for the ID's that will be extracted as these should probably be kept, but 
# the automatic primary key created by django will be what connects the tables
# need to revisit whether this is necessary for all entities, or just vase, or none 

#define shape class
class Shape(models.Model) :
    shapeID = models.CharField(max_length=10)
    shapeName = models.CharField(max_length=100)

#define artist class
class Artist(models.Model) :
    artistID = models.CharField(max_length=10)
    artistName = models.CharField(max_length=100)

#define provenance class
class Provenance(models.Model) :
    ProvenanceID = models.CharField(max_length=10)
    provenanceName = models.CharField(max_length=100)

#define collection class
class Collection(models.Model) :
    collectionID = models.CharField(max_length=10)
    collectionName = models.CharField(max_length=100)

#define vase class
class Vase(models.Model):
    vaseID = models.CharField(max_length=10) 
    inscription = models.CharField(max_length=255,blank=True)
    #minDateRange = models.CharField() possibly delete
    #maxDateRange = models.CharField()
    fabric = models.CharField(max_length=100, blank=True)
    subject = models.CharField(max_length=255,blank=True)
    technique = models.CharField(max_length=100,blank=True)
    height = models.CharField(max_length=100,blank=True) ## not sure how the diameter is represented in the text, possibly change this to floating decimal
    diameter = models.CharField(max_length=100,blank=True) ## as above
    shape = models.ForeignKey(Shape, on_delete=models.CASCADE)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    provenance = models.ForeignKey(Provenance, on_delete=models.CASCADE)
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE)

#define plate class
class Plate(models.Model): 
    vase = models.ForeignKey(Vase, on_delete=models.CASCADE)
    plateRef = models.CharField(max_length=100)

#define scholar class
class Scholar(models.Model) :
    scholarID = models.CharField(max_length=10)
    scholarName = models.CharField(max_length=100)

#define publication class
class Publication(models.Model) :
    publicationID = models.CharField(max_length=10)
    publicationName = models.CharField(max_length=100)
    publicationDate = models.DateField()

# not confident on this... possibly wont work 
class PubSchoVase(models.Model) :
    publications = ManyToManyField(Publication)
    vases = ManyToManyField(Vase)
    scholar = ManyToManyField(Scholar)

# define pastCollection. Need to work out how to automatically update when collection in vase is updated. 
class PastCollection(models.Model) :
    collectionID = models.CharField(max_length=10)
    vaseID = models.ForeignKey(Vase, on_delete=models.CASCADE)
