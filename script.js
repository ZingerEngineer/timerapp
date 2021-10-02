let t = document.querySelector(".timer");
let btn1 = document.querySelector(".btnstart");
let btn2 = document.querySelector("#btnreset");
let btn3 = document.querySelector("#btnlap");
let laps = document.querySelector("#laps")
let lapArray = [];
let counterer = 0
let s = 0;
let h = 0;
let d = 0;
let m = 0;
let timeArray = [d, h, m, s];
let mytimer = null;

t.innerHTML = timeArray
  .map((item) => String(item))
  .map((item) => {
    if (item.length == 1) {
      return "0" + item;
    } else {
      return item;
    }
  })
  .join(":");

btn2.addEventListener("click", () => {
  d = 0;
  m = 0;
  h = 0;
  s = 0;
  document.getElementById("laps").style.height ="0px"
  laps.innerHTML=""
  counterer = 0
  timeArray = [d, h, m, s];
  t.innerHTML = timeArray
    .map((item) => String(item))
    .map((item) => {
      if (item.length == 1) {
        return "0" + item;
      } else {
        return item;
      }
    })
    .join(":");
  btn1.innerHTML = "start";
  stopmytimer();
  btn2.classList.add("invisible");
  btn2.classList.remove("visible");
});
if (btn1.innerHTML === "start") {
  btn2.classList.add("invisible");
  btn3.classList.add("invisible");
}

function counter() {
  if (s == 60) {
    m++;
    s = 0;
  } else if (m == 60) {
    h++;
    m = 0;
  } else if (h == 24) {
    d++;
    h = 0;
  }
}

function mytimerstart() {
  s = s + 1;
  counter();
  timeArray = [d, h, m, s];
  t.innerHTML = timeArray
    .map((item) => String(item))
    .map((item) => {
      if (item.length == 1) {
        return "0" + item;
      } else {
        return item;
      }
    })
    .join(":");
}

function stopmytimer() {
  clearInterval(mytimer);
}

btn1.addEventListener("click", () => {
  if (btn1.innerHTML === "start" || btn1.innerHTML === "resume") {
    btn2.classList.add("invisible");
    btn2.classList.remove("visible");
    btn3.classList.add("visible");
    btn3.classList.remove("invisible");
  } else if (btn1.innerHTML === "stop") {
    btn2.classList.add("visible");
    btn2.classList.remove("invisible");
    btn3.classList.add("invisible");
    btn3.classList.remove("visible");
  }

  if (btn1.innerHTML == "start") {
    mytimer = setInterval(mytimerstart, 1000);
    btn1.innerHTML = "stop";
  } else if (btn1.innerHTML == "stop") {
    stopmytimer();
    mytimer = null;
    btn1.innerHTML = "resume";
  } else if (btn1.innerHTML == "resume") {
    btn1.innerHTML = "stop";
    mytimer = setInterval(mytimerstart, 1000);
  }
});

btn3.addEventListener("click", () => {
    document.getElementById("laps").style.height ="250px"
  timeArray = [d, h, m, s];
      const newDiv = document.createElement("DIV")
      counterer++
      let stringCounter = String(counterer)
      if (String(counterer).length == 1) {
        stringCounter =  "0" + counterer;
      } else {
        stringCounter=counterer;
      }
      newDiv.innerHTML = stringCounter +"&nbsp;&nbsp;&nbsp;"+ timeArray
      .map((item) => String(item))
      .map((item) => {
        if (item.length == 1) {
          return "0" + item;
        } else {
          return item;
        }
      })
      .join(":")

      laps.appendChild(newDiv)
    });
    
