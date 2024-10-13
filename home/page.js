document.addEventListener('DOMContentLoaded', function() {
    // Função para adicionar interatividade ao menu
    function setupMenu() {
        const menuItems = document.querySelectorAll('nav ul li a');
        menuItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                alert(`Você clicou em: ${this.textContent}`);
            });
        });
    }

    // Função para carregar notícias dinamicamente (simulação)
    function loadNews() {
        const newsContainer = document.querySelector('.grid div:first-child ul');
        const news = [
            'Nova política de reciclagem implementada na cidade',
            'Prefeitura anuncia investimentos em educação',
            'Programa de incentivo ao esporte é lançado'
        ];

        news.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            newsContainer.appendChild(li);
        });
    }

    // Inicialização
    setupMenu();
    loadNews();

    console.log('Página da Prefeitura de Santo Antônio dos Lopes carregada com sucesso!');
});