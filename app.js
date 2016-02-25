//when page loads make the number of the work and break time 25 and 5 
//if the page is loaded, why not just make it 25 + 5 at start
// window.onload = document.getElementById('work_session').innerHTML = 25;
// window.onload = document.getElementById('break_session').innerHTML = 5;

// length of work is equal to HTML atm, which is 25
var worksession_length = document.getElementById('work_session').innerHTML;
// break is 5, as in HTML
var break_length = document.getElementById('break_session').innerHTML;

console.log(worksession_length);
console.log(break_length);

// up and down for work and break session adjustment 
var counter = 0; 

//read BOTH + and -, go up or down depending on which is clicked 
//One function to rule them all
function incrementMinutes() {
	
}

