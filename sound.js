//This function adds a sound to the HTML page using the DOM (Document Object Model)
function addSound(){
    //Creates an HTML audio element
    var soundElem = document.createElement("AUDIO");

    //Sets the id so you can refer to the element easily in future JS code
    soundElem.setAttribute("id", "mySound");
    //Sets the file name of the sound file
    soundElem.setAttribute("src", "Space.m4a");
    //Show the controls for the audio
    soundElem.setAttribute("controls", "controls")

    //After the audio element is set up, add it to the webpage
    document.body.appendChild(soundElem);

    //Unhides the Play and Pause buttons
    document.getElementById("btnPlay").hidden = false;
    document.getElementById("btnPause").hidden = false;
}

//This function will be fired from the btnPlay click event
//It plays the audio
function play(){
    var audio = document.getElementById("mySound");
    audio.play();
}

//This function will be fired from the btnPlay click event
//It pauses the audio
function pause(){
    var audio = document.getElementById("mySound");
    audio.pause();
}