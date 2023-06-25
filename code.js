//track the current interval
var intervalId = 0;

//function fires when the user clicks the start button
//image will move randomly around the screen every second
function start(){
    //pointer to the img on the index page
    var image = document.getElementById("memeImage");
    var changeX = 5;
    var changeY = 5;
    //this code will move the image around by changing the top and left coordinates
    //this code will run every 1 second
    intervalId = setInterval(function(){
        //var changeX = getRandomNumber();
        //var changeY = getRandomNumber();

        image.style.left = changeX + "px";
        image.style.top = changeY + "px";

        console.log("x=" + changeX);
        console.log("y=" + changeY);

        changeX += 5;
        changeY += 5;
    }, 1000);
}

//get random number
function getRandomNumber(){
    return Math.floor(Math.random() * 800);
}

//function fires when the user clicks the stop button
//Image stops using
function stop(){
    clearInterval(IntervalId);
}