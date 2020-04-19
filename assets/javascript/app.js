


//Arrays//
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="];

//generates password when the button is clicked//
function generateRandoPassword() {

    // Code gets numberOfCharacters and converts string to a number//
    var numberOfCharacters = prompt("How many characters do you want between 8 and 128?");
    var changeToNumber = parseInt(numberOfCharacters);
    console.log(numberOfCharacters);

    // Calls the function isValidNumberOfChar to determine if the number is between 8-128//
    var returnValue = isValidNumberOfChar(changeToNumber);
    console.log(returnValue);

    //Check to see if return value is true or false//
    if (returnValue === true) {
        //confirms remaining questions//
        var wantSpecialChar = confirm("Click OK to confirm to include special characters");
        var wantNumbers = confirm("Click OK to confirm to inlude numeric characters?");
        var wantUppercase = confirm("Click OK to confirm to include uppercase characters?");
        var wantLowercase = confirm("Click OK to confirm to include lowercase characters?");

        var password = "";
        for (var i = 0; i < numberOfCharacters; i++) {
            password = password + createRando(uppercaseArray, wantUppercase);
            password = password + createRando(numberArray, wantNumbers);
            password = password + createRando(specialCharArray, wantSpecialChar);
            password = password + createRando(uppercaseArray, wantLowercase);
        }
        //populates the password//
        document.querySelector("#password-generator").innerHTML = password;
    }
    //checks to see if input is valid choice and exits if canceled//
    else if (returnValue === false && numberOfCharacters === null) {
        alert("No password was generated.");
    }
    else {
        alert("Invalid number of characters");
    }
}
// checks to see if number is between 8-128 //
function isValidNumberOfChar(numberOfCharacters) {
    console.log(numberOfCharacters)
    if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
        return true;
    } else {
        return false;
    }

}

// trying to create random upper char//
function createRando(char, trueOrFalse) {
    var password = "";

    if (trueOrFalse === true) {
        var randomUpper = Math.floor(Math.random() * char.length);

        var randomUpperChar = char[randomUpper]
        password = password + randomUpperChar;

        var randomUpperChar = char[randomUpper]
        password = password + randomUpperChar.toLowerCase();

    }
    return password;
}




//     if (numberOfCharacters.length > 0) {
//         numCharacters = parseInt(numberOfCharacters);


//         if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
//             validResponse = true;
//             var password = "";
//             for (var i = 0; i < numberOfCharacters; i++) {
//                 if (wantUppercase === true && i === 0) {
//                     var randomUpper = Math.floor(Math.random() * uppercaseAlpha.length);

//                     var randomUpperChar = uppercaseAlpha[randomUpper]
//                     password = password + randomUpperChar
//                 }
//                 if (wantSpecialChar === true) {

//                 }

//                 if (wantNumbers === true) {

//                 }


//                 if (wantLowercase === true) {
//                     var randomLower = Math.floor(Math.random() * uppercaseAlpha.length);

//                     var randomLowerChar = uppercaseAlpha[randomLower]
//                     password = password + randomLowerChar.toLowerCase()
//                 }
//             }
//             console.log(password);
//         }
//     }
//     if (validResponse === false) {
//         numberOfCharacters = confirm("The password must contain between 8 and 128 characters.");
//     }

// } else {
//     alert("No password was generated.")
// }


// if (wantUppercase === true && i === 0) {
//     var randomUpper = Math.floor(Math.random() * uppercaseAlpha.length);

//     var randomUpperChar = uppercaseAlpha[randomUpper]
//     password = password + randomUpperChar

// }