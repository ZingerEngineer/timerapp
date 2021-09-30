let t = document.querySelector(".timer");
let btn1 = document.querySelector(".btnstart");
let s = 0;
let h = 0;
let d = 0;
let m = 0;
let timeArray = [d, h, m, s];
let mytimer = null;
t.innerHTML = timeArray.map((item) => String(item)).join(":");
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
  t.innerHTML = timeArray.map((item) => String(item)).join(":");
}
function stopmytimer() {
  clearInterval(mytimer);
}

btn1.addEventListener("click", () => {
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
