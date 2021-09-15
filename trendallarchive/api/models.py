from django.db import models;
from django.db.models.fields.related import ManyToManyField;
#classes to create models and initialise object-relational database 


#---------notes----------

# #define artist class
# class Artist(models.Model) :
#     artistName = models.CharField(max_length=100)


#define vase class
class Vase(models.Model):
    vaseRef = models.CharField(max_length=255)
    collectionName = models.CharField(max_length=500,blank=True,null=True)
    provenanceName = models.CharField(max_length=500,blank=True,null=True)
    height = models.CharField(max_length=10,blank=True,null=True)
    diameter = models.CharField(max_length=10,blank=True,null=True)
    publications = models.CharField(max_length=600,blank=True,null=True)
    plates = models.CharField(max_length=50,blank=True,null=True)
    subject = models.CharField(max_length=800,blank=True,null=True)
    fabric = models.CharField(max_length=50, blank=True,null=True)
    technique = models.CharField(max_length=50,blank=True,null=True)
    shapeName = models.CharField(max_length=50,blank=True,null=True)
    # artist = models.ForeignKey(Artist,null=True, blank=True, on_delete=models.CASCADE)
    # def artistName(self):
    #     return self.artist.artistName

    
# #define plate class
# class Plate(models.Model): 
#     vase = models.ForeignKey(Vase, on_delete=models.CASCADE)
#     plateRef = models.CharField(max_length=100)
#     def vaseID(self):
#         return self.vase.vaseID

#define scholar class
class Scholar(models.Model) :
    scholarID = models.CharField(max_length=10)
    scholarName = models.CharField(max_length=100)

