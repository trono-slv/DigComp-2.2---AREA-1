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
  // ===== CAPITOLO 1.1 - FACILI =====
  {
    id: 1,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Cos'è un browser web?",
    a: { A: "Un software per navigare internet", B: "Un motore di ricerca", C: "Un file manager", D: "Un editor di testo" },
    correct: "A",
    exp: "Un browser web è il software utilizzato per accedere e visualizzare pagine internet (Chrome, Firefox, Safari, Edge)."
  },
  {
    id: 2,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Quale tra questi è un motore di ricerca?",
    a: { A: "Google", B: "Windows", C: "Outlook", D: "Telegram" },
    correct: "A",
    exp: "Google è il motore di ricerca più utilizzato per trovare informazioni su internet."
  },
  {
    id: 3,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Cosa significa 'URL'?",
    a: { A: "L'indirizzo di una pagina web", B: "Un programma antivirus", C: "Una cartella del computer", D: "Un tipo di file" },
    correct: "A",
    exp: "URL (Uniform Resource Locator) è l'indirizzo completo di una pagina web, es: https://www.google.it"
  },
  {
    id: 4,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Come si chiama il simbolo '@' in un indirizzo email?",
    a: { A: "Chiocciola", B: "Asterisco", C: "Hashtag", D: "Cancelletto" },
    correct: "A",
    exp: "Il simbolo '@' si chiama 'chiocciola' ed è essenziale negli indirizzi email (es: mario@example.com)."
  },
  {
    id: 5,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Cosa sono i 'bookmark'?",
    a: { A: "Segnalibri per salvare pagine preferite", B: "Pubblicità online", C: "File temporanei", D: "Errori di sistema" },
    correct: "A",
    exp: "I bookmark (segnalibri) permettono di salvare e accedere rapidamente alle pagine web preferite."
  },
  {
    id: 6,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Quale funzione permette di cercare all'interno di una pagina web?",
    a: { A: "Ctrl+F (o Cmd+F)", B: "Ctrl+S", C: "Ctrl+P", D: "Ctrl+X" },
    correct: "A",
    exp: "Ctrl+F (o Cmd+F su Mac) apre la ricerca all'interno della pagina web attuale."
  },
  {
    id: 7,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Cos'è la 'cache' di un browser?",
    a: { A: "Memoria che salva file temporanei di pagine visitate", B: "Un virus", C: "Un backup automatico", D: "Un antispyware" },
    correct: "A",
    exp: "La cache del browser salva temporaneamente file delle pagine visitate per caricamenti più veloci."
  },
  {
    id: 8,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Cosa significa 'logout'?",
    a: { A: "Uscire da un account", B: "Entrare in un account", C: "Eliminare un account", D: "Cambiare password" },
    correct: "A",
    exp: "Logout significa disconnettersi/uscire da un account dopo aver effettuato l'accesso."
  },
  {
    id: 9,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Quale tra questi è un social media?",
    a: { A: "Facebook", B: "Word", C: "Excel", D: "Photoshop" },
    correct: "A",
    exp: "Facebook è una piattaforma di social media per condividere contenuti e comunicare con altre persone."
  },
  {
    id: 10,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Cosa sono i 'cookie'?",
    a: { A: "Piccoli file che salvano informazioni sul tuo browser", B: "Virus informatici", C: "Biscotti digitali", D: "Backdoor di sistema" },
    correct: "A",
    exp: "I cookie sono piccoli file di testo salvati dal browser che memorizzano preferenze e informazioni di sessione."
  },
  {
    id: 11,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Come funziona la ricerca booleana?",
    a: { A: "Usa operatori AND, OR, NOT per raffinare ricerche", B: "Cerca solo immagini", C: "Traduce automaticamente", D: "Blocca i siti pericolosi" },
    correct: "A",
    exp: "La ricerca booleana usa operatori logici (AND, OR, NOT) per ottenere risultati più precisi e mirati."
  },
  {
    id: 12,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Cosa significa 'phishing'?",
    a: { A: "Truffe online per rubare dati personali", B: "Una tecnologia di ricerca", C: "Un tipo di file", D: "Una funzione del browser" },
    correct: "A",
    exp: "Il phishing è una truffa online dove malintenzionati cercano di rubare dati personali e password con email/siti falsi."
  },
  {
    id: 13,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Cosa sono i 'preferiti' in un browser?",
    a: { A: "Pagine web salvate per accesso rapido", B: "Siti bloccati", C: "Estensioni", D: "Cronologia eliminata" },
    correct: "A",
    exp: "I preferiti (o segnalibri) sono pagine web che hai marcato per accedervi rapidamente in futuro."
  },
  {
    id: 14,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Quale azione evita di salvare dati nella cronologia del browser?",
    a: { A: "Navigare in modalità anonima/privata", B: "Cancellare i file", C: "Riavviare il computer", D: "Chiudere il browser" },
    correct: "A",
    exp: "La modalità privata/anonima del browser non salva cronologia, cookie e altri dati di navigazione."
  },
  {
    id: 15,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Cosa indica il lucchetto 🔒 nella barra degli indirizzi?",
    a: { A: "La connessione è protetta (HTTPS)", B: "Il sito è bloccato", C: "Hai salvato una password", D: "È un sito falso" },
    correct: "A",
    exp: "Il lucchetto verde indica che la pagina usa HTTPS, una connessione crittografata e sicura."
  },
  {
    id: 16,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Cosa significa 'download'?",
    a: { A: "Scaricare file da internet al tuo computer", B: "Caricare file online", C: "Copiare un testo", D: "Condividere un file" },
    correct: "A",
    exp: "Download significa scaricare/trasferire un file da internet al proprio computer."
  },
  {
    id: 17,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Cosa significa 'upload'?",
    a: { A: "Caricare file dal tuo computer a internet", B: "Scaricare file", C: "Eliminare file", D: "Spostare cartelle" },
    correct: "A",
    exp: "Upload significa caricare/trasferire un file dal proprio computer verso internet o una piattaforma."
  },
  {
    id: 18,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Quale è il comando per copiare testo?",
    a: { A: "Ctrl+C (Cmd+C su Mac)", B: "Ctrl+X", C: "Ctrl+V", D: "Ctrl+Z" },
    correct: "A",
    exp: "Ctrl+C copia il testo/elemento selezionato nella clipboard per successiva incollatura."
  },
  {
    id: 19,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Cosa sono i 'tab' in un browser?",
    a: { A: "Schede separate per navigare più siti contemporaneamente", B: "Estensioni del browser", C: "Icone dei siti", D: "Cartelle di file" },
    correct: "A",
    exp: "I tab (schede) permettono di aprire multiple pagine web nello stesso browser, passando fra loro facilmente."
  },
  {
    id: 20,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "facile",
    q: "Cosa significa 'aggiornare' una pagina web?",
    a: { A: "Ricaricare la pagina per vedere contenuti aggiornati (F5)", B: "Cambiarsi il browser", C: "Scaricare il sito", D: "Salvare la pagina" },
    correct: "A",
    exp: "Aggiornare (refresh) ricaricare la pagina corrente usando F5 o Ctrl+R per visualizzare contenuti aggiornati."
  },

  // ===== CAPITOLO 1.1 - MEDIE =====
  {
    id: 21,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cos'è un 'algoritmo di ricerca'?",
    a: { A: "Un sistema che ordina risultati di ricerca per rilevanza", B: "Un virus", C: "Una password", D: "Un file di backup" },
    correct: "A",
    exp: "Gli algoritmi di ricerca (es: PageRank di Google) ordinano i risultati per rilevanza in base a criteri specifici."
  },
  {
    id: 22,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa significa 'pop-up'?",
    a: { A: "Una finestra che appare improvvisamente durante la navigazione", B: "Un tipo di file", C: "Una cartella nascosta", D: "Un antivirus" },
    correct: "A",
    exp: "Un pop-up è una piccola finestra che appare improvvisamente su una pagina web, spesso con pubblicità."
  },
  {
    id: 23,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cos'è un 'ad blocker'?",
    a: { A: "Un'estensione che blocca pubblicità online", B: "Un antivirus", C: "Un browser", D: "Un file manager" },
    correct: "A",
    exp: "Un ad blocker è un'estensione o software che blocca annunci pubblicitari durante la navigazione web."
  },
  {
    id: 24,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa significa 'web scraping'?",
    a: { A: "Estrarre dati automaticamente da pagine web", B: "Pulire il disco rigido", C: "Cancellare la cronologia", D: "Comprimere file" },
    correct: "A",
    exp: "Il web scraping è l'estrazione automatica di dati da pagine web, utile per raccogliere informazioni strutturate."
  },
  {
    id: 25,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa sono i 'metadati'?",
    a: { A: "Informazioni su altri dati (autore, data, dimensione)", B: "Dati criptati", C: "File temporanei", D: "Backup automatici" },
    correct: "A",
    exp: "I metadati sono informazioni che descrivono altri dati, come autore, data creazione, dimensione di un file."
  },
  {
    id: 26,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa significa 'DNS'?",
    a: { A: "Sistema che traduce nomi di dominio in indirizzi IP", B: "Un tipo di malware", C: "Una cartella di sistema", D: "Un editor di testo" },
    correct: "A",
    exp: "Il DNS (Domain Name System) traduce i nomi di dominio (www.google.it) negli indirizzi IP numerici."
  },
  {
    id: 27,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa indica 'http' e 'https'?",
    a: { A: "Protocolli di comunicazione (https è più sicuro)", B: "Tipi di file", C: "Cartelle", D: "Programmi" },
    correct: "A",
    exp: "HTTP è il protocollo per trasmettere pagine web; HTTPS è la versione crittografata e sicura."
  },
  {
    id: 28,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cos'è un 'indirizzo IP'?",
    a: { A: "Un identificativo numerico di un dispositivo in rete", B: "Una password", C: "Un tipo di file", D: "Un browser" },
    correct: "A",
    exp: "Un indirizzo IP (es: 192.168.1.1) è un identificativo numerico che contraddistingue ogni dispositivo in rete."
  },
  {
    id: 29,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa significa 'geolocalizzazione'?",
    a: { A: "Identificare la posizione geografica di un dispositivo", B: "Criptare dati", C: "Scaricare mappe", D: "Condividere file" },
    correct: "A",
    exp: "La geolocalizzazione è la tecnologia che determina la posizione geografica di un dispositivo tramite GPS o IP."
  },
  {
    id: 30,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa sono i 'dati strutturati'?",
    a: { A: "Dati organizzati in formato ordinato (tabelle, database)", B: "Documenti PDF", C: "File compressi", D: "Email criptate" },
    correct: "A",
    exp: "I dati strutturati sono informazioni organizzate in formati predefiniti come database e fogli di calcolo."
  },
  {
    id: 31,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa significa 'indicizzazione'?",
    a: { A: "Il processo di catalogazione di pagine web dai motori di ricerca", B: "Cancellare dati", C: "Comprimere file", D: "Creare cartelle" },
    correct: "A",
    exp: "L'indicizzazione è il processo con cui i motori di ricerca catalogano e classificano le pagine web."
  },
  {
    id: 32,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa sono i 'feed RSS'?",
    a: { A: "Flussi di contenuti aggiornati da siti web", B: "Antivirus", C: "Estensioni del browser", D: "Backup" },
    correct: "A",
    exp: "RSS (Really Simple Syndication) permette di ricevere automaticamente aggiornamenti da siti web preferiti."
  },
  {
    id: 33,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa significa 'SEO'?",
    a: { A: "Ottimizzazione di siti per i motori di ricerca", B: "Un tipo di malware", C: "Un editor", D: "Un backup" },
    correct: "A",
    exp: "SEO (Search Engine Optimization) è l'insieme di tecniche per migliorare il posizionamento di un sito su Google."
  },
  {
    id: 34,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa sono i 'crawler'?",
    a: { A: "Bot che scansionano le pagine web per indicizzarle", B: "Virus", C: "Estensioni", D: "File temporanei" },
    correct: "A",
    exp: "I crawler (ragni web) sono bot automatici che scansionano pagine web per catalogarle nei motori di ricerca."
  },
  {
    id: 35,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa significa 'proxy'?",
    a: { A: "Un server intermedio che filtra/mascherara la connessione", B: "Un file", C: "Un antivirus", D: "Un database" },
    correct: "A",
    exp: "Un proxy è un server intermedio che funge da intermediario tra il client e il server, filtrandone il traffico."
  },
  {
    id: 36,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa sono i 'deep web' e 'dark web'?",
    a: { A: "Parti di internet non indicizzate dai motori di ricerca", B: "Siti virus", C: "Cartelle nascoste", D: "File criptati" },
    correct: "A",
    exp: "Deep web è la parte di internet non indicizzata; dark web è la parte intenzionalmente nascosta e anonima."
  },
  {
    id: 37,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa significa 'throughput'?",
    a: { A: "La velocità di trasferimento dati in una rete", B: "Un tipo di file", C: "Un virus", D: "Una password" },
    correct: "A",
    exp: "Il throughput è la quantità di dati trasmessa in una unità di tempo, misurato in Mbps o Gbps."
  },
  {
    id: 38,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa sono i 'widget'?",
    a: { A: "Piccoli applicativi incorporati in pagine web", B: "File di sistema", C: "Cartelle nascoste", D: "Backup automatici" },
    correct: "A",
    exp: "I widget sono piccole applicazioni incorporate in pagine web (orologio, meteo, calcolatrice, ecc)."
  },
  {
    id: 39,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa significa 'bandwidth'?",
    a: { A: "La capacità massima di trasferimento dati in una rete", B: "Un file", C: "Una cartella", D: "Un backup" },
    correct: "A",
    exp: "La bandwidth è la capacità massima del canale di comunicazione, misurata in Mbps o Gbps."
  },
  {
    id: 40,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "medio",
    q: "Cosa sono i 'plugin' del browser?",
    a: { A: "Programmi che aggiungono funzioni al browser", B: "Virus", C: "File temporanei", D: "Cartelle" },
    correct: "A",
    exp: "I plugin sono programmi aggiuntivi che estendono le funzionalità del browser (Flash, PDF viewer, ecc)."
  },

  // ===== CAPITOLO 1.1 - DIFFICILI =====
  {
    id: 41,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa significa 'operatore di ricerca avanzata'?",
    a: { A: "Strumenti per raffinare ricerche (site:, filetype:, intitle:)", B: "Un algoritmo", C: "Un tipo di malware", D: "Un file" },
    correct: "A",
    exp: "Gli operatori avanzati (site:, filetype:, intitle:) permettono ricerche molto specifiche e precise su Google."
  },
  {
    id: 42,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cos'è il 'machine learning' nel contesto della ricerca?",
    a: { A: "Algoritmi che imparano dai dati per migliorare risultati", B: "Un backup", C: "Un tipo di virus", D: "Un file" },
    correct: "A",
    exp: "Il machine learning permette ai motori di ricerca di apprendere dai comportamenti utenti e migliorare i risultati."
  },
  {
    id: 43,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa significa 'query'?",
    a: { A: "Una richiesta di ricerca formulata dall'utente", B: "Un file", C: "Una cartella", D: "Un backup" },
    correct: "A",
    exp: "Una query è una ricerca/domanda formulata dall'utente ai motori di ricerca (es: 'migliori ristoranti Roma')."
  },
  {
    id: 44,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa sono i 'rich snippets'?",
    a: { A: "Risultati di ricerca arricchiti con dati strutturati", B: "File compressi", C: "Cartelle nascoste", D: "Email criptate" },
    correct: "A",
    exp: "I rich snippets mostrano risultati di ricerca con informazioni strutturate (voti, prezzi, orari, ecc)."
  },
  {
    id: 45,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa significa 'semantic web'?",
    a: { A: "Web basato sulla comprensione semantica dei contenuti", B: "Un database", C: "Un antivirus", D: "Un file" },
    correct: "A",
    exp: "Il semantic web rende i dati comprensibili non solo agli umani ma anche alle macchine tramite ontologie."
  },
  {
    id: 46,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa sono i 'KPI' in ambito digitale?",
    a: { A: "Indicatori chiave di performance per misurare successo", B: "File di sistema", C: "Cartelle", D: "Backup" },
    correct: "A",
    exp: "I KPI (Key Performance Indicators) sono metriche che misurano l'efficacia di strategie digitali."
  },
  {
    id: 47,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa significa 'crawl budget'?",
    a: { A: "Il numero di pagine che un crawler può visitare", B: "Un file", C: "Una password", D: "Un backup" },
    correct: "A",
    exp: "Il crawl budget è il numero massimo di pagine che il crawler di Google visita per indicizzare un sito."
  },
  {
    id: 48,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa sono i 'microformat'?",
    a: { A: "Standard per marcare dati nelle pagine web", B: "File piccoli", C: "Cartelle", D: "Backup" },
    correct: "A",
    exp: "I microformat (hCard, hEvent) sono standard per marcare informazioni strutturate in HTML."
  },
  {
    id: 49,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa significa 'natural language processing' (NLP)?",
    a: { A: "Tecnologia che permette ai sistemi di comprendere il linguaggio umano", B: "Un file", C: "Una password", D: "Un backup" },
    correct: "A",
    exp: "L'NLP permette ai sistemi di comprendere, elaborare e rispondere al linguaggio naturale umano."
  },
  {
    id: 50,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa sono i 'graph databases'?",
    a: { A: "Database che modellano relazioni tra dati come grafi", B: "Grafici di Excel", C: "File immagine", D: "Cartelle" },
    correct: "A",
    exp: "I graph databases (come Neo4j) modellano dati come nodi e archi, ideali per relazioni complesse."
  },
  {
    id: 51,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa significa 'API' nel contesto web?",
    a: { A: "Interfaccia che permette comunicazione tra applicazioni", B: "Un file", C: "Una cartella", D: "Un backup" },
    correct: "A",
    exp: "Un'API (Application Programming Interface) permette a due software di comunicare e scambiarsi dati."
  },
  {
    id: 52,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa sono i 'JSON' e 'XML'?",
    a: { A: "Formati standard per strutturare e scambiare dati", B: "Tipi di file immagine", C: "Cartelle", D: "Backup" },
    correct: "A",
    exp: "JSON e XML sono formati standard leggibili e strutturati per memorizzare e trasmettere dati."
  },
  {
    id: 53,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa significa 'REST architecture'?",
    a: { A: "Stile architetturale per API web basato su HTTP", B: "Un database", C: "Un antivirus", D: "Un file" },
    correct: "A",
    exp: "REST (Representational State Transfer) è un'architettura per API che usa gli standard HTTP."
  },
  {
    id: 54,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa sono i 'metasearch engine'?",
    a: { A: "Motori che aggregano risultati da altri motori", B: "File temporanei", C: "Cartelle nascoste", D: "Backup" },
    correct: "A",
    exp: "I metasearch engine (es: Metacrawler) cercano simultaneamente su più motori di ricerca."
  },
  {
    id: 55,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa significa 'personalization engine'?",
    a: { A: "Sistema che personalizza risultati in base al profilo utente", B: "Un backup", C: "Un antivirus", D: "Un file" },
    correct: "A",
    exp: "I personalization engine usano dati utente per offrire risultati di ricerca personalizzati."
  },
  {
    id: 56,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa sono gli 'entity graphs'?",
    a: { A: "Rappresentazioni di entità e loro relazioni (persone, luoghi, cose)", B: "Grafici", C: "File", D: "Cartelle" },
    correct: "A",
    exp: "Gli entity graphs mappano entità (persone, città, aziende) e i loro rapporti per ricerche semantiche."
  },
  {
    id: 57,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa significa 'intent-based search'?",
    a: { A: "Ricerca basata sull'intento dell'utente, non solo su parole chiave", B: "Un file", C: "Un backup", D: "Una password" },
    correct: "A",
    exp: "Le ricerche basate sull'intento capiscono cosa l'utente vuole davvero (non solo le parole digitate)."
  },
  {
    id: 58,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa sono i 'conversational interfaces'?",
    a: { A: "Interfacce che permettono ricerche conversazionali (chatbot, assistenti vocali)", B: "File", C: "Cartelle", D: "Backup" },
    correct: "A",
    exp: "Le interfacce conversazionali (Alexa, Google Assistant) permettono ricerche e comandi in linguaggio naturale."
  },
  {
    id: 59,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa significa 'knowledge graph'?",
    a: { A: "Grafo che rappresenta entità e relazioni per risultati semantici", B: "Un backup", C: "Un antivirus", D: "Un file" },
    correct: "A",
    exp: "Il knowledge graph (di Google) rappresenta entità e loro relazioni per fornire risultati più intelligenti."
  },
  {
    id: 60,
    category: "1.1 Navigare, ricercare e filtrare",
    difficulty: "difficile",
    q: "Cosa sono i 'federated searches'?",
    a: { A: "Ricerche simultanee su più basi dati federate", B: "File compressi", C: "Cartelle nascoste", D: "Email criptate" },
    correct: "A",
    exp: "Le federated searches interrogano contemporaneamente più database e banche dati federate."
  },

  // ===== CAPITOLO 1.2 - FACILI =====
  {
    id: 61,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'fake news'?",
    a: { A: "Notizie false diffuse come vere", B: "Articoli di giornale", C: "Blog personali", D: "Post sui social" },
    correct: "A",
    exp: "Le fake news sono informazioni false e fuorvianti diffuse deliberatamente come se fossero vere."
  },
  {
    id: 62,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa sono i 'bias' informativi?",
    a: { A: "Pregiudizi che influenzano la selezione e presentazione di informazioni", B: "Errori di sistema", C: "Virus", D: "File corrotti" },
    correct: "A",
    exp: "I bias sono pregiudizi inconsci che influenzano come selezioniamo e interpretiamo le informazioni."
  },
  {
    id: 63,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'fact-checking'?",
    a: { A: "Verificare l'accuratezza di un'informazione", B: "Leggere un articolo", C: "Commentare un post", D: "Condividere notizie" },
    correct: "A",
    exp: "Il fact-checking è il processo di verifica della veridicità e accuratezza di affermazioni e informazioni."
  },
  {
    id: 64,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Come riconosci una fonte affidabile?",
    a: { A: "Ha credenziali, trasparenza, citazioni verificabili", B: "Ha molti follower", C: "È popolare", D: "Ha molti like" },
    correct: "A",
    exp: "Una fonte affidabile mostra credenziali, chiarisce le fonti, cita esperti e è trasparente sui dati."
  },
  {
    id: 65,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'misinformation'?",
    a: { A: "Informazioni false diffuse senza intento malevolo", B: "Dati criptati", C: "File temporanei", D: "Backup" },
    correct: "A",
    exp: "La misinformation è informazione falsa diffusa senza intento deliberato (diverso da disinformation)."
  },
  {
    id: 66,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'disinformation'?",
    a: { A: "Informazioni false diffuse deliberatamente per ingannare", B: "Dati mancanti", C: "File di sistema", D: "Backup" },
    correct: "A",
    exp: "La disinformation è informazione falsa diffusa volutamente e deliberatamente per fuorviare."
  },
  {
    id: 67,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cos'è una 'fonte primaria'?",
    a: { A: "Documento originale (es: articolo di ricerca, documento storico)", B: "Un sommario", C: "Un'opinione", D: "Un commento" },
    correct: "A",
    exp: "Una fonte primaria è il documento originale (diario, articolo di ricerca) non rielaborato da altri."
  },
  {
    id: 68,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cos'è una 'fonte secondaria'?",
    a: { A: "Analisi o commento su fonti primarie", B: "Un documento originale", C: "Un video", D: "Una foto" },
    correct: "A",
    exp: "Una fonte secondaria commenta o analizza fonti primarie (es: articolo che cita ricerche altrui)."
  },
  {
    id: 69,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'credibilità'?",
    a: { A: "Qualità di essere degno di fiducia e attendibile", B: "Popolarità", C: "Numero di condivisioni", D: "Numero di like" },
    correct: "A",
    exp: "La credibilità è la qualità di una fonte di essere affidabile, accurata e degna di fiducia."
  },
  {
    id: 70,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'autorità'?",
    a: { A: "Competenza riconosciuta dell'autore su un argomento", B: "Potere politico", C: "Numero di articoli", D: "Numero di visualizzazioni" },
    correct: "A",
    exp: "L'autorità di una fonte riflette la competenza riconosciuta dell'autore nell'argomento trattato."
  },
  {
    id: 71,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'conflitto di interessi'?",
    a: { A: "Situazione dove chi diffonde info ha interesse personale nel risultato", B: "Disaccordo politico", C: "Incompatibilità legale", D: "Errore di sistema" },
    correct: "A",
    exp: "Un conflitto di interessi è quando chi diffonde informazioni ha interessi personali nel loro esito."
  },
  {
    id: 72,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'satira' online?",
    a: { A: "Contenuto che ridicolizza ironicamente un argomento", B: "Notizia vera", C: "Commento", D: "Condivisione" },
    correct: "A",
    exp: "La satira online usa ironia e esagerazione per ridicolizzare argomenti (spesso scambiata per vera notizia)."
  },
  {
    id: 73,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'deepfake'?",
    a: { A: "Video falso creato con IA che imita una persona reale", B: "Foto di bassa qualità", C: "Video compresso", D: "File corrotto" },
    correct: "A",
    exp: "Un deepfake è un video falso creato con intelligenza artificiale che imita convincentemente una persona."
  },
  {
    id: 74,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'clickbait'?",
    a: { A: "Titolo sensazionalistico creato per attirare clic", B: "Un tipo di malware", C: "Un virus", D: "Un file temporaneo" },
    correct: "A",
    exp: "Il clickbait è un titolo volutamente sensazionalistico e fuorviante creato solo per attirare clic."
  },
  {
    id: 75,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'echo chamber'?",
    a: { A: "Ambiente dove vedi solo opinioni che condividi", B: "Una caverna", C: "Un evento", D: "Un'app" },
    correct: "A",
    exp: "Un'echo chamber è un ambiente (spesso social media) dove vedi principalmente opinioni simili alle tue."
  },
  {
    id: 76,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'filter bubble'?",
    a: { A: "Personalizzazione che limita la varietà di informazioni viste", B: "Un errore del browser", C: "Un'estensione", D: "Un antivirus" },
    correct: "A",
    exp: "Un filter bubble è la personalizzazione algoritmica che limita le informazioni diverse che vedi."
  },
  {
    id: 77,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'sensazionalismo'?",
    a: { A: "Presentare informazioni in modo esagerato per attirare attenzione", B: "Giornalismo serio", C: "Ricerca accademica", D: "Documento ufficiale" },
    correct: "A",
    exp: "Il sensazionalismo esagera e distorce le informazioni per attirare emotivamente l'attenzione."
  },
  {
    id: 78,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'fact opinion'?",
    a: { A: "Presentare un'opinione come se fosse un fatto verificato", B: "Una ricerca", C: "Una teoria", D: "Un'analisi" },
    correct: "A",
    exp: "Confondere fatto e opinione significa presentare giudizi personali come se fossero fatti provati."
  },
  {
    id: 79,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'manipolazione mediatica'?",
    a: { A: "Alterare notizie per influenzare opinioni", B: "Notizia vera", C: "Articolo scientifico", D: "Documento pubblico" },
    correct: "A",
    exp: "La manipolazione mediatica altera informazioni e presenta prospettive distorte per influenzare opinioni."
  },
  {
    id: 80,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "facile",
    q: "Come valutare l'attualità di un'informazione?",
    a: { A: "Controllando la data di pubblicazione e se aggiornata", B: "Contando i like", C: "Contando le condivisioni", D: "Leggendo i commenti" },
    correct: "A",
    exp: "L'attualità si valuta verificando la data di pubblicazione e se l'informazione è stata aggiornata."
  },

  // ===== CAPITOLO 1.2 - MEDIE =====
  {
    id: 81,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'analisi critica di una fonte'?",
    a: { A: "Esaminare sistematicamente origine, intento, credibilità e bias di una fonte", B: "Credere tutto", C: "Ignorare", D: "Condividere" },
    correct: "A",
    exp: "L'analisi critica esamina sistematicamente chi pubblica, con quale intento, quali pregiudizi potrebbe avere."
  },
  {
    id: 82,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'corroborazione'?",
    a: { A: "Verificare un'informazione controllando più fonti indipendenti", B: "Copiare un testo", C: "Salvare un file", D: "Condividere un link" },
    correct: "A",
    exp: "La corroborazione verifica se un'informazione è confermata da altre fonti indipendenti e affidabili."
  },
  {
    id: 83,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa sono i 'segnali di qualità' di un articolo?",
    a: { A: "Indicatori come citazioni, correzione di bozze, autorità autore, trasparenza", B: "Numero di visualizzazioni", C: "Numero di condivisioni", D: "Numero di commenti" },
    correct: "A",
    exp: "I segnali di qualità includono: ben scritto, citazioni, autore autorevole, date chiare, dichiarazioni fonti."
  },
  {
    id: 84,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'pubblicazione accademica peer-reviewed'?",
    a: { A: "Articolo verificato da esperti della materia prima della pubblicazione", B: "Blog personale", C: "Commento online", D: "Post sui social" },
    correct: "A",
    exp: "Un articolo peer-reviewed è stato verificato e approvato da esperti indipendenti prima di pubblicarsi."
  },
  {
    id: 85,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'ricerca primaria'?",
    a: { A: "Studio originale che raccoglie e analizza dati diretti", B: "Rassegna di altri studi", C: "Opinione personale", D: "Commento" },
    correct: "A",
    exp: "La ricerca primaria è uno studio originale che raccoglie direttamente dati e li analizza (non rielaborazione)."
  },
  {
    id: 86,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa sono i 'fallacies' logici?",
    a: { A: "Errori di ragionamento che invalidano un argomento", B: "Malware", C: "Errori di sistema", D: "Bug" },
    correct: "A",
    exp: "Le fallacies sono errori logici che rendono un argomento non valido (ad hominem, straw man, ecc)."
  },
  {
    id: 87,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'conflitto ideologico'?",
    a: { A: "Quando visioni opposte influenzano la presentazione di fatti", B: "Disaccordo personale", C: "Incompatibilità", D: "Errore" },
    correct: "A",
    exp: "Il conflitto ideologico si verifica quando le convinzioni di chi diffonde informazioni ne distorce la presentazione."
  },
  {
    id: 88,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'verifica incrociata'?",
    a: { A: "Confrontare la stessa informazione su fonti multiple diverse", B: "Leggere due articoli", C: "Fare un backup", D: "Copiare un file" },
    correct: "A",
    exp: "La verifica incrociata confronta un'informazione su molteplici fonti indipendenti per validarla."
  },
  {
    id: 89,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'contesto'?",
    a: { A: "Circostanze e informazioni che circondano un fatto, essenziali per comprenderlo pienamente", B: "Un'opinione", C: "Un commento", D: "Un post" },
    correct: "A",
    exp: "Il contesto fornisce le circostanze necessarie a comprendere pienamente il significato e l'importanza di un fatto."
  },
  {
    id: 90,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'source attribution'?",
    a: { A: "Indicare chiaramente la fonte originale di un'informazione", B: "Copia non autorizzata", C: "Plagio", D: "Violazione" },
    correct: "A",
    exp: "L'attribution citare chiaramente la fonte originale di dati, quotes, immagini (essenziale per evitare plagio)."
  },
  {
    id: 91,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'replicabilità'?",
    a: { A: "La possibilità di ripetere uno studio e ottenere risultati simili", B: "Una copia", C: "Un file duplicato", D: "Un backup" },
    correct: "A",
    exp: "La replicabilità scientifica significa che uno studio può essere ripetuto indipendentemente con risultati simili."
  },
  {
    id: 92,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'conflitto di credibilità'?",
    a: { A: "Quando fonti affidabili danno informazioni contraddittorie", B: "Un errore di sistema", C: "Un bug", D: "Un malware" },
    correct: "A",
    exp: "Un conflitto di credibilità si verifica quando fonti autorevoli forniscono informazioni contradditorie."
  },
  {
    id: 93,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significano 'statistiche fuorvianti'?",
    a: { A: "Dati presentati in modo da alterare il significato reale", B: "Calcoli errati", C: "Numeri sbagliati", D: "Dati mancanti" },
    correct: "A",
    exp: "Statistiche fuorvianti sono presentate in modo che distorce il reale significato (scala inappropriata, selezione parziale)."
  },
  {
    id: 94,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'correlazione vs causazione'?",
    a: { A: "Due variabili correlate non significano una causa l'altra", B: "Sono la stessa cosa", C: "Sono opposte", D: "Non importa" },
    correct: "A",
    exp: "Correlazione significa due variabili variano insieme; causazione significa una causa l'altra (errore comune)."
  },
  {
    id: 95,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'cherry picking'?",
    a: { A: "Selezionare solo dati che supportano una conclusione desiderata", B: "Leggere tutto", C: "Analizzare bene", D: "Verificare" },
    correct: "A",
    exp: "Il cherry picking seleziona deliberatamente solo i dati che supportano la propria tesi, ignorando altri."
  },
  {
    id: 96,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'confirmation bias'?",
    a: { A: "Tendenza a cercare informazioni che confermano le proprie credenze", B: "Un errore", C: "Un malware", D: "Un virus" },
    correct: "A",
    exp: "Il confirmation bias è la tendenza a cercare/interpretare informazioni per confermale le proprie credenze."
  },
  {
    id: 97,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'peer opinion'?",
    a: { A: "Valutazione da parte di pari (esperti della stessa disciplina)", B: "Opinione pubblica", C: "Commento online", D: "Post" },
    correct: "A",
    exp: "La peer opinion (revisione tra pari) è la valutazione da parte di esperti della stessa disciplina."
  },
  {
    id: 98,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'fact-versus-opinion article'?",
    a: { A: "Un articolo che distingue chiaramente fatti verificati da opinioni", B: "Un blog", C: "Un commento", D: "Un post" },
    correct: "A",
    exp: "Un articolo di qualità distingue chiaramente tra fatti verificabili e opinioni editoriali dell'autore."
  },
  {
    id: 99,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significano 'fonti trasparenti'?",
    a: { A: "Fonti che chiariscono come arrivano alle conclusioni e dichiarano i limiti", B: "Fonte pubblica", C: "Sito web", D: "Social media" },
    correct: "A",
    exp: "Le fonti trasparenti spiegano metodologie, limiti, finanziamenti e potenziali conflitti di interesse."
  },
  {
    id: 100,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'authority check'?",
    a: { A: "Verificare le credenziali e l'esperienza di chi afferma qualcosa", B: "Controllare un file", C: "Backup", D: "Antivirus" },
    correct: "A",
    exp: "Un authority check verifica se chi parla ha effettivamente competenze riconosciute nell'argomento."
  },

  // ===== CAPITOLO 1.2 - DIFFICILI =====
  {
    id: 101,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'epistemologia'?",
    a: { A: "Branca della filosofia che studia la natura della conoscenza", B: "Una malattia", C: "Un tipo di file", D: "Un programma" },
    correct: "A",
    exp: "L'epistemologia è la filosofia che studiacosa sia la conoscenza, come la otteniamo e come la validiamo."
  },
  {
    id: 102,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'triangolazione dati'?",
    a: { A: "Usare 3+ metodi/fonti per validare un'informazione da angoli diversi", B: "Geometria", C: "Calcolo", D: "Misura" },
    correct: "A",
    exp: "La triangolazione usa più fonti e metodi indipendenti per validare un'informazione da prospettive diverse."
  },
  {
    id: 103,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'falsificabilità'?",
    a: { A: "La possibilità teorica di provare che un'affermazione è falsa", B: "Una bugia", C: "Un errore", D: "Un malware" },
    correct: "A",
    exp: "La falsificabilità è il principio che un'affermazione scientifica deve poter essere teoricamente provata falsa."
  },
  {
    id: 104,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'metanalisi'?",
    a: { A: "Studio statistico che combina risultati di molteplici ricerche", B: "Una ricerca", C: "Un articolo", D: "Un'opinione" },
    correct: "A",
    exp: "La metanalisi è una tecnica statistica che combina i risultati di molti studi per trarre conclusioni più robuste."
  },
  {
    id: 105,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'positivismo'?",
    a: { A: "Filosofia che ammette solo conoscenza empiricamente verificabile", B: "Un'opinione", C: "Un sentimento", D: "Un'emozione" },
    correct: "A",
    exp: "Il positivismo è una corrente filosofica che accetta solo conoscenza verificabile empiricamente (misurabile)."
  },
    {
    id: 106,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'relativismo epistemico'?",
    a: { A: "Teoria che la verità è relativa e non assoluta", B: "Una malattia", C: "Un virus", D: "Un file" },
    correct: "A",
    exp: "Il relativismo epistemico sostiene che la verità sia relativa al contesto, cultura o osservatore."
  },
  {
    id: 107,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'effetto Dunning-Kruger'?",
    a: { A: "Tendenza a sopravvalutare la propria competenza", B: "Un malware", C: "Un virus", D: "Un errore" },
    correct: "A",
    exp: "L'effetto Dunning-Kruger è quando persone incompetenti sopravvalutano la propria conoscenza."
  },
  {
    id: 108,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'burden of proof'?",
    a: { A: "Responsabilità di chi fa un'affermazione di provarne la veridicità", B: "Un peso", C: "Un debito", D: "Un'obbligazione" },
    correct: "A",
    exp: "Il burden of proof assegna a chi fa un'affermazione straordinaria la responsabilità di provarla."
  },
  {
    id: 109,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'principio di parsimonia'?",
    a: { A: "La spiegazione più semplice è di solito la più giusta (Rasoio di Occam)", B: "Una legge", C: "Una regola", D: "Un principio morale" },
    correct: "A",
    exp: "Il principio di parsimonia (Rasoio di Occam) afferma che la spiegazione più semplice è spesso la migliore."
  },
  {
    id: 110,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significano 'intervalli di confidenza'?",
    a: { A: "Range statistico dove è probabile cada il valore reale", B: "Sicurezza personale", C: "Fiducia", D: "Convinzione" },
    correct: "A",
    exp: "L'intervallo di confidenza è il range statistico dove è probabile cada il vero valore di un parametro."
  },
  {
    id: 111,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'p-value'?",
    a: { A: "Probabilità che un risultato sia dovuto al caso", B: "Un valore", C: "Un numero", D: "Una misura" },
    correct: "A",
    exp: "Il p-value misura la probabilità che un risultato sperimentale sia dovuto al caso (non a un effetto reale)."
  },
  {
    id: 112,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'publication bias'?",
    a: { A: "Tendenza a pubblicare preferibilmente risultati positivi vs negativi", B: "Un errore", C: "Un malware", D: "Un virus" },
    correct: "A",
    exp: "Il publication bias favorisce la pubblicazione di studi con risultati significativi vs risultati nulli/negativi."
  },
  {
    id: 113,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'regressione verso la media'?",
    a: { A: "Tendenza di valori estremi a tornare verso la media nei tentativi successivi", B: "Un errore", C: "Un malware", D: "Un virus" },
    correct: "A",
    exp: "La regressione verso la media è la tendenza di valori estremi a tornare verso il valore medio successivamente."
  },
  {
    id: 114,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'effetto placebo'?",
    a: { A: "Miglioramento dovuto all'aspettativa, non al trattamento reale", B: "Una medicina", C: "Un farmaco", D: "Una cura" },
    correct: "A",
    exp: "L'effetto placebo è il miglioramento osservato anche con trattamenti fittizi, dovuto all'aspettativa del paziente."
  },
  {
    id: 115,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'doppio cieco'?",
    a: { A: "Studio dove né ricercatori né partecipanti sanno chi riceve il vero trattamento", B: "Una cecità", C: "Un difetto visivo", D: "Una malattia" },
    correct: "A",
    exp: "Uno studio in doppio cieco nasconde al ricercatore e al partecipante chi riceve il vero trattamento vs placebo."
  },
  {
    id: 116,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'campionamento stratificato'?",
    a: { A: "Divisione della popolazione in strati e campionamento proporzionale da ogni strato", B: "Un errore", C: "Un malware", D: "Un virus" },
    correct: "A",
    exp: "Il campionamento stratificato divide la popolazione in gruppi omogenei (strati) e campiona proporzionalmente."
  },
  {
    id: 117,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'margine di errore'?",
    a: { A: "Range di variazione accettabile in sondaggi/stime statistiche", B: "Un errore di sistema", C: "Un bug", D: "Un malware" },
    correct: "A",
    exp: "Il margine di errore è il range di variazione accettabile in sondaggi e stime statistiche."
  },
  {
    id: 118,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'distribuzione normale'?",
    a: { A: "Curva a campana dove i dati si distribuiscono simmetricamente attorno alla media", B: "Una retta", C: "Un'onda", D: "Un'ellisse" },
    correct: "A",
    exp: "La distribuzione normale (gaussiana) è la curva a campana dove dati si distribuiscono simmetricamente."
  },
  {
    id: 119,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'outlier'?",
    a: { A: "Dato anomalo che si discosta molto dalla media", B: "Una misura", C: "Un numero", D: "Un valore" },
    correct: "A",
    exp: "Un outlier è un dato anomalo che si discosta significativamente dalla media e può distorcere l'analisi."
  },
  {
    id: 120,
    category: "1.2 Valutare dati, informazioni e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'validità interna'?",
    a: { A: "Capacità di uno studio di misurare effettivamente ciò che propone di misurare", B: "Un errore", C: "Un malware", D: "Un virus" },
    correct: "A",
    exp: "La validità interna è la capacità di uno studio di misurare realmente il fenomeno che intende misurate."
  },

  // ===== CAPITOLO 1.3 - FACILI =====
  {
    id: 121,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'gestione file'?",
    a: { A: "Organizzazione e archiviazione di file in cartelle", B: "Leggere file", C: "Stampare", D: "Condividere online" },
    correct: "A",
    exp: "La gestione file è l'organizzazione e archiviazione strutturata di file in cartelle e sottocartelle."
  },
  {
    id: 122,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'backup'?",
    a: { A: "Copia di sicurezza di file importanti", B: "Un file", C: "Una cartella", D: "Un programma" },
    correct: "A",
    exp: "Un backup è una copia di sicurezza di file e dati importanti per recuperarli in caso di perdita."
  },
  {
    id: 123,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'cloud storage'?",
    a: { A: "Archiviazione dati su server online accessibili da qualsiasi dispositivo", B: "Disco fisso", C: "Memoria RAM", D: "Chiavetta USB" },
    correct: "A",
    exp: "Il cloud storage salva dati su server remoti online (es: Google Drive, Dropbox) accessibili ovunque."
  },
  {
    id: 124,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'privacy'?",
    a: { A: "Diritto di controllare i propri dati personali", B: "Segretezza", C: "Isolamento", D: "Solitudine" },
    correct: "A",
    exp: "La privacy è il diritto di controllare come vengono raccolti, usati e condivisi i propri dati personali."
  },
  {
    id: 125,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'GDPR'?",
    a: { A: "Regolamento europeo sulla protezione dei dati personali", B: "Un software", C: "Un browser", D: "Un'app" },
    correct: "A",
    exp: "Il GDPR (General Data Protection Regulation) è la legge UE che protegge i dati personali dei cittadini."
  },
  {
    id: 126,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significano 'dati sensibili'?",
    a: { A: "Dati personali che meritano protezione maggiore (salute, finanza, identità)", B: "Dati pubblici", C: "Statistiche", D: "Numeri" },
    correct: "A",
    exp: "I dati sensibili sono informazioni personali che richiedono protezione speciale (SSN, salute, finanza)."
  },
  {
    id: 127,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'consenso informato'?",
    a: { A: "Permesso esplicito dell'utente per raccogliere/usare i suoi dati", B: "Un contratto", C: "Una firma", D: "Un documento" },
    correct: "A",
    exp: "Il consenso informato è il permesso esplicito e libero di una persona per raccogliere/usare i suoi dati."
  },
  {
    id: 128,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'crittografia'?",
    a: { A: "Tecnica per rendere dati illeggibili a chi non ha la chiave", B: "Compressione file", C: "Backup", D: "Condivisione" },
    correct: "A",
    exp: "La crittografia trasforma dati in forma illeggibile senza una chiave speciale, protegge la privacy."
  },
  {
    id: 129,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'password forte'?",
    a: { A: "Password lungo con maiuscole, numeri, simboli (almeno 12 caratteri)", B: "Password semplice", C: "Una parola", D: "Una data" },
    correct: "A",
    exp: "Una password forte è lunga (12+ caratteri) e contiene maiuscole, minuscole, numeri e simboli."
  },
  {
    id: 130,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'autenticazione a due fattori (2FA)'?",
    a: { A: "Verifica in due passaggi (password + codice/SMS/app) per accedere", B: "Una sola password", C: "Un'impronta", D: "Un volto" },
    correct: "A",
    exp: "La 2FA richiede due forme di verifica (password + codice SMS/app) per accedere a un account."
  },
  {
    id: 131,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'virus informatico'?",
    a: { A: "Software malevolo che si replica e infetta file/sistemi", B: "Una malattia", C: "Un'infezione", D: "Una febbre" },
    correct: "A",
    exp: "Un virus informatico è un software malevolo che si replica automaticamente infettando file e sistemi."
  },
  {
    id: 132,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'malware'?",
    a: { A: "Software malevolo generico (virus, trojans, spyware, ransomware)", B: "Un file", C: "Un programma buono", D: "Un'app sicura" },
    correct: "A",
    exp: "Malware è il termine generico per software malevolo (virus, trojans, ransomware, spyware)."
  },
  {
    id: 133,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'ransomware'?",
    a: { A: "Malware che cripta file e chiede riscatto per decifrarli", B: "Un virus", C: "Una password", D: "Un backup" },
    correct: "A",
    exp: "Il ransomware cripta i file della vittima e richiede il pagamento di un riscatto per decifrarli."
  },
  {
    id: 134,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'firewall'?",
    a: { A: "Software/hardware che filtra il traffico di rete per bloccare accessi non autorizzati", B: "Un muro", C: "Un fuoco", D: "Un'arma" },
    correct: "A",
    exp: "Un firewall è un sistema di sicurezza che filtra il traffico di rete e blocca accessi pericolosi."
  },
  {
    id: 135,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'antivirus'?",
    a: { A: "Software che rileva e rimuove virus e malware", B: "Un virus", C: "Un file", D: "Un backup" },
    correct: "A",
    exp: "Un antivirus è un software che rileva, isola e rimuove virus e malware dal computer."
  },
  {
    id: 136,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'metadati di un file'?",
    a: { A: "Informazioni su un file (autore, data, dimensione)", B: "Il contenuto del file", C: "Il codice", D: "Il testo" },
    correct: "A",
    exp: "I metadati di un file registrano info su di esso: autore, data creazione, dimensione, permessi."
  },
  {
    id: 137,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'compressione file'?",
    a: { A: "Ridurre la dimensione di un file utilizzando algoritmi", B: "Dividere un file", C: "Copiare un file", D: "Spostare un file" },
    correct: "A",
    exp: "La compressione riduce la dimensione di un file tramite algoritmi (ZIP, RAR, 7z)."
  },
  {
    id: 138,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significano i 'permessi di file'?",
    a: { A: "Regole che controllano chi può leggere, modificare, eseguire un file", B: "Un file", C: "Una cartella", D: "Un backup" },
    correct: "A",
    exp: "I permessi controllano chi può accedere (lettura), modificare (scrittura) o eseguire un file."
  },
  {
    id: 139,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'sincronizzazione cloud'?",
    a: { A: "Aggiornamento automatico di file su più dispositivi tramite cloud", B: "Una copia", C: "Un backup manuale", D: "Una condivisione" },
    correct: "A",
    exp: "La sincronizzazione cloud aggiorna automaticamente file su tutti i tuoi dispositivi (PC, telefono, tablet)."
  },
  {
    id: 140,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "facile",
    q: "Cosa significa 'account personale'?",
    a: { A: "Profilo utente protetto da password con dati e preferenze proprie", B: "Un'azienda", C: "Un negozio", D: "Un'istituzione" },
    correct: "A",
    exp: "Un account personale è il tuo profilo online protetto da password che salva dati e preferenze."
  },

  // ===== CAPITOLO 1.3 - MEDIE =====
  {
    id: 141,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'architettura dell'informazione'?",
    a: { A: "Struttura organizzativa di dati in un sistema (cartelle, tag, metadati)", B: "Un edificio", C: "Una casa", D: "Un piano" },
    correct: "A",
    exp: "L'architettura dell'informazione organizza dati in sistemi logici (cartelle, tag, metatag) per facilitare accesso."
  },
  {
    id: 142,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significano 'standard di sicurezza'?",
    a: { A: "Protocolli e best practices per proteggere dati (es: SSL, TLS, OAuth)", B: "Un'opinione", C: "Una regola", D: "Una legge" },
    correct: "A",
    exp: "Gli standard di sicurezza sono protocolli e pratiche (SSL, TLS, OAuth, 2FA) per proteggere dati e sistemi."
  },
  {
    id: 143,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'deduplicazione'?",
    a: { A: "Processo di rimozione di copie duplicate di dati", B: "Copia", C: "Duplicazione", D: "Moltiplicazione" },
    correct: "A",
    exp: "La deduplicazione rileva e rimuove copie identiche di dati, risparmiando spazio di archiviazione."
  },
  {
    id: 144,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'archiviazione a livelli'?",
    a: { A: "Usare diversi tipi di storage (rapido/costoso per accesso frequente, lento/economico per archivio)", B: "Un file", C: "Una cartella", D: "Un backup" },
    correct: "A",
    exp: "L'archiviazione a livelli usa storage rapido per dati frequenti e lento per dati archiviati."
  },
  {
    id: 145,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'versioning'?",
    a: { A: "Mantenere multiple versioni di uno stesso file per tracciare cambiamenti", B: "Una copia", C: "Un backup", D: "Un aggiornamento" },
    correct: "A",
    exp: "Il versioning mantiene più versioni di un file tracciandone i cambiamenti (Git, Google Docs history)."
  },
  {
    id: 146,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'disaster recovery'?",
    a: { A: "Piano e processi per ripristinare sistemi dopo un disastro/interruzione", B: "Un incidente", C: "Un errore", D: "Un malware" },
    correct: "A",
    exp: "Il disaster recovery è il piano per ripristinare rapidamente dati e sistemi dopo un disastro."
  },
  {
    id: 147,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'compliance'?",
    a: { A: "Conformità a leggi, regolamenti e standard (GDPR, HIPAA, ISO)", B: "Un accordo", C: "Un contratto", D: "Una firma" },
    correct: "A",
    exp: "La compliance è l'aderenza a leggi e standard (GDPR, HIPAA, ISO) per la protezione dei dati."
  },
  {
    id: 148,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'audit trail'?",
    a: { A: "Registro che registra chi accede a quali dati e quando", B: "Un sentiero", C: "Una strada", D: "Un percorso" },
    correct: "A",
    exp: "L'audit trail registra tutte le azioni su dati (chi, cosa, quando) per tracciamento e sicurezza."
  },
  {
    id: 149,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'tokenization'?",
    a: { A: "Sostituzione di dati sensibili con token non sensibili", B: "Un gettone", C: "Una moneta", D: "Un simbolo" },
    correct: "A",
    exp: "La tokenization sostituisce dati sensibili (numeri carta) con token innocui per proteggere privacy."
  },
  {
    id: 150,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'anonymization'?",
    a: { A: "Rimozione di identificatori per rendere dati anonimizzati", B: "Nascondimento", C: "Occultamento", D: "Segreto" },
    correct: "A",
    exp: "L'anonimizzazione rimuove identificatori (nomi, numeri) dai dati per protegger la privacy individuale."
  },
  {
    id: 151,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'pseudonymization'?",
    a: { A: "Sostituzione di identificatori con pseudonimi mantenendo tracciabilità potenziale", B: "Anonimato", C: "Segretezza", D: "Occultamento" },
    correct: "A",
    exp: "La pseudonimizzazione sostituisce identificatori con pseudonimi ma mantiene possibilità di tracciare."
  },
  {
    id: 152,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'data minimization'?",
    a: { A: "Raccogliere solo dati necessari per uno scopo specifico", B: "Riduzione", C: "Compressione", D: "Minimizzazione" },
    correct: "A",
    exp: "La minimizzazione raccoglie solo dati strettamente necessari, riduce rischi privacy."
  },
  {
    id: 153,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'data retention'?",
    a: { A: "Politica che specifica quanto tempo conservare dati prima di eliminarli", B: "Conservazione", C: "Archiviazione", D: "Salvataggio" },
    correct: "A",
    exp: "La data retention policy specifica il periodo di conservazione dati prima della loro eliminazione."
  },
  {
    id: 154,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'right to be forgotten'?",
    a: { A: "Diritto GDPR di richiedere l'eliminazione dei propri dati personali", B: "Amnesia", C: "Oblio", D: "Dimenticanza" },
    correct: "A",
    exp: "Il right to be forgotten (GDPR) consente alle persone di richiedere l'eliminazione dei loro dati personali."
  },
  {
    id: 155,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'data portability'?",
    a: { A: "Diritto di ottenere e trasferire i propri dati da un servizio a un altro", B: "Mobilità", C: "Trasporto", D: "Movimento" },
    correct: "A",
    exp: "La data portability (GDPR) consente di scaricare i propri dati e trasferirli a un altro servizio."
  },
  {
    id: 156,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'data governance'?",
    a: { A: "Framework di regole e processi per gestire dati e qualità", B: "Un governo", C: "Un'amministrazione", D: "Una gestione" },
    correct: "A",
    exp: "La data governance definisce regole, responsabilità e processi per gestire qualità e sicurezza dati."
  },
  {
    id: 157,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'data quality'?",
    a: { A: "Misura di accuratezza, completezza e coerenza dei dati", B: "Un file", C: "Una cartella", D: "Un backup" },
    correct: "A",
    exp: "La data quality misura l'accuratezza, completezza, coerenza e affidabilità dei dati."
  },
  {
    id: 158,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'data integration'?",
    a: { A: "Combinazione di dati da fonti multiple in un sistema unificato", B: "Un file", C: "Una cartella", D: "Un backup" },
    correct: "A",
    exp: "L'integrazione dati combina informazioni da fonti diverse in un sistema unificato e coerente."
  },
  {
    id: 159,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'master data'?",
    a: { A: "Dati fondamentali e critici di un'organizzazione (clienti, prodotti, conti)", B: "Un file", C: "Una cartella", D: "Un backup" },
    correct: "A",
    exp: "Il master data è l'insieme di dati fondamentali di un'azienda (clienti, prodotti, transazioni)."
  },
  {
    id: 160,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "medio",
    q: "Cosa significa 'ETL'?",
    a: { A: "Extract, Transform, Load - processo di trasferimento dati fra sistemi", B: "Un file", C: "Un backup", D: "Una cartella" },
    correct: "A",
    exp: "ETL (Extract, Transform, Load) estrae dati, li trasforma e li carica in un sistema nuovo."
  },

  // ===== CAPITOLO 1.3 - DIFFICILI =====
  {
    id: 161,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'homomorphic encryption'?",
    a: { A: "Crittografia che permette operazioni su dati cifrati senza decifrarli", B: "Una semplice crittografia", C: "Un backup", D: "Una cartella" },
    correct: "A",
    exp: "L'homomorphic encryption permette di eseguire calcoli su dati cifrati senza doverli decifrare."
  },
  {
    id: 162,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'zero-trust model'?",
    a: { A: "Architettura di sicurezza che non fidata nessuno, verifica tutto", B: "Fiducia totale", C: "Nessuna verifica", D: "Apertura totale" },
    correct: "A",
    exp: "Lo zero-trust model non fidata automaticamente nessuno (interno o esterno), verifica sempre."
  },
  {
    id: 163,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'differential privacy'?",
    a: { A: "Tecnica che aggiunge rumore ai dati per proteggere privacy individuale", B: "Privacy totale", C: "Anonimato", D: "Segretezza" },
    correct: "A",
    exp: "La differential privacy aggiunge rumore statistico ai dati mantenendo utilità ma proteggendo privacy."
  },
  {
    id: 164,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'federated learning'?",
    a: { A: "Addestrare modelli IA su dati decentralizzati senza centralizzare i dati", B: "Un'app", C: "Un software", D: "Un programma" },
    correct: "A",
    exp: "Il federated learning addestra modelli IA usando dati distribuiti senza raccoglierli in un luogo."
  },
  {
    id: 165,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'blockchain'?",
    a: { A: "Tecnologia che usa catene di blocchi cifrati per registrare transazioni immutabili", B: "Una catena", C: "Un blocco", D: "Un file" },
    correct: "A",
    exp: "La blockchain registra transazioni in blocchi cifrati legati insieme, creando un registro immutabile."
  },
  {
    id: 166,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'distributed ledger'?",
    a: { A: "Registro distribuito su più nodi senza autorità centrale", B: "Un file", C: "Una cartella", D: "Un backup" },
    correct: "A",
    exp: "Un distributed ledger è un registro (come blockchain) mantenuto in copie su più nodi indipendenti."
  },
  {
    id: 167,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'smart contracts'?",
    a: { A: "Contratti autoeseguibili su blockchain quando condizioni sono soddisfatte", B: "Un contratto normale", C: "Un accordo", D: "Un documento" },
    correct: "A",
    exp: "Gli smart contracts eseguono automaticamente azioni su blockchain quando condizioni specifiche sono met."
  },
  {
    id: 168,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'consensus mechanism'?",
    a: { A: "Protocollo per far accordare nodi distribuiti su validità di dati", B: "Un accordo", C: "Una decisione", D: "Un voto" },
    correct: "A",
    exp: "Un consensus mechanism (PoW, PoS) fa accordare nodi distribuiti sulla validità dei dati senza centro."
  },
  {
    id: 169,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'cold storage'?",
    a: { A: "Archiviazione offline di dati sensibili per sicurezza massima", B: "Un freddo", C: "Una temperatura", D: "Un'aria" },
    correct: "A",
    exp: "Il cold storage mantiene dati offline (prive di accesso internet) per protezione massima da attacchi."
  },
  {
    id: 170,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'hot storage'?",
    a: { A: "Archiviazione online di dati frequentemente accessibili", B: "Un caldo", C: "Una temperatura", D: "Un'aria" },
    correct: "A",
    exp: "L'hot storage mantiene dati online e facilmente accessibili per utilizzo frequente e rapido."
  },
  {
    id: 171,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'RAID'?",
    a: { A: "Redundant Array of Independent Disks - tecnologia per ridondanza e velocità storage", B: "Un attacco", C: "Un raid", D: "Un'incursione" },
    correct: "A",
    exp: "RAID usa dischi multipli per ridondanza (backup automatico) e velocità di accesso ai dati."
  },
  {
    id: 172,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'replication'?",
    a: { A: "Copiatura automatica di dati su più server per disponibilità", B: "Una copia", C: "Un duplicato", D: "Una clone" },
    correct: "A",
    exp: "La replication mantiene copie identiche di dati su server multipli per continuità e disponibilità."
  },
  {
    id: 173,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'failover'?",
    a: { A: "Cambio automatico a sistema di backup quando il principale fallisce", B: "Un errore", C: "Un fallimento", D: "Un disastro" },
    correct: "A",
    exp: "Il failover commuta automaticamente a un sistema di backup quando il principale subisce un guasto."
  },
  {
    id: 174,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'API'?",
    a: { A: "Application Programming Interface - strumento per far comunicare software diversi", B: "Un'app", C: "Un software", D: "Un programma" },
    correct: "A",
    exp: "Un'API è un'interfaccia che permette a software diversi di comunicare e scambiarsi dati."
  },
  {
    id: 175,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'JSON'?",
    a: { A: "JavaScript Object Notation - formato testuale per scambiare dati strutturati", B: "Un file", C: "Un programma", D: "Un'app" },
    correct: "A",
    exp: "JSON è un formato leggibile per scambiare dati strutturati fra sistemi (alternativa a XML)."
  },
  {
    id: 176,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'REST API'?",
    a: { A: "API che usa HTTP per operazioni CRUD su risorse identificate da URL", B: "Un'api", C: "Un'app", D: "Un software" },
    correct: "A",
    exp: "Una REST API usa HTTP (GET, POST, PUT, DELETE) per operazioni su risorse identificate da URL."
  },
  {
    id: 177,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'SOAP'?",
    a: { A: "Simple Object Access Protocol - protocollo XML per web services", B: "Un sapone", C: "Una schiuma", D: "Un detergente" },
    correct: "A",
    exp: "SOAP è un protocollo XML per messaggi web service complessi (più pesante di REST)."
  },
  {
    id: 178,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'sharding'?",
    a: { A: "Partizione di dati grandi in sottoinsiemi (shards) distribuiti su server multipli", B: "Un frammento", C: "Un pezzo", D: "Una parte" },
    correct: "A",
    exp: "Lo sharding divide dati grandi in parti (shards) distribuite su server per scalabilità."
  },
  {
    id: 179,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'caching'?",
    a: { A: "Memorizzazione temporanea di dati acceduti frequentemente per velocità", B: "Un nascondiglio", C: "Un rifugio", D: "Un riparo" },
    correct: "A",
    exp: "Il caching memorizza temporaneamente dati frequenti in memoria veloce per accesso più rapido."
  },
  {
    id: 180,
    category: "1.3 Gestire dati e contenuti",
    difficulty: "difficile",
    q: "Cosa significa 'database normalization'?",
    a: { A: "Processo di organizzazione dati per ridurre ridondanza e migliorare integrità", B: "Un'organizzazione", C: "Un ordine", D: "Una struttura" },
    correct: "A",
    exp: "La normalizzazione organizza i dati in tabelle relazionali per eliminare ridondanza e garantire coerenza."
  }
];

