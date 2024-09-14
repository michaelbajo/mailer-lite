document.addEventListener("DOMContentLoaded", function () {
  // Cache the image element
  const image = document.getElementById("dynamic-image");

  // Select all nav items
  const navItems = document.querySelectorAll(".nav-item");

  // Add click event to each nav item
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active class from all nav items
      navItems.forEach((nav) => nav.classList.remove("active-tab"));

      // Add active class to the clicked nav item
      this.classList.add("active-tab");

      // Get the image associated with the clicked nav item
      const newImage = this.getAttribute("data-img");

      // Fade out the current image (manually adjusting opacity)
      image.style.opacity = 0;

      // After fading out, change the image source and fade it back in
      setTimeout(() => {
        image.src = newImage;
        image.style.opacity = 1;
      }, 500); // Timeout matches the fade duration (0.5s)
    });
  });
});
