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