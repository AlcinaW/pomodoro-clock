var myTime; 
//sets current work time on page to 25 minutes
var workTime = document.getElementById('workTime').innerHTML = 25;
console.log(workTime);
//sets break time on page to 5 minutes
var breakTime = document.getElementById('breakTime').innerHTML = 5;
console.log(breakTime);

//calculates seconds
var remainingSeconds = workTime * 60;

document.getElementById("timerDisplay").innerHTML = workTime;

//controls START button
function startWorkCountDown(){
	document.getElementById("start").disabled = true;
	//callback that tells next function to run
	timerFunc(callback);
}

// controls pause 
function pauseCountDown(){ 
	clearInterval(myTime);
	console.log('paused');
	//re-enable Start button when pressed
	document.getElementById("start").disabled = false;
}

// controls reset 
function resetFunc() {
  clearInterval(myTime);
  remainingSeconds = workTime * 60;
  //calls start work function
  startWorkCountDown();
}

// changes seconds number to look like time
function displayCountDown(remainingTime) {
	var minutes = Math.floor(remainingTime / 60); 
	var seconds = remainingTime % 60; 
	console.log(remainingTime);
	console.log(minutes + ":" + seconds);

	if (remainingTime % 60 >= 10) {
		document.getElementById("timerDisplay").innerHTML = minutes + ":" + seconds;
	} else {
		document.getElementById("timerDisplay").innerHTML = minutes + ":" + "0" + seconds;
	}	
}

function timerFunc(tomato) {
	var remainingTime = remainingSeconds;
	//setTimeOut callback
	myTime = setTimeout(function() {
		displayCountDown(remainingTime);
		if (remainingTime >= 0) {
			// if greater than 0, keep doing down by one
			remainingSeconds--;
			timerFunc(tomato);
		} else {
			clearInterval();
			tomato();
		}
	}, 1000); //delay
}

//callback for breaktime!
var callback = function() {
  console.log('callback yoo');
  document.getElementById('timerText').innerHTML = "Break time!";
  remainingSeconds = breakTime * 60;
  //yet another callback
  timerFunc(callbackRest);
};

var callbackRest = function() {
  clearInterval(myTime);
  console.log('callbackRest');
  document.getElementById('timerText').innerHTML = "Work time~";
  remainingSeconds = workTime * 60;
  //controls Start button
  document.getElementById("start").disabled = false;
  //go back to work time? THIS IS NEW
  return ( startWorkCountDown() );
};

// controls buttons to increase and decrease inputs 
//updates numbers as you go
//controls all buttons. When this.is is send, checks for matches, then if statement
//To-do: addEventListener on JS side instead?
function buttonControl(clicked_id){ 
	if (clicked_id === "workIncrease") { 
		workTime++;
	  	document.getElementById('workTime').innerHTML = workTime;
	  	remainingSeconds = workTime * 60;
	  	console.log("Work time is now " + workTime + " minutes");
	}
	if (clicked_id === "breakIncrease") { 
  		breakTime++;
  		document.getElementById('breakTime').innerHTML = breakTime;
  		console.log("Break time is now " + breakTime + " minutes");
	}
	if (clicked_id === "workDecrease") { 
		if (workTime > 1) { //min time is 1 minute
			workTime = isNaN(workTime) ? 0 : workTime;
			workTime--;
			document.getElementById('workTime').innerHTML = workTime;
			remainingSeconds = workTime * 60;
			console.log("Work time is now " + workTime + " minutes");
		}
	}
	if (clicked_id === "breakDecrease") { 
	  if (breakTime > 1) { //min time is 1 minute
		breakTime = isNaN(breakTime) ? 0 : breakTime;
		breakTime--;
		document.getElementById('breakTime').innerHTML = breakTime;
		console.log("Break time is now " + breakTime + " minutes");
	  }
	}
}


// up and down for work and break session adjustment 
//To-do: read BOTH + and -, go up or down depending on which is clicked 
//One function to rule them all?
// if value === "+" and if value === work
//THE LEAST DRY THING EVERRRRR To-do: fix this part
// function increase(clicked_id){
// 	if (clicked_id === "workIncrease") {
// 		var value = parseInt(workTime, 10);
// 		value = isNaN(value) ? 0 : value;
// 		value++;
// 		workTime = value;
// 		console.log("Work time is now " + value + " minutes");
// 		document.getElementById("timerDisplay").innerHTML = value + ":00";
// 	} 
// 	if (clicked_id === "breakIncrease") {
// 		var value = parseInt(break_length.value, 10);
// 		value = isNaN(value) ? 0 : value;
// 		value++;
// 		break_length.value = value;
// 		console.log("Break time is now " + value + " minutes");
// 		document.getElementById("breakTime").innerHTML = value + ":00 minutes";
// 	}
// }

// function decrease(clicked_id) {
// 	if (clicked_id === "workDecrease") {
// 			var value = parseInt(worksession_length.value, 10);
// 		if (value > 1) {
// 			value = isNaN(value) ? 0 : value;
// 			value--;
// 			worksession_length.value =  value;
// 			console.log("Work time is now " + value + " minutes");
// 				if (value > 1 ){
// 					document.getElementById("clockTime").innerHTML = value + ":00 minutes";
// 				} else {
// 					document.getElementById("clockTime").innerHTML = value + ":00 minute";
// 				}
// 		}
// 	}
// 	if (clicked_id === "breakDecrease") {
// 		var value = parseInt(break_length.value, 10);
// 		if (value > 1) {
// 			value = isNaN(value) ? 0 : value;
// 			value--;
// 			break_length.value =  value;
// 			console.log("Break time is now " + value + " minutes");
// 				if (value > 1 ){
// 					document.getElementById("breakTime").innerHTML = value + ":00 minutes";
// 				} else {
// 					document.getElementById("breakTime").innerHTML = value + ":00 minute";
// 				}
// 		}
// 	}
// }

//On button submit, disable all inputs
// function disableInputs(){
// 	var elems = document.getElementsByName('sessionButton');
// 	var len = elems.length;

// 	for (var i = 0; i < len; i++) {
//     	elems[i].disabled = true;
// 	}
// }
