const allCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const includingNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const includingSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let array = [];
let password1 = "";
let password2 = "";

$("button").click(function () {
    let includeNumbers = document.querySelector("#numbers").checked;
    let includeSymbols = document.querySelector("#symbols").checked;
    array = check(includeNumbers, includeSymbols);
    password1 = generatePassword(array);
    password2 = generatePassword(array);
    $("#first-password").text(password1);
    $("#first-password").append("<img src='images/copy.png' />");
    $("#second-password").text(password2);
    $("#second-password").append("<img src='images/copy.png' />");
});

function check(includeNumbers, includeSymbols) {
    if (includeNumbers && includeSymbols) {
        return allCharacters;
    } else if (includeNumbers === true && includeSymbols === false) {
        return includingNumbers;
    } else if (includeNumbers === false && includeSymbols === true) {
        return includingSymbols;
    } else {
        return letters;
    }
}

function generatePassword(array) {
    let password = "";

    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * array.length);
        password += array[randomIndex];
    }
    return password;
}

let text = "";

$(".password").click(function () {
    text = $(this).text();
    navigator.clipboard.writeText(text);
});

new jBox("Tooltip", {
    attach: ".tooltip",
    trigger: "click",
});

new jBox("Tooltip", {
    attach: "img",
    trigger: "click",
});
