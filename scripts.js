// Only run if these elements exist
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("newsSlider");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (slider && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -220, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      slider.scrollBy({ left: 220, behavior: "smooth" });
    });
  }

  // Initialize OwlCarousel if it exists
  if (typeof $ !== "undefined" && $.fn.owlCarousel) {
    $('.stakeholder-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: { items: 2 },
        600: { items: 4 },
        1000: { items: 6 }
      }
    });
  } else {
    console.error("jQuery or OwlCarousel is not loaded.");
  }
});
