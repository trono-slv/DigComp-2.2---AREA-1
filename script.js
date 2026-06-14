// ============================================
// CONFIGURAZIONE
// ============================================

const CONFIG = {
  NUM_DOMANDE: 30,
  DURATA_TIMER: 30 * 60, // 30 minuti = 1800 secondi
  SOGLIA_ECCELLENTE: 80,
  SOGLIA_SUFFICIENTE: 60,
  ALERT_TIMER_SOGLIA: 300, // 5 minuti
  
  // DIFFICOLTÀ
  FILTRO_DIFFICOLTA: null, // null = tutte, oppure "facile" / "medio" / "difficile"
  DISTRIBUZIONE_DIFFICOLTA: null // null = casuale, oppure { facile: 10, medio: 15, difficile: 5 }
};

// ============================================
// PANIERE DOMANDE (180 domande)
// ============================================

const PANIERE = [
  // ========== CAPITOLO 1.1 — NAVIGARE, RICERCARE E FILTRARE ==========
  
  // SEZIONE 1 — FACILE (1-20)
  {
    id: 1,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Che cos'è un browser?",
    a: { A: "Un software che permette di accedere e navigare nel World Wide Web", B: "Un dispositivo fisico per collegarsi alla rete elettrica", C: "Un programma usato solo per scrivere testi", D: "Un archivio locale di immagini e video" },
    correct: "A",
    exp: "Il browser è il software che consente di accedere e navigare sul web."
  },
  {
    id: 2,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Quale tra i seguenti è un esempio di browser?",
    a: { A: "Excel", B: "Google Chrome", C: "Windows", D: "Word" },
    correct: "B",
    exp: "Google Chrome è uno dei principali browser disponibili."
  },
  {
    id: 3,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "A cosa serve principalmente un motore di ricerca?",
    a: { A: "A modificare immagini digitali", B: "A proteggere il computer dai virus", C: "A trovare informazioni e contenuti disponibili online", D: "A creare cartelle sul computer" },
    correct: "C",
    exp: "Il motore di ricerca serve a individuare informazioni e contenuti online."
  },
  {
    id: 4,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Quale attività è possibile svolgere tramite Internet?",
    a: { A: "Solo stampare documenti", B: "Solo usare programmi offline", C: "Solo accendere il computer", D: "Effettuare acquisti online e comunicare in tempo reale" },
    correct: "D",
    exp: "Internet permette acquisti, comunicazioni, formazione e altri servizi digitali."
  },
  {
    id: 5,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Che cosa interpreta un browser per visualizzare una pagina web?",
    a: { A: "Il codice HTML", B: "Il codice fiscale dell'utente", C: "Il numero seriale del computer", D: "Il codice PIN della rete Wi-Fi" },
    correct: "A",
    exp: "Il browser interpreta il codice HTML e visualizza la pagina in forma leggibile."
  },
  {
    id: 6,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Quale tra questi è un browser indicato nel capitolo?",
    a: { A: "PowerPoint", B: "Safari", C: "Paint", D: "Calcolatrice" },
    correct: "B",
    exp: "Safari è un browser citato tra i principali."
  },
  {
    id: 7,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Che cosa indica generalmente un URL?",
    a: { A: "La velocità della connessione Internet", B: "La dimensione di un file", C: "L'indirizzo di una risorsa sul web", D: "Il nome dell'utente collegato" },
    correct: "C",
    exp: "L'URL è l'indirizzo che identifica una risorsa sul web."
  },
  {
    id: 8,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "In un indirizzo web, cosa rappresenta il dominio?",
    a: { A: "La password di accesso al sito", B: "Il tipo di dispositivo usato", C: "Il colore della pagina web", D: "L'indirizzo del server che ospita la risorsa" },
    correct: "D",
    exp: "Il dominio identifica il server che ospita la risorsa."
  },
  {
    id: 9,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "A cosa servono i segnalibri o preferiti del browser?",
    a: { A: "A salvare pagine web per ritrovarle facilmente", B: "A cancellare automaticamente la cronologia", C: "A spegnere il computer", D: "A modificare il codice HTML dei siti" },
    correct: "A",
    exp: "I segnalibri permettono di salvare e ritrovare facilmente pagine web."
  },
  {
    id: 10,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Quale icona viene spesso usata per aggiungere un sito ai preferiti?",
    a: { A: "Una stampante", B: "Una stella", C: "Un lucchetto rotto", D: "Un cestino" },
    correct: "B",
    exp: "Nei browser l'icona della stella è comunemente usata per aggiungere preferiti."
  },
  {
    id: 11,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Qual è il primo passo per fare una ricerca efficace online?",
    a: { A: "Aprire casualmente molti siti", B: "Scaricare subito un file", C: "Identificare parole chiave pertinenti", D: "Eliminare la cronologia del browser" },
    correct: "C",
    exp: "Una ricerca efficace parte dall'identificazione di parole chiave pertinenti."
  },
  {
    id: 12,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Quale tra questi è un motore di ricerca generalista?",
    a: { A: "Photoshop", B: "Outlook", C: "VLC", D: "Google" },
    correct: "D",
    exp: "Google è un motore di ricerca generalista."
  },
  {
    id: 13,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Che cosa sono le parole chiave in una ricerca online?",
    a: { A: "Termini specifici usati per cercare informazioni pertinenti", B: "Password personali da inserire nei siti web", C: "File temporanei del browser", D: "Immagini salvate sul computer" },
    correct: "A",
    exp: "Le parole chiave sono termini mirati che guidano la ricerca."
  },
  {
    id: 14,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Quale strumento è indicato per cercare articoli accademici?",
    a: { A: "Google Maps", B: "Google Scholar", C: "Blocco note", D: "Esplora file" },
    correct: "B",
    exp: "Google Scholar è indicato per fonti accademiche e scientifiche."
  },
  {
    id: 15,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Perché è utile formulare domande chiare a un assistente virtuale?",
    a: { A: "Per ridurre la luminosità dello schermo", B: "Per aumentare il volume del dispositivo", C: "Per ottenere risposte più precise", D: "Per eliminare i file temporanei" },
    correct: "C",
    exp: "Domande chiare migliorano la precisione delle risposte degli assistenti virtuali."
  },
  {
    id: 16,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Gli assistenti virtuali hanno bisogno di Internet per accedere a informazioni aggiornate?",
    a: { A: "No, funzionano sempre solo offline", B: "No, usano solo dati salvati nel telefono", C: "No, non rispondono mai a domande online", D: "Sì, spesso dipendono dalla connessione online" },
    correct: "D",
    exp: "Gli assistenti virtuali spesso richiedono Internet per informazioni aggiornate."
  },
  {
    id: 17,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Quale tra queste è una buona pratica nella ricerca online?",
    a: { A: "Usare parole chiave specifiche e pertinenti", B: "Cercare solo con frasi casuali", C: "Aprire il primo risultato senza valutarlo", D: "Usare sempre una sola parola generica" },
    correct: "A",
    exp: "Parole chiave specifiche aumentano la pertinenza dei risultati."
  },
  {
    id: 18,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Che cosa consente di fare Internet in ambito formativo?",
    a: { A: "Solo stampare dispense", B: "Seguire corsi online tramite piattaforme digitali", C: "Usare solo programmi installati localmente", D: "Evitare qualsiasi interazione con docenti e studenti" },
    correct: "B",
    exp: "Internet consente di seguire corsi online tramite piattaforme digitali."
  },
  {
    id: 19,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Che cosa può includere un indirizzo web oltre al dominio?",
    a: { A: "Solo il nome del computer", B: "Solo il numero di telefono dell'utente", C: "Percorsi e parametri", D: "Solo immagini e video" },
    correct: "C",
    exp: "Un URL può includere percorsi e parametri oltre al dominio."
  },
  {
    id: 20,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Qual è un vantaggio dei corsi online?",
    a: { A: "Richiedono sempre la presenza fisica", B: "Non permettono l'accesso ai materiali", C: "Non consentono interazione", D: "Offrono flessibilità di fruizione" },
    correct: "D",
    exp: "La formazione online offre flessibilità di accesso e fruizione."
  },
  
  // SEZIONE 2 — MEDIO (21-40)
  {
    id: 21,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Quale descrizione distingue correttamente browser e motore di ricerca?",
    a: { A: "Browser e motore di ricerca hanno funzioni diverse ma complementari", B: "Sono esattamente la stessa cosa", C: "Il browser cerca e il motore visualizza", D: "Il motore di ricerca accede al web" },
    correct: "A",
    exp: "Browser e motore di ricerca hanno funzioni diverse ma complementari."
  },
  {
    id: 22,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "In un URL, cosa rappresentano i parametri dopo il '?'?",
    a: { A: "Il nome del sito", B: "Dati aggiuntivi trasmessi al server", C: "Il tipo di browser usato", D: "La lingua della pagina" },
    correct: "B",
    exp: "I parametri trasmettono dati aggiuntivi al server."
  },
  {
    id: 23,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "In https://www.google.com, qual è il dominio?",
    a: { A: "https", B: "www", C: "google.com", D: "www.google.com" },
    correct: "C",
    exp: "In https://www.google.com, il dominio è google.com."
  },
  {
    id: 24,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Come si organizzano meglio i preferiti nel browser?",
    a: { A: "In ordine alfabetico casuale", B: "In cartelle per argomento", C: "Tutti nella barra principale", D: "Non si organizzano" },
    correct: "B",
    exp: "Le cartelle aiutano a organizzare e recuperare meglio i preferiti."
  },
  {
    id: 25,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Quale è la procedura corretta per aggiungere un sito ai preferiti?",
    a: { A: "Aprire il sito, cliccare la stella e scegliere una cartella", B: "Digitare l'URL due volte", C: "Stampare la pagina", D: "Modificare le impostazioni del browser" },
    correct: "A",
    exp: "La procedura corretta prevede apertura sito, stella e scelta cartella."
  },
  {
    id: 26,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Quale browser è noto per l'attenzione alla privacy?",
    a: { A: "Google Chrome", B: "Mozilla Firefox", C: "Microsoft Edge", D: "Safari" },
    correct: "B",
    exp: "DuckDuckGo è noto per l'attenzione alla privacy."
  },
  {
    id: 27,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Per quale tipo di ricerca è ideale Google Scholar?",
    a: { A: "Ricerche generiche su Internet", B: "Ricerche di immagini", C: "Ricerche scientifiche e accademiche", D: "Ricerche di mappe geografiche" },
    correct: "C",
    exp: "Google Scholar è adatto a ricerche scientifiche e accademiche."
  },
  {
    id: 28,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa rende una ricerca online efficace?",
    a: { A: "Usare termini vaghi", B: "Usare molte parole senza ordine", C: "Avere un argomento definito e parole chiave mirate", D: "Cercare senza pianificazione" },
    correct: "C",
    exp: "Una ricerca efficace richiede argomento definito e parole chiave mirate."
  },
  {
    id: 29,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa caratterizza una ricerca ben definita?",
    a: { A: "Obiettivo chiaro e termini pertinenti", B: "Molti termini casuali", C: "Parole molto generiche", D: "Nessun criterio specifico" },
    correct: "A",
    exp: "Una ricerca ben definita ha obiettivo chiaro e termini pertinenti."
  },
  {
    id: 30,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Perché una richiesta vaga a un assistente virtuale può essere inefficace?",
    a: { A: "Genera sempre risposte corrette", B: "Produce risposte imprecise o non adatte all'intento", C: "Non produce alcuna risposta", D: "Aumenta la velocità della ricerca" },
    correct: "B",
    exp: "Richieste vaghe generano più facilmente risposte imprecise."
  },
  {
    id: 31,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Quale funzione principale ha il browser?",
    a: { A: "Cercare file nel computer", B: "Modificare file locali", C: "Trasformare contenuti web in pagine leggibili e interattive", D: "Gestire email" },
    correct: "C",
    exp: "I browser trasformano contenuti web in pagine leggibili e interattive."
  },
  {
    id: 32,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Quali elementi può contenere un URL completo?",
    a: { A: "Solo il dominio", B: "Solo il protocollo", C: "Protocollo, dominio, percorsi e parametri", D: "Solo il nome del file" },
    correct: "C",
    exp: "Gli URL possono contenere percorsi con cartelle e sottocartelle."
  },
  {
    id: 33,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "In quali attività quotidiane Internet è particolarmente utile?",
    a: { A: "Solo intrattenimento", B: "Solo comunicazione", C: "Formazione, acquisti, banking, comunicazione e molte altre", D: "Solo lavoro" },
    correct: "C",
    exp: "Internet supporta molte attività quotidiane: formazione, acquisti, banking e comunicazione."
  },
  {
    id: 34,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Che cosa consente di fare la barra dei preferiti?",
    a: { A: "Di visualizzare rapidamente i segnalibri salvati", B: "Di cancellare automaticamente tutti i file", C: "Di modificare il sistema operativo", D: "Di disinstallare il browser" },
    correct: "A",
    exp: "La barra dei preferiti permette accesso rapido ai segnalibri."
  },
  {
    id: 35,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Qual è un possibile limite degli algoritmi di IA nei servizi digitali?",
    a: { A: "Sono sempre completamente trasparenti", B: "Non usano mai dati", C: "Possono funzionare come 'scatole nere' poco comprensibili", D: "Non influenzano mai i contenuti proposti" },
    correct: "C",
    exp: "Alcuni sistemi di IA sono poco trasparenti nel processo decisionale."
  },
  {
    id: 36,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Che cosa si intende con 'scatola nera' riferita all'IA?",
    a: { A: "Un computer fisico di colore nero", B: "Una cartella nascosta del browser", C: "Un errore della connessione Internet", D: "Un sistema il cui processo decisionale interno non è facilmente comprensibile" },
    correct: "D",
    exp: "La 'scatola nera' indica un processo interno non facilmente comprensibile."
  },
  {
    id: 37,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Quale rischio può derivare da dati di addestramento squilibrati nei sistemi di IA?",
    a: { A: "La produzione di risultati discriminatori o distorti", B: "L'aumento automatico della memoria del computer", C: "La riduzione del consumo elettrico del dispositivo", D: "La cancellazione dei preferiti del browser" },
    correct: "A",
    exp: "Dati squilibrati possono produrre risultati discriminatori o distorti."
  },
  {
    id: 38,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Quale strategia aiuta a ridurre i pregiudizi nei sistemi di IA?",
    a: { A: "Usare dati sempre uguali e poco rappresentativi", B: "Utilizzare dataset diversificati e bilanciati", C: "Evitare ogni forma di monitoraggio", D: "Rimuovere tutte le fonti informative" },
    correct: "B",
    exp: "Dataset diversificati e bilanciati aiutano a ridurre i bias."
  },
  {
    id: 39,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Perché le piattaforme digitali possono influenzare ciò che vediamo online?",
    a: { A: "Perché mostrano contenuti sempre in ordine alfabetico", B: "Perché non usano mai algoritmi", C: "Perché le nostre interazioni possono orientare i contenuti proposti", D: "Perché impediscono ogni personalizzazione" },
    correct: "C",
    exp: "Le interazioni dell'utente possono influenzare i contenuti proposti."
  },
  {
    id: 40,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Quale comportamento è corretto quando si usa un assistente virtuale?",
    a: { A: "Fare richieste multiple e confuse", B: "Non verificare mai la connessione Internet", C: "Usare domande ambigue e incomplete", D: "Formulare domande chiare e specifiche" },
    correct: "D",
    exp: "Domande chiare e specifiche migliorano l'interazione con assistenti virtuali."
  },
  
  // SEZIONE 3 — DIFFICILE (41-60)
  {
    id: 41,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Quale affermazione descrive meglio il rapporto tra algoritmo, dati e risultati nei sistemi di IA?",
    a: { A: "Gli algoritmi analizzano dati e producono suggerimenti o decisioni, ma il processo può non essere trasparente", B: "Gli algoritmi producono risultati casuali senza usare dati", C: "Gli algoritmi sono sempre completamente comprensibili agli utenti", D: "Gli algoritmi non influenzano mai le informazioni visualizzate online" },
    correct: "A",
    exp: "Gli algoritmi analizzano dati, ma il loro funzionamento può essere opaco."
  },
  {
    id: 42,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Perché la natura 'opaca' di alcuni algoritmi di IA è rilevante per l'utente digitale?",
    a: { A: "Non ha nessuna importanza", B: "Perché rende difficile capire perché un sistema produce certi risultati", C: "Perché aumenta la velocità di navigazione", D: "Perché migliora la grafica dei siti" },
    correct: "B",
    exp: "L'opacità rende difficile capire perché un sistema produce certi risultati."
  },
  {
    id: 43,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Quale problema può derivare da un dataset non rappresentativo nei sistemi di apprendimento automatico?",
    a: { A: "Migliora automaticamente la qualità", B: "Aumenta la velocità del server", C: "Possono verificarsi errori su gruppi poco presenti nei dati", D: "Riduce il costo computazionale" },
    correct: "C",
    exp: "Un dataset non rappresentativo può causare errori su gruppi poco presenti."
  },
  {
    id: 44,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "A cosa serve il monitoraggio continuo dei sistemi di IA?",
    a: { A: "A ridurre il consumo di energia", B: "A individuare e correggere bias e distorsioni", C: "A aumentare il numero di utenti", D: "A velocizzare la rete" },
    correct: "B",
    exp: "Il monitoraggio serve a individuare e correggere bias e distorsioni."
  },
  {
    id: 45,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Una query di ricerca ben formulata dovrebbe essere:",
    a: { A: "Generica e senza contesto", B: "Specifica, contestualizzata e orientata a una fonte ufficiale", C: "Ambigua per ottenere più risultati", D: "Composta da una sola parola" },
    correct: "B",
    exp: "Una query è specifica, contestualizzata e orientata a una fonte ufficiale."
  },
  {
    id: 46,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Quale approccio caratterizza una ricerca digitale davvero consapevole?",
    a: { A: "Usare solo un motore di ricerca", B: "Combinare parole chiave specifiche, contesto e termini correlati", C: "Aprire i primi risultati senza valutarli", D: "Cercare senza criterio" },
    correct: "B",
    exp: "Una query mirata combina parole chiave specifiche, contesto e termini correlati."
  },
  {
    id: 47,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Quale affermazione sui contenuti online proposti dalle piattaforme è più corretta?",
    a: { A: "Sono sempre neutrali e identici per tutti gli utenti", B: "Dipendono solo dal caso", C: "Possono essere influenzati dalle interazioni dell'utente e da sistemi algoritmici", D: "Non dipendono mai da dati o comportamenti precedenti" },
    correct: "C",
    exp: "I contenuti possono essere personalizzati dagli algoritmi in base alle interazioni."
  },
  {
    id: 48,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Quale rischio è associato alla personalizzazione algoritmica dei contenuti?",
    a: { A: "La possibilità di ricevere contenuti filtrati o orientati in base al comportamento precedente", B: "L'impossibilità di accedere a qualsiasi pagina web", C: "La cancellazione automatica dei motori di ricerca", D: "L'eliminazione dei browser dal dispositivo" },
    correct: "A",
    exp: "La personalizzazione può filtrare i contenuti mostrati all'utente."
  },
  {
    id: 49,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "In quale caso è più opportuno usare Google Scholar invece di un motore generalista?",
    a: { A: "Quando si cercano paper scientifici o fonti accademiche", B: "Quando si vuole solo cambiare lo sfondo del desktop", C: "Quando si devono eliminare i contatti telefonici", D: "Quando si vuole spegnere il router" },
    correct: "A",
    exp: "Google Scholar è adatto alla ricerca di fonti accademiche e paper scientifici."
  },
  {
    id: 50,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Quale motore di ricerca è indicato per ricerche in area russa?",
    a: { A: "OpenAlex", B: "Yandex", C: "Blocco note", D: "Edge come sistema operativo" },
    correct: "B",
    exp: "Yandex è indicato per ricerche in russo e nell'area collegata."
  },
  {
    id: 51,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Quale interpretazione dell'indirizzo https://www.example.com/cartella/sottocartella?a=7&b=5 è corretta?",
    a: { A: "cartella/sottocartella rappresenta il browser usato", B: "a=7&b=5 rappresenta il nome del dominio", C: "cartella/sottocartella indica un percorso e a=7&b=5 sono parametri", D: "https indica il nome dell'autore della pagina" },
    correct: "C",
    exp: "Il percorso identifica la posizione della risorsa; i parametri passano dati."
  },
  {
    id: 52,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Quale affermazione è corretta sul dominio di secondo livello e primo livello presi insieme?",
    a: { A: "Rappresentano il colore grafico della pagina", B: "Identificano il tipo di tastiera utilizzata", C: "Coincidono sempre con il percorso del file", D: "Rappresentano l'indirizzo del server che ospita la risorsa" },
    correct: "D",
    exp: "Dominio di secondo livello e primo livello identificano il server della risorsa."
  },
  {
    id: 53,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Quale comportamento mostra competenza nella gestione dei preferiti?",
    a: { A: "Salvare pagine utili in cartelle tematiche ed eliminare quelle non più necessarie", B: "Salvare ogni pagina visitata senza criterio", C: "Non usare mai la barra dei preferiti", D: "Confondere preferiti e cronologia" },
    correct: "A",
    exp: "Gestire bene i preferiti significa organizzarli e mantenerli aggiornati."
  },
  {
    id: 54,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Quale rischio può derivare da una richiesta troppo complessa e ambigua a un assistente virtuale?",
    a: { A: "Il browser cambia automaticamente lingua", B: "La risposta può essere meno precisa o non aderente all'intento dell'utente", C: "Il computer elimina tutti i file locali", D: "Il motore di ricerca smette di funzionare" },
    correct: "B",
    exp: "Richieste ambigue rendono più difficile ottenere risposte precise."
  },
  {
    id: 55,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Quale frase rappresenta una richiesta ben formulata a un assistente virtuale?",
    a: { A: "Cose Internet?", B: "Fammi tutto", C: "Spiegami in 5 punti la differenza tra browser e motore di ricerca con esempi", D: "Boh, cerca qualcosa" },
    correct: "C",
    exp: "La richiesta è chiara, delimitata e specifica nel formato desiderato."
  },
  {
    id: 56,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Quale aspetto rende gli algoritmi di apprendimento automatico difficili da comprendere per l'utente comune?",
    a: { A: "Il fatto che usano solo carta stampata", B: "Il fatto che funzionano senza dati", C: "Il fatto che non producono risultati", D: "La complessità dei modelli statistici e delle reti neurali profonde" },
    correct: "D",
    exp: "Modelli complessi e reti neurali rendono l'IA difficile da interpretare."
  },
  {
    id: 57,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Quale approccio è coerente con una ricerca digitale consapevole?",
    a: { A: "Definire obiettivo, parole chiave e fonte più adatta al tipo di informazione cercata", B: "Cercare sempre il primo risultato senza leggere il contesto", C: "Evitare motori specializzati anche quando servono", D: "Usare solo parole casuali e generiche" },
    correct: "A",
    exp: "Una ricerca consapevole richiede obiettivo, parole chiave e scelta della fonte."
  },
  {
    id: 58,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Quale affermazione chiarisce correttamente il ruolo dell'utente rispetto agli algoritmi digitali?",
    a: { A: "L'utente non può mai essere influenzato dai contenuti proposti online", B: "L'utente dovrebbe essere consapevole che le proprie interazioni possono influenzare i contenuti visualizzati", C: "L'utente deve evitare sempre qualsiasi ricerca online", D: "L'utente non deve mai interrogarsi sulla provenienza dei contenuti" },
    correct: "B",
    exp: "L'utente deve sapere che le interazioni influenzano i contenuti visualizzati."
  },
  {
    id: 59,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Perché è importante diversificare i dataset usati nei sistemi di IA?",
    a: { A: "Per aumentare il numero di schede del browser", B: "Per ridurre la velocità dei motori di ricerca", C: "Per rappresentare equamente gruppi diversi e ridurre possibili bias", D: "Per impedire l'uso degli assistenti virtuali" },
    correct: "C",
    exp: "Dataset diversificati favoriscono equità e riducono bias nei sistemi di IA."
  },
  {
    id: 60,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Quale affermazione è più corretta sulla navigazione e ricerca online?",
    a: { A: "Riguarda solo la memorizzazione meccanica degli indirizzi web", B: "Riguarda solo l'uso di un browser specifico", C: "Riguarda solo l'acquisto di prodotti online", D: "Include la capacità di navigare, cercare, filtrare e comprendere contenuti digitali in modo consapevole" },
    correct: "D",
    exp: "La competenza 1.1 riguarda navigazione, ricerca, filtro e comprensione dei contenuti digitali."
  },
  
  // ========== CAPITOLO 1.2 — VALUTARE DATI, INFORMAZIONI E CONTENUTI ==========
  
  // SEZIONE 1 — FACILE (61-80)
  {
    id: 61,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa valutare un contenuto digitale?",
    a: { A: "Analizzare la sua affidabilità", B: "Copiarlo", C: "Stamparlo", D: "Condividerlo" },
    correct: "A",
    exp: "Valutare un contenuto significa analizzare la sua affidabilità."
  },
  {
    id: 62,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Qual è un elemento importante per valutare una fonte?",
    a: { A: "Il colore del sito", B: "L'autore", C: "Il numero di immagini", D: "La lunghezza del testo" },
    correct: "B",
    exp: "L'autore è un elemento importante per valutare una fonte."
  },
  {
    id: 63,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Una fonte è più affidabile se:",
    a: { A: "È molto lunga", B: "È scritta in inglese", C: "Proviene da un ente autorevole", D: "Ha molte pubblicità" },
    correct: "C",
    exp: "Una fonte è affidabile se proviene da un ente autorevole."
  },
  {
    id: 64,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa indica la data di pubblicazione?",
    a: { A: "Il costo", B: "L'autore", C: "Il formato", D: "L'aggiornamento" },
    correct: "D",
    exp: "La data di pubblicazione indica l'aggiornamento del contenuto."
  },
  {
    id: 65,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Un contenuto promozionale ha lo scopo di:",
    a: { A: "Informare in modo neutrale", B: "Vendere o promuovere", C: "Educare", D: "Riassumere" },
    correct: "B",
    exp: "Un contenuto promozionale ha lo scopo di vendere o promuovere."
  },
  {
    id: 66,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Qual è un segnale di contenuto pubblicitario?",
    a: { A: "Linguaggio neutro", B: "Obiettività", C: "Invito all'acquisto", D: "Fonti citate" },
    correct: "C",
    exp: "L'invito all'acquisto è un segnale di contenuto pubblicitario."
  },
  {
    id: 67,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'fonte autorevole'?",
    a: { A: "Molto lunga", B: "Scritta bene", C: "Popolare", D: "Affidabile e riconosciuta" },
    correct: "D",
    exp: "Una fonte autorevole è affidabile e riconosciuta."
  },
  {
    id: 68,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Un fatto è:",
    a: { A: "Un'opinione personale", B: "Un'informazione verificabile", C: "Un'interpretazione", D: "Una supposizione" },
    correct: "B",
    exp: "Un fatto è un'informazione verificabile attraverso dati o fonti attendibili."
  },
  {
    id: 69,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Una opinione è:",
    a: { A: "Sempre un fatto", B: "Un'informazione verificabile", C: "Un punto di vista personale", D: "Una prova scientifica" },
    correct: "C",
    exp: "Un'opinione esprime un punto di vista personale."
  },
  {
    id: 70,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Un'interpretazione è:",
    a: { A: "Una prova oggettiva", B: "Una spiegazione o lettura di un fatto", C: "Sempre falsa", D: "Sempre vera" },
    correct: "B",
    exp: "Un'interpretazione è una spiegazione o lettura di un fatto."
  },
  {
    id: 71,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "La pertinenza di un'informazione riguarda:",
    a: { A: "La sua lunghezza", B: "Il grado di utilità rispetto all'obiettivo", C: "Il colore della pagina", D: "Il numero di lettori" },
    correct: "B",
    exp: "La pertinenza riguarda il grado di utilità di un contenuto rispetto all'obiettivo."
  },
  {
    id: 72,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Un deepfake è:",
    a: { A: "Un errore di battitura", B: "Un contenuto falsificato tramite intelligenza artificiale", C: "Un tipo di virus", D: "Un file corrotto" },
    correct: "B",
    exp: "Un deepfake è un contenuto IA falsificato."
  },
  {
    id: 73,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Il rischio principale dei deepfake è:",
    a: { A: "Rallentare internet", B: "Ridurre la memoria del computer", C: "Diffondere disinformazione", D: "Aumentare la batteria del telefono" },
    correct: "C",
    exp: "Il rischio dei deepfake è diffondere disinformazione."
  },
  {
    id: 74,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "L'infodemia è:",
    a: { A: "Una malattia virale", B: "Un errore informatico", C: "Un sovraccarico di informazioni", D: "Un tipo di malware" },
    correct: "C",
    exp: "L'infodemia è un sovraccarico informativo."
  },
  {
    id: 75,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Una filter bubble causa:",
    a: { A: "Più accesso a informazioni diverse", B: "Visualizzazione di contenuti personalizzati", C: "Rallentamento della connessione", D: "Aumento della memoria" },
    correct: "B",
    exp: "La filter bubble comporta visualizzazione di contenuti personalizzati."
  },
  {
    id: 76,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Una camera dell'eco è:",
    a: { A: "Un dispositivo fisico", B: "Un software antivirus", C: "Una ripetizione delle stesse idee", D: "Un tipo di browser" },
    correct: "C",
    exp: "La camera dell'eco indica ripetizione delle stesse idee."
  },
  {
    id: 77,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Gli algoritmi dei social media mostrano:",
    a: { A: "Contenuti sempre uguali per tutti", B: "Contenuti casuali", C: "Contenuti personalizzati", D: "Solo pubblicità" },
    correct: "C",
    exp: "Gli algoritmi dei social mostrano contenuti personalizzati."
  },
  {
    id: 78,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Una fonte primaria è:",
    a: { A: "Un'opinione", B: "Un riassunto di altre fonti", C: "Un documento originale", D: "Un commento personale" },
    correct: "C",
    exp: "Una fonte primaria è un documento originale."
  },
  {
    id: 79,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Il linguaggio neutrale in un testo indica:",
    a: { A: "Manipolazione", B: "Emozione", C: "Oggettività", D: "Pubblicità" },
    correct: "C",
    exp: "Il linguaggio neutrale indica oggettività."
  },
  {
    id: 80,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "La trasparenza di una fonte significa:",
    a: { A: "Assenza di autore", B: "Chiarezza delle informazioni", C: "Lunghezza del testo", D: "Velocità di caricamento" },
    correct: "B",
    exp: "La trasparenza indica chiarezza delle informazioni."
  },
  
  // SEZIONE 2 — MEDIO (81-100)
  {
    id: 81,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Qual è il primo passo nella valutazione di una fonte?",
    a: { A: "Verificare l'autore", B: "Scaricare il file", C: "Condividerlo", D: "Stamparlo" },
    correct: "A",
    exp: "La valutazione inizia con la verifica dell'autore."
  },
  {
    id: 82,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Una fonte accademica è:",
    a: { A: "Un blog", B: "Una pubblicità", C: "Un social network", D: "Una pubblicazione scientifica" },
    correct: "D",
    exp: "Una fonte accademica è una pubblicazione scientifica."
  },
  {
    id: 83,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "La presenza di pubblicità indica:",
    a: { A: "Sempre falsità", B: "Possibile interesse commerciale", C: "Qualità elevata", D: "Veridicità" },
    correct: "B",
    exp: "La presenza di pubblicità indica possibile interesse commerciale."
  },
  {
    id: 84,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Il dominio .gov indica:",
    a: { A: "Sito personale", B: "Sito commerciale", C: "Sito governativo", D: "Sito anonimo" },
    correct: "C",
    exp: "Il dominio .gov indica un sito governativo."
  },
  {
    id: 85,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "L'analisi comparativa di fonti serve a:",
    a: { A: "Eliminare dati", B: "Confrontare fonti per individuare differenze", C: "Copiare contenuti", D: "Tradurre testi" },
    correct: "B",
    exp: "L'analisi comparativa serve a confrontare fonti diverse."
  },
  {
    id: 86,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Una fonte non aggiornata può essere:",
    a: { A: "Più affidabile", B: "Irrilevante per il presente", C: "Più veloce", D: "Più completa" },
    correct: "B",
    exp: "Una fonte non aggiornata può essere irrilevante."
  },
  {
    id: 87,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "L'accuratezza di una fonte indica:",
    a: { A: "Velocità", B: "Precisione delle informazioni", C: "Lunghezza", D: "Grafica" },
    correct: "B",
    exp: "L'accuratezza indica precisione delle informazioni."
  },
  {
    id: 88,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Un conflitto di interesse si ha quando:",
    a: { A: "L'autore è anonimo", B: "Il contenuto è breve", C: "L'autore ha interessi personali nella questione", D: "Il sito è lento" },
    correct: "C",
    exp: "Un conflitto di interesse si verifica quando l'autore ha interessi personali."
  },
  {
    id: 89,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "La diversificazione delle fonti permette:",
    a: { A: "Riduzione delle informazioni", B: "Visione più completa e equilibrata", C: "Più confusione", D: "Più pubblicità" },
    correct: "B",
    exp: "La diversificazione riduce il rischio di bias."
  },
  {
    id: 90,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Un contenuto aggiornato dimostra:",
    a: { A: "Disinteresse dell'autore", B: "Impegno nel mantenere l'informazione valida", C: "Casualità", D: "Pubblicità" },
    correct: "B",
    exp: "Un contenuto aggiornato dimostra impegno dell'autore."
  },
  {
    id: 91,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Un sito affidabile cita:",
    a: { A: "Solo opinioni", B: "Solo pubblicità", C: "Fonti verificabili e controllabili", D: "Solo commenti" },
    correct: "C",
    exp: "Un sito affidabile cita fonti verificabili."
  },
  {
    id: 92,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "La verifica incrociata consiste in:",
    a: { A: "Copiare dati", B: "Confrontare dati tra fonti diverse", C: "Eliminare fonti", D: "Ignorare dati" },
    correct: "B",
    exp: "La verifica incrociata consiste nel confrontare fonti diverse."
  },
  {
    id: 93,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Un contenuto virale è:",
    a: { A: "Sempre vero", B: "Sempre falso", C: "Molto condiviso", D: "Sempre aggiornato" },
    correct: "C",
    exp: "Un contenuto virale è molto condiviso."
  },
  {
    id: 94,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "La reputazione della fonte indica:",
    a: { A: "Grafica della pagina", B: "Credibilità e affidabilità", C: "Lunghezza del testo", D: "Colore dello sfondo" },
    correct: "B",
    exp: "La reputazione della fonte indica credibilità."
  },
  {
    id: 95,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Un contenuto manipolato può essere:",
    a: { A: "Sempre chiaro", B: "Sempre completo", C: "Alterato per influenzare opinioni", D: "Sempre neutro" },
    correct: "C",
    exp: "Un contenuto manipolato è alterato."
  },
  {
    id: 96,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "L'affidabilità si basa su:",
    a: { A: "Emozioni", B: "Opinioni", C: "Fonti verificate e analisi critica", D: "Lunghezza del testo" },
    correct: "C",
    exp: "L'affidabilità si basa su fonti e verifiche."
  },
  {
    id: 97,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Un contenuto con bias è:",
    a: { A: "Sempre obiettivo", B: "Sempre completo", C: "Parziale e orientato", D: "Sempre neutro" },
    correct: "C",
    exp: "Un contenuto con bias è parziale."
  },
  {
    id: 98,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "La valutazione critica richiede:",
    a: { A: "Fiducia cieca", B: "Analisi e riflessione", C: "Velocità", D: "Condivisione immediata" },
    correct: "B",
    exp: "La valutazione critica richiede analisi."
  },
  {
    id: 99,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Un'informazione verificata è:",
    a: { A: "Sempre condivisa", B: "Sempre popolare", C: "Confermata da fonti affidabili", D: "Sempre breve" },
    correct: "C",
    exp: "Un'informazione verificata è confermata da fonti affidabili."
  },
  {
    id: 100,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "L'affidabilità aumenta con:",
    a: { A: "Opinioni personali", B: "Pubblicità", C: "Uso di fonti multiple controllate", D: "Emozioni" },
    correct: "C",
    exp: "L'affidabilità aumenta con fonti multiple."
  },
  
  // SEZIONE 3 — DIFFICILE (101-120)
  {
    id: 101,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Un dataset sbilanciato nei sistemi IA può causare:",
    a: { A: "Maggiore precisione", B: "Equità nei risultati", C: "Bias e risultati discriminatori", D: "Velocità aumentata" },
    correct: "C",
    exp: "Dataset sbilanciati generano bias nei sistemi IA."
  },
  {
    id: 102,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Per ridurre bias nei dati si deve:",
    a: { A: "Ridurre i dati", B: "Diversificare i dati", C: "Eliminare i dati", D: "Copiare i dati" },
    correct: "B",
    exp: "L'equità richiede dati rappresentativi."
  },
  {
    id: 103,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "La credibilità di una fonte si valuta anche tramite:",
    a: { A: "Colore del sito", B: "Design grafico", C: "Autorevolezza e verificabilità", D: "Tipo di font" },
    correct: "C",
    exp: "La credibilità si basa su autorevolezza."
  },
  {
    id: 104,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Un contenuto aggiornato è importante perché:",
    a: { A: "È lungo", B: "È recente e valido nel contesto attuale", C: "È grafico", D: "È semplice" },
    correct: "B",
    exp: "Un contenuto aggiornato è recente e valido."
  },
  {
    id: 105,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "L'obiettività richiede:",
    a: { A: "Opinioni personali", B: "Emozioni forti", C: "Neutralità e basarsi su fatti", D: "Pubblicità" },
    correct: "C",
    exp: "L'obiettività richiede neutralità."
  },
  {
    id: 106,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "La valutazione delle fonti evita:",
    a: { A: "Velocità nella ricerca", B: "Accesso alle informazioni", C: "Diffusione di disinformazione", D: "Condivisione di contenuti" },
    correct: "C",
    exp: "La valutazione delle fonti evita disinformazione."
  },
  {    id: 107,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Un contenuto completo è:",
    a: { A: "Parziale e superficiale", B: "Dettagliato e esauriente", C: "Breve", D: "Promozionale" },
    correct: "B",
    exp: "Un contenuto completo è dettagliato e esauriente."
  },
  {
    id: 108,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "L'analisi critica serve a:",
    a: { A: "Copiare contenuti", B: "Salvare file", C: "Condividere senza pensare", D: "Comprendere e valutare consapevolmente" },
    correct: "D",
    exp: "L'analisi critica serve a comprendere e valutare."
  },
  {
    id: 109,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Una fonte attendibile si riconosce da:",
    a: { A: "Numero di lettori", B: "Trasparenza, citazioni e verificabilità", C: "Lunghezza del testo", D: "Facilità di condivisione" },
    correct: "B",
    exp: "Una fonte attendibile è trasparente e verificabile."
  },
  {
    id: 110,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Il NLP (Natural Language Processing) serve a:",
    a: { A: "Comprimere file", B: "Analizzare e elaborare il linguaggio umano", C: "Salvare dati", D: "Eliminare contenuti" },
    correct: "B",
    exp: "Il NLP analizza il linguaggio naturale."
  },
  {
    id: 111,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Il machine learning permette ai sistemi di:",
    a: { A: "Stampare dati", B: "Apprendere e migliorare dai dati", C: "Eliminare errori automaticamente", D: "Ridurre memoria" },
    correct: "B",
    exp: "Il machine learning permette apprendimento dai dati."
  },
  {
    id: 112,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "L'opacità algoritmica rappresenta:",
    a: { A: "Una caratteristica positiva", B: "Un'impossibilità tecnica", C: "Una sfida per la comprensione e la responsabilità", D: "Non esiste" },
    correct: "C",
    exp: "L'opacità algoritmica limita la trasparenza decisionale."
  },
  {
    id: 113,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "La personalizzazione algoritmica può causare:",
    a: { A: "Accesso a tutte le informazioni", B: "Filter bubble e echo chamber", C: "Riduzione delle informazioni disponibili", D: "Nessun effetto sulla visione" },
    correct: "B",
    exp: "La personalizzazione può creare filter bubble."
  },
  {
    id: 114,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "La verifica della fonte implica:",
    a: { A: "Leggere una volta il contenuto", B: "Controllare autore, data, citazioni e reputazione", C: "Condividerlo immediatamente", D: "Ignorare le fonti" },
    correct: "B",
    exp: "La verifica implica controllo multiplo della fonte."
  },
  {
    id: 115,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Un approccio critico verso i media digitali implica:",
    a: { A: "Fiducia totale", B: "Rifiuto completo", C: "Analisi consapevole e verifica delle informazioni", D: "Ignorare la provenienza" },
    correct: "C",
    exp: "Un approccio critico richiede analisi consapevole."
  },
  {
    id: 116,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "L'infodemia può causare:",
    a: { A: "Maggiore conoscenza", B: "Confusione e difficoltà decisionale", C: "Meno informazioni disponibili", D: "Miglioramento automatico" },
    correct: "B",
    exp: "L'infodemia causa confusione e stress cognitivo."
  },
  {
    id: 117,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "La disinformazione si differenzia dalla misinformazione per:",
    a: { A: "Non esiste differenza", B: "È intenzionalmente falsa vs. erroneamente falsa", C: "Ha lo stesso significato", D: "Non è rilevante" },
    correct: "B",
    exp: "La disinformazione è intenzionale, la misinformazione accidentale."
  },
  {
    id: 118,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "La valutazione di una fonte académica implica:",
    a: { A: "Nessun controllo", B: "Fiducia automatica", C: "Verifica della revisione paritaria e della reputazione", D: "Solo leggere il titolo" },
    correct: "C",
    exp: "Le fonti accademiche vanno verificate per revisione paritaria."
  },
  {
    id: 119,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Un bias cognitivo nel consumo di media digitali è:",
    a: { A: "La ricerca consapevole di fonti diverse", B: "La tendenza a credere info che confermano idee esistenti", C: "La verifica delle fonti", D: "L'analisi critica" },
    correct: "B",
    exp: "Un bias cognitivo porta a cercare conferme delle proprie idee."
  },
  {
    id: 120,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "La competenza nell'area 1.2 riguarda principalmente:",
    a: { A: "Solo memorizzare fatti", B: "La capacità di valutare criticamente la credibilità e l'affidabilità", C: "Condividere tutto rapidamente", D: "Ignorare le fonti" },
    correct: "B",
    exp: "La competenza 1.2 riguarda valutazione critica e affidabilità."
  },

  // ========== CAPITOLO 1.3 — GESTIRE E ARCHIVIARE DATI E CONTENUTI ==========
  
  // SEZIONE 1 — FACILE (121-140)
  {
    id: 121,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "Cosa serve una chiavetta USB?",
    a: { A: "Stampare documenti", B: "Archiviare dati portatili", C: "Navigare online", D: "Scrivere testi" },
    correct: "B",
    exp: "Una chiavetta USB serve a archiviare dati."
  },
  {
    id: 122,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "Un file PDF è:",
    a: { A: "Un video", B: "Un audio", C: "Un documento", D: "Un programma eseguibile" },
    correct: "C",
    exp: "Un file PDF è un documento."
  },
  {
    id: 123,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "Cos'è un backup?",
    a: { A: "Eliminazione di dati", B: "Copia di sicurezza dei dati", C: "Condivisione di file", D: "Compressione di dati" },
    correct: "B",
    exp: "Un backup è una copia di sicurezza."
  },
  {
    id: 124,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "Il desktop di un computer è:",
    a: { A: "Una stampante", B: "Un file", C: "L'area principale del sistema operativo", D: "Un servizio cloud" },
    correct: "C",
    exp: "Il desktop è l'area principale del sistema."
  },
  {
    id: 125,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "Un file immagine può avere estensione:",
    a: { A: "MP3", B: "JPEG", C: "TXT", D: "EXE" },
    correct: "B",
    exp: "JPEG è un'estensione di file immagine."
  },
  {
    id: 126,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "Salvare un file significa:",
    a: { A: "Eliminarlo", B: "Modificarlo", C: "Chiuderlo", D: "Memorizzarlo su disco" },
    correct: "D",
    exp: "Salvare significa memorizzare il file."
  },
  {
    id: 127,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "Una cartella può contenere:",
    a: { A: "Solo immagini", B: "Solo testi", C: "Solo video", D: "Diversi tipi di file" },
    correct: "D",
    exp: "Una cartella contiene file di vari tipi."
  },
  {
    id: 128,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "La ricerca file serve a:",
    a: { A: "Eliminare file", B: "Trovare file nel sistema", C: "Stampare", D: "Copiare" },
    correct: "B",
    exp: "La ricerca file serve a trovare file."
  },
  {
    id: 129,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "Un file video ha estensione:",
    a: { A: "JPG", B: "MP3", C: "MP4", D: "TXT" },
    correct: "C",
    exp: "MP4 è un formato video comune."
  },
  {
    id: 130,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "La gestione dei file serve a:",
    a: { A: "Confondere l'utente", B: "Accelerare l'accesso ai dati", C: "Disordinare il sistema", D: "Organizzare i dati" },
    correct: "D",
    exp: "La gestione organizza i file."
  },
  {
    id: 131,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "Il cloud è:",
    a: { A: "Un dispositivo fisico", B: "Un software locale", C: "Uno spazio di archiviazione online", D: "Un tipo di browser" },
    correct: "C",
    exp: "Il cloud è archiviazione online."
  },
  {
    id: 132,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "Un vantaggio del cloud è:",
    a: { A: "Non richiede internet", B: "Accesso da qualsiasi dispositivo", C: "Non permette sincronizzazione", D: "Elimina automaticamente i file" },
    correct: "B",
    exp: "Il cloud consente accesso remoto."
  },
  {
    id: 133,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "Un file audio ha solitamente estensione:",
    a: { A: "JPG", B: "MP3", C: "AVI", D: "DOC" },
    correct: "B",
    exp: "MP3 è un formato audio comune."
  },
  {
    id: 134,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "La sincronizzazione nel cloud significa:",
    a: { A: "Eliminazione automatica", B: "Aggiornamento automatico dei file su tutti i dispositivi", C: "Compressione dei dati", D: "Blocco dei file" },
    correct: "B",
    exp: "La sincronizzazione aggiorna i file su tutti i dispositivi."
  },
  {
    id: 135,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "Un file compresso ha solitamente estensione:",
    a: { A: "TXT", B: "ZIP", C: "JPG", D: "PDF" },
    correct: "B",
    exp: "ZIP è un formato compresso."
  },
  {
    id: 136,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "La compressione serve a:",
    a: { A: "Eliminare dati", B: "Ridurre la dimensione dei file", C: "Aumentare il tempo di download", D: "Cambiare il formato" },
    correct: "B",
    exp: "La compressione riduce la dimensione."
  },
  {
    id: 137,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "I metadati di un file sono:",
    a: { A: "Il contenuto vero del file", B: "Informazioni su autore, data, dimensione", C: "La password", D: "L'estensione del file" },
    correct: "B",
    exp: "I metadati contengono info su autore e data."
  },
  {
    id: 138,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "La versione di un file indica:",
    a: { A: "Il colore del documento", B: "L'aggiornamento o la variante del file", C: "La lingua", D: "Il tipo di stampante" },
    correct: "B",
    exp: "La versione indica aggiornamenti del file."
  },
  {
    id: 139,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "Un backup esterno è:",
    a: { A: "Una copia sui server", B: "Una copia su dispositivo esterno", C: "Una stampa del file", D: "Un collegamento al file" },
    correct: "B",
    exp: "Un backup esterno è su dispositivo fisico."
  },
  {
    id: 140,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "facile",
    q: "La struttura di cartelle serve a:",
    a: { A: "Rallentare il computer", B: "Organizzare i file logicamente", C: "Aumentare la memoria", D: "Eliminare file automaticamente" },
    correct: "B",
    exp: "La struttura organizza i file logicamente."
  },
  
  // SEZIONE 2 — MEDIO (141-160)
  {
    id: 141,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "Una buona struttura di cartelle deve essere:",
    a: { A: "Casuale", B: "Complessa", C: "Logica e intuitiva", D: "Disordinata" },
    correct: "C",
    exp: "Una buona struttura è logica e intuitiva."
  },
  {
    id: 142,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "L'archiviazione locale avviene su:",
    a: { A: "Server remoti", B: "Internet", C: "Dispositivi fisici locali", D: "Cloud pubblico" },
    correct: "C",
    exp: "L'archiviazione locale è su dispositivi fisici."
  },
  {
    id: 143,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "Il cloud permette di:",
    a: { A: "Stampare file", B: "Accedere ai dati online", C: "Eliminare completamente i dati", D: "Bloccare i file" },
    correct: "B",
    exp: "Il cloud permette accesso online ai dati."
  },
  {
    id: 144,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "Uno svantaggio del cloud è:",
    a: { A: "Accesso remoto", B: "Condivisione facile", C: "Dipendenza dalla connessione Internet", D: "Backup automatico" },
    correct: "C",
    exp: "Il cloud richiede connessione Internet."
  },
  {
    id: 145,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "Un vantaggio dell'archiviazione locale è:",
    a: { A: "Accesso offline", B: "Accesso globale", C: "Condivisione facile", D: "Collaborazione remota" },
    correct: "A",
    exp: "L'archiviazione locale permette accesso offline."
  },
  {
    id: 146,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "Un file RAW è:",
    a: { A: "Compresso", B: "Non compresso e grezzo", C: "Un audio", D: "Un testo" },
    correct: "B",
    exp: "RAW è non compresso."
  },
  {
    id: 147,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "La dimensione dei file dipende da:",
    a: { A: "Colore della copertina", B: "Nome del file", C: "Risoluzione e qualità", D: "Cartella contenitore" },
    correct: "C",
    exp: "La dimensione dipende dalla risoluzione."
  },
  {
    id: 148,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "Il backup incrementale è:",
    a: { A: "Una copia di tutto", B: "Una copia solo dei file modificati", C: "Non esiste", D: "Uguale al backup completo" },
    correct: "B",
    exp: "Il backup incrementale copia solo le modifiche."
  },
  {
    id: 149,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "La condivisione di file può avvenire via:",
    a: { A: "Solo email", B: "Solo cloud", C: "Email, cloud, chiavetta USB e altre modalità", D: "Solo telefono" },
    correct: "C",
    exp: "La condivisione ha molti canali."
  },
  {
    id: 150,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "La gestione delle versioni significa:",
    a: { A: "Eliminare le versioni vecchie", B: "Tracciare i cambiamenti nel tempo", C: "Stampare ogni versione", D: "Non è importante" },
    correct: "B",
    exp: "La versioning traccia le modifiche."
  },
  {
    id: 151,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "La crittografia dei dati serve a:",
    a: { A: "Eliminare i dati", B: "Proteggere i dati da accessi non autorizzati", C: "Aumentare la dimensione", D: "Rallentare il computer" },
    correct: "B",
    exp: "La crittografia protegge i dati."
  },
  {
    id: 152,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "Un permission di file determinano:",
    a: { A: "La dimensione del file", B: "Chi può accedere e modificare il file", C: "Il colore dell'icona", D: "La data di creazione" },
    correct: "B",
    exp: "Le permission controllano l'accesso ai file."
  },
  {
    id: 153,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "La ricerca avanzata serve a:",
    a: { A: "Eliminare file", B: "Trovare file con criteri specifici", C: "Comprimere file", D: "Stampare file" },
    correct: "B",
    exp: "La ricerca avanzata usa filtri specifici."
  },
  {
    id: 154,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "Il recupero dei dati cancellati è:",
    a: { A: "Sempre impossibile", B: "Sempre possibile", C: "Possibile in alcuni casi", D: "Non esiste" },
    correct: "C",
    exp: "Il recupero è possibile se i dati non sono sovrascritti."
  },
  {
    id: 155,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "La pulizia dei file temporanei serve a:",
    a: { A: "Eliminare dati importanti", B: "Liberare spazio di archiviazione", C: "Aumentare il tempo", D: "Danneggiare il sistema" },
    correct: "B",
    exp: "Pulire i temporanei libera spazio."
  },
  {
    id: 156,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "Lo spazio su disco si visualizza in:",
    a: { A: "Byte solo", B: "KB, MB, GB, TB", C: "Litri", D: "Chilometri" },
    correct: "B",
    exp: "Lo spazio si misura in unità di byte."
  },
  {
    id: 157,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "Il trasferimento di file tra dispositivi può avvenire via:",
    a: { A: "Solo cavo USB", B: "Cavo, wireless, cloud e altre modalità", C: "Solo Bluetooth", D: "Solo email" },
    correct: "B",
    exp: "Il trasferimento ha molte modalità."
  },
  {
    id: 158,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "L'organizzazione di file secondo date è:",
    a: { A: "Non utile", B: "Utile per archivi cronologici", C: "Impossibile", D: "Non consigliato" },
    correct: "B",
    exp: "L'ordine cronologico è utile per certi archivi."
  },
  {
    id: 159,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "Il nome significativo dei file aiuta a:",
    a: { A: "Rallentare la ricerca", B: "Identificare rapidamente il contenuto", C: "Occupare più spazio", D: "Non serve" },
    correct: "B",
    exp: "Nomi significativi aiutano l'identificazione."
  },
  {
    id: 160,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "medio",
    q: "La sincronizzazione bidirezionale nel cloud significa:",
    a: { A: "I file non si aggiornano", B: "I file si aggiornano solo sul cloud", C: "I file si aggiornano su tutti i dispositivi collegati", D: "Non è possibile" },
    correct: "C",
    exp: "La sincronizzazione bidirezionale aggiorna ovunque."
  },
  
  // SEZIONE 3 — DIFFICILE (161-180)
  {
    id: 161,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "Quale strategia garantisce la migliore protezione dei dati?",
    a: { A: "Un solo backup", B: "Backup multipli, crittografia e accesso limitato", C: "Nessun backup", D: "Archiviazione pubblica" },
    correct: "B",
    exp: "La protezione richiede backup multipli e crittografia."
  },
  {
    id: 162,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "La regola 3-2-1 nel backup significa:",
    a: { A: "3 copie, 2 formati, 1 offsite", B: "3 file, 2 cartelle, 1 copia", C: "Non esiste", D: "3 backup, 2 dispositivi, 1 cloud" },
    correct: "A",
    exp: "La regola 3-2-1 è: 3 copie, 2 formati, 1 offsite."
  },
  {
    id: 163,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "Un sistema di file system RAID serve a:",
    a: { A: "Ralentare l'accesso", B: "Fornire ridondanza e prestazioni", C: "Eliminare file", D: "Non serve" },
    correct: "B",
    exp: "RAID fornisce ridondanza e prestazioni."
  },
  {
    id: 164,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "La verifica dell'integrità dei file consiste in:",
    a: { A: "Cancellare il file", B: "Calcolare un hash per rilevare modifiche", C: "Non è importante", D: "Stampare il file" },
    correct: "B",
    exp: "L'integrità si verifica con hash."
  },
  {
    id: 165,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "La compressione senza perdita (lossless) significa:",
    a: { A: "Si perdono dati", B: "Non si perdono dati", C: "I dati sono eliminati", D: "Non esiste" },
    correct: "B",
    exp: "Lossless comprime senza perdere dati."
  },
  {
    id: 166,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "La compressione con perdita (lossy) è utile per:",
    a: { A: "Documenti di testo", B: "Immagini e video di grandi dimensioni", C: "Database", D: "Codice sorgente" },
    correct: "B",
    exp: "Lossy è ideale per media file."
  },
  {
    id: 167,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "La migrazione dei dati verso nuovi sistemi richiede:",
    a: { A: "Nessuna pianificazione", B: "Pianificazione, test e verifica", C: "Eliminare i dati vecchi", D: "Non è importante" },
    correct: "B",
    exp: "La migrazione richiede pianificazione e test."
  },
  {
    id: 168,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "L'archivio a freddo (cold storage) serve a:",
    a: { A: "Accesso frequente", B: "Archiviazione a lungo termine di dati non frequenti", C: "Non serve", D: "Eliminare dati" },
    correct: "B",
    exp: "Cold storage per dati non frequenti."
  },
  {
    id: 169,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "La quota di spazio disco serve a:",
    a: { A: "Elimina automaticamente file", B: "Limita lo spazio usabile per utente", C: "Aumenta la velocità", D: "Non serve" },
    correct: "B",
    exp: "La quota limita lo spazio per utente."
  },
  {
    id: 170,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "Il versionamento dei dati permette di:",
    a: { A: "Perdere le versioni precedenti", B: "Recuperare versioni precedenti", C: "Eliminare tutto", D: "Non serve" },
    correct: "B",
    exp: "Il versionamento consente ripristino."
  },
  {
    id: 171,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "La deduplicazione dei dati serve a:",
    a: { A: "Duplicare i dati", B: "Eliminare copie duplicate", C: "Non serve", D: "Creare backup" },
    correct: "B",
    exp: "La deduplicazione riduce lo spazio."
  },
  {
    id: 172,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "Un approccio corretto alla gestione dei dati implica:",
    a: { A: "Nessuna organizzazione", B: "Pianificazione, backup e monitoraggio", C: "Solo eliminare i dati", D: "Non è importante" },
    correct: "B",
    exp: "La gestione richiede pianificazione e backup."
  },
  {
    id: 173,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "La privacy dei dati nel cloud dipende da:",
    a: { A: "Nulla", B: "Provider, crittografia e policy", C: "Non è possibile", D: "Non è importante" },
    correct: "B",
    exp: "La privacy dipende da provider e crittografia."
  },
  {
    id: 174,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "La conformità GDPR nella gestione dati significa:",
    a: { A: "Non è importante", B: "Rispetto della privacy e diritti dell'utente", C: "Eliminare tutti i dati", D: "Non esiste" },
    correct: "B",
    exp: "GDPR protegge la privacy dell'utente."
  },
  {
    id: 175,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "La pianificazione della capacità server riguarda:",
    a: { A: "Non è rilevante", B: "Prevedere le esigenze di spazio future", C: "Eliminare server", D: "Non serve" },
    correct: "B",
    exp: "La pianificazione previene saturazione."
  },
  {
    id: 176,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "Un sistema di backup automatico garantisce:",
    a: { A: "Protezione continuativa", B: "Nulla", C: "Eliminazione dei file", D: "Non serve" },
    correct: "A",
    exp: "I backup automatici proteggono i dati."
  },
  {
    id: 177,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "La gestione della memoria (RAM) nel computer è:",
    a: { A: "Non importante", B: "Essenziale per le prestazioni", C: "Non è possibile", D: "Non serve" },
    correct: "B",
    exp: "La RAM impatta sulle prestazioni."
  },
  {
    id: 178,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "Il monitoraggio del disco rigido serve a:",
    a: { A: "Nulla", B: "Prevenire guasti e perdita di dati", C: "Eliminare file", D: "Non serve" },
    correct: "B",
    exp: "Il monitoraggio previene guasti."
  },
  {
    id: 179,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "La competenza 1.3 riguarda principalmente:",
    a: { A: "Solo memorizzare nomi di file", B: "La gestione consapevole e sicura dei dati", C: "Eliminare file", D: "Non è importante" },
    correct: "B",
    exp: "La competenza 1.3 è su gestione sicura dei dati."
  },
  {
    id: 180,
    category: "1.3 Gestire e archiviare dati e contenuti",
    difficulty: "difficile",
    q: "Una strategia di archiviazione moderna combina:",
    a: { A: "Solo cloud", B: "Solo disco locale", C: "Local + cloud + backup offsite", D: "Nessun metodo" },
    correct: "C",
    exp: "La strategia moderna combina più metodi."
  }
];

