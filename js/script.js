document.addEventListener("DOMContentLoaded", function () {
  // Load sidebar.html into #sidebar-container
  fetch("sidebar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("sidebar-container").innerHTML = data;

      // Activate mobile menu toggle after sidebar loads
      const toggle = document.querySelector(".menu-toggle");
      const nav = document.querySelector(".nav-links");
      toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
      });
    });
});
