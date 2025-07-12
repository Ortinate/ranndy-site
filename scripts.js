const slider = document.getElementById("newsSlider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -220, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: 220, behavior: "smooth" });
});
$(document).ready(function(){
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
});