// Current time and date
var DateTime = luxon.DateTime
var time = DateTime.now().toLocaleString(DateTime.DATE_FULL)
console.log(time)

var dateElement = document.getElementById("currentDay")

dateElement.textContent = time

var time = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE)
console.log(time)

var dateElement = document.getElementById("currentTime")

dateElement.textContent = time

