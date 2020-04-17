


// // // Prompts questions to generate password//
// var wantPassword = confirm("Click OK if you want to generate a password?");

// if (wantPassword === true) { }

// var numberOfCharacters = prompt("How many characters[between 8 and 128]?");
// console.log(numberOfCharacters);



// var wantNumbers = confirm("Click OK to confirm to inlude numeric characters?");
// console.log(wantNumbers);

// var wantUppercase = confirm("Click OK to confirm to include uppercase characters?");
// console.log(wantUppercase);

// var wantLowercase = confirm("Click OK to confirm to include lowercase characters?")

var validResponse = false;

// var uppercaseAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


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

    } //checks to see if input is valid choice and exits if canceled//
    else if (returnValue === false && numberOfCharacters === null) {
        alert("No password was generated.");
    }
    else {
        alert("Invalid number of characters");
    }
}

function isValidNumberOfChar(numberOfCharacters) {
    console.log(numberOfCharacters)
    if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
        return true;
    } else {
        return false;
    }

}




function createRandoUpper() {

}

function createRandoLower() {

}

function createRandoNumb() {

}

function createRandoSpecialChar() {

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


