(function () {
  var overlay = document.getElementById("lightbox");
  var img = overlay && overlay.querySelector("img");
  var closeBtn = overlay && overlay.querySelector(".lightbox__close");
  if (!overlay || !img) return;

  function open(src, alt) {
    img.src = src;
    img.alt = alt || "";
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    overlay.classList.remove("is-open");
    img.removeAttribute("src");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-lightbox]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      open(btn.getAttribute("data-lightbox"), btn.getAttribute("data-lightbox-alt") || "");
    });
  });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) close();
  });

  if (closeBtn) closeBtn.addEventListener("click", close);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) close();
  });
})();
