document.addEventListener("DOMContentLoaded", function () {
  const arrowLeft = document.querySelector(".arrow_left");
  const arrowRight = document.querySelector(".arrow_right");
  const initialFlags = document.querySelectorAll(".flag.initial");
  const additionalFlags = document.querySelectorAll(".flag.hide");

  arrowLeft.addEventListener("change", function () {
    if (arrowLeft.checked) {
      toggleFlagsVisibility();
      arrowRight.checked = false; // Uncheck the right arrow
    }
  });

  arrowRight.addEventListener("change", function () {
    if (arrowRight.checked) {
      hideInitialFlags();
      showAdditionalFlags();
      arrowLeft.checked = false; // Uncheck the left arrow
    }
  });

  function hideInitialFlags() {
    initialFlags.forEach((flag) => {
      flag.style.display = "none";
    });
  }

  function showAdditionalFlags() {
    additionalFlags.forEach((flag) => {
      flag.style.display = "flex";
    });
  }

  function toggleFlagsVisibility() {
    initialFlags.forEach((flag) => {
      flag.style.display = flag.style.display === "none" ? "flex" : "none";
    });

    additionalFlags.forEach((flag) => {
      flag.style.display = flag.style.display === "none" ? "flex" : "none";
    });
  }
});

// close nav
function closeMenu() {
  // Get the checkbox element
  var menuToggle = document.getElementById("menuToggle");

  // Close the menu by unchecking the checkbox
  if (menuToggle.checked) {
    menuToggle.checked = false;
  }
}

// work
document.addEventListener("DOMContentLoaded", function () {
  const viewMoreButton = document.querySelector(".view_btn");
  const viewLessButton = document.querySelector(".view_btn2");
  const container2 = document.querySelector(".work_container2");
  const container3 = document.querySelector(".work_container3");

  // Initial setup based on screen width
  if (window.innerWidth < 768) {
    container2.style.display = "none";
    container3.style.display = "none";
  }

  if (window.innerWidth >= 768) {
    container2.style.display = "block";
    container3.style.display = "none";
  }

  // Event listener for "View More" button
  viewMoreButton.addEventListener("click", function () {
    container2.style.display = "flex";
    container2.style.flexDirection = "column";
    container3.style.display = "flex";
    viewMoreButton.style.display = "none";
    viewLessButton.style.display = "block";
  });

  // Event listener for "View Less" button
  if (window.innerWidth >= 768) {
    viewLessButton.addEventListener("click", function () {
      container2.style.display = "block";
      container3.style.display = "none"; // Add this line to hide container3 as well
      viewMoreButton.style.display = "block";
      viewLessButton.style.display = "none";
    });
  } else if (window.innerWidth < 768) {
    viewLessButton.addEventListener("click", function () {
      container2.style.display = "none";
      container3.style.display = "none"; // Add this line to hide container3 as well
      viewMoreButton.style.display = "block";
      viewLessButton.style.display = "none";
    });
  }
});
