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
var getCurrentWeather = function (keyword) {

    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=&lon=&exclude=alerts&appid=a3bf3981a3e00948b2f668883c6518e1";
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
            alert("unable to connect to Weather Forecast");
        })
};