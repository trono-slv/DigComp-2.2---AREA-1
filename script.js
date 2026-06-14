/* ============================================
   CONFIGURAZIONE GLOBALE
   ============================================ */

const CONFIG = {
    NUM_DOMANDE: 30,                    // Estrazione casuale da paniere
    DURATA_TIMER: 30 * 60,              // 30 minuti = 1800 secondi
    SOGLIA_ECCELLENTE: 80,              // >= 80% = Eccellente 🏆
    SOGLIA_SUFFICIENTE: 60,             // 60-79% = Sufficiente 👍
    ALERT_TIMER_SOGLIA: 300,            // Alert quando < 5 minuti (300 sec)
    CATEGORY_FILTER: 'all'              // 'all', '1.1', '1.2', '1.3'
};

/* ============================================
   STATO GLOBALE
   ============================================ */

let STATE = {
    currentScreen: 'welcome',           // welcome, quiz, results
    paniere: [],                        // Array domande complete
    questionsToShow: [],                // 30 domande estratte
    currentQuestionIndex: 0,            // Indice domanda corrente
    userAnswers: {},                    // { questionId: 'A', ... }
    timerInterval: null,
    timeRemaining: CONFIG.DURATA_TIMER,
    quizStarted: false,
    testId: null                        // ID univoco per test
};

/* ============================================
   PANIERE COMPLETO - 180 DOMANDE
   ============================================ */

