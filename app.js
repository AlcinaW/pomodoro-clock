// length of work is equal to HTML atm, which is 25
var worksession_length = document.getElementById('work_session');
// break is 5, as in HTML
var break_length = document.getElementById('break_session');

//count for inputs
var input = document.getElementsByTagName('input');
console.log(input);
var count = 1;

console.log(worksession_length.value);
console.log(break_length.value);

// up and down for work and break session adjustment 
//read BOTH + and -, go up or down depending on which is clicked 
//One function to rule them all
function increase(){
	//but why have to write in doc.getElement again? 
	var value = parseInt(input.value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	worksession_length.value =  value;
	console.log(value);
}
function decrease(){ 
	var value = parseInt(worksession_length.value, 10);
	if (value > 1) {
	value = isNaN(value) ? 0 : value;
	value--;
	worksession_length.value =  value;
	console.log(value);
	}
}




// Start button event listener!


//display time in minutes/seconds

