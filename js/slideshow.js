(function () {
  var root = document.getElementById("slideshow");
  if (!root || !window.SLIDE_PATHS || !window.SLIDE_PATHS.length) return;

  var paths = window.SLIDE_PATHS;
  var durationMs = 5000;
  var index = 0;

  paths.forEach(function (src, i) {
    var slide = document.createElement("div");
    slide.className = "slideshow__slide" + (i === 0 ? " is-active" : "");
    slide.style.backgroundImage = "url('" + src + "')";
    slide.setAttribute("role", "img");
    slide.setAttribute("aria-label", "Slide " + (i + 1));
    root.appendChild(slide);
  });

  var slides = root.querySelectorAll(".slideshow__slide");
  if (slides.length < 2) return;

  setInterval(function () {
    slides[index].classList.remove("is-active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("is-active");
  }, durationMs);
})();