// ============================================
// 🎯 VARIABILI GLOBALI
// ============================================
let currentScreen = 'welcome'; // 'welcome' | 'chapter-select' | 'quiz' | 'results'
let selectedChapter = null; // '1.1' | '1.2' | '1.3' | 'all'
let currentQuestionIndex = 0;
let userAnswers = []; // [{questionId, userAnswer, isCorrect}, ...]
let quizQuestions = []; // Domande estratte per il quiz corrente
let timerInterval = null;
let timeRemaining = CONFIG.DURATA_TIMER;

// ============================================
// 🎮 INIZIALIZZAZIONE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initScreen();
});

function initScreen() {
  showScreen('welcome');
}

// ============================================
// 📱 GESTIONE SCHERMATE
// ============================================
function showScreen(screenName) {
  // Nascondi tutte le schermate
  document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
  
  // Mostra la schermata richiesta
  const screenEl = document.getElementById(`screen-${screenName}`);
  if (screenEl) {
    screenEl.classList.remove('hidden');
    currentScreen = screenName;
  }
}

// ============================================
// 🚨 MODAL WARNING
// ============================================
function openModalWarning() {
  const modal = document.getElementById('modal-overlay');
  modal.classList.remove('hidden');
}

function closeModalWarning() {
  const modal = document.getElementById('modal-overlay');
  modal.classList.add('hidden');
  showScreen('welcome');
}

