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


//querySelectors
var searchEl = document.querySelector("#search");
var searchKeyEl = document.querySelector("#search-key");

//variables
var current;

//functions
var getCurrent = function () {
    var queryString = document.location.search;
    keyword = queryString.split("=")[1];

    if (current) {
        getCurrent(keyword);
    }
};

// API key
var apiKey = "a3bf3981a3e00948b2f668883c6518e1";
var inputval = "input.value";

var getCurrentWeather = function (keyword) {

var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${a3bf3981a3e00948b2f668883c6518e1}&units=metric";

    //fetching by current to get the current weather for city.

 fetch(apiUrl)
 .then(response => response.json())
 .then(data => {
 })
 .catch(() => {
   msg.textContent = "Forecast not available.";
 });

// Search Button 
const form = document.querySelector(".search-section form");

 
// Stops page from reloading
form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;
  });

// 5 day forecast section
const { main, name, sys, weather } = data;
const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
  weather[0]["icon"]
}.svg`;
 
var li = document.createElement("li");
li.classList.add("forecast");
var markup = `
  <h2 class="date" data-name="${date},${DATE_SHORT}">
    <span>${date}</span>
    <sup>${DATE_SHORT}</sup>
  </h2>
  <div class="temp">${Math.round(main.temp)}<sup>°F</sup>
  </div>
  <div class="wind">${Math.round(main.wind)}<sup>MPH</sup>
  </div>
  <div class="humidity">${Math.round(main.humidity)}<sup>%</sup>
  </div>

`;

li.innerHTML = markup;
list.appendChild(li);

msg.textContent = "";
form.reset();
input.focus();
}

// Only allows single request to be made per search 

//1
const listItems = list.querySelectorAll(".five-forecast .forecast");
const listItemsArray = Array.from(listItems);
 
if (listItemsArray.length > 0) {
  //2
  const filteredArray = listItemsArray.filter(el => {
    let content = "";
    //athens,gr
    if (inputVal.includes(",")) {
      //athens,grrrrrr->invalid country code, so we keep only the first part of inputVal
      if (inputVal.split(",")[1].length > 2) {
        inputVal = inputVal.split(",")[0];
        content = el.querySelector(".forecast-date span").textContent.toLowerCase();
      } else {
        content = el.querySelector(".forecast-date").dataset.name.toLowerCase();
      }
    } else {
      //athens
      content = el.querySelector(".forecast-date span").textContent.toLowerCase();
    }
    return content == inputVal.toLowerCase();
  });
   
  //3
  if (filteredArray.length > 0) {
    msg.textContent = `You already know the weather for ${
      filteredArray[0].querySelector(".forecast-date span").textContent
    } ...otherwise be more specific by providing the country code as well `;
    form.reset();
    input.focus();
    return;
  }
}