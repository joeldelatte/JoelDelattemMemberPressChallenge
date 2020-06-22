$(document).ready(function () {
  let $table = $(".table");
  var queryURL = "https://cspf-dev-challenge.herokuapp.com/";
  $.ajax({
    type: "GET",
    url: "https://cspf-dev-challenge.herokuapp.com/",
    success: function (data) {
      console.log("success", data);
    },
  }).then(function (response) {
    console.log(response);
    console.log(response.Runtime);
  });
});
