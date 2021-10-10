var apiKey = "MjM4MDM5MDN8MTYzMzY1Mjk1MC45NTUyODc1";
var clientSecret =
  "85c614d7653cdf917ec0283b9fd1ae57dc2f38cb57df6239ac7238f7f021a3ed";
var apiUrl =
  "https://api.seatgeek.com/2/{searchType}?client_id=" +
  apiKey +
  "&client_secret=" +
  clientSecret +
  "&q={queryParameter}";

var artistSearch = function (searchType, artistName) {
  var apiString = apiUrl
    .replace("{searchType}", searchType)
    .replace("{queryParameter}", artistName);
  fetch(apiString).then(function (response) {
    console.log(response.json());
    return response.json();
  })
  .then(function(data){
    console.log(data);
  })
  ;
}

export default artistSearch;