// ===== GESTIONE SEZIONI TEORIA =====

const sections = ['section-1-1', 'section-1-2', 'section-1-3'];
let currentSectionIndex = 0;

function showSection(index) {
    // Nascondi tutte le sezioni
    sections.forEach(sectionId => {
        document.getElementById(sectionId).classList.remove('active');
    });

    // Mostra la sezione attuale
    document.getElementById(sections[index]).classList.add('active');

    // Aggiorna contatore
    document.getElementById('section-counter').textContent = `Sezione ${index + 1} di ${sections.length}`;

    // Aggiorna stato pulsanti
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === sections.length - 1;

    // Scroll in alto
    window.scrollTo(0, 0);
}

function previousSection() {
    if (currentSectionIndex > 0) {
        currentSectionIndex--;
        showSection(currentSectionIndex);
    }
}

function nextSection() {
    if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        showSection(currentSectionIndex);
    }
}

function goHome() {
    window.location.href = 'index.html';
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Teoria loaded');
    showSection(0);
});