const PANIERE = [
    {
        id: 1,
        category: "1.1",
        q: "Quale tra i seguenti è un aspetto fondamentale della competenza digitale?",
        a: { A: "L'uso esclusivo dei social media", B: "La capacità di utilizzare dispositivi e applicazioni digitali in modo consapevole", C: "Il possesso di un computer", D: "La connessione a Internet ad alta velocità" },
        correct: "B",
        exp: "La competenza digitale implica l'uso consapevole e critico di dispositivi e applicazioni, non solo il loro possesso."
    },
    {
        id: 2,
        category: "1.1",
        q: "DigComp 2.2 è il quadro di riferimento europeo per quale competenza?",
        a: { A: "Competenza linguistica", B: "Competenza digitale", C: "Competenza matematica", D: "Competenza artistica" },
        correct: "B",
        exp: "DigComp 2.2 è il quadro di riferimento ufficiale dell'UE per la competenza digitale."
    },
    {
        id: 3,
        category: "1.1",
        q: "In quante aree è organizzato DigComp 2.2?",
        a: { A: "3 aree", B: "4 aree", C: "5 aree", D: "6 aree" },
        correct: "C",
        exp: "DigComp 2.2 è organizzato in 5 aree principali: Alfabetizzazione su informazioni e dati; Comunicazione e collaborazione; Creazione di contenuti digitali; Sicurezza; Risolvere problemi."
    },
    {
        id: 4,
        category: "1.1",
        q: "Quale area di DigComp 2.2 riguarda l'uso corretto e sicuro della tecnologia?",
        a: { A: "Alfabetizzazione su informazioni e dati", B: "Comunicazione e collaborazione", C: "Sicurezza", D: "Risolvere problemi" },
        correct: "C",
        exp: "L'area Sicurezza comprende la protezione personale, la sicurezza dei dati e la sicurezza dei dispositivi."
    },
    {
        id: 5,
        category: "1.1",
        q: "Quale competenza rientra nell'area 'Comunicazione e collaborazione'?",
        a: { A: "Analizzare criticamente le informazioni", B: "Utilizzare piattaforme digitali per condividere contenuti", C: "Proteggere i propri dati personali", D: "Creare presentazioni multimediali" },
        correct: "B",
        exp: "La comunicazione e collaborazione include l'uso di strumenti digitali per interagire e condividere informazioni con altri."
    },
    {
        id: 6,
        category: "1.1",
        q: "Cosa significa 'alfabetizzazione su informazioni e dati' in DigComp 2.2?",
        a: { A: "Saper scrivere correttamente", B: "Saper cercare, valutare e gestire criticamente le informazioni digitali", C: "Saper usare Excel", D: "Saper programmire" },
        correct: "B",
        exp: "L'alfabetizzazione su informazioni e dati consiste nel cercare, valutare, gestire e condividere informazioni in modo critico."
    },
    {
        id: 7,
        category: "1.1",
        q: "Quale delle seguenti è una competenza della 'Creazione di contenuti digitali'?",
        a: { A: "Utilizzare antivirus", B: "Creare e modificare contenuti digitali", C: "Valutare fonti di informazione", D: "Collaborare con altri utenti online" },
        correct: "B",
        exp: "La creazione di contenuti digitali include la produzione, modifica e condivisione di risorse digitali."
    },
    {
        id: 8,
        category: "1.1",
        q: "Quanti livelli di competenza sono previsti in DigComp 2.2?",
        a: { A: "2 livelli", B: "3 livelli", C: "4 livelli", D: "5 livelli" },
        correct: "C",
        exp: "DigComp 2.2 prevede 4 livelli di competenza: Base, Intermedio, Avanzato, Molto avanzato."
    },
    {
        id: 9,
        category: "1.1",
        q: "A quale livello di DigComp 2.2 corrisponde la capacità di eseguire operazioni semplici con i dispositivi?",
        a: { A: "Molto avanzato", B: "Avanzato", C: "Base", D: "Intermedio" },
        correct: "C",
        exp: "Il livello Base include operazioni elementari e guidate con dispositivi e applicazioni."
    },
    {
        id: 10,
        category: "1.1",
        q: "Come viene definito il livello 'Intermedio' in DigComp 2.2?",
        a: { A: "Capacità di eseguire compiti molto semplici", B: "Capacità di eseguire compiti indipendentemente, con alcune eccezioni", C: "Capacità di eseguire compiti in modo indipendente e autonomo", D: "Capacità di insegnare agli altri" },
        correct: "B",
        exp: "Il livello Intermedio implica una certa autonomia nell'esecuzione dei compiti, ma con possibili limitazioni."
    },
    {
        id: 11,
        category: "1.1",
        q: "Quale area di DigComp 2.2 riguarda l'identificazione e la risoluzione di problemi tecnici?",
        a: { A: "Alfabetizzazione su informazioni e dati", B: "Risolvere problemi", C: "Sicurezza", D: "Comunicazione e collaborazione" },
        correct: "B",
        exp: "L'area 'Risolvere problemi' include l'identificazione di problemi tecnici e l'adozione di soluzioni appropriate."
    },
    {
        id: 12,
        category: "1.1",
        q: "Quale competenza NON rientra in DigComp 2.2?",
        a: { A: "Protezione dei dati personali", B: "Ricerca di informazioni online", C: "Lettura di libri cartacei", D: "Utilizzo di piattaforme di e-learning" },
        correct: "C",
        exp: "DigComp 2.2 riguarda competenze digitali; la lettura di libri cartacei non è una competenza digitale."
    },
    {
        id: 13,
        category: "1.1",
        q: "Quante competenze dettagliate sono incluse in DigComp 2.2?",
        a: { A: "15 competenze", B: "18 competenze", C: "20 competenze", D: "25 competenze" },
        correct: "B",
        exp: "DigComp 2.2 include 18 competenze dettagliate distribuite nelle 5 aree principali."
    },
    {
        id: 14,
        category: "1.1",
        q: "Quale organizzazione internazionale ha sviluppato DigComp 2.2?",
        a: { A: "Le Nazioni Unite", B: "L'UNESCO", C: "La Commissione Europea", D: "L'OCSE" },
        correct: "C",
        exp: "DigComp 2.2 è stato sviluppato dal Joint Research Centre (JRC) della Commissione Europea."
    },
    {
        id: 15,
        category: "1.1",
        q: "In quale anno è stata pubblicata la versione 2.2 di DigComp?",
        a: { A: "2016", B: "2018", C: "2022", D: "2024" },
        correct: "C",
        exp: "DigComp 2.2 è stata pubblicata nel 2022 come aggiornamento del modello precedente."
    },
    {
        id: 16,
        category: "1.1",
        q: "Quale tra le seguenti NON è una delle 5 aree di DigComp 2.2?",
        a: { A: "Alfabetizzazione su informazioni e dati", B: "Programmazione avanzata", C: "Comunicazione e collaborazione", D: "Sicurezza" },
        correct: "B",
        exp: "La programmazione avanzata non è una delle 5 aree principali di DigComp 2.2."
    },
    {
        id: 17,
        category: "1.1",
        q: "Come si chiama la competenza relativa all'uso consapevole dei dati personali in DigComp 2.2?",
        a: { A: "Gestione dei social media", B: "Privacy e protezione dei dati", C: "Comunicazione digitale", D: "Sicurezza delle password" },
        correct: "B",
        exp: "La privacy e protezione dei dati è una competenza chiave dell'area Sicurezza."
    },
    {
        id: 18,
        category: "1.1",
        q: "Quale livello di DigComp 2.2 richiede la capacità di risolvere problemi complessi in modo autonomo?",
        a: { A: "Base", B: "Intermedio", C: "Avanzato", D: "Molto avanzato" },
        correct: "D",
        exp: "Il livello Molto avanzato implica la risoluzione autonoma di problemi complessi e la guida altrui."
    },
    {
        id: 19,
        category: "1.1",
        q: "Quale delle seguenti è una competenza dell'area 'Alfabetizzazione su informazioni e dati'?",
        a: { A: "Navigare il web in modo sicuro", B: "Valutare l'affidabilità delle fonti di informazione", C: "Creare un video tutorial", D: "Usare il cloud storage" },
        correct: "B",
        exp: "La valutazione critica delle fonti di informazione è una competenza fondamentale dell'alfabetizzazione sui dati."
    },
    {
        id: 20,
        category: "1.1",
        q: "Cosa rappresenta DigComp 2.2 nel contesto europeo?",
        a: { A: "Un sistema di certificazione obbligatorio", B: "Un quadro di riferimento per valutare e sviluppare le competenze digitali", C: "Una piattaforma di apprendimento online", D: "Un programma di finanziamento per le scuole" },
        correct: "B",
        exp: "DigComp 2.2 è un quadro di riferimento che aiuta a valutare e sviluppare le competenze digitali nei cittadini europei."
    },
    {
        id: 21,
        category: "1.1",
        q: "Quale area di DigComp 2.2 include la competenza di utilizzare software per la comunicazione?",
        a: { A: "Alfabetizzazione su informazioni e dati", B: "Comunicazione e collaborazione", C: "Creazione di contenuti digitali", D: "Risolvere problemi" },
        correct: "B",
        exp: "L'area Comunicazione e collaborazione include l'uso di software e piattaforme per comunicare."
    },
    {
        id: 22,
        category: "1.1",
        q: "Quale delle seguenti è una competenza NON inclusa in DigComp 2.2?",
        a: { A: "Gestione dell'identità digitale", B: "Uso di software di design grafico avanzato", C: "Protezione dalle frodi online", D: "Collaboration su piattaforme cloud" },
        correct: "B",
        exp: "DigComp 2.2 non include competenze specifiche di software grafico avanzato, ma competenze digitali generali."
    },
    {
        id: 23,
        category: "1.1",
        q: "Come vengono descritti i livelli di competenza in DigComp 2.2?",
        a: { A: "Solo in numeri (1, 2, 3, 4)", B: "Con descrizioni qualitative (Base, Intermedio, Avanzato, Molto avanzato)", C: "Con percentuali (0-25%, 25-50%, ecc.)", D: "Con giudizi (Insufficiente, Sufficiente, ecc.)" },
        correct: "B",
        exp: "DigComp 2.2 utilizza descrizioni qualitative per indicare i 4 livelli di competenza."
    },
    {
        id: 24,
        category: "1.1",
        q: "Quale competenza dell'area Sicurezza riguarda la protezione dei dispositivi?",
        a: { A: "Gestione del copyright online", B: "Protezione dei dispositivi e dei dati", C: "Valutazione della credibilità delle informazioni", D: "Uso consapevole dei social media" },
        correct: "B",
        exp: "La protezione dei dispositivi è una competenza specifica dell'area Sicurezza di DigComp 2.2."
    },
    {
        id: 25,
        category: "1.1",
        q: "Quale tra le seguenti è una caratteristica principale di DigComp 2.2?",
        a: { A: "È orientato solo alle imprese", B: "È un quadro inclusivo per tutti i cittadini europei", C: "Riguarda solo l'istruzione scolastica", D: "È una certificazione obbligatoria" },
        correct: "B",
        exp: "DigComp 2.2 è un quadro inclusivo progettato per valutare e sviluppare le competenze digitali di tutti i cittadini."
    },
    {
        id: 26,
        category: "1.1",
        q: "Quale area di DigComp 2.2 include la competenza di identificare bisogni informativi?",
        a: { A: "Sicurezza", B: "Comunicazione e collaborazione", C: "Alfabetizzazione su informazioni e dati", D: "Creazione di contenuti digitali" },
        correct: "C",
        exp: "L'identificazione dei bisogni informativi è una competenza dell'area Alfabetizzazione su informazioni e dati."
    },
    {
        id: 27,
        category: "1.1",
        q: "In DigComp 2.2, quale competenza riguarda l'uso responsabile della tecnologia?",
        a: { A: "Gestione del bandwidth", B: "Benessere digitale e uso consapevole", C: "Installazione di antivirus", D: "Backup dei dati" },
        correct: "B",
        exp: "Il benessere digitale e l'uso consapevole della tecnologia sono competenze importanti in DigComp 2.2."
    },
    {
        id: 28,
        category: "1.1",
        q: "Quale delle seguenti è una competenza dell'area 'Risolvere problemi'?",
        a: { A: "Creare contenuti video", B: "Identificare strumenti e risorse digitali appropriati", C: "Comunicare via email", D: "Proteggere i dati personali" },
        correct: "B",
        exp: "L'identificazione e l'uso di strumenti digitali per risolvere problemi è una competenza dell'area Risolvere problemi."
    },
    {
        id: 29,
        category: "1.1",
        q: "Come si chiama la competenza di DigComp 2.2 legata alla gestione dell'immagine online?",
        a: { A: "Social media marketing", B: "Gestione dell'identità digitale", C: "Creazione di avatar", D: "Fotografia digitale" },
        correct: "B",
        exp: "La gestione dell'identità digitale è una competenza che riguarda come ci presentiamo online."
    },
    {
        id: 30,
        category: "1.1",
        q: "Quale livello di DigComp 2.2 rappresenta la capacità di gestire situazioni semplici con supporto?",
        a: { A: "Molto avanzato", B: "Avanzato", C: "Base", D: "Intermedio" },
        correct: "C",
        exp: "Il livello Base include compiti semplici spesso svolti con supporto o guida."
    },
    {
        id: 31,
        category: "1.2",
        q: "Quale è la prima competenza dell'area 'Alfabetizzazione su informazioni e dati'?",
        a: { A: "Navigazione web", B: "Ricerca di dati", C: "Valutazione delle fonti", D: "Gestione dei dati" },
        correct: "B",
        exp: "La ricerca di dati e informazioni è la prima competenza di questa area."
    },
    {
        id: 32,
        category: "1.2",
        q: "Come si definisce la capacità di distinguere tra informazioni vere e false online?",
        a: { A: "Alfabetizzazione finanziaria", B: "Alfabetizzazione mediatica", C: "Alfabetizzazione scientifica", D: "Alfabetizzazione tecnologica" },
        correct: "B",
        exp: "L'alfabetizzazione mediatica include la capacità di valutare criticamente le informazioni online."
    },
    {
        id: 33,
        category: "1.2",
        q: "Quale competenza riguarda l'uso etico delle informazioni trovate online?",
        a: { A: "Copyright e diritti d'autore", B: "Protezione dei dati", C: "Gestione dell'identità digitale", D: "Sicurezza dei dispositivi" },
        correct: "A",
        exp: "Il copyright e i diritti d'autore riguardano l'uso responsabile e legale delle informazioni."
    },
    {
        id: 34,
        category: "1.2",
        q: "Quale tra i seguenti è un indicatore di una fonte di informazione affidabile?",
        a: { A: "Ha molti like sui social", B: "È scritta da un autore verifiable con credenziali", C: "È stata condivisa da molte persone", D: "Ha una grafica attraente" },
        correct: "B",
        exp: "L'affidabilità di una fonte dipende dalle credenziali e l'autorevolezza dell'autore."
    },
    {
        id: 35,
        category: "1.2",
        q: "Come si chiama la capacità di organizzare e salvare le informazioni trovate?",
        a: { A: "Backup dei dati", B: "Gestione dell'informazione", C: "Archiviazione digitale", D: "Catalogazione" },
        correct: "C",
        exp: "L'archiviazione digitale è la pratica di organizzare e salvare informazioni in modo strutturato."
    },
    {
        id: 36,
        category: "1.2",
        q: "Quale strumento è comunemente usato per la ricerca di informazioni affidabili?",
        a: { A: "I social media", B: "I motori di ricerca specializzati e le banche dati accademiche", C: "Le email di spam", D: "I commenti nei forum" },
        correct: "B",
        exp: "I motori di ricerca specializzati e le banche dati accademiche offrono fonti più affidabili."
    },
    {
        id: 37,
        category: "1.2",
        q: "Cosa significa 'fake news' nel contesto di DigComp 2.2?",
        a: { A: "Notizie pubblicate da giornalisti", B: "Informazioni false diffuse deliberatamente come notizie vere", C: "Notizie in lingue straniere", D: "Notizie su social media" },
        correct: "B",
        exp: "Le fake news sono informazioni false diffuse intenzionalmente per ingannare i lettori."
    },
    {
        id: 38,
        category: "1.2",
        q: "Quale competenza riguarda il riconoscimento della pubblicità online?",
        a: { A: "Creazione di contenuti", B: "Valutazione critica dei contenuti digitali", C: "Programmazione web", D: "Design grafico" },
        correct: "B",
        exp: "La valutazione critica dei contenuti aiuta a riconoscere la pubblicità e il marketing mascherato."
    },
    {
        id: 39,
        category: "1.2",
        q: "Come si evita la diffusione di informazioni false online?",
        a: { A: "Non condividere nulla", B: "Verificare le fonti prima di condividere", C: "Condividere solo quello che piace", D: "Seguire solo account verificati" },
        correct: "B",
        exp: "La verifica delle fonti è il metodo più efficace per evitare la diffusione di informazioni false."
    },
    {
        id: 40,
        category: "1.2",
        q: "Quale è il ruolo della 'data literacy' in DigComp 2.2?",
        a: { A: "Leggere libri digitali", B: "Comprendere e interpretare criticamente i dati", C: "Digitare velocemente", D: "Usare database" },
        correct: "B",
        exp: "La data literacy è la capacità di comprendere, interpretare e lavorare consapevolmente con i dati."
    },
    {
        id: 41,
        category: "1.2",
        q: "Quale tra i seguenti è un aspetto della sicurezza informatica personale?",
        a: { A: "Condividere le password con amici", B: "Non usare password complesse", C: "Verificare i siti prima di inserire dati sensibili", D: "Scaricare software da qualsiasi fonte" },
        correct: "C",
        exp: "Verificare l'affidabilità di un sito prima di inserire dati sensibili è una pratica di sicurezza essenziale."
    },
    {
        id: 42,
        category: "1.2",
        q: "Cosa sono i 'metadati' nel contesto dell'informazione digitale?",
        a: { A: "Informazioni false", B: "Informazioni che descrivono altre informazioni (autore, data, ecc.)", C: "Dati criptati", D: "Backup dei dati" },
        correct: "B",
        exp: "I metadati sono informazioni che descrivono altre informazioni, come autore, data di creazione, ecc."
    },
    {
        id: 43,
        category: "1.2",
        q: "Come si definisce la 'credibilità' di una fonte online?",
        a: { A: "La grafica del sito", B: "Il numero di condivisioni", C: "L'affidabilità e l'autorevolezza della fonte", D: "La popolarità sui social" },
        correct: "C",
        exp: "La credibilità dipende dall'affidabilità, dall'autorevolezza e dalla reputazione della fonte."
    },
    {
        id: 44,
        category: "1.2",
        q: "Quale strumento può aiutare a verificare l'autenticità di un'immagine online?",
        a: { A: "Google Chrome", B: "La ricerca inversa di immagini", C: "Microsoft Word", D: "Telegram" },
        correct: "B",
        exp: "La ricerca inversa di immagini consente di verificare se un'immagine è stata usata altrove o modificata."
    },
    {
        id: 45,
        category: "1.2",
        q: "Cosa significa 'bias cognitivo' nel contesto delle informazioni online?",
        a: { A: "Un tipo di attacco hacker", B: "La tendenza a cercare solo informazioni che confermano le nostre credenze", C: "Un'impostazione del browser", D: "Un protocollo di sicurezza" },
        correct: "B",
        exp: "Il bias cognitivo è la tendenza naturale a cercare e favorire informazioni coerenti con le proprie credenze."
    },
    {
        id: 46,
        category: "1.2",
        q: "Quale competenza riguarda la consapevolezza della 'filter bubble'?",
        a: { A: "Protezione dei dati", B: "Valutazione critica e consapevolezza della personalizzazione algoritmica", C: "Creazione di contenuti", D: "Comunicazione digitale" },
        correct: "B",
        exp: "La consapevolezza della filter bubble significa capire come gli algoritmi personalizzano i contenuti che vediamo."
    },
    {
        id: 47,
        category: "1.2",
        q: "Come si chiama il processo di verificare le informazioni prima di condividerle?",
        a: { A: "Fact-checking", B: "Data mining", C: "Cracking", D: "Hacking" },
        correct: "A",
        exp: "Il fact-checking è il processo di verifica della verità delle informazioni prima della diffusione."
    },
    {
        id: 48,
        category: "1.2",
        q: "Quale tipo di sorgente è generalmente più affidabile per informazioni scientifiche?",
        a: { A: "I post su Facebook", B: "I siti di news sensazionalistiche", C: "Le riviste accademiche peer-reviewed", D: "I blog non verificati" },
        correct: "C",
        exp: "Le riviste accademiche peer-reviewed seguono rigori metodologici che garantiscono maggiore affidabilità."
    },
    {
        id: 49,
        category: "1.2",
        q: "Cosa si intende con 'sovraccarico informativo'?",
        a: { A: "Una malattia del computer", B: "Avere accesso a più informazioni di quante se ne riescono a elaborare", C: "Un tipo di attacco hacker", D: "La perdita di una password" },
        correct: "B",
        exp: "Il sovraccarico informativo si verifica quando la quantità di informazioni disponibili supera la capacità di elaborazione."
    },
    {
        id: 50,
        category: "1.2",
        q: "Quale è una pratica corretta per la gestione dei dati personali online?",
        a: { A: "Condividere tutte le informazioni personali sui social", B: "Limitare le informazioni condivise e controllare la privacy", C: "Non usare nessun servizio online", D: "Usare la stessa password per tutti gli account" },
        correct: "B",
        exp: "Gestire attentamente i dati personali, condividere solo il necessario e controllare i settaggi di privacy è fondamentale."
    },
    {
        id: 51,
        category: "1.2",
        q: "Come si chiama la pratica di creare e diffondere contenuti falsi appositamente?",
        a: { A: "Misinformation", B: "Disinformation", C: "Fake review", D: "Spam" },
        correct: "B",
        exp: "La disinformation è la diffusione deliberata di informazioni false per ingannare il pubblico."
    },
    {
        id: 52,
        category: "1.2",
        q: "Quale tra i seguenti è un segnale di avviso di una potenziale truffa online?",
        a: { A: "Il sito usa HTTPS", B: "Viene chiesto di inviare soldi per claim un premio", C: "Il sito ha una grafica moderna", D: "Ci sono commenti negativi sui social" },
        correct: "B",
        exp: "Viene richiesto di inviare denaro è un grande segnale di avvertimento di una truffa."
    },
    {
        id: 53,
        category: "1.2",
        q: "Cosa significa 'trasparenza algoritmica' nel contesto di DigComp 2.2?",
        a: { A: "Il colore trasparente del computer", B: "La capacità di comprendere come gli algoritmi prendono decisioni", C: "L'uso di software open-source", D: "La velocità di caricamento dei siti" },
        correct: "B",
        exp: "La trasparenza algoritmica si riferisce alla comprensione di come gli algoritmi funzionano e influenzano i nostri dati."
    },
    {
        id: 54,
        category: "1.2",
        q: "Quale pratica aiuta a evitare il phishing?",
        a: { A: "Cliccare su tutti i link ricevuti via email", B: "Verificare l'indirizzo email del mittente e non cliccare su link sospetti", C: "Condividere le password via email", D: "Scaricare allegati da fonti sconosciute" },
        correct: "B",
        exp: "Verificare il mittente e diffidare di link sospetti è una pratica essenziale contro il phishing."
    },
    {
        id: 55,
        category: "1.2",
        q: "Come si chiama la capacità di valutare la qualità e l'affidabilità delle fonti online?",
        a: { A: "Ricerca web", B: "Media literacy", C: "Navigazione", D: "Bookmarking" },
        correct: "B",
        exp: "La media literacy è la capacità di analizzare, valutare e comprendere i media digitali criticamente."
    },
    {
        id: 56,
        category: "1.2",
        q: "Quale è una conseguenza positiva della 'digital literacy'?",
        a: { A: "Maggiore dipendenza da Internet", B: "Minore capacità critica", C: "Migliore capacità di prendere decisioni informate", D: "Isolamento sociale" },
        correct: "C",
        exp: "La digital literacy consente di prendere decisioni più consapevole e informate online."
    },
    {
        id: 57,
        category: "1.2",
        q: "Cosa sono i 'deepfake' nel contesto della sicurezza digitale?",
        a: { A: "File corrotti", B: "Video o audio manipolati usando IA per sembrare autentici", C: "Virus informatici", D: "Password deboli" },
        correct: "B",
        exp: "I deepfake sono contenuti creati con IA che imitano persone reali in video o audio, rappresentando una minaccia alla fiducia."
    },
    {
        id: 58,
        category: "1.2",
        q: "Come si può proteggere la propria reputazione online?",
        a: { A: "Non usare Internet", B: "Controllare cosa si condivide e monitorare la propria immagine digitale", C: "Eliminarsi dai social media", D: "Non rispondere a nessuno online" },
        correct: "B",
        exp: "Monitorare la propria reputazione digitale e controllare cosa si condivide è una pratica importante."
    },
    {
        id: 59,
        category: "1.2",
        q: "Quale è il ruolo della 'consapevolezza critica' nella valutazione delle informazioni?",
        a: { A: "Rifiutare tutto ciò che leggiamo online", B: "Accettare tutte le informazioni senza dubbi", C: "Valutare le informazioni con spirito critico prima di accettarle", D: "Ignorare le fonti online" },
        correct: "C",
        exp: "La consapevolezza critica implica valutare le informazioni in modo razionale e basato su evidenze."
    },
    {
        id: 60,
        category: "1.2",
        q: "Quale competenza è essenziale per proteggere sé stessi dalle truffe online?",
        a: { A: "La creazione di contenuti", B: "La consapevolezza dei rischi e la conoscenza delle pratiche di sicurezza", C: "La programmazione", D: "Il design grafico" },
        correct: "B",
        exp: "La consapevolezza dei rischi e la conoscenza delle pratiche di sicurezza sono fondamentali per proteggersi dalle truffe."
    },
    {
        id: 61,
        category: "1.3",
        q: "Quale è la prima competenza nell'area 'Comunicazione e collaborazione'?",
        a: { A: "Condivisione di file", B: "Interazione tramite le tecnologie digitali", C: "Video conferenza", D: "Chat online" },
        correct: "B",
        exp: "L'interazione tramite tecnologie digitali è la competenza fondamentale per la comunicazione online."
    },
    {
        id: 62,
        category: "1.3",
        q: "Quale piattaforma è un esempio di strumento di collaborazione digitale?",
        a: { A: "Microsoft Word offline", B: "Google Drive e Google Docs", C: "Notepad", D: "Un foglio di carta" },
        correct: "B",
        exp: "Google Drive e Google Docs sono strumenti cloud che consentono la collaborazione in tempo reale."
    },
    {
        id: 63,
        category: "1.3",
        q: "Come si definisce la 'netiquette'?",
        a: { A: "Un virus informatico", B: "Le regole di buona educazione quando si comunica online", C: "Un tipo di browser", D: "Una malattia informatica" },
        correct: "B",
        exp: "La netiquette è l'insieme delle norme di cortesia e comportamento appropriato nella comunicazione digitale."
    },
    {
        id: 64,
        category: "1.3",
        q: "Quale è una regola importante della netiquette?",
        a: { A: "Scrivere sempre in maiuscole", B: "Non rispondere a nessuno", C: "Usare un linguaggio rispettoso e cortese", D: "Condividere informazioni personali altrui" },
        correct: "C",
        exp: "Utilizzare un linguaggio rispettoso è una regola fondamentale della netiquette."
    },
    {
        id: 65,
        category: "1.3",
        q: "Quale tra i seguenti è un esempio di cyberbullismo?",
        a: { A: "Scrivere un commento incoraggiante", B: "Mandare messaggi intimidatori o offensivi", C: "Fare una video chiamata", D: "Condividere una foto bella" },
        correct: "B",
        exp: "Il cyberbullismo consiste nell'invio di messaggi offensivi, minacciosi o umilianti online."
    },
    {
        id: 66,
        category: "1.3",
        q: "Quale è una pratica corretta nelle comunicazioni professionali online?",
        a: { A: "Mandare messaggi a qualsiasi ora", B: "Usare un linguaggio formale e controllare l'ortografia", C: "Mandare messaggi senza leggerli", D: "Rispondere immediatamente senza riflettere" },
        correct: "B",
        exp: "Nelle comunicazioni professionali online è importante usare un linguaggio formale e controllare la qualità."
    },
    {
        id: 67,
        category: "1.3",
        q: "Cosa si intende con 'digital footprint' (impronta digitale)?",
        a: { A: "Un software di protezione", B: "L'insieme delle tracce digitali che lasciamo online", C: "Un tipo di malware", D: "Una password sicura" },
        correct: "B",
        exp: "L'impronta digitale è la traccia di informazioni e attività che lasciamo quando usiamo Internet."
    },
    {
        id: 68,
        category: "1.3",
        q: "Come si può ridurre la propria impronta digitale?",
        a: { A: "Non usare Internet mai", B: "Controllare i settaggi di privacy e limitare le informazioni condivise", C: "Usare solo dispositivi mobili", D: "Non avere account online" },
        correct: "B",
        exp: "Gestire i settaggi di privacy e condividere meno informazioni personali aiuta a ridurre l'impronta digitale."
    },
    {
        id: 69,
        category: "1.3",
        q: "Quale è un beneficio delle piattaforme di collaborazione online?",
        a: { A: "Aumentano l'isolamento", B: "Consentono il lavoro da remoto e la collaborazione in tempo reale", C: "Rallentano il lavoro", D: "Non hanno benefici" },
        correct: "B",
        exp: "Le piattaforme di collaborazione online permettono il lavoro remoto e la cooperazione efficiente tra team."
    },
    {
        id: 70,
        category: "1.3",
        q: "Come si chiama il fenomeno dove le persone si comportano in modo diverso online rispetto alla vita reale?",
        a: { A: "Identità virtuale", B: "L'effetto di disinibizione online", C: "Avatar", D: "Nickname" },
        correct: "B",
        exp: "L'effetto di disinibizione online è la tendenza a comportarsi meno cortesemente online rispetto alla vita reale."
    },
    {
        id: 71,
        category: "1.3",
        q: "Quale è una conseguenza positiva della comunicazione digitale?",
        a: { A: "Isolamento sociale", B: "Connessione con persone in tutto il mondo", C: "Perdita di amicizie", D: "Diminuzione della produttività" },
        correct: "B",
        exp: "La comunicazione digitale consente di connettersi con persone indipendentemente dalla locazione geografica."
    },
    {
        id: 72,
        category: "1.3",
        q: "Cosa significa 'digital divide'?",
        a: { A: "Una divisione tra i continenti", B: "La disparità nell'accesso a tecnologia e Internet", C: "Un tipo di software", D: "Una malattia informatica" },
        correct: "B",
        exp: "Il digital divide è la differenza nell'accesso alle tecnologie digitali e Internet tra diversi gruppi sociali."
    },
    {
        id: 73,
        category: "1.3",
        q: "Come si chiama l'atto di condividere accidentalmente informazioni private online?",
        a: { A: "Privacy", B: "Oversharing", C: "Confidenzialità", D: "Sicurezza" },
        correct: "B",
        exp: "L'oversharing è il condividere più informazioni personali di quante sarebbero appropriate."
    },
    {
        id: 74,
        category: "1.3",
        q: "Quale è un rischio della comunicazione online asincrona?",
        a: { A: "È troppo veloce", B: "I malintesi possono verificarsi più facilmente senza feedback immediato", C: "Non ci sono rischi", D: "È troppo costosa" },
        correct: "B",
        exp: "Nella comunicazione asincrona, l'assenza di feedback immediato può portare a malintesi."
    },
    {
        id: 75,
        category: "1.3",
        q: "Come si può migliorare la collaborazione online?",
        a: { A: "Ignorare i contributi degli altri", B: "Comunicare chiaramente gli obiettivi e usare strumenti appropriati", C: "Lavorare sempre da soli", D: "Usare sempre call vocali" },
        correct: "B",
        exp: "Una comunicazione chiara degli obiettivi e l'uso di strumenti idonei migliorano la collaborazione."
    },
    {
        id: 76,
        category: "1.3",
        q: "Quale è una pratica corretta per il digital etiquette?",
        a: { A: "Rispondere immediatamente a tutti i messaggi", B: "Rispettare il tempo degli altri e stabilire confini di comunicazione", C: "Contattare tutti a qualsiasi ora", D: "Ignorare le preferenze di comunicazione altrui" },
        correct: "B",
        exp: "Stabilire confini e rispettare il tempo degli altri è essenziale per il digital etiquette."
    },
    {
        id: 77,
        category: "1.3",
        q: "Cosa si intende con 'presence online'?",
        a: { A: "Il possesso di un computer", B: "La visibilità e l'identità che una persona ha nel mondo digitale", C: "L'accesso a Internet", D: "Il numero di email ricevute" },
        correct: "B",
        exp: "La presence online è la visibilità e la rappresentazione di sé nel mondo digitale."
    },
    {
        id: 78,
        category: "1.3",
        q: "Quale tra i seguenti è un aspetto positivo dei social media nella comunicazione?",
        a: { A: "Aumentano l'ansia", B: "Consentono la connessione e la condivisione con comunità", C: "Riducono l'amicizia", D: "Non hanno aspetti positivi" },
        correct: "B",
        exp: "I social media consentono di creare connessioni e condividere interessi comuni con comunità globali."
    },
    {
        id: 79,
        category: "1.3",
        q: "Come si chiama il fenomeno dove le cattive comunicazioni online si amplificano?",
        a: { A: "Comunicazione positiva", B: "Viralità negativa", C: "Diffusione", D: "Condivisione" },
        correct: "B",
        exp: "La viralità negativa si verifica quando i messaggi negativi si diffondono rapidamente online."
    },
    {
        id: 80,
        category: "1.3",
        q: "Quale è una conseguenza importante della comunicazione digitale asincrona?",
        a: { A: "Aumenta sempre la produttività", B: "Consente flessibilità nella tempistica dei risposte", C: "Riduce la comunicazione", D: "È sempre inefficace" },
        correct: "B",
        exp: "La comunicazione asincrona consente a ognuno di rispondere secondo i propri tempi e fusi orari."
    },
    {
        id: 81,
        category: "1.3",
        q: "Quale pratica aiuta a mantener professionalità nella comunicazione online?",
        a: { A: "Mandare messaggi scurili", B: "Usare un tono appropriato e verificare il contenuto prima dell'invio", C: "Condividere tutte le emozioni senza filtri", D: "Rispondere quando arrabbiati" },
        correct: "B",
        exp: "Verificare il tono e il contenuto prima di inviare mantiene la professionalità nelle comunicazioni online."
    },
    {
        id: 82,
        category: "1.3",
        q: "Come si può gestire il sovraccarico di comunicazioni online?",
        a: { A: "Ignorare tutto", B: "Rispondere a tutto immediatamente", C: "Stabilire priorità e impostare tempi per controllare i messaggi", D: "Non usare nessun canale di comunicazione" },
        correct: "C",
        exp: "Stabilire priorità e dedicare tempo specifico alla comunicazione aiuta a gestire il sovraccarico."
    },
    {
        id: 83,
        category: "1.3",
        q: "Quale è un beneficio della collaborazione asincrona?",
        a: { A: "È sempre più lenta", B: "Consente la partecipazione di persone in fusi orari diversi", C: "Riduce la partecipazione", D: "Non ha benefici" },
        correct: "B",
        exp: "La collaborazione asincrona permette la partecipazione globale indipendentemente dal fuso orario."
    },
    {
        id: 84,
        category: "1.3",
        q: "Come si chiama la pratica di ignorare le norme sociali online?",
        a: { A: "Netiquette", B: "Flaming o comportamento scortese online", C: "Collaborazione", D: "Comunicazione" },
        correct: "B",
        exp: "Il flaming è il comportamento scortese, spesso aggressivo, nella comunicazione online."
    },
    {
        id: 85,
        category: "1.3",
        q: "Quale è una strategia per una comunicazione efficace online?",
        a: { A: "Essere il più veloce possibile", B: "Essere chiaro, conciso e considerato", C: "Usare sempre maiuscole", D: "Non rileggere mai i messaggi" },
        correct: "B",
        exp: "Essere chiaro e conciso nella comunicazione online migliora l'efficacia dello scambio di messaggi."
    },
    {
        id: 86,
        category: "1.3",
        q: "Come si può rispettare la privacy altrui nella comunicazione online?",
        a: { A: "Condividere le loro informazioni", B: "Non chiedere permesso prima di condividere", C: "Chiedere permesso prima di condividere informazioni personali altrui", D: "Ignorare le loro preferenze" },
        correct: "C",
        exp: "Chiedere il permesso prima di condividere informazioni personali di altri è una pratica importante."
    },
    {
        id: 87,
        category: "1.3",
        q: "Quale è il ruolo della 'empatia digitale' nella comunicazione online?",
        a: { A: "Non ha ruolo", B: "Comprendere i sentimenti degli altri anche online e rispondere compassionevolmente", C: "Ignorare gli altri", D: "Essere il più duro possibile" },
        correct: "B",
        exp: "L'empatia digitale implica la capacità di comprendere e rispondere con sensibilità ai sentimenti degli altri online."
    },
    {
        id: 88,
        category: "1.3",
        q: "Quale è una conseguenza negativa del cyberbullismo?",
        a: { A: "Nessuna", B: "Danni psicologici e diminuzione dell'autostima della vittima", C: "Divertimento", D: "Benefici sociali" },
        correct: "B",
        exp: "Il cyberbullismo causa gravi danni psicologici alla vittima, inclusi ansia e depressione."
    },
    {
        id: 89,
        category: "1.3",
        q: "Come si può contribuire a un ambiente online positivo?",
        a: { A: "Inviare messaggi negativi", B: "Essere inclusivi, rispettosi e supportare gli altri", C: "Escludere persone", D: "Diffondere odio" },
        correct: "B",
        exp: "Comportarsi in modo inclusivo e supportivo contribuisce a creare un ambiente online positivo."
    },
    {
        id: 90,
        category: "1.3",
        q: "Quale tra i seguenti è un rischio della sovraesposizione online?",
        a: { A: "Nessun rischio", B: "Furto di identità e stalking", C: "Benefici personali", D: "Crescita della fama" },
        correct: "B",
        exp: "La sovraesposizione online aumenta i rischi di furto di identità, stalking e abusi."
    },
    {
        id: 91,
        category: "2.1",
        q: "Quale è la prima competenza nell'area 'Creazione di contenuti digitali'?",
        a: { A: "Modificare video", B: "Creare contenuti in vari formati (testo, immagini, audio, video)", C: "Usare Photoshop", D: "Programmare" },
        correct: "B",
        exp: "Creare contenuti in vari formati è la competenza fondamentale dell'area Creazione di contenuti."
    },
    {
        id: 92,
        category: "2.1",
        q: "Quale software è comunemente usato per la creazione di contenuti video?",
        a: { A: "Notepad", B: "Windows Explorer", C: "Adobe Premiere o similari", D: "Microsoft Excel" },
        correct: "C",
        exp: "Adobe Premiere e software simili sono specificamente progettati per l'editing video."
    },
    {
        id: 93,
        category: "2.1",
        q: "Cosa significa 'remixing' nel contesto della creazione digitale?",
        a: { A: "Eliminare contenuti", B: "Combinare e reinterpretare contenuti esistenti per creare qualcosa di nuovo", C: "Copiare senza permesso", D: "Scaricare file" },
        correct: "B",
        exp: "Il remixing è la pratica creativa di combinare e trasformare contenuti esistenti, rispettando i diritti d'autore."
    },
    {
        id: 94,
        category: "2.1",
        q: "Quale è un aspetto importante della licenza Creative Commons?",
        a: { A: "Vieta completamente l'uso dei contenuti", B: "Consente l'uso dei contenuti con certe condizioni", C: "Richiede il pagamento", D: "È obbligatoria" },
        correct: "B",
        exp: "Le licenze Creative Commons consentono l'uso di contenuti con specifiche condizioni (attribuzione, non commerciale, ecc.)."
    },
    {
        id: 95,
        category: "2.1",
        q: "Come si chiama il software per la creazione di presentazioni digitali?",
        a: { A: "Word", B: "PowerPoint o similari", C: "Paint", D: "Notepad" },
        correct: "B",
        exp: "PowerPoint e strumenti simili sono usati per creare presentazioni digitali con slide, immagini e testo."
    },
    {
        id: 96,
        category: "2.1",
        q: "Quale è una pratica corretta quando si utilizzano contenuti altrui?",
        a: { A: "Copiarli senza permesso", B: "Citare l'autore e rispettare i diritti d'autore", C: "Cancellare l'attributo di authorship", D: "Non citare mai la fonte" },
        correct: "B",
        exp: "Attribuire e citare correttamente la fonte è una pratica etica e legale fondamentale."
    },
    {
        id: 97,
        category: "2.1",
        q: "Quali sono i principali formati di file per le immagini digitali?",
        a: { A: "JPG, PNG, GIF, BMP", B: "Solo JPG", C: "Solo PNG", D: "Solo PDF" },
        correct: "A",
        exp: "JPG, PNG, GIF e BMP sono i formati di immagine più comuni e supportati su Internet."
    },
    {
        id: 98,
        category: "2.1",
        q: "Cosa significa 'risoluzione' nel contesto delle immagini digitali?",
        a: { A: "Il colore dell'immagine", B: "Il numero di pixel per pollice (DPI)", C: "Il peso del file", D: "La velocità di download" },
        correct: "B",
        exp: "La risoluzione indica il numero di pixel per pollice (DPI), influenzando la chiarezza dell'immagine."
    },
    {
        id: 99,
        category: "2.1",
        q: "Quale è un software gratuito per la modifica di immagini?",
        a: { A: "Adobe Photoshop (a pagamento)", B: "GIMP", C: "Corel Draw", D: "Capture One" },
        correct: "B",
        exp: "GIMP è un software open-source gratuito per la modifica di immagini."
    },
    {
        id: 100,
        category: "2.1",
        q: "Come si chiama il processo di conversione di un file in un formato diverso?",
        a: { A: "Copia", B: "Conversione o encoding", C: "Download", D: "Upload" },
        correct: "B",
        exp: "La conversione di file è il processo di trasformazione da un formato a un altro."
    },
    {
        id: 101,
        category: "2.1",
        q: "Quale è l'importanza della 'usabilità' nel design di contenuti digitali?",
        a: { A: "Non ha importanza", B: "Rendere i contenuti facili da usare e accessibili agli utenti", C: "Rendere i contenuti complicati", D: "Creare contenuti difficili da capire" },
        correct: "B",
        exp: "L'usabilità è la capacità di un contenuto digitale di essere facilmente utilizzabile dagli utenti."
    },
    {
        id: 102,
        category: "2.1",
        q: "Cosa significa 'responsive design'?",
        a: { A: "Un design antiquato", B: "Un design che si adatta automaticamente a diversi schermi e dispositivi", C: "Un design statico", D: "Un design lento" },
        correct: "B",
        exp: "Il responsive design è un approccio che garantisce che i contenuti si adattino a vari dispositivi e dimensioni di schermo."
    },
    {
        id: 103,
        category: "2.1",
        q: "Quale è una buona pratica per la creazione di contenuti web accessibili?",
        a: { A: "Non usare testo alternativo", B: "Usare testo alternativo per immagini (alt text)", C: "Usare solo colori", D: "Ignorare gli utenti disabili" },
        correct: "B",
        exp: "Il testo alternativo per le immagini è essenziale per rendere i contenuti accessibili agli utenti con disabilità visive."
    },
    {
        id: 104,
        category: "2.1",
        q: "Come si chiama la combinazione di testo, immagini, audio e video?",
        a: { A: "Ipertesto", B: "Contenuto multimediale", C: "Ipermediale", D: "Streaming" },
        correct: "B",
        exp: "Il contenuto multimediale integra diversi media (testo, immagini, audio, video) in un'unica risorsa."
    },
    {
        id: 105,
        category: "2.1",
        q: "Quale è un aspetto importante della 'SEO' (Search Engine Optimization)?",
        a: { A: "Nascondere le parole chiave", B: "Ottimizzare il contenuto per essere trovato dai motori di ricerca", C: "Usare solo immagini", D: "Ignorare i motori di ricerca" },
        correct: "B",
        exp: "L'ottimizzazione per i motori di ricerca include l'uso di parole chiave, meta tag e contenuto di qualità."
    },
    {
        id: 106,
        category: "2.1",
        q: "Cosa significa 'infografica'?",
        a: { A: "Un video lungo", B: "Una rappresentazione visuale di informazioni e dati complessi", C: "Un articolo di testo", D: "Una canzone" },
        correct: "B",
        exp: "Un'infografica è un modo visivo di presentare informazioni che rende i dati complessi facili da comprendere."
    },
    {
        id: 107,
        category: "2.1",
        q: "Quale software è utilizzato per creare contenuti 3D?",
        a: { A: "Microsoft Word", B: "Blender o similari", C: "Notepad", D: "Calculator" },
        correct: "B",
        exp: "Blender è un software gratuito e open-source per la modellazione e rendering 3D."
    },
    {
        id: 108,
        category: "2.1",
        q: "Come si chiama il processo di distribuzione di video in Internet?",
        a: { A: "Casting", B: "Streaming", C: "Downloading", D: "Uploading" },
        correct: "B",
        exp: "Lo streaming è la tecnologia che consente di guardare video online in tempo reale senza scaricarli completamente."
    },
    {
        id: 109,
        category: "2.1",
        q: "Quale è un aspetto importante della 'brand identity' digitale?",
        a: { A: "Non ha importanza", B: "Coerenza visuale e di messaggio su tutti i canali digitali", C: "Cambiare frequentemente", D: "Essere incoerente" },
        correct: "B",
        exp: "L'identità visuale e verbale coerente aiuta a creare un riconoscimento del brand."
    },
    {
        id: 110,
        category: "2.1",
        q: "Cosa significa 'storytelling digitale'?",
        a: { A: "Raccontare storie false", B: "Usare vari media digitali per raccontare storie coinvolgenti", C: "Non raccontare storie", D: "Raccontare solo a voce" },
        correct: "B",
        exp: "Lo storytelling digitale utilizza i media digitali (testo, immagini, video, audio) per raccontare storie persuasive."
    },
    {
        id: 111,
        category: "2.2",
        q: "Quale è la competenza relativa alla capacità di risolvere problemi tecnici?",
        a: { A: "Troubleshooting", B: "Design", C: "Comunicazione", D: "Collaborazione" },
        correct: "A",
        exp: "Il troubleshooting è la capacità di identificare e risolvere problemi tecnici."
    },
        {
        id: 112,
        category: "2.2",
        q: "Come si affrontano i problemi di connessione a Internet?",
        a: { A: "Ignorarli", B: "Verificare il router, il modem, la linea e contattare il provider se necessario", C: "Cambiare computer", D: "Smettere di usare Internet" },
        correct: "B",
        exp: "Verificare hardware e contattare il provider è il procedimento corretto per risolvere i problemi di connessione."
    },
    {
        id: 113,
        category: "2.2",
        q: "Quale è il primo passo quando un programma non funziona?",
        a: { A: "Disinstallare tutto", B: "Riavviare il programma e il computer", C: "Formattare il disco", D: "Buttare il computer" },
        correct: "B",
        exp: "Il riavvio del programma e del computer è spesso la soluzione più semplice ed efficace."
    },
    {
        id: 114,
        category: "2.2",
        q: "Cosa sono i 'log' di sistema?",
        a: { A: "File di legno", B: "Registri che contengono informazioni su errori e attività del sistema", C: "Programmi di logging", D: "File temporanei" },
        correct: "B",
        exp: "I log di sistema registrano errori, avvisi e attività che aiutano a diagnosticare i problemi."
    },
    {
        id: 115,
        category: "2.2",
        q: "Come si identifica un problema di hardware?",
        a: { A: "Solo guardando il computer", B: "Cercando segnali fisici (rumori strani, surriscaldamento) e verificando le prestazioni", C: "Non è possibile", D: "Sempre tramite software" },
        correct: "B",
        exp: "I problemi hardware si manifestano con segnali fisici e degradazione delle prestazioni."
    },
    {
        id: 116,
        category: "2.2",
        q: "Quale è un segnale di malware sul computer?",
        a: { A: "Il computer funziona più velocemente", B: "Rallentamento, comportamenti strani, finestre pop-up non autorizzate", C: "Nessun segnale", D: "Il computer è più sicuro" },
        correct: "B",
        exp: "Rallentamento inaspettato, pop-up e comportamenti strani sono indicatori di possibile malware."
    },
    {
        id: 117,
        category: "2.2",
        q: "Come si può prevenire i problemi di malware?",
        a: { A: "Non fare nulla", B: "Usare antivirus, firewall e mantenere il sistema aggiornato", C: "Disabilitare la protezione", D: "Scaricare tutto da Internet" },
        correct: "B",
        exp: "Protezione attiva con antivirus, firewall e aggiornamenti regolari previene la maggior parte dei malware."
    },
    {
        id: 118,
        category: "2.2",
        q: "Cosa significa 'aggiornamento di sicurezza'?",
        a: { A: "Un cambiamento nel design", B: "Una patch che corregge vulnerabilità di sicurezza scoperte", C: "Un nuovo programma", D: "Un cambio di password" },
        correct: "B",
        exp: "Gli aggiornamenti di sicurezza correggono le vulnerabilità che potrebbero essere sfruttate da hacker."
    },
    {
        id: 119,
        category: "2.2",
        q: "Come si gestisce uno spazio disco pieno?",
        a: { A: "Non fare nulla", B: "Eliminare file inutili, svuotare il cestino, disinstallare programmi non usati", C: "Smettere di usare il computer", D: "Formattare il disco rigido" },
        correct: "B",
        exp: "Eliminare file non necessari e programmi inutili libera spazio e migliora le prestazioni."
    },
    {
        id: 120,
        category: "2.2",
        q: "Quale è un'utilità di sistema importante?",
        a: { A: "Nessuno è importante", B: "Gestione Attività (Task Manager), Disk Cleanup, Deframmentazione", C: "Solo i giochi", D: "I social media" },
        correct: "B",
        exp: "Gestione Attività, Disk Cleanup e Deframmentazione sono strumenti essenziali per la manutenzione."
    },
    {
        id: 121,
        category: "2.2",
        q: "Come si diagnostica un problema di memoria RAM insufficiente?",
        a: { A: "È impossibile diagnosticarlo", B: "Rallentamento grave, programmi che si chiudono, freezing del sistema", C: "Il computer diventa più veloce", D: "Non ci sono segnali" },
        correct: "B",
        exp: "La RAM insufficiente causa rallentamenti, crash di programmi e freezing del sistema operativo."
    },
    {
        id: 122,
        category: "2.2",
        q: "Quale è la soluzione quando il computer si blocca frequentemente?",
        a: { A: "Ignorare il problema", B: "Controllare aggiornamenti, disinstallare software problematico, verificare la temperatura", C: "Buttare il computer", D: "Non fare nulla" },
        correct: "B",
        exp: "Controllare aggiornamenti, driver, software conflittuali e temperatura aiuta a diagnosticare i freeze."
    },
    {
        id: 123,
        category: "2.2",
        q: "Come si procede al ripristino di un sistema danneggiato?",
        a: { A: "È impossibile", B: "Usare un backup, modalità provvisoria, ripristino del sistema", C: "Disinstallare tutto", D: "Non fare nulla" },
        correct: "B",
        exp: "I backup e le funzioni di ripristino del sistema sono i metodi principali per recuperare."
    },
    {
        id: 124,
        category: "2.2",
        q: "Quale è un'importanza di mantenere il BIOS aggiornato?",
        a: { A: "Non è importante", B: "Migliora la stabilità, la sicurezza e la compatibilità hardware", C: "Lo rende lento", D: "Non ha effetto" },
        correct: "B",
        exp: "L'aggiornamento del BIOS risolve problemi di compatibilità e aumenta la sicurezza."
    },
    {
        id: 125,
        category: "2.2",
        q: "Come si gestisce un programma che non risponde?",
        a: { A: "Spegnere il computer", B: "Usare Gestione Attività per forzare la chiusura", C: "Aspettare indefinitamente", D: "Cancellare il disco rigido" },
        correct: "B",
        exp: "Gestione Attività consente di forzare la chiusura di programmi che non rispondono."
    },
    {
        id: 126,
        category: "3.1",
        q: "Quale è la principale vulnerabilità nell'uso delle password?",
        a: { A: "Sono troppo lunghe", B: "Sono facili da indovinare o sono condivise", C: "Sono in numeri", D: "Non hanno importanza" },
        correct: "B",
        exp: "Le password deboli o condivise sono la principale vulnerabilità negli account digitali."
    },
    {
        id: 127,
        category: "3.1",
        q: "Quali caratteristiche deve avere una password sicura?",
        a: { A: "Essere corta", B: "Essere facile da ricordare", C: "Essere lunga (almeno 12 caratteri), con maiuscole, minuscole, numeri e simboli", D: "Non avere una password" },
        correct: "C",
        exp: "Una password sicura contiene almeno 12 caratteri misti (maiuscole, minuscole, numeri, simboli)."
    },
    {
        id: 128,
        category: "3.1",
        q: "Cosa è l'autenticazione a due fattori (2FA)?",
        a: { A: "Una sola password", B: "Una verifica in due steps (password + codice/dispositivo)", C: "Una password doppia", D: "Non esiste" },
        correct: "B",
        exp: "La 2FA richiede due forme di verifica, aumentando significativamente la sicurezza dell'account."
    },
    {
        id: 129,
        category: "3.1",
        q: "Come si riconosce un tentativo di phishing?",
        a: { A: "Non è possibile", B: "Email sospette che chiedono dati personali, link falsi, errori di battitura", C: "Sono sempre evidenti", D: "Non esistono" },
        correct: "B",
        exp: "Il phishing si manifesta con email sospette, richiedenti di verificare account o cliccando link falsi."
    },
    {
        id: 130,
        category: "3.1",
        q: "Quale è l'importanza di mantenere il software aggiornato per la sicurezza?",
        a: { A: "Non è importante", B: "Gli aggiornamenti correggono vulnerabilità di sicurezza", C: "Lo rende lento", D: "Aumenta i virus" },
        correct: "B",
        exp: "Gli aggiornamenti software includono patch di sicurezza che proteggono dai vulnerabilità note."
    },
    {
        id: 131,
        category: "3.1",
        q: "Cosa è un antivirus e come funziona?",
        a: { A: "Un programma inutile", B: "Software che identifica e rimuove malware dal computer", C: "Un gioco", D: "Una connessione Internet" },
        correct: "B",
        exp: "L'antivirus scansiona i file e il sistema per identificare e quarantinare il malware."
    },
    {
        id: 132,
        category: "3.1",
        q: "Quale è il ruolo di un firewall?",
        a: { A: "Accendere il fuoco", B: "Monitorare e controllare il traffico di rete in entrata e uscita", C: "Eliminare file", D: "Non ha ruolo" },
        correct: "B",
        exp: "Un firewall filtra il traffico di rete, bloccando accessi non autorizzati."
    },
    {
        id: 133,
        category: "3.1",
        q: "Cosa significa 'ransomware'?",
        a: { A: "Un software veloce", B: "Malware che crittografa i file e richiede un pagamento", C: "Un antivirus", D: "Una password" },
        correct: "B",
        exp: "Il ransomware cripta i dati dell'utente e richiede un pagamento per decriptarli."
    },
    {
        id: 134,
        category: "3.1",
        q: "Come si protegge il computer da malware?",
        a: { A: "Non è possibile", B: "Antivirus, firewall, aggiornamenti, download da fonti affidabili", C: "Spegnere il computer", D: "Non fare nulla" },
        correct: "B",
        exp: "Una protezione multilayered (antivirus, firewall, aggiornamenti) è la miglior difesa contro il malware."
    },
    {
        id: 135,
        category: "3.1",
        q: "Quale è un rischio di usare reti WiFi pubbliche?",
        a: { A: "Nessun rischio", B: "Possibile intercettazione dei dati non criptati", C: "La velocità è garantita", D: "La privacy è garantita" },
        correct: "B",
        exp: "Le reti WiFi pubbliche non criptate consentono l'intercettazione dei dati dagli hacker."
    },
    {
        id: 136,
        category: "3.1",
        q: "Cosa è una VPN e a cosa serve?",
        a: { A: "Un'applicazione di video calling", B: "Una rete privata virtuale che crittografa la connessione", C: "Un gioco online", D: "Una email" },
        correct: "B",
        exp: "Una VPN cripta il traffico e nasconde l'indirizzo IP, garantendo privacy e sicurezza online."
    },
    {
        id: 137,
        category: "3.1",
        q: "Come si gestiscono i cookie sul browser?",
        a: { A: "Non si possono gestire", B: "Accettarli tutti", C: "Selezionare quali cookie permettere o bloccarli dalle impostazioni di privacy", D: "Non importa" },
        correct: "C",
        exp: "Gestire i cookie consente di controllare quali dati i siti web possono salvare sul dispositivo."
    },
    {
        id: 138,
        category: "3.1",
        q: "Quale è una pratica sicura con i backup?",
        a: { A: "Non fare backup", B: "Fare backup regolari e memorizzarli offline", C: "Fare backup solo una volta all'anno", D: "Backup solo in cloud senza copia locale" },
        correct: "B",
        exp: "Backup regolari, con copia offline, proteggono da perdita di dati e ransomware."
    },
    {
        id: 139,
        category: "3.1",
        q: "Come si riconosce un sito sicuro?",
        a: { A: "Non è possibile riconoscerlo", B: "URL che inizia con https://, lucchetto nel browser", C: "Ha molti annunci", D: "Non ha importanza" },
        correct: "B",
        exp: "Il protocollo HTTPS e l'icona del lucchetto indicano una connessione sicura e criptata."
    },
    {
        id: 140,
        category: "3.1",
        q: "Quale è l'importanza di non usare la stessa password ovunque?",
        a: { A: "Non ha importanza", B: "Se un account viene compromesso, tutti gli account sono a rischio", C: "Rende la vita facile", D: "Non importa per la sicurezza" },
        correct: "B",
        exp: "Usare password diverse per ogni account limita i danni se un account viene compromesso."
    },
    {
        id: 141,
        category: "3.1",
        q: "Cosa è uno 'zero-day exploit'?",
        a: { A: "Un software gratuito", B: "Un attacco che sfrutta una vulnerabilità sconosciuta agli sviluppatori", C: "Un tipo di backup", D: "Una password" },
        correct: "B",
        exp: "Uno zero-day exploit sfrutta una vulnerabilità non ancora nota al pubblico o agli sviluppatori."
    },
    {
        id: 142,
        category: "3.1",
        q: "Come si protegge l'identità digitale?",
        a: { A: "Condividendo tutto online", B: "Proteggendo i dati personali, usando password forti, verificando accessi", C: "Non proteggendosi", D: "Usando il proprio nome vero ovunque" },
        correct: "B",
        exp: "Proteggere l'identità digitale richiede password forti, limitare i dati condivisi e monitorare gli accessi."
    },
    {
        id: 143,
        category: "3.1",
        q: "Quale è un rischio dei social media per la sicurezza?",
        a: { A: "Nessun rischio", B: "Furto di identità, stalking, truffa attraverso informazioni personali condivise", C: "Sono totalmente sicuri", D: "Non hanno rischi di sicurezza" },
        correct: "B",
        exp: "I social media presentano rischi di furto d'identità e truffa se non si proteggono i dati personali."
    },
    {
        id: 144,
        category: "3.1",
        q: "Cosa significa 'crittografia end-to-end'?",
        a: { A: "Nessuna crittografia", B: "I dati sono criptati dal mittente e decriptati solo dal destinatario", C: "Una crittografia debole", D: "Non esiste" },
        correct: "B",
        exp: "La crittografia end-to-end garantisce che solo il mittente e il destinatario possono leggere il messaggio."
    },
    {
        id: 145,
        category: "3.1",
        q: "Come si gestiscono le notifiche di sicurezza dal proprio account?",
        a: { A: "Ignorarle", B: "Verificarle immediatamente e cambiate password se sospettate", C: "Non leggerle", D: "Cancellarle" },
        correct: "B",
        exp: "Le notifiche di accesso sospetto devono essere verificate immediatamente per prevenire compromissioni."
    },
    {
        id: 146,
        category: "3.2",
        q: "Quale è la definizione di 'protezione dati personali'?",
        a: { A: "Non proteggere i dati", B: "Garantire che le informazioni personali siano utilizzate legalmente e eticamente", C: "Condividere tutto", D: "Non importa chi ha i dati" },
        correct: "B",
        exp: "La protezione dei dati significa assicurare che le informazioni personali siano usate in modo legale e sicuro."
    },
    {
        id: 147,
        category: "3.2",
        q: "Cosa è il GDPR?",
        a: { A: "Un tipo di virus", B: "Regolamento UE sulla protezione dei dati personali", C: "Una password", D: "Un browser" },
        correct: "B",
        exp: "Il GDPR è il Regolamento Generale sulla Protezione dei Dati dell'Unione Europea."
    },
    {
        id: 148,
        category: "3.2",
        q: "Quale è un diritto garantito dal GDPR?",
        a: { A: "Nessun diritto", B: "Diritto di accesso, rettifica e cancellazione dei propri dati", C: "Solo leggere", D: "Non ha diritti" },
        correct: "B",
        exp: "Il GDPR garantisce il diritto di accedere, corregger e cancellare i propri dati personali."
    },
    {
        id: 149,
        category: "3.2",
        q: "Come deve essere gestito il consenso per il trattamento dei dati?",
        a: { A: "Non è necessario", B: "Ottenuto in modo esplicito e informato", C: "È opzionale", D: "Non importa" },
        correct: "B",
        exp: "Il consenso deve essere esplicito, libero e informato, con chiara spiegazione di come verranno usati i dati."
    },
    {
        id: 150,
        category: "3.2",
        q: "Quale è una violazione della privacy online?",
        a: { A: "Proteggere i dati", B: "Raccogliere dati senza consenso o condividere dati non autorizzati", C: "Usare password forti", D: "Verificare gli accessi" },
        correct: "B",
        exp: "La raccolta non autorizzata di dati o la condivisione senza consenso è una violazione della privacy."
    },
    {
        id: 151,
        category: "3.2",
        q: "Come si protegge la privacy in una email?",
        a: { A: "Non è possibile", B: "Usando crittografia, evitando informazioni sensibili, verificando il destinatario", C: "L'email non ha privacy", D: "Condividendo tutto" },
        correct: "B",
        exp: "Crittografare email, verificare il destinatario e evitare dati sensibili proteggono la privacy."
    },
    {
        id: 152,
        category: "3.2",
        q: "Cosa significa 'data minimization' nel GDPR?",
        a: { A: "Raccogliere il massimo di dati", B: "Raccogliere solo i dati necessari per uno scopo specifico", C: "Non raccogliere dati", D: "Raccogliere a caso" },
        correct: "B",
        exp: "Il principio di minimizzazione dei dati prevede di raccogliere solo ciò che è necessario."
    },
    {
        id: 153,
        category: "3.2",
        q: "Come si garantisce la trasparenza nella raccolta di dati?",
        a: { A: "Non informando gli utenti", B: "Informando chiaramente di cosa viene raccolto e come viene usato", C: "Nascondendo le politiche", D: "Non pubblicando la privacy policy" },
        correct: "B",
        exp: "La trasparenza richiede di informare chiaramente gli utenti su raccolta e uso dei loro dati."
    },
    {
        id: 154,
        category: "3.2",
        q: "Quale è la conseguenza di una violazione GDPR?",
        a: { A: "Nessuna conseguenza", B: "Multa fino a 20 milioni di euro o 4% del fatturato annuale globale", C: "Un avvertimento", D: "Non è punibile" },
        correct: "B",
        exp: "Le violazioni GDPR comportano multe significative fino a 20 milioni di euro o il 4% del fatturato."
    },
    {
        id: 155,
        category: "3.2",
        q: "Come si gestisce una richiesta di diritto all'oblio?",
        a: { A: "Ignorarla", B: "Cancellare i dati personali come richiesto, a meno di eccezioni legali", C: "Rifiutarla", D: "Condividere con altri" },
        correct: "B",
        exp: "Il diritto all'oblio consente agli utenti di richiedere la cancellazione dei loro dati personali."
    },
    {
        id: 156,
        category: "3.2",
        q: "Cosa è un 'Data Protection Officer' (DPO)?",
        a: { A: "Un amministratore di rete", B: "Una persona responsabile della conformità al GDPR in un'organizzazione", C: "Un poliziotto", D: "Un hacker" },
        correct: "B",
        exp: "Il DPO è responsabile della supervisione della conformità al GDPR e della protezione dei dati."
    },
    {
        id: 157,
        category: "3.2",
        q: "Come si comunica una violazione di dati?",
        a: { A: "Non si comunica", B: "Notificando l'autorità di protezione dei dati e gli interessati senza ingiustificato ritardo", C: "Solo internamente", D: "Dopo anni" },
        correct: "B",
        exp: "Una violazione di dati deve essere segnalata rapidamente all'autorità e agli interessati."
    },
    {
        id: 158,
        category: "3.2",
        q: "Quale è una misura tecnica per proteggere i dati?",
        a: { A: "Nessuna misura", B: "Crittografia, autenticazione, backup regolari", C: "Lasciare i dati senza protezione", D: "Condividere con chiunque" },
        correct: "B",
        exp: "La crittografia, l'autenticazione e i backup sono misure tecniche essenziali per la protezione dei dati."
    },
    {
        id: 159,
        category: "3.2",
        q: "Come si protegge la privacy nel cloud storage?",
        a: { A: "Non è possibile", B: "Usando servizi con crittografia end-to-end e verificando le politiche di privacy", C: "Il cloud non è sicuro", D: "Condividendo la password" },
        correct: "B",
        exp: "Scegliere provider con crittografia forte e leggere le politiche di privacy garantisce protezione nel cloud."
    },
    {
        id: 160,
        category: "3.2",
        q: "Cosa significa 'pseudonimizzazione' dei dati?",
        a: { A: "Eliminare i dati", B: "Elaborare i dati in modo che non siano direttamente identificabili senza informazioni aggiuntive", C: "Usare un nickname", D: "Non proteggere" },
        correct: "B",
        exp: "La pseudonimizzazione rende i dati non facilmente identificabili, aumentando la privacy."
    },
    {
        id: 161,
        category: "4.1",
        q: "Quale è il primo passo per risolvere un problema digitale?",
        a: { A: "Ignorarlo", B: "Identificare il problema e comprendere i sintomi", C: "Cambiare tutto", D: "Formattare il disco" },
        correct: "B",
        exp: "La corretta identificazione del problema è il primo passo verso la soluzione."
    },
    {
        id: 162,
        category: "4.1",
        q: "Come si procede al troubleshooting di un problema di software?",
        a: { A: "Disinstallare subito", B: "Verificare aggiornamenti, riavviare, controllare conflitti, consultare la guida", C: "Ignorarlo", D: "Formatare il computer" },
        correct: "B",
        exp: "Un approccio sistematico (aggiornamenti, riavvio, conflitti) risolve la maggior parte dei problemi software."
    },
    {
        id: 163,
        category: "4.1",
        q: "Quale è un'utilità di diagnostica importante?",
        a: { A: "Nessuna", B: "Gestione Attività, Monitor Risorse, Event Viewer", C: "Solo i giochi", D: "I browser" },
        correct: "B",
        exp: "Queste utilità aiutano a diagnosticare problemi di sistema identificando processi e risorse in uso."
    },
    {
        id: 164,
        category: "4.1",
        q: "Come si identifica un collo di bottiglia di sistema?",
        a: { A: "Non è possibile", B: "Monitorando CPU, RAM, disco e rete con strumenti di diagnostica", C: "Non importa", D: "Casualmente" },
        correct: "B",
        exp: "Monitorare le risorse di sistema rivela quale componente sta limitando le prestazioni."
    },
    {
        id: 165,
        category: "4.1",
        q: "Quale è una pratica sicura per testare una soluzione?",
        a: { A: "Implementarla subito su tutti i sistemi", B: "Testare in un ambiente isolato prima di implementare", C: "Non testare", D: "Chiedere a case" },
        correct: "B",
        exp: "Testare in un ambiente controllato previene danni ai sistemi di produzione."
    },
    {
        id: 166,
        category: "4.1",
        q: "Come si documenta un problema e la sua soluzione?",
        a: { A: "Non documentare", B: "Registrare il problema, i passi presi e la soluzione finale", C: "Documentare solo l'errore", D: "Documentare dopo anni" },
        correct: "B",
        exp: "La documentazione aiuta a risolv problemi simili in futuro e crea una base di conoscenza."
    },
    {
        id: 167,
        category: "4.1",
        q: "Quale è l'importanza di cercare aiuto online quando necessario?",
        a: { A: "Non è importante", B: "Forum, documentazione e comunità online offrono soluzioni a problemi comuni", C: "Non cercarne mai", D: "Internet non aiuta" },
        correct: "B",
        exp: "Comunità online e risorse sono preziose per trovare soluzioni a problemi tecnici."
    },
    {
        id: 168,
        category: "4.1",
        q: "Come si affronta un'incompatibilità di software?",
        a: { A: "Non è risolvibile", B: "Controllare requisiti, cercare versioni compatibili, usare macchine virtuali", C: "Cambiare computer", D: "Non usare il software" },
        correct: "B",
        exp: "Verificare compatibilità, cercare versioni alternative o usare virtualizzazione risolve incompatibilità."
    },
    {
        id: 169,
        category: "4.1",
        q: "Quale è un metodo di escalation per problemi complessi?",
        a: { A: "Non escalare mai", B: "Coinvolgere specialisti o il supporto tecnico quando superato il livello di competenza", C: "Non cercare aiuto", D: "Risolvere da soli sempre" },
        correct: "B",
        exp: "Escalare problemi complessi a specialisti garantisce soluzioni migliori e più rapide."
    },
    {
        id: 170,
        category: "4.1",
        q: "Come si prevengono i problemi ricorrenti?",
        a: { A: "Non è possibile", B: "Identificare le cause radice e implementare soluzioni permanenti", C: "Ignorarli", D: "Sperare non accadano di nuovo" },
        correct: "B",
        exp: "Risolvere la causa radice di un problema previene che si ripeta in futuro."
    },
    {
        id: 171,
        category: "4.2",
        q: "Quale è la prima cosa da considerare nella ricerca di una soluzione digitale?",
        a: { A: "Il prezzo più basso", B: "Il bisogno specifico e i requisiti del problema", C: "La popolarità", D: "Il design dell'interfaccia" },
        correct: "B",
        exp: "Identificare il bisogno specifico guida la ricerca della soluzione giusta."
    },
    {
        id: 172,
        category: "4.2",
        q: "Cosa significa 'analisi delle esigenze' nella selezione di software?",
        a: { A: "Scegliere a caso", B: "Valutare attentamente le funzionalità necessarie e i vincoli", C: "Comprare il più caro", D: "Non analizzare" },
        correct: "B",
        exp: "L'analisi delle esigenze determina quale software soddisfa effettivamente i requisiti."
    },
    {
        id: 173,
        category: "4.2",
        q: "Come si valuta la qualità di uno strumento digitale?",
        a: { A: "Solo dalla pubblicità", B: "Leggendo recensioni, testando versioni trial, controllando reputazione dello sviluppatore", C: "Non è possibile", D: "Casualmente" },
        correct: "B",
        exp: "Recensioni, test trial e reputazione dello sviluppatore sono indicatori affidabili di qualità."
    },
    {
        id: 174,
        category: "4.2",
        q: "Quale è un vantaggio di uno strumento cloud-based?",
        a: { A: "Accesso solo locale", B: "Accessibilità da qualsiasi dispositivo connesso a Internet", C: "Nessun vantaggio", D: "Lentezza garantita" },
        correct: "B",
        exp: "Le soluzioni cloud offrono flessibilità nell'accesso da qualsiasi luogo e dispositivo."
    },
    {
        id: 175,
        category: "4.2",
        q: "Come si valuta la sicurezza di uno strumento digitale?",
        a: { A: "Non è importante", B: "Controllando certificazioni, politiche di sicurezza, crittografia, updater regolari", C: "Fidandosi solo del marchio", D: "Non è possibile valutarla" },
        correct: "B",
        exp: "Certificazioni, politiche di privacy e crittografia sono indicatori di sicurezza."
    },
    {
        id: 176,
        category: "4.2",
        q: "Quale è l'importanza della compatibilità con il sistema esistente?",
        a: { A: "Non ha importanza", B: "Garantisce integrazione fluida e riduce i problemi tecnici", C: "È un extra", D: "Non conta nulla" },
        correct: "B",
        exp: "La compatibilità assicura che il nuovo strumento funzioni bene con l'infrastruttura esistente."
    },
    {
        id: 177,
        category: "4.2",
        q: "Come si valuta il supporto tecnico di uno strumento?",
        a: { A: "Non è importante", B: "Verificando disponibilità, tempo di risposta, canali di supporto (chat, email, telefono)", C: "Non esiste supporto", D: "Non importa chi fornisce supporto" },
        correct: "B",
        exp: "Un buon supporto tecnico (rapido, multi-canale) è crucial per la risoluzione di problemi."
    },
    {
        id: 178,
        category: "4.2",
        q: "Quale è un fattore di costo da considerare?",
        a: { A: "Solo il prezzo di acquisto", B: "Costi totali (acquisto, manutenzione, aggiornamenti, formazione, supporto)", C: "I costi non importano", D: "Solo il supporto" },
        correct: "B",
        exp: "Il costo totale di proprietà include molti fattori oltre al prezzo iniziale."
    },
    {
        id: 179,
        category: "4.2",
        q: "Come si procede all'adozione di una nuova soluzione digitale?",
        a: { A: "Implementarla immediatamente", B: "Pianificazione, pilota, test, formazione, implementazione graduale", C: "Non pianificare", D: "Casualmente" },
        correct: "B",
        exp: "Un'implementazione pianificata con test graduale riduce i rischi e gli errori."
    },
    {
        id: 180,
        category: "4.2",
        q: "Quale è l'importanza della formazione nell'adozione di nuovi strumenti digitali?",
        a: { A: "Non è importante", B: "Assicura che gli utenti possono usare efficacemente il nuovo strumento", C: "È opzionale", D: "Non serve formazione" },
        correct: "B",
        exp: "La formazione adeguata garantisce l'adozione efficace e riduce gli errori di utilizzo."
    }
];

