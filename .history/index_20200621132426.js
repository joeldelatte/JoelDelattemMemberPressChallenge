$(document).ready(function () {

  let $table = $(".table");
  var queryURL = "https://cspf-dev-challenge.herokuapp.com/";

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users"// queryURL,
    method: "GET"
    }).then(function (response) {
    console.log(response);
  });

});
