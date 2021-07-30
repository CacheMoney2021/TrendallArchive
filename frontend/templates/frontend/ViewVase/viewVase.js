// js/main.js


var slider_img = document.querySelector('.slider-img');
var images = ['image1.png', 'image2.png', 'image3.png'];
var i = 0; //Current Image Index

function prev(){
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}

function next(){
    if (i >= images.length-1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', 'images/'+images[i]);
}

function swap(){
    var leftID = document.getElementById('pic_left');
        rightID = document.getElementById('pic_right');
        middleID = document.getElementById('pic_middle');
        leftSRC = leftID.src;
        rightSRC = rightID.src;
        middleSRC = middleID.src;
    leftID.src = rightSRC;
    rightID.src = middleSRC;
    middleID.src = leftSRC;
}
img = document.getElementById("img1");
/*function enlargeImage(){
    img.style.transform = "scale(1.5)"
    // Animation effect 
    img.style.transition = "transform 0.25s ease";
}*/

 // Function to reset image size
 function resetImg() {
    // Set image size to original
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
  }

  function mainImg(){
    
  }