// ============================================
// FUNZIONI DI FILTRAGGIO PER DIFFICOLTÀ
// ============================================

function filterPaniereByDifficulty() {
  let filtered = [...PANIERE];
  
  if (CONFIG.FILTRO_DIFFICOLTA) {
    filtered = filtered.filter(q => q.difficulty === CONFIG.FILTRO_DIFFICOLTA);
  }
  
  return filtered;
}

function selectQuestionsByDistribution() {
  if (!CONFIG.DISTRIBUZIONE_DIFFICOLTA) {
    return filterPaniereByDifficulty();
  }
  
  const distribution = CONFIG.DISTRIBUZIONE_DIFFICOLTA;
  const selected = [];
  
  ['facile', 'medio', 'difficile'].forEach(difficulty => {
    const count = distribution[difficulty] || 0;
    const byDifficulty = PANIERE.filter(q => q.difficulty === difficulty);
    const shuffled = shuffleArray(byDifficulty);
    selected.push(...shuffled.slice(0, count));
  });
  
  return selected;
}

// ============================================
// STATE
// ============================================

let currentScreen = 'welcome';
let quizQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval = null;
let timeRemaining = CONFIG.DURATA_TIMER;

// ============================================
// DOM Elements
// ============================================

const screens = {
  welcome: document.getElementById('screen-welcome'),
  quiz: document.getElementById('screen-quiz'),
  results: document.getElementById('screen-results')
};

