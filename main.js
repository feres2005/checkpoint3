function bold() {

    if (document.getElementById("text").style.fontWeight == "bold") {
        document.getElementById("text").style.fontWeight = "normal";
    } else {
        document.getElementById("text").style.fontWeight = "bold";
    }
}

function italicText() {
    console.log(document.getElementById("text").style.fontStyle)
    if (document.getElementById("text").style.fontStyle == "italic") {
        document.getElementById("text").style.fontStyle = "normal"
    } else {
        document.getElementById("text").style.fontStyle = "italic"
    }

}



function underlineText() {
    if (document.getElementById("text").style.textDecoration == "underline") {
        document.getElementById("text").style.textDecoration = ""
    } else {
        document.getElementById("text").style.textDecoration = "underline"
    }
}

function val() {
    var size = document.getElementById("size").value
    document.getElementById("text").style.fontSize = size
}

function changefont() {
    var fontuser = document.getElementById("font").value;
    console.log(font);
    document.getElementById("text").style.fontFamily = fontuser;
}