/* ============================================
   FUNZIONI UTILITIES
   ============================================ */

/**
 * Genera un ID univoco per il test
 */
function generateTestId() {
    return `test_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Estrae N domande casuali dal paniere
 * @param {Array} source - Array di domande sorgente
 * @param {Number} count - Numero di domande da estrarre
 * @returns {Array} Array di domande estratte
 */
function extractRandomQuestions(source, count) {
    const shuffled = [...source].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

/**
 * Rimescola le opzioni di risposta e traccia la corretta
 * @param {Object} question - Oggetto domanda
 * @returns {Object} Domanda con opzioni rimescolate
 */
function shuffleOptions(question) {
    const options = [
        { label: 'A', text: question.a.A },
        { label: 'B', text: question.a.B },
        { label: 'C', text: question.a.C },
        { label: 'D', text: question.a.D }
    ];

    // Rimescola
    const shuffled = options.sort(() => 0.5 - Math.random());

    // Mappa la risposta corretta alla nuova posizione
    const originalCorrectIndex = options.findIndex(opt => opt.label === question.correct);
    const newCorrectLabel = shuffled[originalCorrectIndex].label;

    return {
        ...question,
        shuffledOptions: shuffled,
        newCorrectLabel: newCorrectLabel
    };
}

/**
 * Formatta il tempo in MM:SS
 */
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

/**
 * Calcola il punteggio e il badge
 */
function calculateScore(correct, total) {
    const percentage = (correct / total) * 100;
    let badge = { icon: '📚', label: 'INSUFFICIENTE', color: 'red', bgColor: 'bg-red-50' };

    if (percentage >= CONFIG.SOGLIA_ECCELLENTE) {
        badge = { icon: '🏆', label: 'ECCELLENTE', color: 'green', bgColor: 'bg-green-50' };
    } else if (percentage >= CONFIG.SOGLIA_SUFFICIENTE) {
        badge = { icon: '👍', label: 'SUFFICIENTE', color: 'yellow', bgColor: 'bg-yellow-50' };
    }

    return { percentage: Math.round(percentage), badge };
}

/* ============================================
   GESTIONE MODALE
   ============================================ */

/**
 * Apre il modale di avvertimento
 */
function openModal() {
    const modal = document.getElementById('modalContainer');
    if (!modal) return;
    modal.classList.remove('hidden');
    setTimeout(() => {
        const overlay = document.getElementById('modalOverlay');
        const modalBox = document.getElementById('modalBox');
        if (overlay) overlay.classList.add('opacity-100');
        if (modalBox) modalBox.classList.add('scale-100');
    }, 10);
}

/**
 * Chiude il modale (senza azione)
 */
function closeModal(action = null) {
    const modal = document.getElementById('modalContainer');
    if (!modal) return;

    const overlay = document.getElementById('modalOverlay');
    const modalBox = document.getElementById('modalBox');

    if (overlay) overlay.classList.remove('opacity-100');
    if (modalBox) modalBox.classList.remove('scale-100');

    setTimeout(() => {
        modal.classList.add('hidden');
        if (action === 'accept') {
            startQuiz();
        }
    }, 300);
}

/* ============================================
   GESTIONE SCHERMATE
   ============================================ */

/**
 * Mostra una schermata e nasconde le altre
 */
function showScreen(screenName) {
    document.querySelectorAll('[data-screen]').forEach(el => {
        el.classList.add('hidden');
    });
    const screen = document.querySelector(`[data-screen="${screenName}"]`);
    if (screen) {
        screen.classList.remove('hidden');
    }
    STATE.currentScreen = screenName;
}

/**
 * Avvia il quiz
 */
function startQuiz() {
    // Estrai domande casuali
    const allQuestions = CONFIG.CATEGORY_FILTER === 'all' 
        ? PANIERE 
        : PANIERE.filter(q => q.category === CONFIG.CATEGORY_FILTER);

    STATE.questionsToShow = extractRandomQuestions(allQuestions, CONFIG.NUM_DOMANDE);

    // Rimescola opzioni per ogni domanda
    STATE.questionsToShow = STATE.questionsToShow.map(q => shuffleOptions(q));

    // Reset stato
    STATE.currentQuestionIndex = 0;
    STATE.userAnswers = {};
    STATE.timeRemaining = CONFIG.DURATA_TIMER;
    STATE.quizStarted = true;
    STATE.testId = generateTestId();

    // Mostra quiz
    showScreen('quiz');

    // Avvia timer
    startTimer();

    // Mostra prima domanda
    displayQuestion();
}

/**
 * Avvia il timer
 */
function startTimer() {
    if (STATE.timerInterval) clearInterval(STATE.timerInterval);

    STATE.timerInterval = setInterval(() => {
        STATE.timeRemaining--;

        // Update UI timer
        const timerEl = document.getElementById('timer');
        if (timerEl) {
            timerEl.textContent = formatTime(STATE.timeRemaining);
        }

        // Alert quando < 5 min
        if (STATE.timeRemaining === CONFIG.ALERT_TIMER_SOGLIA) {
            showAlertTime();
        }

        // Tempo finito
        if (STATE.timeRemaining <= 0) {
            clearInterval(STATE.timerInterval);
            endQuiz();
        }
    }, 1000);
}

/**
 * Mostra alert di tempo in scadenza
 */
function showAlertTime() {
    const alertEl = document.getElementById('timeAlert');
    if (alertEl) {
        alertEl.classList.remove('hidden');
        setTimeout(() => {
            alertEl.classList.add('hidden');
        }, 5000);
    }
}

/**
 * Mostra la domanda corrente
 */
function displayQuestion() {
    const question = STATE.questionsToShow[STATE.currentQuestionIndex];
    if (!question) return;

    // Update progress bar
    const progress = ((STATE.currentQuestionIndex + 1) / STATE.questionsToShow.length) * 100;
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }

    // Update numero domanda
    const questionNumber = document.getElementById('questionNumber');
    if (questionNumber) {
        questionNumber.textContent = `Domanda ${STATE.currentQuestionIndex + 1} di ${STATE.questionsToShow.length}`;
    }

    // Update testo domanda
    const questionText = document.getElementById('questionText');
    if (questionText) {
        questionText.textContent = question.q;
    }

    // Update opzioni
    const optionsContainer = document.getElementById('optionsContainer');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';

        question.shuffledOptions.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn w-full p-4 mb-3 text-left border-2 border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition';
            btn.textContent = `${option.label}) ${option.text}`;
            btn.dataset.option = option.label;

            // Se già risposto, mostra lo stato
            if (STATE.userAnswers[question.id]) {
                if (option.label === STATE.userAnswers[question.id]) {
                    btn.classList.add('border-blue-500', 'bg-blue-50');
                }
            }

            btn.addEventListener('click', () => selectAnswer(option.label, question));
            optionsContainer.appendChild(btn);
        });
    }
}

/**
 * Gestisce la selezione di una risposta
 */
function selectAnswer(selectedLabel, question) {
    // Salva la risposta
    STATE.userAnswers[question.id] = selectedLabel;

    // Update UI (evidenzia selezione)
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('border-blue-500', 'bg-blue-50');
    });

    const selectedBtn = document.querySelector(`.option-btn[data-option="${selectedLabel}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('border-blue-500', 'bg-blue-50');
    }

    // Advance automatico dopo 300ms
    setTimeout(() => {
        nextQuestion();
    }, 300);
}

