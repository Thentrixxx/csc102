function validateForm(){
    //variables to hold our form inputs
    var answerRed = document.theForm.answerRed.value;
    var answerOrange = document.theForm.answerOrange.value;
    var answerYellow = document.theForm.answerYellow.value;
    var answerGreen = document.theForm.answerGreen.value;
    var answerBlue = document.theForm.answerBlue.value;
    var answerIndigo = document.theForm.answerIndigo.value;
    var answerPurple = document.theForm.answerPurple.value;
    var errMessage = document.getElementById("errorMessage");
    errMessage.innerHTML = "";

    //Check if the answer to the first response was Red.
    if(answerRed != "Red"){
        errMessage.innerHTML = "This answer is wrong!"
        return false;
    }

    //Check if the answer to the second response was Orange.
    if(answerOrange != "Orange"){
        errMessage.innerHTML = "This answer is wrong!"
        return false;
    }

    //Check if the answer to the third response was Yellow.
    if(answerYellow != "Yellow"){
        errMessage.innerHTML = "This answer is wrong!"
        return false;
    }

    //Check if the answer to the fourth response was Green.
    if(answerGreen != "Green"){
        errMessage.innerHTML = "This answer is wrong!"
        return false;
    }

    //Check if the answer to the fifth response was Blue.
    if(answerBlue != "Blue"){
        errMessage.innerHTML = "This answer is wrong!"
        return false;
    }

    //Check if the answer to the sixth response was Indigo.
    if(answerIndigo != "Indigo"){
        errMessage.innerHTML = "This answer is wrong!"
        return false;
    }

    //Check if the answer to the seventh response was Purple.
    if(answerPurple != "Purple"){
        errMessage.innerHTML = "This answer is wrong!"
        return false;
    }

    //Let the user know that they answered correctly.
    document.getElementById("correctAnswer").innerHTML = "You know the whole rainbow!";
    return false;
}