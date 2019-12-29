function bold() {
    document.getElementById("text").style.fontWeight = "bold"
}

function italicText() {
    document.getElementById("text").style.fontStyle = "italic"
    console.log(document.getElementById("text").style.fontStyle)
}

function underlineText() {
    document.getElementById("text").style.textDecoration = "underline"

}


function size() {
    document.getElementById("text").style.fontSize = "20px"
}

function font() {
    document.getElementById("text").style.fontSize = "30px"
}

function value() {
    document.getElementById("text").style.fontSize = "40px"
}

function arial() {
    document.getElementById("text").style.fontStyle = document.getElementById("font").value;

}