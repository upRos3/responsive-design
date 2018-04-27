$(document).ready(function() {
  // Checks what version of browser and returns boolean
  var isMobile = window.matchMedia("only screen and (max-width: 760px)");

  var $navBarContainer = $("#test");

  function renderNavBar() {
    var $navContainer = $("<div>").addClass("container-fluid");
    var $bootstrapColXs2Md1 = $("<div>")
      .addClass("col-xs-2 col-md-1")
      .attr("id", "menu-container");
    var $menuButton = $("<button>")
      .attr("id", "menu-btn")
      .attr("type", "button")
      .addClass("btn btn-default")
      .attr("aria-label", "Left Align");
    var $glyphIconSpanMenu = $("<span>")
      .addClass("glyphicon glyphicon-align-left")
      .attr("aria-hidden", "true");

    // $navBarContainer.append($navContainer);
    $navContainer.append($bootstrapColXs2Md1);
    $bootstrapColXs2Md1.append($menuButton);
    $menuButton.append($glyphIconSpanMenu);

    var $bootstrapColXs8Md6 = $("<div>")
      .addClass("col-xs-8 col-md-6")
      .attr("id", "title-container");
    var $span = $("<span>");
    var $h1Title = $("<h1>").text("Design.");

    $navContainer.append($bootstrapColXs8Md6);
    $bootstrapColXs8Md6.append($span);
    $span.append($h1Title);

    $navContainer.append($bootstrapColXs2Md1);

    var $searchContainer = $("<div>").addClass("search-container");
    var $searchForm = $("<form>").attr("id", "search-form");

    $bootstrapColXs2Md1.append($searchContainer);
    $searchContainer.append($searchForm);

    var $searchButton = $("<button>")
      .attr("id", "search-btn")
      .attr("type", "button")
      .addClass("btn btn-default")
      .attr("aria-label", "Left Align");
    var $glyphIconSpanSearch = $("<span>")
      .addClass("glyphicon glyphicon-search")
      .attr("aria-hidden", "true");

    $searchForm.append($searchButton);
    $searchButton.append($glyphIconSpanSearch);

    var $searchToggle = $("<div>").attr("id", "search-toggle");
    var $inputSearchBox = $("<input>")
      .attr("id", "search-text-box")
      .attr("type", "text")
      .attr("name", "s")
      .attr("value", "")
      .attr("placeholder", "Search");

    $searchForm.append($searchToggle);
    $searchToggle.append($inputSearchBox);

    console.log("hello");
    return $navContainer;
  }

  $navBarContainer.append(renderNavBar());
  // Toggles search button. Need to make this for mobile only.

  var $searchButtonToggle = $("#search-btn");

  if (isMobile.matches) {
    $searchButtonToggle.on("click", function() {
      $("#search-toggle").slideToggle(400, function() {
        $("#search-text-box").focus();
      });
    });
  }

  // $menuButton.on("click", function() {
  //   console.log("menu");
  // });

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