/**
 * Passa alla prossima domanda
 */
function nextQuestion() {
    if (STATE.currentQuestionIndex < STATE.questionsToShow.length - 1) {
        STATE.currentQuestionIndex++;
        displayQuestion();
    } else {
        // Quiz finito
        endQuiz();
    }
}

/**
 * Termina il quiz e mostra risultati
 */
function endQuiz() {
    clearInterval(STATE.timerInterval);

    // Calcola risultati
    let correct = 0;
    STATE.questionsToShow.forEach(q => {
        if (STATE.userAnswers[q.id] === q.newCorrectLabel) {
            correct++;
        }
    });

    // Salva risultati in STATE
    STATE.results = {
        correct: correct,
        total: STATE.questionsToShow.length,
        testId: STATE.testId,
        timestamp: new Date().toLocaleString('it-IT'),
        score: calculateScore(correct, STATE.questionsToShow.length)
    };

    // Mostra schermata risultati
    showScreen('results');
    displayResults();
}

/**
 * Mostra i risultati
 */
function displayResults() {
    const results = STATE.results;

    // Badge e punteggio
    const badgeContainer = document.getElementById('resultBadge');
    if (badgeContainer) {
        badgeContainer.innerHTML = `
            <div class="text-center py-8 rounded-lg ${results.score.bgColor}">
                <div class="text-6xl mb-4">${results.score.badge.icon}</div>
                <h2 class="text-3xl font-bold text-${results.score.color}-700">${results.score.badge.label}</h2>
                <p class="text-4xl font-bold mt-4 text-${results.score.color}-700">${results.score.percentage}%</p>
                <p class="text-xl mt-2 text-gray-700">${results.correct}/${results.total} risposte corrette</p>
            </div>
        `;
    }

    // Riepilogo domande
    const summaryContainer = document.getElementById('resultsSummary');
    if (summaryContainer) {
        summaryContainer.innerHTML = '';

        STATE.questionsToShow.forEach((q, idx) => {
            const userAnswer = STATE.userAnswers[q.id];
            const isCorrect = userAnswer === q.newCorrectLabel;

            const summaryItem = document.createElement('div');
            summaryItem.className = `p-4 mb-4 rounded-lg border-l-4 ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`;
            summaryItem.innerHTML = `
                <h4 class="font-bold mb-2">Domanda ${idx + 1}: ${q.q}</h4>
                <p class="mb-2">
                    <strong>La tua risposta:</strong> 
                    <span class="${isCorrect ? 'text-green-700' : 'text-red-700'}">${userAnswer}) ${q.a[userAnswer] || 'Non risposto'}</span>
                </p>
                ${!isCorrect ? `
                    <p class="mb-2">
                        <strong>Risposta corretta:</strong> 
                        <span class="text-green-700">${q.newCorrectLabel}) ${q.a[q.newCorrectLabel]}</span>
                    </p>
                ` : ''}
                ${q.exp ? `
                    <p class="mt-2 text-sm text-gray-700">
                        <strong>Spiegazione:</strong> ${q.exp}
                    </p>
                ` : ''}
            `;
            summaryContainer.appendChild(summaryItem);
        });
    }
}