function startQuiz() {
  const modal = document.getElementById('modal-overlay');
  modal.classList.add('hidden');
  showScreen('chapter-select');
}

// ============================================
// 📚 SELEZIONE CAPITOLO
// ============================================
function selectChapter(chapter) {
  selectedChapter = chapter; // '1.1' | '1.2' | '1.3' | 'all'
  loadQuiz();
}

// ============================================
// 🎲 CARICAMENTO E ESTRAZIONE QUIZ
// ============================================
function loadQuiz() {
  // RESET
  currentQuestionIndex = 0;
  userAnswers = [];
  timeRemaining = CONFIG.DURATA_TIMER;

  // FILTRA domande per capitolo
  let filteredByChapter = PANIERE;
  if (selectedChapter && selectedChapter !== 'all') {
    filteredByChapter = PANIERE.filter(q => q.category.startsWith(selectedChapter));
  }

  // ESTRAE N domande con distribuzione per difficoltà
  quizQuestions = extractQuestions(filteredByChapter, CONFIG.DISTRIBUZIONE_DIFFICOLTA);

  // RIMESCOLA opzioni per ogni domanda
  quizQuestions.forEach(q => {
    shuffleOptions(q);
  });

  // MOSTRA la prima domanda
  showScreen('quiz');
  displayQuestion();
  startTimer();
}

