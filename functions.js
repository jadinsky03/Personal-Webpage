window.onload=function userInput() {
    let person = prompt("Please enter your name");
    if (person != null) {
        alert("Welcome " + person + ", thanks for visiting my webpage! Have fun!");
    }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
}

function show() {
    let image = document.getElementById("image");
    image.src ="./jadpic.jpg"
    image.style.display = "block";
    document.getElementById("btnID").style.display = image;
}