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
