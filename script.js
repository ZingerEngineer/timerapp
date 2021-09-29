let t = document.querySelector(".timer");
let btn1 = document.querySelector(".btnstart");
let s = 0;
//let i = 1;
let mytimer = null;
t.innerHTML = s;
function mytimerstart() {
  s = s + 1;
  t.innerHTML = s;
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
