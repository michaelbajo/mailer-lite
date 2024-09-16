document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", function () {
    // Toggle the 'active-menu' class on mobileMenu
    mobileMenu.classList.toggle("active-menu");
  });

  // Existing navigation functionality for the image swap (if needed)
  const image = document.getElementById("dynamic-image");
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((nav) => nav.classList.remove("active-tab"));
      this.classList.add("active-tab");

      const newImage = this.getAttribute("data-img");
      image.style.opacity = 0;

      setTimeout(() => {
        image.src = newImage;
        image.style.opacity = 1;
      }, 500);
    });
  });
});
