var imageSwapped = false;
var audio = document.getElementById("myAudio");

function swapImage() {
var img = document.getElementById("myImage");
    if (imageSwapped) {
      img.src = "Assets/Unknown_Disc_1.png";
      audio.pause();
      imageSwapped = false;
    } 
    else {
      img.src = "Assets/Back_Home_Again.png";
      audio.play();
      imageSwapped = true;
    }
}
