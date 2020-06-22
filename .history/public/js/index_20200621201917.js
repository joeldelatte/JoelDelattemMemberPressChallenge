$(document).ready(function () {

  let $table = $(".table");
  var queryURL = "https://cspf-dev-challenge.herokuapp.com/";

  $.ajax({
    datatype: "json",
    url: "https://cspf-dev-challenge.herokuapp.com/",//"https://jsonplaceholder.typicode.com/users",
    type: "GET",
    // data: data,
    // success: success
  }).then(function (response) {
    console.log(response.data);
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  });

  // $.getJSON("https://cspf-dev-challenge.herokuapp.com/", function(data) {
  //   console.log(data);
  // });

});
