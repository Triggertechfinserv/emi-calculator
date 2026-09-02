document.addEventListener('DOMContentLoaded', function () {

    /* Copyright year */
    const year = document.getElementById('year');

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* Mobile menu */
    (function () {

        const toggle = document.querySelector('.tfs-mobile-menu-toggle');
        const menu = document.getElementById('tfsMobileMenu');

        if (!toggle || !menu) return;

        const setExpanded = (open) => {
            toggle.setAttribute('aria-expanded', String(open));
            menu.classList.toggle('open', open);
        };

        toggle.addEventListener('click', () => {
            const open = !menu.classList.contains('open');
            setExpanded(open);
        });

        menu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                setExpanded(false);
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 991) {
                setExpanded(false);
            }
        });

    })();

});
