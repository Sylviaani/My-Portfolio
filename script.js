document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Prevent default link behavior
      event.preventDefault();

      // Get the page URL from the href attribute
      const pageUrl = this.getAttribute("href");

      // Load the new page
      window.location.href = pageUrl;
    });
  });
});
