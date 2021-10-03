let timer = document.querySelector(".timer");
let myTimer = null;
let buttonStart = document.querySelector(".button-start");
let buttonReset = document.querySelector("#button-reset");
let buttonLap = document.querySelector("#button-lap");
let lapBox = document.querySelector("#lap-box");
let lapArray = [];
let incrementer = 0;
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timeArray = [days, hours, minutes, seconds];

function hideButtonsOnStart() {
  if (buttonStart.innerHTML === "START") {
    buttonReset.classList.add("invisible");
    buttonLap.classList.add("invisible");
  }
}

function writeTimeArray() {
  let stringTimeArray = timeArray
    .map((item) => String(item))
    .map((item) => {
      if (item.length == 1) {
        return "0" + item;
      } else {
        return item;
      }
    })
    .join(":");
  return stringTimeArray;
}

function hideButtonReset() {
  buttonReset.classList.add("invisible");
  buttonReset.classList.remove("visible");
}

function showButtonReset() {
  buttonReset.classList.remove("invisible");
  buttonReset.classList.add("visible");
}

function hideButtonLap() {
  buttonLap.classList.add("invisible");
  buttonLap.classList.remove("visible");
}

function showButtonLap() {
  buttonLap.classList.remove("invisible");
  buttonLap.classList.add("visible");
}

function timeIncrementer() {
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  } else if (minutes == 60) {
    hours++;
    minutes = 0;
  } else if (hours == 24) {
    days++;
    hours = 0;
  }
}

function mytimerstart() {
  seconds = seconds + 1;
  timeIncrementer();
  timeArray = [days, hours, minutes, seconds];
  timer.innerHTML = writeTimeArray();
}

function stopTimerInterval() {
  clearInterval(timerInterval);
}

hideButtonsOnStart();
timer.innerHTML = writeTimeArray();
buttonReset.addEventListener("click", () => {
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("lap-box").style.height = "0px";
  lapBox.innerHTML = "";
  incrementer = 0;
  timeArray = [days, hours, minutes, seconds];
  timer.innerHTML = writeTimeArray();
  buttonStart.innerHTML = "START";
  stopTimerInterval();
  hideButtonReset();
});

buttonStart.addEventListener("click", () => {
  if (buttonStart.innerHTML === "START" || buttonStart.innerHTML === "RESUME") {
    hideButtonReset();
    showButtonLap();
  } else if (buttonStart.innerHTML === "STOP") {
    showButtonReset();
    hideButtonLap();
  }

  if (buttonStart.innerHTML == "START") {
    timerInterval = setInterval(mytimerstart, 1000);
    buttonStart.innerHTML = "STOP";
  } else if (buttonStart.innerHTML == "STOP") {
    stopTimerInterval();
    timerInterval = null;
    buttonStart.innerHTML = "RESUME";
  } else if (buttonStart.innerHTML == "RESUME") {
    buttonStart.innerHTML = "STOP";
    timerInterval = setInterval(mytimerstart, 1000);
  }
});

buttonLap.addEventListener("click", () => {
  document.getElementById("lap-box").style.height = "250px";
  timeArray = [days, hours, minutes, seconds];
  const newDiv = document.createElement("DIV");
  incrementer++;
  let stringCounter = String(incrementer);
  if (String(incrementer).length == 1) {
    stringCounter = "0" + incrementer;
  } else {
    stringCounter = incrementer;
  }
  newDiv.innerHTML = stringCounter + "&nbsp;&nbsp;&nbsp;" + writeTimeArray();

  lapBox.appendChild(newDiv);
});
