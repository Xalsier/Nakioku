var audioElement = document.getElementById("myAudio");
var audio = new Audio(audioElement.src);

function swapImage() {
    console.log("Swapping image...");
    var img = document.getElementById("myImage");
    img.style.transformOrigin = "center";
    img.style.transition = "transform 0.5s ease-in-out";
    if (imageSwapped) {
        img.style.transform = "";
        img.src = "Assets/Unknown_Disc_1.png";
        audio.pause();
        imageSwapped = false;
        stopSpin();
    } 
    else {
        img.style.transform = "rotate(360deg)";
        img.src = "Assets/Back_Home_Again.png";
        console.log("Playing audio...");
        audio.play();
        console.log("Audio played");
        imageSwapped = true;
        startSpin();
    }
    console.log("Image swapped");
}

function startSpin() {
    console.log("Starting spin...");
    var img = document.getElementById("myImage");
    img.style.animation = "spinning infinite 6s linear";
}

function stopSpin() {
    console.log("Stopping spin...");
    var img = document.getElementById("myImage");
    img.style.animation = "";
}
