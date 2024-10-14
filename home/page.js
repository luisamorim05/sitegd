document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    const mobileSubmenuToggles = document.querySelectorAll('.mobile-submenu-toggle');

    function setupMobileMenu() {
        if (!menuToggle || !closeMenu || !mobileMenu) {
            console.error('Elementos do menu móvel não encontrados');
            return;
        }

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
        });
    }

    function setupSubmenus() {
        if (submenuToggles.length === 0) {
            console.warn('Nenhum submenu desktop encontrado');
        } else {
            submenuToggles.forEach(toggle => {
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const submenu = this.nextElementSibling;
                    const chevron = this.querySelector('.fas.fa-chevron-down');

                    if (!submenu || !chevron) {
                        console.error('Elementos do submenu desktop não encontrados', this);
                        return;
                    }

                    // Fecha outros submenus desktop
                    submenuToggles.forEach(otherToggle => {
                        if (otherToggle !== this) {
                            const otherSubmenu = otherToggle.nextElementSibling;
                            const otherChevron = otherToggle.querySelector('.fas.fa-chevron-down');
                            if (otherSubmenu && otherChevron) {
                                otherSubmenu.classList.add('hidden');
                                otherChevron.classList.remove('rotate-180');
                            }
                        }
                    });

                    // Alterna a visibilidade do submenu desktop atual
                    submenu.classList.toggle('hidden');
                    chevron.classList.toggle('rotate-180');
                });
            });
        }

        if (mobileSubmenuToggles.length === 0) {
            console.warn('Nenhum submenu móvel encontrado');
        } else {
            mobileSubmenuToggles.forEach(toggle => {
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const submenu = this.nextElementSibling;
                    const chevron = this.querySelector('.fas.fa-chevron-down');

                    if (!submenu || !chevron) {
                        console.error('Elementos do submenu móvel não encontrados', this);
                        return;
                    }

                    // Alterna a visibilidade do submenu móvel atual
                    submenu.classList.toggle('hidden');
                    chevron.classList.toggle('fa-chevron-up');
                });
            });
        }

        // Fecha os submenus quando clicar fora deles
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.submenu-toggle') && !e.target.closest('.submenu')) {
                submenuToggles.forEach(toggle => {
                    const submenu = toggle.nextElementSibling;
                    const chevron = toggle.querySelector('.fas.fa-chevron-down');
                    if (submenu && chevron) {
                        submenu.classList.add('hidden');
                        chevron.classList.remove('rotate-180');
                    }
                });
            }
        });
    }

    setupMobileMenu();
    setupSubmenus();

    console.log('Página da Prefeitura de Santo Antônio dos Lopes carregada com sucesso!');
});