const photoSelect = document.getElementById('photoSelect');
const photo = document.getElementById('photo');
const gif = document.getElementById('gif');

photoSelect.addEventListener('change', function() {
    const selectedOption = this.value;
    
    if (selectedOption === 'animated') {
        photo.src = 'assets/animated.JPG';
        photo.classList.add('animated');
        gif.style.display = 'none';
    } else {
        photo.src = `assets/${selectedOption}.png`;
        photo.classList.remove('animated');
        gif.style.display = 'none';
    }
});
