console.log("Javascript is running");

//generate random 4 digit code with numbers 0 to 5.
secretCode = [];
for (i = 0; i < 4; i ++) {
	secretCode.push(Math.floor(Math.random()*6));
}
console.log(secretCode);

//first create the color palette picker
//use numbers 0 to 5 for colors.
colorCode = ["#FF4F4F", "#7DF442", "#42CBF4", "yellow", "#C570FF", "pink"];
colorText = ["red", "green", "blue", "yellow", "purple", "pink"];
//when clicking on another color, this resets the border around previous selections
paletteCircle = document.getElementsByClassName("paletteCircle");
paletteCircleReset = function() {
	for (i = 0; i < paletteCircle.length; i++) {
		paletteCircle[i].style.border="1px solid black";
	}
}

//creates event listeners for each palette circle
//resets the css, adds border and changes currentColor variable
for (i = 0; i < paletteCircle.length; i ++) {
	paletteCircle[i].addEventListener("click", function() {
		paletteCircleReset();
		this.style.border="4px solid black";
		currentColor = colorText.indexOf(this.id); //convert colorid into digit
		console.log(currentColor);
	})
}

//creates event listeners for current row and assigns currentColor to peg
numTries = 0;
circles = document.getElementsByClassName("circle");
for (i = 4*numTries; i < (4*numTries + 4); i ++) {
	circles[i].addEventListener("click", function() {
		this.style.backgroundColor=colorCode[currentColor];
	})
}

//create check button which 
//1) removes event listeners from previous row
//2) creates new event listeners for current row (change numTries)
//3) run through scoring algorithm