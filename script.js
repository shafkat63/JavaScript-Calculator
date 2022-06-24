//function for displaying values

function display(val) {
	document.getElementById("cal").value += val;
}
//function for evaluation
function solve() {
	let x = document.getElementById("cal").value;
	let y = eval(x);
	document.getElementById("cal").value = y;
}
//function for clearing the display
function clr() {
	document.getElementById("cal").value = "";
}
	// display(sqrr);

function sqr() {
	let sqrr = document.getElementById("cal").value;
	sqrr = Math.sqrt(sqrr);
	clr();
	document.getElementById("cal").value = sqrr;

	// display(sqrr);
}

//Power
function power() {
	let pow = document.getElementById("cal").value;
	pow = pow * pow;
	clr();

	document.getElementById("cal").value = pow;

}