function extractQuestions(questions, distribution) {
  if (!distribution) {
    // Estrazione casuale semplice
    return shuffleArray(questions).slice(0, CONFIG.NUM_DOMANDE);
  }

  // Estrazione con distribuzione controllata
  const result = [];
  for (const [difficulty, count] of Object.entries(distribution)) {
    const byDifficulty = questions.filter(q => q.difficulty === difficulty);
    const extracted = shuffleArray(byDifficulty).slice(0, count);
    result.push(...extracted);
  }
  return shuffleArray(result);
}

function shuffleOptions(question) {
  const options = ['A', 'B', 'C', 'D'];
  const shuffled = shuffleArray(options);
  
  // Rimappa le opzioni
  const newOptions = {};
  shuffled.forEach((newLetter, oldIndex) => {
    const oldLetter = options[oldIndex];
    newOptions[newLetter] = question.a[oldLetter];
  });
  
  // Aggiorna la risposta corretta in base al rimescolamento
  const oldCorrectLetter = question.correct;
  const oldCorrectIndex = options.indexOf(oldCorrectLetter);
  const newCorrectLetter = shuffled[oldCorrectIndex];
  
  question.a = newOptions;
  question.correct = newCorrectLetter;
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ============================================
// ❓ VISUALIZZAZIONE DOMANDE
// ============================================
function displayQuestion() {
  if (currentQuestionIndex >= quizQuestions.length) {
    showResults();
    return;
  }

  const question = quizQuestions[currentQuestionIndex];
  const container = document.getElementById('question-container');
  
  // Progress
  document.getElementById('progress-text').textContent = 
    `Domanda ${currentQuestionIndex + 1} di ${quizQuestions.length}`;
  const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
  document.getElementById('progress-bar').style.width = `${progress}%`;

  // Domanda
  let html = `
    <div class="question-box">
      <h2>${question.q}</h2>
      <div class="options">
  `;

  // Opzioni
  ['A', 'B', 'C', 'D'].forEach(letter => {
    html += `
      <button class="option-btn" onclick="selectAnswer('${letter}')">
        <span class="option-letter">${letter}</span>
        <span class="option-text">${question.a[letter]}</span>
      </button>
    `;
  });

  html += `</div></div>`;
  container.innerHTML = html;
}

function selectAnswer(letter) {
  const question = quizQuestions[currentQuestionIndex];
  const isCorrect = (letter === question.correct);
  
  userAnswers.push({
    questionId: question.id,
    question: question.q,
    userAnswer: question.a[letter],
    userLetter: letter,
    correct: question.correct,
    correctAnswer: question.a[question.correct],
    isCorrect: isCorrect,
    category: question.category,
    exp: question.exp
  });

  // Avanza alla domanda successiva
  currentQuestionIndex++;
  setTimeout(() => displayQuestion(), 500);
}

// ============================================
// ⏱️ TIMER
// ============================================
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    if (timeRemaining <= CONFIG.ALERT_TIMER_SOGLIA && timeRemaining > CONFIG.ALERT_TIMER_SOGLIA - 1) {
      showTimerAlert();
    }

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      showResults();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(timeRemaining / 60);
  const secs = timeRemaining % 60;
  document.getElementById('timer').textContent = 
    `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function showTimerAlert() {
  const alert = document.getElementById('timer-alert');
  alert.classList.remove('hidden');
}

// ============================================
// 🔙 TORNA ALLA HOME
// ============================================
function confirmBackHome() {
  if (confirm('Torna alla schermata iniziale (welcome screen)? Il test in corso sarà cancellato.')) {
    clearInterval(timerInterval);
    showScreen('welcome');
  }
}

// ============================================
// 🎯 RISULTATI
// ============================================
function showResults() {
  clearInterval(timerInterval);
  
  const correct = userAnswers.filter(a => a.isCorrect).length;
  const total = userAnswers.length;
  const percentage = Math.round((correct / total) * 100);

  // Determina badge
  let badge = '📚';
  let badgeName = 'Insufficiente';
  if (percentage >= CONFIG.SOGLIA_ECCELLENTE) {
    badge = '🏆';
    badgeName = 'Eccellente';
  } else if (percentage >= CONFIG.SOGLIA_SUFFICIENTE) {
    badge = '👍';
    badgeName = 'Sufficiente';
  }

  // Score card
  const scoreCard = document.getElementById('score-card');
  scoreCard.innerHTML = `
    <div class="score-display">
      <div class="score-badge">${badge}</div>
      <div class="score-info">
        <h2>${badgeName}</h2>
        <p class="score-text">${correct} / ${total} risposte corrette</p>
        <p class="score-percentage">${percentage}%</p>
      </div>
    </div>
  `;

  // Riepilogo
  const resultsList = document.getElementById('results-list');
  resultsList.innerHTML = '';
  userAnswers.forEach((answer, index) => {
    const itemClass = answer.isCorrect ? 'correct' : 'incorrect';
    resultsList.innerHTML += `
      <div class="result-item ${itemClass}">
        <h4>${index + 1}. ${answer.question}</h4>
        <p><strong>Tua risposta:</strong> ${answer.userLetter} - ${answer.userAnswer}</p>
        ${!answer.isCorrect ? `<p><strong style="color:green;">Risposta corretta:</strong> ${answer.correct} - ${answer.correctAnswer}</p>` : ''}
        <p><strong>Spiegazione:</strong> ${answer.exp}</p>
      </div>
    `;
  });

  showScreen('results');
}

// ============================================
// 🔄 RIFAI TEST
// ============================================
function restartQuiz() {
  // Nuova estrazione casuale (stesso capitolo)
  loadQuiz();
}

// ============================================
// 🛠️ UTILITY
// ============================================
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
