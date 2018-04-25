$(document).ready(function() {
  var $searchButton = $("#search-btn");
  var $menuButton = $("#menu-btn");

  $searchButton.on("click", function() {
    console.log("Sup");
    $("#search-toggle").slideToggle("fast", function() {
      $("#search-text-box").focus();
    });
  });

  $menuButton.on("click", function() {
    console.log("menu");
  });
});
