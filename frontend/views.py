from django.shortcuts import render

# Create your views here.
def indexView(request, *args, **kwargs):
    return render(request, "frontend/index.html")

def homeView(request, *args, **kwargs):
    return render(request, "frontend/home.html")

def viewVaseView(request, *args, **kwargs):
    return render(request, "frontend/viewVase.html")
