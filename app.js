//when page loads make the number of the work and break time 25 and 5 
//if the page is loaded, why not just make it 25 + 5 at start
// window.onload = document.getElementById('work_session').innerHTML = 25;
// window.onload = document.getElementById('break_session').innerHTML = 5;

// length of work is equal to HTML atm, which is 25
var worksession_length = document.getElementById('work_session').value;
// break is 5, as in HTML
var break_length = document.getElementById('break_session').value;
//ALL inputs can't go below 1

console.log(worksession_length);
console.log(break_length);

// up and down for work and break session adjustment 
function increase(){
	//but why have to write in doc.getElement again? 
	var value = parseInt(document.getElementById('work_session').value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	document.getElementById('work_session').value =  value;
}
function decrease(){ 
	var value = parseInt(document.getElementById('work_session').value, 10);
	value = isNaN(value) ? 0 : value;
	value--;
	document.getElementById('work_session').value =  value;
}

//read BOTH + and -, go up or down depending on which is clicked 
//One function to rule them all

// input can't go below zero
function handleChange(input) {
	if (input.value < 0) input.value = 0;
    if (input.value > 10) input.value = 10;
}

// Start button event listener!

//end

function doSomething(button) {
    // do something with button
}

//display time in minutes/seconds

