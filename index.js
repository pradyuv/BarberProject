$("#bookNowMainButton").on("click", function(){
    window.location.href = 'booknow.html';
});


$(document).ready(function() {
    $('.dropdown-menu a.dropdown-item').click(function() {
      var selectedOption = $(this).text();
      $(this).closest('.dropdown').find('.dropdown-toggle').html(selectedOption + ' <span class="caret"></span>');
    });
  });