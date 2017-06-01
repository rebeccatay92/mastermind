console.log("Javascript is running");

//generate random 4 digit code with numbers 0 to 5.
secretCode = [];
for (i=0; i < 4; i ++) {
	secretCode.push(Math.floor(Math.random()*6));
}
console.log(secretCode);

//first create the color palette picker
//use numbers 0 to 5 for colors.

//when clicking on another color, this resets the border around previous selections
paletteCircle = document.getElementsByClassName("paletteCircle");
paletteCircleReset = function() {
	for (i=0; i<paletteCircle.length; i++) {
		paletteCircle[i].style.border="1px solid black";
	}
}

//creates event listeners for each palette circle
//resets the css, adds border and changes currentColor variable
for (i=0; i<paletteCircle.length; i ++) {
	paletteCircle[i].addEventListener("click", function() {
		paletteCircleReset();
		this.style.border="4px solid black";
		currentColor = i;
	})
}

