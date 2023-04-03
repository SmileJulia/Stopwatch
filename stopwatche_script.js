let pStopwatch = document.createElement("p");
document.getElementsByTagName("div")[1].appendChild(pStopwatch);

let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
pStopwatch.innerText =
  format(hours) + ":" + format(minutes) + ":" + format(seconds);

function format(num) {
  let numString = num.toString();
  if (num < 10) {
    numString = "0" + numString;
  }
  return numString;
}

function startStopwatch() {
  interval = setInterval(function () {
    hours = Math.floor(seconds / SECONDS_IN_HOUR);
    minutes = Math.floor(
      (seconds - hours * SECONDS_IN_HOUR) / SECONDS_IN_MINUTE
    );
    seconds++;
    pStopwatch.innerText =
      format(hours) +
      ":" +
      format(minutes) +
      ":" +
      format(seconds - hours * SECONDS_IN_HOUR - minutes * SECONDS_IN_MINUTE);
  }, MILISECONDS_IN_SECONDS);
}

function pauseStopwatch() {
  clearInterval(interval);
}

function stopStopwatch() {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  pStopwatch.innerText =
    format(hours) + ":" + format(minutes) + ":" + format(seconds);
}

startButtonStopwatch.addEventListener("click", startStopwatch);
pauseButtonStopwatch.addEventListener("click", pauseStopwatch);
stopButtonStopwatch.addEventListener("click", stopStopwatch);
