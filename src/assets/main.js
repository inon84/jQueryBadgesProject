$(document).ready(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/Inon84.json',
    dataType: 'jsonp',
  })
  success: function(response) {
    // bllaaa
    }
  })
  /*
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
  */
});
