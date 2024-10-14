// header.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('translate-x-full');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });

    // Submenu toggle function for mobile
    const mobileSubmenuToggles = document.querySelectorAll('.mobile-submenu-toggle');
    mobileSubmenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('hidden');
            const icon = this.querySelector('i.fas.fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    // Desktop submenu toggle
    const desktopSubmenuToggles = document.querySelectorAll('.submenu-toggle');
    desktopSubmenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const submenu = toggle.nextElementSibling;
            submenu.classList.toggle('hidden');
        });
    });

    // Close submenus when clicking outside
    document.addEventListener('click', (event) => {
        const submenus = document.querySelectorAll('.submenu');
        submenus.forEach(submenu => {
            if (!submenu.contains(event.target) && !event.target.classList.contains('submenu-toggle')) {
                submenu.classList.add('hidden');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        if (!isClickInsideMenu && !isClickOnToggle && !mobileMenu.classList.contains('translate-x-full')) {
            mobileMenu.classList.add('translate-x-full');
        }
    });

    // Add scroll event listener to hide/show header
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
            // Scrolling down
            header.style.transform = `translateY(-${headerHeight}px)`;
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
});