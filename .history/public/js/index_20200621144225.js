$(document).ready(function () {

  let $table = $(".table");
  var queryURL = "https://cspf-dev-challenge.herokuapp.com/";

  $.getJSON({
    url: "https://cspf-dev-challenge.herokuapp.com",//"https://jsonplaceholder.typicode.com/users",
    method: "GET"
    }).then(function (response) {
    console.log(response);
  });
});
