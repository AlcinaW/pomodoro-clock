//when page loads make the number of the work and break time 25 and 5 
//if the page is loaded, why not just make it 25 + 5 at start
// window.onload = document.getElementById('work_session').innerHTML = 25;
// window.onload = document.getElementById('break_session').innerHTML = 5;

// length of work is equal to HTML atm, which is 25
var worksession_length = document.getElementById('work_session').value;
var worksesh = document.getElementById('work_session');
// break is 5, as in HTML
var break_length = document.getElementById('break_session').value;

//count for inputs
var count = 1;

console.log(worksession_length);
console.log(break_length);




// up and down for work and break session adjustment 
function increase(){
	//but why have to write in doc.getElement again? 
	var value = parseInt(worksesh.value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	worksesh.value =  value;
	console.log(value);
}
function decrease(){ 
	var value = parseInt(worksesh.value, 10);
	if (value > 1) {
	value = isNaN(value) ? 0 : value;
	value--;
	worksesh.value =  value;
	console.log(value);
	}
}


//read BOTH + and -, go up or down depending on which is clicked 
//One function to rule them all

// input can't go below zero
// function handleChange(input) {
// 	if (input.value < 0) input.value = 0;
// 	if (input.value > 100) input.value = 100;
// }

// Start button event listener!


//display time in minutes/seconds

