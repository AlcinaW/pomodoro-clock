// length of work is equal to HTML atm, which is 25
var worksession_length = document.getElementById('work_session');
console.log(worksession_length.value);
// break is 5, as in HTML
var break_length = document.getElementById('break_session');
console.log(break_length.value);

//count for inputs
// var input = document.getElementsByTagName('input');
// console.log(input);
var count = 1;

//getting seconds for timer based on session length
var countDown = 60 * worksession_length.value; // minutes number convert to seconds
console.log(countDown);


// up and down for work and break session adjustment 
//read BOTH + and -, go up or down depending on which is clicked 
//One function to rule them all
function increase(){
	//but why have to write in doc.getElement again? 
	var value = parseInt(worksession_length.value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	worksession_length.value = value;
	console.log(value);
	document.getElementById("clockTime").innerHTML = value + ":00 minutes";
}
function decrease(){ 
	var value = parseInt(worksession_length.value, 10);
	if (value > 1) {
	value = isNaN(value) ? 0 : value;
	value--;
	worksession_length.value =  value;
	console.log(value);
	document.getElementById("clockTime").innerHTML = value + ":00 minutes";
	}
}



// function secondsToHms(d) {
// d = Number(d);
// var h = Math.floor(d / 3600);
// var m = Math.floor(d % 3600 / 60);
// var s = Math.floor(d % 3600 % 60);
// return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s); }


// function timeFormat(t) {
//     var seconds = Math.floor( (t/1000) % 60 );
//     var minutes = Math.floor( (t/1000/60) % 60 );
//     var milliseconds = t;

//     return {
//         minutes: minutes,
//         seconds: seconds,
//         milliseconds: milliseconds
//     }
// }


// Start button event listener!


//display time in minutes/seconds

