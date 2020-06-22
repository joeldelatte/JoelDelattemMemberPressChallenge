$(document).ready(function () {

//   let $table = $(".table");
//   var queryURL = "https://cspf-dev-challenge.herokuapp.com/";

//   $.ajax({
//     url: queryURL,
//     method: "GET"
//     }).then(function (response) {
//     console.log(response);
//   });

      var title = "space+jam";
      var queryURL =
        "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        console.log(response.Runtime);
      });

});
