var imageSwapped = false;

function swapImage() {
    console.log("Swapping image...");
    var audio = document.getElementById("myAudio");
    var img = document.getElementById("myImage");
    if (imageSwapped) {
        img.src = "Assets/Unknown_Disc_1.png";
        audio.pause();
        imageSwapped = false;
        stopSpin();
    } 
    else {
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
