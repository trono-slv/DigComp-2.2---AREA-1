// ===== GESTIONE TAB TEORIA =====

function switchTab(tabId) {
  // Nascondi tutte le sezioni
  document.querySelectorAll('.teoria-section').forEach(section => {
    section.classList.remove('active');
    section.classList.add('hidden');
  });

  // Rimuovi active da tutti i pulsanti
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Mostra la sezione selezionata
  const selectedSection = document.getElementById(tabId);
  if (selectedSection) {
    selectedSection.classList.remove('hidden');
    selectedSection.classList.add('active');
  }

  // Aggiungi active al pulsante cliccato
  event.target.classList.add('active');

  // Scroll to top
  window.scrollTo(0, 0);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('Teoria loaded');
});
