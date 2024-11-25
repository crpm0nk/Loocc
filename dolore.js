var img = new Image();
img.src = 'image.jpg';
img.onload = function() {
    img.resize(200, null);
};
