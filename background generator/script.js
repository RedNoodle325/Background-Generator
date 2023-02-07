var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var color1a = document.getElementById("color1");
var color2a = document.getElementById("color2");
var random255 = Math.floor(Math.random() * 256) + 1;
var randomButton = document.querySelector(".random");
var stringInt = random255.toString();

function backgroundGradient() {
        body.style.background =
            "linear-gradient(to right, "
            + color1.value
            + ", "
            + color2.value
            + ")";

        css.textContent = body.style.background + ";";
}

function randomRGB() {
    color1.value = stringInt;
    color2.value = stringInt;
}
backgroundGradient()

color1.addEventListener("input", backgroundGradient);

color2.addEventListener("input", backgroundGradient);

randomButton.addEventListener("click", randomRGB)