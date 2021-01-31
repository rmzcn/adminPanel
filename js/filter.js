/*LIVE FILTER IN HTML ELEMENTS*/
$(document).ready(function(){
  $(".liveMenuFilter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#linkListMenu *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
