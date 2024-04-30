const photoSelect = document.getElementById('photoSelect');
const photo = document.getElementById('photo');
const gif = document.getElementById('gif');
const text = document.querySelector('.container p'); // Selecting the paragraph element

photoSelect.addEventListener('change', function() {
    const selectedOption = this.value;
    
    if (selectedOption === 'animated') {
        photo.src = 'assets/animated.JPG';
        photo.classList.add('animated');
        gif.style.display = 'none';
        text.style.display = 'block'; // Displaying the text
    } else {
        photo.src = `assets/${selectedOption}.png`;
        photo.classList.remove('animated');
        gif.style.display = 'none';
        text.style.display = 'none'; // Hiding the text for other options
    }
});
