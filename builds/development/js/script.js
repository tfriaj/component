(function () {
  "use strict";

  // Preloader js
  // window.addEventListener("load", (e) => {
  //   document.querySelector(".preloader").style.display = "none";
  // });

  // Navbar Search js
  const searchField = document.querySelector("[type='search']");
  const searchBtn = document.querySelector("[data-toggle='search']");
  const searchWarpper = document.querySelector(".search-warpper-toggleble");
  if (searchWarpper) {
    searchBtn.addEventListener("click", function () {
      searchWarpper.classList.toggle("show");
      searchField.focus();
    });
  }
})();
