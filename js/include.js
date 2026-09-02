document.addEventListener("DOMContentLoaded", function () {

    // Auto-update footer copyright year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
  // Auto-update footer copyright year End

/* =========================================
       MOBILE MENU
       ========================================= */
    const menuToggle = document.querySelector(".tfs-mobile-menu-toggle");
    const mobileMenu = document.getElementById("tfsMobileMenu");

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", function () {

            const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

            menuToggle.setAttribute("aria-expanded", String(!isOpen));

            mobileMenu.classList.toggle("is-open", !isOpen);

        });


        /* Close menu when a menu link is clicked */
        const mobileLinks = mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(function (link) {
            link.addEventListener("click", function () {

                menuToggle.setAttribute("aria-expanded", "false");
                mobileMenu.classList.remove("is-open");

            });
        });


        /* Close menu when pressing Escape */
        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                menuToggle.setAttribute("aria-expanded", "false");
                mobileMenu.classList.remove("is-open");

            }

        });

    }

});

/* =========================================
       MOBILE MENU END
       ========================================= */
