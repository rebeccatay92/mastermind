console.log("Javascript is running");

//generate random 4 digit code with numbers 0 to 5.
secretCode = [];
for (i = 0; i < 4; i ++) {
	secretCode.push(Math.floor(Math.random()*6));
}
console.log(secretCode);

//first create the color palette picker
//use numbers 0 to 5 for colors.
colorCode = ["gray", "#FF4F4F", "#7DF442", "#42CBF4", "yellow", "#C570FF"];
colorText = ["gray", "red", "green", "blue", "yellow", "purple"];
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
	})
}
currentRow = [0, 0, 0, 0];
//creates event listeners for current row and assigns currentColor to peg
numTries = 0;
circles = document.getElementsByClassName("circle");
assignColor = function() {
	this.style.backgroundColor=colorCode[currentColor];
	switch(this.className) {
		case "circle pos0":
		currentRow[0] = currentColor;
		break;

		case "circle pos1":
		currentRow[1] = currentColor;
		break;

		case "circle pos2":
		currentRow[2] = currentColor;
		break;

		case "circle pos3":
		currentRow[3] = currentColor;
		break;
	}
}

activateCurrentRow = function() {
	for (i = 4*numTries; i < (4*numTries + 4); i ++) {
		circles[i].addEventListener("click", assignColor);
	}
}
activateCurrentRow(); //first row active even before check button is clicked
inactivatePreviousRow = function () {
	for (i = 4*(numTries-1); i < (4*(numTries-1) + 4); i ++) {
		circles[i].removeEventListener("click", assignColor);
	}	
}
checkButton = document.getElementsByClassName("check")[0];

checkButton.addEventListener("click", function() {
	numTries ++;
	if (numTries < 8) {activateCurrentRow()};
	inactivatePreviousRow();
	correctPosition();
});

correctPosition = function() {
	counter = 0;
	for (i = 0; i < 4; i ++) {
		if(secretCode[i] === currentRow[i]) {
			counter ++;
		}
	}
	if (counter === 4) {
		alert("You Win!");
		return;
	}
	document.getElementsByClassName("correctPosition")[numTries-1].innerHTML = counter;
}

//reset array back to zeroes after check
//compare array with secret code. update number of pegs with correct color but wrong slot.