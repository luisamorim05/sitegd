// Array of secretariats
const secretarias = [
    { nome: "Secretaria de Administração", responsavel: "João Silva", contato: "admin@prefeitura.gov.br" },
    { nome: "Secretaria de Educação", responsavel: "Maria Santos", contato: "educacao@prefeitura.gov.br" },
    { nome: "Secretaria de Saúde", responsavel: "Pedro Oliveira", contato: "saude@prefeitura.gov.br" },
    { nome: "Secretaria de Obras", responsavel: "Ana Rodrigues", contato: "obras@prefeitura.gov.br" },
    { nome: "Secretaria de Assistência Social", responsavel: "Carlos Ferreira", contato: "social@prefeitura.gov.br" },
    { nome: "Secretaria de Meio Ambiente", responsavel: "Lucia Costa", contato: "meioambiente@prefeitura.gov.br" }
];

// Function to create secretariat cards
function createSecretariatCard(secretaria) {
    return `
        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out">
            <h3 class="text-xl font-semibold text-primary mb-2">${secretaria.nome}</h3>
            <p class="text-gray-600 mb-1"><strong>Responsável:</strong> ${secretaria.responsavel}</p>
            <p class="text-gray-600"><strong>Contato:</strong> ${secretaria.contato}</p>
        </div>
    `;
}

// Populate the secretariats list
document.addEventListener('DOMContentLoaded', () => {
    const secretariasList = document.getElementById('secretarias-list');
    secretarias.forEach(secretaria => {
        secretariasList.innerHTML += createSecretariatCard(secretaria);
    });
});

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

    // Submenu toggle function
    function toggleSubmenu(button, isDesktop = false) {
        const submenu = button.nextElementSibling;
        if (isDesktop) {
            submenu.classList.toggle('hidden');
        } else {
            submenu.classList.toggle('hidden');
            const icon = button.querySelector('i.fas.fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        }
    }

    // Desktop submenu toggles
    const desktopSubmenuToggles = document.querySelectorAll('nav > ul > li > .submenu-toggle');
    desktopSubmenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggleSubmenu(toggle, true);
        });
    });

    // Mobile submenu toggles
    const mobileSubmenuToggles = document.querySelectorAll('.mobile-submenu-toggle');
    mobileSubmenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            toggleSubmenu(this);
        });
    });

    // Close submenus when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.submenu-toggle') && !event.target.closest('.submenu')) {
            const openSubmenus = document.querySelectorAll('.submenu:not(.hidden)');
            openSubmenus.forEach(submenu => submenu.classList.add('hidden'));
        }
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