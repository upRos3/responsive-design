$(document).ready(function() {
  var timesVisited = 1;

  if (localStorage.timesVisited === null) {
    localStorage.setItem("timesVisited", timesVisited);
  } else {
    var timesVisited = Number(localStorage.getItem("timesVisited"));
    timesVisited += 1;
    localStorage.setItem("timesVisited", timesVisited);
  }

  function isPrime(num) {
    if (num === 1) {
      return timesVisited;
    } else if (num === 2) {
      return "PRIME!";
    } else {
      for (var i = 2; i < num; i++) {
        if (num % i === 0) {
          return timesVisited;
        }
      }
      return "PRIME!";
    }
  }

  function numberOfViewsToday(timesVisited) {
    return isPrime(timesVisited);
  }

  var $searchButton = $("#search-btn");
  var $menuButton = $("#menu-btn");

  $searchButton.on("click", function() {
    console.log("Sup");
    $("#search-toggle").slideToggle(400, function() {
      $("#search-text-box").focus();
    });
  });

  $menuButton.on("click", function() {
    console.log("menu");
  });

  console.log(numberOfViewsToday(timesVisited));
});
