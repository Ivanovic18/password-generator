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
    $("#first-password").append("<img id='image1' src='images/copy-1.png' />");
    $("#second-password").text(password2);
    $("#second-password").append("<img id='image2' src='images/copy-1.png' />");
    $(".password").css("color", "#fff");
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
    $(this).animate(
        {
            color: "#55f991",
        },
        300
    );
    console.log($(this).attr("id"));
    if ($(this).attr("id") === "first-password") {
        $("#image1").fadeOut(100, function () {
            $("#image1").attr("src", "images/copy.png");
            $("#image1").fadeIn(100);
        });
    } else {
        $("#image2").fadeOut(100, function () {
            $("#image2").attr("src", "images/copy.png");
            $("#image2").fadeIn(100);
        });
    }
});

$(".tooltip").tooltipster({
    trigger: "click",
    timer: 600,
});

$(".theme").click(function () {
    if ($(this).attr("src") === "images/light.png") {
        $(".container").animate(
            {
                backgroundColor: "#ECFDF5",
            },
            300
        );
        $("#heading1").animate(
            {
                color: "#2B283A",
            },
            300
        );
        $("hr").animate(
            {
                borderColor: "#D5D4D8",
            },
            300
        );
        $("label").animate(
            {
                color: "#6b7280",
            },
            300
        );
        $(".theme").fadeOut(100, function () {
            $(".theme").attr("src", "images/dark.png");
            $(".theme").fadeIn(100);
        });
        $("button").hover(
            function () {
                $(this).css("background-color", "#1f2937");
            },
            function () {
                $(this).css("background-color", "#10b981");
            }
        );
    } else {
        $(".container").animate(
            {
                backgroundColor: "#1f2937",
            },
            300
        );
        $("#heading1").animate(
            {
                color: "#fff",
            },
            300
        );
        $("hr").animate(
            {
                border: "1px solid #2f3e53",
            },
            300
        );
        $("label").animate(
            {
                color: "#eee",
            },
            300
        );
        $(".theme").fadeOut(100, function () {
            $(".theme").attr("src", "images/light.png");
            $(".theme").fadeIn(100);
        });
    }
});
