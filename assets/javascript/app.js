//Arrays//
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="];

//generates password when the button is clicked//
function generateRandoPassword() {

    // Code gets numberOfCharacters and converts string to a number//
    var numberOfCharacters = prompt("How many characters do you want between 8 and 128?");
    var changeToNumber = parseInt(numberOfCharacters);

    // Calls the function isValidNumberOfChar to determine if the number is between 8-128//
    var returnValue = isValidNumberOfChar(changeToNumber);

    //Check to see if return value is true or false//
    if (returnValue === true) {
        //confirms remaining questions//
        var wantSpecialChar = confirm("Click OK to confirm to include special characters");
        var wantNumbers = confirm("Click OK to confirm to inlude numeric characters?");
        var wantUppercase = confirm("Click OK to confirm to include uppercase characters?");
        var wantLowercase = confirm("Click OK to confirm to include lowercase characters?");

        //Checks if all confirms were false and prompts needs valid input//
        if (!wantSpecialChar && !wantNumbers && !wantUppercase && !wantLowercase) {
            alert("A character type needs to be selected.");
        } else {
            //Building the random password//
            var password = "";
            while (password.length < changeToNumber) {
                if (wantSpecialChar && password.length < changeToNumber) {
                    password = password + createRandoSpecial(specialCharArray);
                }
                if (wantNumbers && password.length < changeToNumber) {
                    password = password + createRandoNumber();
                }
                if (wantUppercase && password.length < changeToNumber) {
                    password = password + createRandoUpper(uppercaseArray);
                }
                if (wantLowercase && password.length < changeToNumber) {
                    password = password + createRandoLower(uppercaseArray);
                }
            }
            //populates the password//
            document.querySelector("#password-generator").innerHTML = password;
        }
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
function createRandoSpecial(array) {
    var specialArrayPosition = Math.floor(Math.random() * array.length);
    var randomSpecialChar = array[specialArrayPosition];
    return randomSpecialChar;
}
//creates random upper case//
function createRandoUpper(array) {
    var uppercaseArrayPosition = Math.floor(Math.random() * array.length);
    var randomUpperChar = array[uppercaseArrayPosition];
    return randomUpperChar;
}
//chooses a random upper case and changes to lower case//
function createRandoLower(array) {
    var uppercaseArrayPosition = Math.floor(Math.random() * array.length);
    var randomUpperChar = array[uppercaseArrayPosition];
    return randomUpperChar.toLowerCase();
}
// creates random number//
function createRandoNumber() {
    var randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}
