const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

if (window.location.href.endsWith("booknow.html")) {
  // Only executes in booknow.html

  // Sets minimum date possible in book now to be the current date of usage
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  document.getElementById("dateToBook").setAttribute("min", today);
}

if (window.location.href.endsWith("index.html")) {
  // Only occurs in index.html, so that the logic isn't blocked elsewhere
  $("#bookNowMainButton").on("click", function() {
    window.location.href = 'booknow.html'; // Redirects to booknow.html
  });
}

// Consult and cut validation
document.getElementById("submitConsult").addEventListener("click", function(event) {
  var validationPass = validateEmail("emailConsultAndCut");
  if (validationPass) {
    $('#staticBackdrop').modal('show');
  }
});

document.getElementById("submitBooking").addEventListener("click", function(event) {
  event.preventDefault(); // Prevents the form submission

  var validationPass = validateEmail("emailAddressInputBooking");
  if (validationPass) {
    validateBookNow("bookNowForm");
  }
});

function validateEmail(inputId) {
  var emailInput = document.getElementById(inputId);
  var email = emailInput.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailInput.setCustomValidity("Please enter a valid email address");
    emailInput.reportValidity();
    return false;
  } else {
    emailInput.setCustomValidity("");
    emailInput.reportValidity();
    return true;
  }
}

function validateBookNow(formId) {
  var form = document.getElementById(formId);
  var elements = form.elements;
  var isValid = true;

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    // Skip elements that are not input fields or select fields
    if (
      element.tagName !== "INPUT" &&
      element.tagName !== "SELECT"
    ) {
      continue;
    }

    // Check if the field is required and if its value is empty
    if (element.hasAttribute("required") && element.value.trim() === "") {
      isValid = false;
      break;
    }
  }

  if (isValid) {
    $('#confirmModal').modal('show'); // Show the modal if the form is valid
    console.log("Form is valid. Submitting...");
  } else {
    console.log("Form is not valid. Please fill out all required fields.");
  }
}

// Clear the validation message when the email input value changes
document.getElementById("emailConsultAndCut").addEventListener("input", function() {
  this.setCustomValidity("");
});

function doneConsult() {
  location.reload(); // Reloads webpage when consult is done
}
