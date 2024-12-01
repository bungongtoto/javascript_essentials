function mOver(obj) {
    obj.innerHTML = "Thank You!";
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me";
}

var myImage = document.getElementById("cityImage");

var imageArray = ["images/image1.jpeg","images/image2.jpg", "images/image3.jpg", "images/image4.avif" ]

var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;

    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}


setInterval(changeImage, 5000)