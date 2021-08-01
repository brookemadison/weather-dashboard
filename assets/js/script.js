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
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                   
                    displayCurrent(data.results, current);
                });
            }
            //if request was not successful
            else {
                alert("Error:" + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Forecast not available");
        })
};

// Search Button 
var searchBtn = document.querySelector(".searchBtn");
 
// Stops page from reloading
searchBtn.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
});

// 5 day forecast section 
const { main, name, sys, weather } = data;
const icon = `https://openweathermap.org/img/wn/${
  weather[0]["icon"]
}@2x.png`;
 
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

