let currentImageIndex = 0;
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',

];

function openLightbox(imageSrc) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = imageSrc;
    currentImageIndex = images.indexOf(imageSrc);
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    document.getElementById('lightbox-img').src = images[currentImageIndex];
}
