// Current time and date



// Search Section
function createCityList(citySearchList) {
    $("#city-list").empty();

    var keys = Object.keys(citySearchList);
    for (var i = 0; i < keys.length; i++) {
        var cityListEntry = $("<button>");
        cityListEntry.addClass("list-group-item list-group-item-action");

        var splitStr = keys[i].toLowerCase().split(" ");
        for (var j = 0; j < splitStr.length; j++) {
            splitStr[j] =
                splitStr[j].charAt(0).toUpperCase() + splitStr[j].substring(1);
        }
        var titleCasedCity = splitStr.join(" ");
        cityListEntry.text(titleCasedCity);

        $("#city-list").append(cityListEntry);
    }
}
function populateCityWeather(city, citySearchList) {
    createCityList(citySearchList);
  
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=a3bf3981a3e00948b2f668883c6518e1" +
      city;
  
    var queryURL2 =
      "https://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=a3bf3981a3e00948b2f668883c6518e1" +
      city;
  
    var latitude;
  
    var longitude;
  
    $.ajax({
      url: queryURL,
      method: "GET"
    })
}