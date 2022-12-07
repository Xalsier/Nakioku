const imageContainer = document.getElementById('image-container');
const firstImage = document.getElementById('first-image');
const secondImage = document.getElementById('second-image');
const audio = document.getElementById('audio');

let isPlaying = false;

imageContainer.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    firstImage.style.display = 'block';
    secondImage.style.display = 'none';
    isPlaying = false;
  } else {
    audio.play();
    firstImage.style.display = 'none';
    secondImage.style.display = 'block';
    isPlaying = true;
  }
});
