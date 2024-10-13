// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão "Agenda da Prefeita"
    const agendaButton = document.querySelector('a[href="#"].inline-block.bg-primary');
    
    // Adiciona um evento de clique ao botão
    agendaButton.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link
        
        // Simula uma agenda para a prefeita
        const agenda = [
            { data: '2025-01-15', hora: '09:00', evento: 'Reunião com Secretários' },
            { data: '2025-01-15', hora: '14:00', evento: 'Visita à Escola Municipal' },
            { data: '2025-01-16', hora: '10:00', evento: 'Inauguração da Nova Praça' },
            { data: '2025-01-17', hora: '11:00', evento: 'Entrevista na Rádio Local' },
            { data: '2025-01-18', hora: '15:00', evento: 'Encontro com Lideranças Comunitárias' }
        ];
        
        // Cria um elemento modal para exibir a agenda
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center';
        modal.innerHTML = `
            <div class="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
                <h2 class="text-2xl font-bold mb-4">Agenda da Prefeita</h2>
                <ul class="space-y-2">
                    ${agenda.map(item => `
                        <li class="border-b pb-2">
                            <strong>${new Date(item.data).toLocaleDateString('pt-BR')}</strong> - ${item.hora}<br>
                            ${item.evento}
                        </li>
                    `).join('')}
                </ul>
                <button id="fecharAgenda" class="mt-6 bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition duration-300 ease-in-out">Fechar</button>
            </div>
        `;
        
        // Adiciona o modal ao body
        document.body.appendChild(modal);
        
        // Adiciona evento para fechar o modal
        document.getElementById('fecharAgenda').addEventListener('click', function() {
            document.body.removeChild(modal);
        });
    });
});