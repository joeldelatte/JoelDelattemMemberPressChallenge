$(document).ready(function () {
  let $table = $(".table");

  $.ajax({
    type: "GET",
    url: "https://cspf-dev-challenge.herokuapp.com/",
    success: function (data) {
      console.log("success", data);
    },
  });
});
