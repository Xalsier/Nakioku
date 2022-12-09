// Print the log messages to the debug console
console.table(console.log.history);

// Get the container where the logs will be displayed
const container = document.querySelector('#console-logs');

// Get the array of log messages
const logs = console.table.history;

// Loop through the log messages and add them to the container
for (const log of logs) {
  container.innerHTML += `<p>${log}</p>`;
}

var audioElement = document.getElementById("myAudio");
var imageSwapped = false;

function swapImage() {
    console.log("Swapping image...");
    var img = document.getElementById("myImage");
    var audio = document.getElementById("myAudio");
    img.style.transformOrigin = "center";
    img.style.transition = "transform 0.5s ease-in-out";
    if (imageSwapped) {
        img.style.transform = "";
        img.src = "Assets/Unknown_Disc_1.png";
        console.log("Pausing audio...");
        audio.pause();
        console.log("Audio paused");
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
