document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       FOOTER COPYRIGHT YEAR
       ========================================= */
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =========================================
       MOBILE MENU
       ========================================= */
    const menuToggle = document.querySelector(".tfs-mobile-menu-toggle");
    const mobileMenu = document.getElementById("tfsMobileMenu");

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", function () {

            const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

            if (isOpen) {
                mobileMenu.style.display = "none";
                menuToggle.setAttribute("aria-expanded", "false");
            } else {
                mobileMenu.style.display = "flex";
                menuToggle.setAttribute("aria-expanded", "true");
            }

        });


        /* Close when clicking a menu link */
        const mobileLinks = mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.style.display = "none";
                menuToggle.setAttribute("aria-expanded", "false");

            });

        });


        /* Close with Escape key */
        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                mobileMenu.style.display = "none";
                menuToggle.setAttribute("aria-expanded", "false");

            }

        });

    }

});

  /* =========================================
       MOBILE MENU END
       ========================================= */
