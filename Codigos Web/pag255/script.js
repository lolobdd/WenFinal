const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlayImg');

document.querySelectorAll('.book-img').forEach(img => {
    img.addEventListener('click', () => {
        overlayImg.src = img.src;
        overlay.classList.add('show');
    });
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
});