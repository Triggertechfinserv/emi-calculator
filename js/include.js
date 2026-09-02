document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       FOOTER COPYRIGHT YEAR
       ========================================= */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =========================================
       MOBILE NAVIGATION
       ========================================= */

    const menuToggle = document.querySelector(".tfs-mobile-menu-toggle");
    const mobileMenu = document.getElementById("tfsMobileMenu");
    const desktopMenu = document.querySelector(".tfs-menu");

    function setupNavigation() {

        if (!menuToggle || !mobileMenu) {
            return;
        }

        if (window.innerWidth <= 700) {

            /* Hide desktop navigation on mobile */
            if (desktopMenu) {
                desktopMenu.style.display = "none";
            }

            /* Keep mobile menu closed initially */
            if (menuToggle.getAttribute("aria-expanded") !== "true") {
                mobileMenu.style.display = "none";
            }

        } else {

            /* Restore desktop navigation */
            if (desktopMenu) {
                desktopMenu.style.display = "";
            }

            /* Hide mobile menu on desktop */
            mobileMenu.style.display = "none";

            menuToggle.setAttribute("aria-expanded", "false");
        }
    }


    setupNavigation();


    /* Hamburger click */

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", function () {

            const isOpen =
                menuToggle.getAttribute("aria-expanded") === "true";

            if (isOpen) {

                mobileMenu.style.display = "none";
                menuToggle.setAttribute("aria-expanded", "false");

            } else {

                mobileMenu.style.display = "flex";
                menuToggle.setAttribute("aria-expanded", "true");

            }

        });


        /* Close after clicking mobile link */

        mobileMenu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.style.display = "none";
                menuToggle.setAttribute("aria-expanded", "false");

            });

        });


        /* Close with Escape */

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                mobileMenu.style.display = "none";
                menuToggle.setAttribute("aria-expanded", "false");

            }

        });

    }


    /* Handle screen rotation / resize */

    window.addEventListener("resize", setupNavigation);

});


    /* =========================================
       MOBILE NAVIGATION END
       ========================================= */
