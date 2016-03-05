var myTime; //myInterval
var workTime = document.getElementById('workTime').innerHTML = 25;
console.log(workTime);

var breakTime = document.getElementById('breakTime').innerHTML = 5;
console.log(breakTime);

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
function resetTime() {
  clearInterval(myInterval);
  remainingSeconds = workTime * 60;
  //calls start work function
  startWorkCountDown();
}


function displayCountDown(remainingTime) {
	var minutes = Math.floor(remainingTime / 60); 
	var seconds = remainingTime % 60; 
	// console.log(remainingTime);
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
	//pretty sure this an anonymous function, maybe
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

var callback = function() {
  console.log('callback yoo');
  document.getElementById('timerText').innerHTML = "Break time!";
  remainingSeconds = breakTime * 60;
  //yet another callback
  timerFunc(callbackRest);
};

var callbackRest = function() {
  clearInterval(myInterval);
  console.log('callbackRest');
  document.getElementById('timerText').innerHTML = "Start";
  remainingSeconds = workTime * 60;
  //controls Start button
  document.getElementById("start").disabled = false;
};

//how to flip back to work time after?

// controls buttons to increase and decrease inputs 
//updates numbers as you go
function increaseWork() {
  document.getElementById('workTime').innerHTML = ++workTime;
  remainingSeconds = workTime * 60;
}

function increaseBreak() {
  document.getElementById('breakTime').innerHTML = ++breakTime;
}

function decreaseWork() {
  if (workTime >= 1) {
    document.getElementById('workTime').innerHTML = --workTime;
    remainingSeconds = workTime * 60;
  }
}

function decreaseBreak() {
  if (breakTime >= 1) {
    document.getElementById('breakTime').innerHTML = --breakTime;
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
