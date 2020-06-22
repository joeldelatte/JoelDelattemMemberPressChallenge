$(document).ready(function () {

  var $table = $(".table");

  function getPersonData() {
    $.ajax({
      datatype: "json",
      url:
        "https://cors-anywhere.herokuapp.com/https://cspf-dev-challenge.herokuapp.com/",
      type: "GET",
    }).then(function (response) {
      var headers = response.data.headers;
      var persons = response.data.rows;
      var person_data = "";

      $.each(persons, function (index, value) {
    
        person_data += `
          <tr>
            <td>${value.id}</td>
            <td>${value.fname}</td>
            <td>${value.lname}</td>
            <td>${value.email}</td>
            <td>${value.date}</td>
          </tr>  
        `;
      });

      $table.html(`          
          <tr>
            <th>${headers[1]}</th>
            <th>${headers[2]}</th>
            <th>${headers[3]}</th>
            <th>${headers[4]}</th>
            <th>${headers[5]}</th>
          </tr>` +
          person_data);
    });
  }

  getPersonData();

  $('#data-refresh').on('click', function(event) {

    event.preventDefault()

    getPersonData();
    
    console.log("I refreshed the data with the")
  });



});
