const imageContainer = document.getElementById('image-container');
const firstImage = document.getElementById('first-image');
const secondImage = document.getElementById('second-image');
const audio = document.getElementById('audio');

let isPlaying = false;

audio.addEventListener('play', () => {
  isPlaying = true;
  imageContainer.classList.add('rotate');
});

audio.addEventListener('pause', () => {
  isPlaying = false;
  imageContainer.classList.remove('rotate');
});

audio.addEventListener('ended', () => {
  isPlaying = false;
  imageContainer.classList.remove('rotate');
});

imageContainer.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
});
