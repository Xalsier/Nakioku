var imageSwapped = false;
var audio = document.getElementById("myAudio");

function swapImage() {
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
}

function startSpin() {
    var img = document.getElementById("myImage");
    img.style.animation = "spinning infinite 6s linear";
}

function stopSpin() {
    var img = document.getElementById("myImage");
    img.style.animation = "";
}
