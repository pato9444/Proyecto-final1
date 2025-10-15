const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        alert(`Esta es la imagen: ${img.alt}`);
    });
});
