$("#bookNowMainButton").on("click", function(){
    window.location.href = 'booknow.html'; //redirects to booknow.html
});

const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//Sets minimum date possible in book now to be current date of usage
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("dateToBook").setAttribute("min", today);

function validateInput() {
    var input = document.getElementById('emailConsultAndCut').value;
    // Add your input validation logic here
    if (input === re) {
      $('#staticBackdrop').modal('show');
    }else{
        input.setCustomValidity("Invalid email.");
    }
  }