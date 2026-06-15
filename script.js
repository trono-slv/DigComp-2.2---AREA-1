// ============================================
// ⚙️ CONFIGURAZIONE
// ============================================
const CONFIG = {
  NUM_DOMANDE: 30,
  DURATA_TIMER: 30 * 60, // 30 minuti in secondi
  SOGLIA_ECCELLENTE: 80,
  SOGLIA_SUFFICIENTE: 60,
  ALERT_TIMER_SOGLIA: 300, // 5 minuti
  
  FILTRO_DIFFICOLTA: null,
  DISTRIBUZIONE_DIFFICOLTA: {
    facile: 10,
    medio: 10,
    difficile: 10
  }
};

// ============================================
// 📚 PANIERE COMPLETO (180 DOMANDE)
// ============================================
const PANIERE = [
  // ... (domande)
];

// ============================================
// NAVIGAZIONE FLUIDA E MODAL POPUP
// ============================================
window.addEventListener('DOMContentLoaded', () => {
  // Navigazione fluida tra ome e teoria
  if (window.location.pathname.endsWith('teoria.html')) {
    // Eventuale logica per tornare alla home
    const homeBtn = document.querySelector('.home-button');
    if (homeBtn) {
      homeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'index.html';
      });
    }
  }
});

// Gestione popup clausole
function openModalWarning() {
  document.getElementById('modal-overlay').classList.remove('hidden');
}
function closeModalWarning() {
  document.getElementById('modal-overlay').classList.add('hidden');
}
function startQuiz() {
  document.getElementById('modal-overlay').classList.add('hidden');
  document.getElementById('screen-welcome').classList.remove('active');
  document.getElementById('screen-chapter-select').classList.add('active');
}

// ============================================
// QUIZ LOGIC (placeholder, il resto del codice rimane invariato)
// ============================================
// ... (resto del codice quiz e gestione domande)
