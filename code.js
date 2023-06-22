var intervalId = 0;

function start(){
    var image = document.getElementById(chc7tcnwzoza1.jpg);

    intervalId = setInterval(function(){
        var changeX = getRandomNumber();
        var changeY = getRandomNumber();

        image.style.left = changeX + "px";
        image.style.top = changeY + "px";

        console.log("x=" + changeX);
        console.log("y=" + changeY);
    }, 1000)
}

//get random number
function getRandomNumber(){
    return Math.floor(Math.random() * 800)
}

//function fires when the user clicks the stop button
//Image stops using
function stop(){
    clearInterval(IntervalId);
}