const modalLegal = document.getElementById('modal-legal');
const modalConfirm = document.getElementById('modal-confirm');
const timerDisplay = document.getElementById('timer-display');
const timerAlert = document.getElementById('timer-alert');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const questionContainer = document.getElementById('question-container');

// ============================================
// Utility Functions
// ============================================

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleOptions(question) {
  const options = ['A', 'B', 'C', 'D'];
  const shuffled = shuffleArray(options);
  const newOptions = {};
  let newCorrect = question.correct;
  
  shuffled.forEach((key, index) => {
    const letter = ['A', 'B', 'C', 'D'][index];
    newOptions[letter] = question.a[key];
    if (key === question.correct) {
      newCorrect = letter;
    }
  });
  
  return { options: newOptions, correct: newCorrect };
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// ============================================
// Screen Management
// ============================================

function showScreen(screenName) {
  Object.values(screens).forEach(screen => {
    screen.classList.add('hidden');
    screen.classList.remove('fade-in');
  });
  screens[screenName].classList.remove('hidden');
  screens[screenName].classList.add('fade-in');
  currentScreen = screenName;
}

// ============================================
// Modal Functions
// ============================================

function openModal() {
  modalLegal.classList.remove('hidden');
  modalLegal.classList.add('fade-in');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalLegal.classList.add('hidden');
  modalLegal.classList.remove('fade-in');
  document.body.style.overflow = '';
}

function openConfirmModal() {
  modalConfirm.classList.remove('hidden');
  modalConfirm.classList.add('fade-in');
  document.body.style.overflow = 'hidden';
}

function closeConfirmModal() {
  modalConfirm.classList.add('hidden');
  modalConfirm.classList.remove('fade-in');
  document.body.style.overflow = '';
}

// ============================================
// Quiz Functions
// ============================================

function startQuiz() {
  closeModal();
  
  // Seleziona domande in base a CONFIG
  let candidateQuestions = CONFIG.DISTRIBUZIONE_DIFFICOLTA 
    ? selectQuestionsByDistribution() 
    : filterPaniereByDifficulty();
  
  const shuffledQuestions = shuffleArray(candidateQuestions);
  quizQuestions = shuffledQuestions.slice(0, CONFIG.NUM_DOMANDE).map(q => {
    const { options, correct } = shuffleOptions(q);
    return { ...q, a: options, correct };
  });
  
  currentQuestionIndex = 0;
  userAnswers = [];
  timeRemaining = CONFIG.DURATA_TIMER;
  
  showScreen('quiz');
  renderQuestion();
  startTimer();
}

function renderQuestion() {
  const q = quizQuestions[currentQuestionIndex];
  
  questionContainer.innerHTML = `
    <div class="question-card">
      <div class="question-header">
        <span class="question-category">${q.category}</span>
        <span class="question-difficulty difficulty-${q.difficulty}">${q.difficulty}</span>
      </div>
      <div class="question-text">${q.q}</div>
      <div class="options-grid">
        ${Object.entries(q.a).map(([key, value]) => `
          <button class="option-btn" data-answer="${key}" onclick="handleAnswer('${key}')">
            <span class="option-letter">${key}</span>
            <span class="option-text">${value}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
  
  // Update progress
  progressText.textContent = `${currentQuestionIndex + 1} / ${quizQuestions.length}`;
  progressBar.style.width = `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;
}

function handleAnswer(answer) {
  const q = quizQuestions[currentQuestionIndex];
  const isCorrect = answer === q.correct;
  
  userAnswers.push({
    question: q,
    userAnswer: answer,
    correctAnswer: q.correct,
    isCorrect: isCorrect
  });
  
  // Visual feedback
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.answer === q.correct) {
      btn.classList.add('correct');
    } else if (btn.dataset.answer === answer && !isCorrect) {
      btn.classList.add('wrong');
    }
  });
  
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      renderQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      endQuiz();
    }
  }, 1000);
}

function startTimer() {
  timerDisplay.textContent = formatTime(timeRemaining);
  
  timerInterval = setInterval(() => {
    timeRemaining--;
    timerDisplay.textContent = formatTime(timeRemaining);
    
    // Alert under 5 minutes
    if (timeRemaining <= CONFIG.ALERT_TIMER_SOGLIA && timeRemaining > 0) {
      timerAlert.classList.remove('hidden');
      timerAlert.classList.add('show');
    }
    
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timerInterval);
  timerAlert.classList.add('hidden');
  showResults();
}

function showResults() {
  showScreen('results');
  
  const correctCount = userAnswers.filter(a => a.isCorrect).length;
  const percentage = Math.round((correctCount / userAnswers.length) * 100);
  
  let resultClass, resultIcon, resultText;
  if (percentage >= CONFIG.SOGLIA_ECCELLENTE) {
    resultClass = 'excellent';
    resultIcon = '🏆';
    resultText = 'Eccellente!';
  } else if (percentage >= CONFIG.SOGLIA_SUFFICIENTE) {
    resultClass = 'sufficient';
    resultIcon = '👍';
    resultText = 'Sufficiente';
  } else {
    resultClass = 'insufficient';
    resultIcon = '📚';
    resultText = 'Insufficiente';
  }
  
  document.getElementById('result-icon').textContent = resultIcon;
  document.getElementById('result-text').textContent = resultText;
  document.getElementById('result-percentage').textContent = `${percentage}%`;
  document.getElementById('result-score').textContent = `${correctCount} / ${userAnswers.length}`;
  document.getElementById('result-container').className = `result-box ${resultClass}`;
  
  // Recap
  document.getElementById('recap-container').innerHTML = userAnswers.map((answer, index) => `
    <div class="recap-question">
      <div class="recap-header">
        <span class="recap-number">${index + 1}.</span>
        <span class="recap-category">${answer.question.category}</span>
        <span class="recap-difficulty difficulty-${answer.question.difficulty}">${answer.question.difficulty}</span>
      </div>
      <div class="recap-text">${answer.question.q}</div>
      <div class="recap-answers">
        <div class="recap-user-answer ${answer.isCorrect ? 'correct' : 'wrong'}">
          La tua risposta: ${answer.userAnswer} ${answer.isCorrect ? '✓' : '✗'}
        </div>
        ${!answer.isCorrect ? `
          <div class="recap-correct-answer">
            Risposta corretta: ${answer.correctAnswer}
          </div>
          <div class="recap-explanation">
            ${answer.question.exp}
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}

function restartQuiz() {
  showScreen('welcome');
}

function goHome() {
  closeConfirmModal();
  clearInterval(timerInterval);
  showScreen('welcome');
}

// ============================================
// Event Listeners
// ============================================

document.getElementById('modal-legal').addEventListener('click', function(e) {
  // Do nothing on overlay click
});

document.getElementById('modal-confirm').addEventListener('click', function(e) {
  // Do nothing on overlay click
});

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Quiz Loaded');
  console.log(`📊 Paniere Totale: ${PANIERE.length} domande`);
  
  // Conta domande per difficoltà
  const byDiff = {
    facile: PANIERE.filter(q => q.difficulty === 'facile').length,
    medio: PANIERE.filter(q => q.difficulty === 'medio').length,
    difficile: PANIERE.filter(q => q.difficulty === 'difficile').length
  };
  
  console.log(`📚 Distribuzione: Facili=${byDiff.facile}, Medie=${byDiff.medio}, Difficili=${byDiff.difficile}`);
  console.log(`⚙️ Config: ${CONFIG.NUM_DOMANDE} domande, ${formatTime(CONFIG.DURATA_TIMER)}`);
  
  // Verifica integrità
  const missing = PANIERE.filter(q => !q.difficulty || !q.q || !q.a.A || !q.a.B || !q.a.C || !q.a.D || !q.correct || !q.exp);
  if (missing.length > 0) {
    console.warn(`⚠️ ATTENZIONE: ${missing.length} domande incomplete!`);
    missing.forEach(q => console.warn(`  - ID ${q.id}: mancano campi`));
  }
});

    
