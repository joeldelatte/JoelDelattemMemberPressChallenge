$(document).ready(function () {

  var $table = $(".table");

  function getPersonData() {
    $.ajax({
      datatype: "json",
      url:
        "https://cors-anywhere.herokuapp.com/https://cspf-dev-challenge.herokuapp.com/",
      type: "GET",
    }).then(function (response) {
      var persons = response.data.rows;
      var person_data = "";

      $.each(persons, function (index, value) {
        person_data += "<tr>";
        person_data += "<td>" + value.id + "</td>";
        person_data += "<td>" + value.fname + "</td>";
        person_data += "<td>" + value.lname + "</td>";
        person_data += "<td>" + value.email + "</td>";
        person_data += "<td>" + value.date + "</td>";
      });

      $table.append(person_data);
    });
  }

  getPersonData();

  $('#data-refresh').on('click', function(event) {

    event.preventDefault()

    
  });



});
