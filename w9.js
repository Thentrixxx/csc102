function isPalindrome(strToTest){
    ///\s/g. "") removes all of the spaces int he string
    //then convert all of the letter to lowercase
    var strCleaned = strToTest.replace(/\s/g, "").toLowerCase();

    //turn the string into an array, reverse the contents of the array
    //turn the array back into a string
    var strRev = strCleaned.split("").reverse().join("");

    return strRev == strCleaned
}

//console.log(isPalindrome("abcd"));
//console.log(isPalindrome("radar"));
//console.log(isPalindrome("A man a plan a canal Panama"));

var bContinue = true;
do{
    //Get a word from the user.
    var userInput = prompt("Enter a word to test if it is a palindrome: ");

    //Test the word with our function.
    var isPalin = isPalindrome(userInput);
    var message = "";

    //Create a message based on whether the word was a palindrome or not.
    if (isPalin){
        message = userInput + " is a palindrome!";
    }
    else{
        message = userInput + " is not a palindrome!";
    }

    //Show the message to the user.
    alert(message);

    //Ask the user if they want to test another word.
    var answer = prompt("Do you want to continue? (y/n) ");

    //if no, set the boolean to false to exit out of the do while loop.
    if(answer.toLowerCase() == "n"){
        bContinue = false;
    }

}while(bContinue);