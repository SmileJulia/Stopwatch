let input = document.createElement("input");
document.getElementsByTagName("div")[4].appendChild(input);

let pTimer = document.createElement("p");
document.getElementsByTagName("div")[4].appendChild(pTimer);

let timerInterval;
let tHours = 0;
let tMinutes = 0;
let tSeconds = 0;

function format(num) {
  num = parseInt(num);
  num = num.toString();
  if (num < 10) num = "0" + num;
  return num;
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function stopTimer() {
  clearInterval(timerInterval);
  tHours = 0;
  tMinutes = 0;
  tSeconds = 0;
  pTimer.innerText =
    format(tHours) + ":" + format(tMinutes) + ":" + format(tSeconds);
}

function parseTime(inputTime) {
  let [stringHours, stringMinutes, stringSeconds] = inputTime.split(":");
  tHours = stringHours * SECONDS_IN_HOUR;
  tMinutes = stringMinutes * SECONDS_IN_MINUTE;
  tSeconds = parseInt(stringSeconds) + tMinutes + tHours;
}

function startTimer() {
  let inputTime = input.value;
  parseTime(inputTime);
  timerInterval = setInterval(function () {
    tHours = Math.floor(tSeconds / SECONDS_IN_HOUR);
    tMinutes = Math.floor(
      (tSeconds - tHours * SECONDS_IN_HOUR) / SECONDS_IN_MINUTE
    );
    if (tSeconds == 0) {
      stopTimer();
    }
    pTimer.innerText =
      format(tHours) +
      ":" +
      format(tMinutes) +
      ":" +
      format(
        tSeconds - tHours * SECONDS_IN_HOUR - tMinutes * SECONDS_IN_MINUTE
      );
    tSeconds--;
  }, MILISECONDS_IN_SECONDS);
}

pauseButtonTimer.addEventListener("click", pauseTimer);
stopButtonTimer.addEventListener("click", stopTimer);
startButtonTimer.addEventListener("click", startTimer);
