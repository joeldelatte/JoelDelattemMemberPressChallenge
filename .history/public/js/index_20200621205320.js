$(document).ready(function () {

  let $table = $(".table");
  
  $.ajax({
    datatype: "json",
    url: "https://cors-anywhere.herokuapp.com/https://cspf-dev-challenge.herokuapp.com/",
    type: "GET",
    // data: data,
    // success: success
  }).then(function (response) {
    console.log(response.data);
  });



});
