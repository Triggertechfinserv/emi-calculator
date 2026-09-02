document.addEventListener('DOMContentLoaded', function () {

    /* =========================================
       COPYRIGHT YEAR
    ========================================= */

    const year = document.getElementById('year');

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =========================================
       TECHFINSERV MOBILE MENU
    ========================================= */

    (function () {

        const toggle = document.querySelector('.tfs-mobile-menu-toggle');
        const menu = document.getElementById('tfsMobileMenu');

        if (!toggle || !menu) return;


        const setExpanded = (open) => {

            toggle.setAttribute(
                'aria-expanded',
                String(open)
            );

            menu.classList.toggle(
                'open',
                open
            );

        };


        /* Open / Close */

        toggle.addEventListener('click', () => {

            const open = !menu.classList.contains('open');

            setExpanded(open);

        });


        /* Close after clicking a link */

        menu.addEventListener('click', (e) => {

            if (e.target.tagName === 'A') {
                setExpanded(false);
            }

        });


        /* Close when screen becomes desktop */

        window.addEventListener('resize', () => {

            if (window.innerWidth > 991) {
                setExpanded(false);
            }

        });

    })();

});
