const imageContainer = document.getElementById('image-container');
const firstImage = document.getElementById('first-image');
const audio = document.getElementById('audio');

let isPlaying = false;

imageContainer.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    firstImage.style.display = 'block';
    audio.style.display = 'none';
    isPlaying = false;
  } else {
    audio.play();
    firstImage.parentNode.removeChild(firstImage);
    const secondImage = document.createElement('img');
    secondImage.src = 'Back_Home_Again.png';
    secondImage.alt = 'Second Image';
    secondImage.style.display = 'block';
    secondImage.style.position = 'absolute';
    secondImage.style.top = '0';
    secondImage.style.left = '0';
    secondImage.style.width = '100%';
    secondImage.style.height = '100%';
    secondImage.class = "spin";
    imageContainer.appendChild(secondImage);
    audio.style.display = 'block';
    isPlaying = true;
  }
});

imageContainer.addEventListener('touchstart', () => {
  if (isPlaying) {
    audio.pause();
    firstImage.style.display = 'block';
    audio.style.display = 'none';
    isPlaying = false;
  } else {
    audio.play();
    firstImage.parentNode.removeChild(firstImage);
    const secondImage = document.createElement('img');
    secondImage.src = 'Back_Home_Again.png';
    secondImage.alt = 'Second Image';
    secondImage.style.display = 'block';
    secondImage.style.position = 'absolute';
    secondImage.style.top = '0';
    secondImage.style.left = '0';
    secondImage.style.width = '100%';
    secondImage.style.height = '100%';
    secondImage.class = "spin";
    imageContainer.appendChild(secondImage);
    audio.style.display = 'block';
    isPlaying = true;
  }
});
