$(document).ready(function() {
  // Checks what version of browser and returns boolean
  var isMobile = window.matchMedia("only screen and (max-width: 760px)");

  var $searchButton = $("#search-btn");
  var $menuButton = $("#menu-btn");

  // Toggles search button. Need to make this for mobile only.
  if (isMobile.matches) {
    $searchButton.on("click", function() {
      console.log("Sup");
      $("#search-toggle").slideToggle(400, function() {
        $("#search-text-box").focus();
      });
    });
  }

  $menuButton.on("click", function() {
    console.log("menu");
  });

  // Sets number of times visted into local storage
  // Refactor into function
  var timesVisited = 1;

  function setTimesVisited(timesVisited) {
    return localStorage.setItem("timesVisited", timesVisited);
  }

  // Returns if timesVisited is a prime number or not
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

  if (localStorage.timesVisited === null) {
    setTimesVisited(timesVisited);
  } else {
    timesVisited = Number(localStorage.getItem("timesVisited"));
    timesVisited += 1;
    setTimesVisited(timesVisited);
  }

  function numberOfViewsToday(timesVisited) {
    return isPrime(timesVisited);
  }
  console.log(numberOfViewsToday(timesVisited));

  // Returns alert when someone on a mobile browser returns to the site for a second time
  if (isMobile.matches && timesVisited === 2) {
    alert("Welcome Back!");
  }

  // Resets tbe view count of current day
  var today = moment().format("D M YYYY");

  var expiry = localStorage.getItem("expiry");

  if (!localStorage.expiry) {
    localStorage.setItem("expiry", today);
  }

  if (localStorage.expiry !== today) {
    localStorage.setItem("expiry", today);
    localStorage.setItem("timesVisited", 1);
  }
});
