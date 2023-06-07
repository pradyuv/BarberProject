const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

if (window.location.href.endsWith("booknow.html")){ //only executes in booknow, if I didn't have this conditional, this logic would fail in other webpages
    
    
    //Sets minimum date possible in book now to be current date of usage
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
    var yyyy = today.getFullYear();
    
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("dateToBook").setAttribute("min", today);
    
}

if (window.location.href.endsWith("index.html")){ //only occurs in index.html, so that the logic isn't blocked elsewhere
    $("#bookNowMainButton").on("click", function(){
        window.location.href = 'booknow.html'; //redirects to booknow.html
    });
    
}

//consult and cut validation
document.getElementById("submitConsult").addEventListener("click", function(event) {
    var validationPass = validateEmail("emailConsultAndCut");
    if (validationPass){
        $('#staticBackdrop').modal('show');
    }    
  });

  document.getElementById("submitBooking").addEventListener("click", function(event) {
    var validationPass = validateEmail("emailAddressInputBooking");
  });


  

  function validateEmail(inputId){
    var emailInput = document.getElementById(inputId);
    var email = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      // Prevent the form submission
      event.preventDefault();
      emailInput.setCustomValidity("Please enter a valid email address");
      emailInput.reportValidity();
      return false;
    } else {
      // Valid email, allow form submission and show the modal
      emailInput.setCustomValidity("");
      emailInput.reportValidity();
      return true;
    }
  };

  

  // Clear the validation message when the email input value changes
  document.getElementById("emailConsultAndCut").addEventListener("input", function() {
    this.setCustomValidity("");
  });

  function doneConsult() {
    location.reload(); //reloads webpage when consult is done
  }