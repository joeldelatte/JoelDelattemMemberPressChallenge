$(document).ready(function () {
  let $table = $(".table");
  var queryURL = "https://cspf-dev-challenge.herokuapp.com/";
  $.ajax({
    url: queryURL,
    method: "GET",
    success: function (data) {
      console.log("success", data);
    },
  }).then(function (response) {
    console.log(response);
    console.log(response.Runtime);
  });
});