/**
 * Rifai il test (nuova estrazione)
 */
function retakeQuiz() {
    STATE.currentQuestionIndex = 0;
    STATE.userAnswers = {};
    STATE.quizStarted = false;
    STATE.questionsToShow = [];
    startQuiz();
}

/**
 * Torna alla home con conferma
 */
function goHome() {
    if (confirm('Torna alla schermata iniziale (welcome screen)?')) {
        STATE.currentQuestionIndex = 0;
        STATE.userAnswers = {};
        STATE.quizStarted = false;
        STATE.questionsToShow = [];
        if (STATE.timerInterval) clearInterval(STATE.timerInterval);
        showScreen('welcome');
    }
}

/* ============================================
   INIZIALIZZAZIONE
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Mostra welcome
    showScreen('welcome');

    // Event listeners
    const btnStart = document.getElementById('btnStart');
    if (btnStart) {
        btnStart.addEventListener('click', openModal);
    }

    const btnAccept = document.getElementById('btnAccept');
    if (btnAccept) {
        btnAccept.addEventListener('click', () => closeModal('accept'));
    }

    const btnCancel = document.getElementById('btnCancel');
    if (btnCancel) {
        btnCancel.addEventListener('click', () => closeModal());
    }

    const btnHomeQuiz = document.getElementById('btnHomeQuiz');
    if (btnHomeQuiz) {
        btnHomeQuiz.addEventListener('click', goHome);
    }

    const btnRetake = document.getElementById('btnRetake');
    if (btnRetake) {
        btnRetake.addEventListener('click', retakeQuiz);
    }

    const btnHome = document.getElementById('btnHome');
    if (btnHome) {
        btnHome.addEventListener('click', goHome);
    }

    // Impedisce chiusura modale con click esterno o ESC
    const modal = document.getElementById('modalContainer');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                // Click fuori = NO EFFETTO
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // ESC = NO EFFETTO
        }
    });
});

/* ============================================
   FINE
   ============================================ */
