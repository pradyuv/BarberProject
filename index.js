$("#bookNowMainButton").on("click", function(){
    window.location.href = 'booknow.html'; //redirects to booknow.html
});

//Sets minimum date possible in book now to be current date of usage
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("dateToBook").setAttribute("min", today);