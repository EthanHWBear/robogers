$(document).ready(function() {

  if (result <=7) {
    $("#yes").fadeToggle();

    // 3

  } else if (result ===10) {
    $("#no").fadeToggle();

    // 2

  } else {
    $("#perhaps").fadeToggle();

    // 1
    
  }
  event.preventDefault();
}