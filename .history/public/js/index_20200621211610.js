$(document).ready(function () {

  var $table = $(".table");

  $.ajax({
    datatype: "json",
    url: "https://cors-anywhere.herokuapp.com/https://cspf-dev-challenge.herokuapp.com/",
    type: "GET"
  }).then(function (response) {
    // console.log(response.data.rows[1]);
    var persons = response.data.rows;
    var person_data = '';

    $.each(persons, function(index, value) {
      person_data += '<tr>';
      person_data += '<td>'+ value.id+'</td>';
      person_data += "<td>" + value.fname + "</td>";

    });
    
    $table.append(person_data);

  });



});