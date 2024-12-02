document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navList = document.querySelector(".nav-list");
  const navItems = document.querySelectorAll(".nav-item");

  function toggleMobileMenu() {
    navList.classList.toggle("active");
  }

  function toggleDropdown(item) {
    const isActive = item.classList.contains("active");

    // Close all other dropdowns
    navItems.forEach((navItem) => {
      if (navItem !== item) {
        navItem.classList.remove("active");
      }
    });

    // Toggle current dropdown
    item.classList.toggle("active");
  }

  mobileMenuToggle.addEventListener("click", toggleMobileMenu);

  navItems.forEach((item) => {
    const link = item.querySelector(".nav-link");
    const dropdown = item.querySelector(".dropdown");

    if (dropdown) {
      link.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          toggleDropdown(item);
        }
      });

      // For desktop: close dropdown when clicking outside
      document.addEventListener("click", (e) => {
        if (!item.contains(e.target) && window.innerWidth > 768) {
          item.classList.remove("active");
        }
      });
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      navItems.forEach((item) => item.classList.remove("active"));
      navList.classList.remove("active");
    }
  });

  // Adjust dropdown behavior on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navList.classList.remove("active");
      navItems.forEach((item) => item.classList.remove("active"));
    }
  });
});

//
// Add keyboard navigation support
// document.addEventListener('keydown', function(e) {
//     if (e.key === 'Escape') {
//         const dropdowns = document.querySelectorAll('.dropdown');
//         dropdowns.forEach(dropdown => {
//             dropdown.style.opacity = '0';
//             dropdown.style.visibility = 'hidden';
//         });
//     }
// });

// Add touch support for mobile devices
// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('touchstart', function(e) {
//         if (this.nextElementSibling && this.nextElementSibling.classList.contains('dropdown')) {
//             e.preventDefault();
//             const wasVisible = this.nextElementSibling.style.visibility === 'visible';

// Hide all dropdowns
// document.querySelectorAll('.dropdown').forEach(dropdown => {
//     dropdown.style.opacity = '0';
//     dropdown.style.visibility = 'hidden';
// });

// Toggle clicked dropdown
//             if (!wasVisible) {
//                 this.nextElementSibling.style.opacity = '1';
//                 this.nextElementSibling.style.visibility = 'visible';
//             }
//         }
//     });
// });
