// Seu código JavaScript

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Função para alternar o modo escuro
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Modo Claro';
    localStorage.setItem('darkMode', 'true');
  } else {
    darkModeToggle.textContent = 'Modo Escuro';
    localStorage.setItem('darkMode', 'false');
  }
}

// Função para verificar e aplicar o modo ao carregar a página
function applySavedMode() {
  const isDarkMode = localStorage.getItem('darkMode');

  if (isDarkMode === 'true') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Modo Claro';
  } else {
    body.classList.remove('dark-mode');
    darkModeToggle.textContent = 'Modo Escuro';
  }
}

// Verificar o modo salvo ao carregar a página
applySavedMode();

// Adicionar evento de clique para alternar o modo escuro
darkModeToggle.addEventListener('click', toggleDarkMode);

// Função para abrir o pop-up
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
}

// Função para fechar o pop-up
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

// Adicionar eventos de clique para os botões que abrem os pop-ups
const optifineButton = document.getElementById('optifineButton');
const sodiumButton = document.getElementById('sodiumButton');
const irisButton = document.getElementById('irisButton');

optifineButton.addEventListener('click', () => openModal('modalOptifine'));
sodiumButton.addEventListener('click', () => openModal('modalSodium'));
irisButton.addEventListener('click', () => openModal('modalIris'));

// Adicionar eventos de clique para os botões que fecham os pop-ups
const closeOptifineModal = document.getElementById('closeOptifineModal');
const closeSodiumModal = document.getElementById('closeSodiumModal');
const closeIrisModal = document.getElementById('closeIrisModal');

closeOptifineModal.addEventListener('click', () => closeModal('modalOptifine'));
closeSodiumModal.addEventListener('click', () => closeModal('modalSodium'));
closeIrisModal.addEventListener('click', () => closeModal('modalIris'));

// Fechar o pop-up quando o usuário clicar fora da janela do pop-up
window.addEventListener('click', (event) => {
  const modals = document.querySelectorAll('.modal');
  for (const modal of modals) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
});
