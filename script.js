// ============================================
// CONFIGURAZIONE
// ============================================

const CONFIG = {
  NUM_DOMANDE: 30,
  DURATA_TIMER: 30 * 60, // 30 minuti = 1800 secondi
  SOGLIA_ECCELLENTE: 80,
  SOGLIA_SUFFICIENTE: 60,
  ALERT_TIMER_SOGLIA: 300 // 5 minuti
};

// ============================================
// PANIERE DOMANDE (70 domande reali DigComp Area 1)
// ============================================

const PANIERE = [
  {
    id: 1,
    category: "Fondamenti - Internet e Web",
    q: "Qual è la differenza fondamentale tra Internet e il World Wide Web secondo il framework DigComp 2.2?",
    a: { A: "Internet è un servizio specifico mentre il web è la rete globale di computer", B: "Sono termini completamente sinonimi utilizzati in modo intercambiabile", C: "Internet è l'infrastruttura di rete globale che collega milioni di computer mentre il web è un servizio che opera su Internet per condividere documenti ipertestuali", D: "Il web rappresenta l'hardware fisico mentre Internet è il software di gestione" },
    correct: "C",
    exp: "Internet è l'infrastruttura fisica e virtuale (rete di computer), il web è un servizio basato su HTTP per documenti collegati."
  },
  {
    id: 2,
    category: "Fondamenti - Internet e Web",
    q: "Quale tra le seguenti attività può essere svolta esclusivamente attraverso una connessione attiva a Internet?",
    a: { A: "La lettura di un libro cartaceo in una biblioteca tradizionale", B: "La ricerca e la navigazione tra diversi siti web utilizzando un motore di ricerca come Google", C: "La scrittura di una lettera a mano su un foglio di carta", D: "Una telefonata effettuata con un telefono fisso tradizionale" },
    correct: "B",
    exp: "La navigazione web richiede una connessione attiva per accedere alle risorse online."
  },
  {
    id: 3,
    category: "Browser e Navigazione",
    q: "Quale tra i seguenti software è considerato uno dei principali browser web disponibili sul mercato?",
    a: { A: "Microsoft Excel utilizzato per la creazione di fogli di calcolo", B: "Google Chrome utilizzato per la navigazione sul World Wide Web", C: "Adobe Photoshop utilizzato per l'editing di immagini digitali", D: "Microsoft PowerPoint utilizzato per la creazione di presentazioni" },
    correct: "B",
    exp: "Chrome è il browser più diffuso al mondo, noto per velocità e integrazione con i servizi Google."
  },
  {
    id: 4,
    category: "Browser e Navigazione",
    q: "Quale browser web è particolarmente noto per l'attenzione dedicata alla protezione della privacy dell'utente?",
    a: { A: "Microsoft Edge", B: "Apple Safari", C: "Mozilla Firefox", D: "Google Chrome" },
    correct: "C",
    exp: "Mozilla Firefox enfatizza la privacy con funzionalità integrate e numerose estensioni per la protezione dei dati."
  },
  {
    id: 5,
    category: "URL e Indirizzi Web",
    q: "Nella struttura di un indirizzo URL, quale parte indica il protocollo utilizzato per accedere alla risorsa online?",
    a: { A: "Il dominio di secondo livello come 'google' in google.com", B: "La parte iniziale come 'https' o 'http' all'inizio dell'indirizzo", C: "Il percorso delle cartelle dopo il dominio principale", D: "I parametri aggiunti dopo il simbolo del punto interrogativo" },
    correct: "B",
    exp: "'https' indica una connessione sicura con crittografia, mentre 'http' è il protocollo standard non criptato."
  },
  {
    id: 6,
    category: "URL e Indirizzi Web",
    q: "Quale elemento della struttura di un URL rappresenta il nome vero e proprio del sito web che si intende visitare?",
    a: { A: "Il dominio di primo livello (TLD) come '.com' o '.it'", B: "Il protocollo come 'http' o 'https'", C: "Il dominio di secondo livello come 'google' in google.com", D: "Il percorso delle sottocartelle o dei file" },
    correct: "C",
    exp: "Il dominio di secondo livello è la parte univoca che identifica il proprietario del dominio."
  },
  {
    id: 7,
    category: "URL e Indirizzi Web",
    q: "Cosa indica l'acronimo TLD all'interno della struttura di un indirizzo URL completo?",
    a: { A: "Temporary Link Domain", B: "Text Link Domain", C: "Top Level Domain", D: "Total Link Domain" },
    correct: "C",
    exp: "TLD sono i domini di primo livello: .com (commerciale), .it (Italia), .edu (educativo), .gov (governativo)."
  },
  {
    id: 8,
    category: "Tecniche di Ricerca",
    q: "Quale tecnica di ricerca permette di trovare una frase esatta all'interno dei risultati restituiti da un motore di ricerca?",
    a: { A: "L'uso del trattino per escludere termini specifici", B: "L'inserimento della frase tra virgolette doppie per la corrispondenza precisa", C: "L'uso dell'asterisco come carattere jolly per varianti", D: "L'inserimento di un punto interrogativo per domande" },
    correct: "B",
    exp: "Le virgolette assicurano che le parole siano cercate nell'ordine esatto, restringendo i risultati."
  },
  {
    id: 9,
    category: "Motori di Ricerca",
    q: "Quale motore di ricerca è particolarmente apprezzato per la sua politica di non tracciamento delle ricerche effettuate dagli utenti?",
    a: { A: "Google Search", B: "Microsoft Bing", C: "DuckDuckGo", D: "Yahoo Search" },
    correct: "C",
    exp: "DuckDuckGo non raccoglie dati personali per profilazione, garantendo maggiore privacy."
  },
  {
    id: 10,
    category: "Browser e Navigazione",
    q: "Qual è il principale vantaggio dell'utilizzo dei segnalibri o dei preferiti all'interno di un browser web?",
    a: { A: "Aumentare la velocità generale di connessione a Internet", B: "Permettere un accesso rapido e diretto ai siti web visitati con maggiore frequenza", C: "Eliminare automaticamente la pubblicità dai siti visitati", D: "Cambiare il motore di ricerca predefinito del browser" },
    correct: "B",
    exp: "I segnalibri salvano gli URL per accesso immediato senza dover ridigitare l'indirizzo."
  },
  {
    id: 11,
    category: "Browser e Navigazione",
    q: "Quale elemento delle pagine web permette di navigare da una pagina all'altra semplicemente cliccando su di esso?",
    a: { A: "La barra degli indirizzi situata in alto nel browser", B: "Il collegamento ipertestuale o link presente nel contenuto", C: "Il pulsante di aggiornamento della pagina corrente", D: "La scheda aperta all'interno del browser" },
    correct: "B",
    exp: "I link sono elementi cliccabili che permettono transizioni tra pagine web."
  },
  {
    id: 12,
    category: "Browser e Navigazione",
    q: "Quale browser web è sviluppato da Apple ed è ottimizzato principalmente per i dispositivi con sistema operativo macOS e iOS?",
    a: { A: "Google Chrome", B: "Mozilla Firefox", C: "Microsoft Edge", D: "Safari" },
    correct: "D",
    exp: "Safari è integrato nei dispositivi Apple per efficienza energetica e ottimizzazione nativa."
  },
  {
    id: 13,
    category: "URL e Indirizzi Web",
    q: "Nella struttura di un URL, cosa rappresentano i parametri che seguono il simbolo del punto interrogativo?",
    a: { A: "Il protocollo di accesso alla risorsa online", B: "Il nome del dominio principale del sito", C: "Dati aggiuntivi passati al server per elaborazioni specifiche o personalizzazioni", D: "La cartella principale in cui è ospitato il file" },
    correct: "C",
    exp: "I parametri (query string) sono usati per filtri dinamici, ricerche e personalizzazioni."
  },
  {
    id: 14,
    category: "URL e Indirizzi Web",
    q: "Quale tra i seguenti è un esempio di dominio di primo livello nazionale noto come ccTLD?",
    a: { A: ".www utilizzato come prefisso comune", B: ".com per siti commerciali internazionali", C: ".org per organizzazioni non profit", D: ".it per siti registrati in Italia" },
    correct: "D",
    exp: ".it è il Country Code Top-Level Domain per l'Italia, indica l'origine geografica."
  },
  {
    id: 15,
    category: "Browser e Navigazione",
    q: "Quale caratteristica distingue il browser Opera rispetto agli altri browser principali attualmente disponibili?",
    a: { A: "Integrazione nativa esclusiva con Microsoft 365", B: "VPN gratuita e blocco annunci integrato direttamente nel browser", C: "Modalità lettura esclusiva per e-book digitali", D: "Supporto limitato solo ai sistemi operativi Windows" },
    correct: "B",
    exp: "Opera offre VPN gratuita e blocco annunci integrato, migliorando privacy senza estensioni extra."
  },
  {
    id: 16,
    category: "Affidabilità delle Fonti",
    q: "Quale è uno dei criteri fondamentali per valutare la credibilità di una fonte informativa reperita online?",
    a: { A: "Il numero di like o condivisioni ricevute sui social media", B: "La presenza di colori vivaci e design moderno del sito", C: "La competenza e l'autorevolezza dell'autore o dell'istituzione responsabile", D: "La quantità di immagini e video presenti nella pagina" },
    correct: "C",
    exp: "Autori esperti e istituzioni riconosciute garantiscono maggiore affidabilità."
  },
  {
    id: 17,
    category: "Affidabilità delle Fonti",
    q: "Quale rischio principale si corre accettando informazioni online senza una verifica preliminare della fonte e del contenuto?",
    a: { A: "Miglioramento della velocità di navigazione complessiva", B: "Possibile diffusione di fake news o informazioni non corrette e manipolatorie", C: "Riduzione del consumo di dati mobili durante la navigazione", D: "Aumento della comprensione immediata del contenuto" },
    correct: "B",
    exp: "La verifica delle fonti è essenziale per prevenire la diffusione di disinformazione."
  },
  {
    id: 18,
    category: "Fake News e Disinformazione",
    q: "Cosa si intende esattamente per 'fake news' nel contesto dell'alfabetizzazione digitale secondo DigComp 2.2?",
    a: { A: "Notizie datate ma ancora valide per approfondimenti storici", B: "Informazioni deliberatamente false create con l'intento di ingannare il pubblico", C: "Opinioni personali espresse liberamente su blog o forum", D: "Notizie brevi pubblicate esclusivamente sui social media" },
    correct: "B",
    exp: "Le fake news sono create intenzionalmente per manipolare l'opinione pubblica."
  },
  {
    id: 19,
    category: "Fake News e Disinformazione",
    q: "Qual è la differenza principale tra disinformazione e misinformazione nel contesto della valutazione dei contenuti digitali?",
    a: { A: "Non esiste alcuna differenza sostanziale tra i due termini", B: "La disinformazione è intenzionale mentre la misinformazione è condivisa senza intento malevolo", C: "La misinformazione appare solo sui social network moderni", D: "La disinformazione è pubblicata esclusivamente su media tradizionali" },
    correct: "B",
    exp: "La disinformazione è deliberata e consapevole, la misinformazione è condivisa senza renders conto dell'errore."
  },
  {
    id: 20,
    category: "Affidabilità delle Fonti",
    q: "Quale elemento può indicare che un contenuto online ha principalmente uno scopo promozionale o commerciale piuttosto che informativo?",
    a: { A: "Linguaggio neutro e presenza di riferimenti bibliografici", B: "Linguaggio persuasivo e presenza di etichette come 'sponsorizzato' o 'pubblicità'", C: "Data di pubblicazione molto vecchia e non aggiornata", D: "Assenza completa di immagini pubblicitarie o link commerciali" },
    correct: "B",
    exp: "Indicatori come 'sponsorizzato' o 'pubblicità' segnalano chiaramente lo scopo commerciale."
  },
  {
    id: 21,
    category: "Affidabilità delle Fonti",
    q: "Quale tra i seguenti è un criterio affidabile per valutare la credibilità di una fonte informativa reperita attraverso una ricerca online?",
    a: { A: "Il numero totale di condivisioni ricevute sui social media", B: "La presenza di riferimenti bibliografici e fonti citate in modo chiaro e verificabile", C: "L'utilizzo di colori vivaci e un design grafico moderno", D: "La quantità elevata di pubblicità presente nella pagina web" },
    correct: "B",
    exp: "Le citazioni e i riferimenti verificabili supportano l'affidabilità del contenuto."
  },
  {
    id: 22,
    category: "Deepfake e Manipolazione",
    q: "Cosa sono i deepfake nel contesto della valutazione dei contenuti digitali e della loro affidabilità?",
    a: { A: "Video reali modificati con software di editing tradizionale manuale", B: "Contenuti audiovisivi falsi generati artificialmente da intelligenza artificiale per apparire estremamente realistici", C: "Fotografie vecchie ritoccate con strumenti base", D: "Notizie testuali completamente inventate senza supporto multimediale" },
    correct: "B",
    exp: "I deepfake utilizzano IA per creare video/falsi estremamente convincenti, difficili da distinguere dal reale."
  },
  {
    id: 23,
    category: "Bias e Algoritmi",
    q: "Quale tipo di bias può influenzare significativamente i risultati restituiti dai motori di ricerca e dai social media personalizzati?",
    a: { A: "Bias di velocità di caricamento delle pagine", B: "Bias di conferma che privilegia contenuti in linea con le opinioni precedenti dell'utente", C: "Bias di dimensione del testo utilizzato", D: "Bias di colore dello sfondo delle pagine" },
    correct: "B",
    exp: "Il bias di conferma crea 'bolle filtro' che confermano le idee preesistenti dell'utente."
  },
  {
    id: 24,
    category: "Affidabilità delle Fonti",
    q: "Perché è importante controllare la data di pubblicazione di un contenuto informativo trovato durante una ricerca online?",
    a: { A: "Per verificare se il sito utilizza un design moderno e aggiornato", B: "Per valutare se le informazioni sono ancora attuali e non superate da eventi successivi", C: "Per contare il numero di visite ricevute dalla pagina", D: "Per identificare la quantità di annunci pubblicitari presenti" },
    correct: "B",
    exp: "L'attualità delle informazioni evita di utilizzare dati obsoleti o superati."
  },
  {
    id: 25,
    category: "Bias e Algoritmi",
    q: "Quale rischio principale è associato alle cosiddette 'bolle filtro' create dagli algoritmi dei social media e dei motori di ricerca?",
    a: { A: "Esposizione eccessiva a una varietà di opinioni contrastanti e diverse", B: "Limitazione dell'accesso a contenuti diversi da quelli già apprezzati o ricercati dall'utente", C: "Aumento della velocità di caricamento delle pagine web", D: "Riduzione del consumo di dati mobili durante la navigazione" },
    correct: "B",
    exp: "Le bolle filtro creano 'echo chamber' che isolano l'utente da prospettive diverse."
  },
  {
    id: 26,
    category: "Fake News e Disinformazione",
    q: "Quale pratica è consigliata per contrastare efficacemente la diffusione di disinformazione online in un contesto di cittadinanza digitale?",
    a: { A: "Condividere immediatamente contenuti che sembrano interessanti o veritieri", B: "Verificare l'informazione confrontandola con più fonti attendibili e indipendenti", C: "Ignorare completamente le notizie controverse o scomode", D: "Basarsi esclusivamente sul numero di like o condivisioni ricevuti" },
    correct: "B",
    exp: "Il cross-checking con fonti multiple riduce significativamente il rischio di diffondere disinformazione."
  },
  {
    id: 27,
    category: "Infodemia",
    q: "Cosa si intende con il termine 'infodemia' nel contesto dell'alfabetizzazione digitale e della gestione delle informazioni?",
    a: { A: "Completa mancanza di informazioni disponibili online su un determinato argomento", B: "Eccesso di informazioni spesso contraddittorie o di bassa qualità che genera confusione e sovraccarico", C: "Alta velocità di connessione a Internet in tutto il territorio", D: "Massima sicurezza nella gestione e protezione dei dati personali" },
    correct: "B",
    exp: "L'inodemia è il sovraccarico informativo che genera confusione e difficoltà nel distinguere fonti affidabili."
  },
  {
    id: 28,
    category: "Dati e Formati Digitali",
    q: "Quale tra i seguenti rappresenta un esempio chiaro di dato in formato digitale secondo i principi di DigComp?",
    a: { A: "Un disegno realizzato a mano su un foglio di carta tradizionale", B: "Una fotografia scattata e salvata nella memoria interna di uno smartphone", C: "Un libro stampato e rilegato conservato in biblioteca", D: "Una nota scritta a penna su un quaderno personale" },
    correct: "B",
    exp: "Le foto digitali sono codificate in formatobinario per essere elaborate da dispositivi elettronici."
  },
  {
    id: 29,
    category: "Dati e Formati Digitali",
    q: "Quale unità di misura è generalmente utilizzata per indicare la dimensione di immagini ad alta risoluzione salvate su un dispositivo?",
    a: { A: "Kilobyte (KB) tipicamente per testi semplici e brevi", B: "Gigabyte (GB) per video di lunga durata", C: "Megabyte (MB) per immagini di qualità elevata e dettagliata", D: "Terabyte (TB) per archivi completi di sistema" },
    correct: "C",
    exp: "Le immagini ad alta risoluzione tipicamente occupano alcuni Megabyte."
  },
  {
    id: 30,
    category: "Gestione File",
    q: "Su un computer con sistema operativo Windows, in quale cartella vengono salvati di default i file scaricati da Internet attraverso un browser?",
    a: { A: "Nella cartella 'Documenti' dell'utente corrente", B: "Direttamente sul Desktop principale del sistema", C: "Nella cartella 'Download' dedicata ai file scaricati", D: "Nella cartella 'Programmi' contenente le applicazioni installate" },
    correct: "C",
    exp: "La cartella Download è la posizione predefinita per i file scaricati da Internet."
  },
  {
    id: 31,
    category: "Cloud e Archiviazione",
    q: "Quale è uno dei principali vantaggi dell'utilizzo di servizi di archiviazione cloud per la gestione dei propri file digitali?",
    a: { A: "Accesso ai file esclusivamente in modalità offline senza connessione", B: "Possibilità di accedere ai file da diversi dispositivi e luoghi con una connessione Internet attiva", C: "Maggiore probabilità di perdita definitiva dei dati in caso di problemi", D: "Riduzione significativa dello spazio disponibile sul dispositivo locale" },
    correct: "B",
    exp: "Il cloud permette sincronizzazione multi-dispositivo e accesso da qualsiasi luogo."
  },
  {
    id: 32,
    category: "Open Data",
    q: "Cosa si intende per 'open data' nel contesto della gestione e del riutilizzo delle informazioni digitali secondo DigComp 2.2?",
    a: { A: "Dati personali protetti da password e accessibili solo all'utente proprietario", B: "Dati pubblici resi disponibili liberamente per il riutilizzo senza restrizioni significative di copyright", C: "Dati soggetti a copyright stretto e licenze commerciali", D: "Dati accessibili esclusivamente a esperti qualificati o ricercatori" },
    correct: "B",
    exp: "Gli open data sono dati pubblici liberamente riutilizzabili, favorendo trasparenza e innovazione."
  },
  {
    id: 33,
    category: "Gestione Dispositivi",
    q: "Quale azione è consigliata per liberare spazio di memoria su un dispositivo digitale quando la capacità di archiviazione è quasi esaurita?",
    a: { A: "Scarica ulteriori applicazioni non necessarie per riempire lo spazio rimanente", B: "Cancellare o comprimere file e applicazioni non più utilizzati regolarmente", C: "Disattivare completamente la connessione Internet per risparmiare risorse", D: "Spegnere e riaccendere ripetutamente il dispositivo per ottimizzare la memoria" },
    correct: "B",
    exp: "La gestione efficace dei file include la rimozione di elementi non necessari."
  },
  {
    id: 34,
    category: "Backup e Sicurezza",
    q: "Perché è fortemente raccomandato eseguire backup regolari dei propri dati digitali in un contesto di alfabetizzazione informativa?",
    a: { A: "Per rallentare le prestazioni generali del dispositivo e risparmiare batteria", B: "Per proteggere i dati da possibili perdite causate da guasti hardware, errori umani o attacchi informatici", C: "Per occupare più spazio di archiviazione disponibile sul dispositivo principale", D: "Per facilitare la condivisione pubblica di tutti i file personali online" },
    correct: "B",
    exp: "I backup proteggono da perdite dovute a guasti, errori o attacchi malware."
  },
  {
    id: 35,
    category: "Strumenti Digitali",
    q: "Quale strumento online è particolarmente utile per raccogliere dati attraverso questionari e sondaggi in modo strutturato?",
    a: { A: "Microsoft Paint per il disegno e la creazione di grafici manuali", B: "Google Forms per la creazione di moduli interattivi e la raccolta di risposte", C: "Calcolatrice di sistema per operazioni matematiche semplici", D: "Microsoft Word per l'editing di testi lunghi" },
    correct: "B",
    exp: "Google Forms permette di creare sondaggi strutturati e raccogliere risposte automaticamente."
  },
  {
    id: 36,
    category: "Rappresentazione Dati",
    q: "Quale tipo di grafico è più adatto per rappresentare proporzioni o percentuali che sommano al 100% in un insieme di dati raccolti?",
    a: { A: "Grafico a linee per mostrare trend temporali nel tempo", B: "Grafico a dispersione per analizzare correlazioni tra variabili", C: "Grafico a barre per confronti tra diverse categorie", D: "Grafico a torta per visualizzare distribuzioni percentuali di un tutto" },
    correct: "D",
    exp: "Il grafico a torta visualizza chiaramente le parti di un insieme che sommano al 100%."
  },
  {
    id: 37,
    category: "Gestione Dispositivi",
    q: "Su uno smartphone o tablet, in quale sezione delle impostazioni è possibile verificare la quantità di memoria disponibile occupata e libera?",
    a: { A: "Nella sezione 'Fotocamera' per gestire le immagini scattate", B: "Nella sezione 'Calendario' per gli eventi programmati", C: "Nella sezione 'Archiviazione' o 'Memoria' del dispositivo", D: "Nella sezione 'Orologio' per impostare l'ora corrente" },
    correct: "C",
    exp: "La sezione Archiviazione mostra il breakdown dettagliato dello spazio utilizzato."
  },
  {
    id: 38,
    category: "Privacy e Dati Personali",
    q: "Quale rischio principale è associato alla raccolta indiscriminata di dati personali da parte delle applicazioni installate su un dispositivo mobile?",
    a: { A: "Aumento significativo della durata della batteria del dispositivo", B: "Possibile utilizzo non autorizzato o commercializzazione dei dati personali raccolti", C: "Miglioramento automatico della velocità di connessione Internet", D: "Riduzione della necessità di utilizzare password per l'accesso" },
    correct: "B",
    exp: "Le app possono raccogliere e vendere dati personali, violando la privacy."
  },
  {
    id: 39,
    category: "Fogli di Calcolo",
    q: "Come è possibile organizzare in modo efficace una raccolta di dati all'interno di un foglio elettronico per facilitarne l'analisi e l'elaborazione successiva?",
    a: { A: "Inserendo tutti i dati in una singola cella senza alcuna struttura definita", B: "Utilizzando intestazioni di colonna chiare e dedicando una riga per ogni record o osservazione", C: "Scrivendo i dati in ordine casuale senza titoli o etichette", D: "Limitandosi esclusivamente a testo non formattato senza tabelle" },
    correct: "B",
    exp: "Intestazioni chiare e struttura righe/colonne permettono filtri e analisi efficienti."
  },
  {
    id: 40,
    category: "Open Data",
    q: "Quale beneficio principale offrono gli open data alla società nel suo complesso secondo i principi di DigComp 2.2?",
    a: { A: "Limitazione dell'accesso alle informazioni pubbliche per maggiore sicurezza", B: "Maggiore trasparenza, possibilità di riutilizzo libero e stimolo all'innovazione civica", C: "Aumento delle restrizioni di copyright sui dati pubblicati", D: "Riduzione della quantità di informazioni disponibili online" },
    correct: "B",
    exp: "Gli open data favorcono trasparenza governativa e innovazione attraverso il riutilizzo libero."
  },
  {
    id: 41,
    category: "Tecniche di Ricerca",
    q: "Quale operatore di ricerca permette di escludere termini specifici dai risultati restituiti da un motore di ricerca?",
    a: { A: "Virgolette doppie per cercare frasi esatte", B: "Asterisco come carattere jolly per varianti di parole", C: "Punto interrogativo per domande dirette", D: "Trattino immediatamente prima del termine da escludere" },
    correct: "D",
    exp: "Esempio: 'gatto -cane' cerca 'gatto' ma esclude i risultati contenenti 'cane'."
  },
  {
    id: 42,
    category: "Tecniche di Ricerca",
    q: "Come si può creare una strategia di ricerca personale efficace per soddisfare un bisogno informativo specifico?",
    a: { A: "Utilizzando sempre lo stesso motore di ricerca senza variazioni", B: "Combinando parole chiave appropriate con operatori e filtri avanzati in base al contesto", C: "Ignorando completamente i risultati della prima pagina", D: "Limitandosi esclusivamente alla ricerca di immagini o video" },
    correct: "B",
    exp: "Una buona strategia combina parole chiave, operatori booleani e filtri temporali/geografici."
  },
  {
    id: 43,
    category: "Browser e Navigazione",
    q: "Qual è un modo efficace per gestire contemporaneamente più ricerche aperte all'interno di un browser web moderno?",
    a: { A: "Chiudere tutte le schede e riaprirle una alla volta", B: "Aprire finestre separate per ogni ricerca senza organizzazione", C: "Utilizzare il tasto di refresh per aggiornare continuamente", D: "Organizzare ricerche simultanee attraverso l'uso di schede multiple in una singola finestra" },
    correct: "D",
    exp: "Le schede (tab) permettono confronto rapido tra più ricerche senza sovrapporre finestre."
  },
  {
    id: 44,
    category: "Affidabilità delle Fonti",
    q: "Come è possibile verificare se un contenuto trovato online ha principalmente uno scopo promozionale piuttosto che informativo?",
    a: { A: "Contando il numero di like ricevuti sui social", B: "Analizzando il linguaggio persuasivo e la presenza di etichette sponsorizzate", C: "Ignorando completamente la fonte e l'autore", D: "Contando esclusivamente le immagini presenti" },
    correct: "B",
    exp: "Etichette come '#ad' o 'sponsorizzato' indicano contenuto promozionale."
  },
  {
    id: 45,
    category: "Bias e Algoritmi",
    q: "Qual è un esempio concreto di bias introdotto dall'intelligenza artificiale nei risultati di ricerca personalizzati?",
    a: { A: "Risultati sempre completamente neutri e oggettivi", B: "Risultati influenzati da dati di addestramento distorti come stereotipi di genere o etnia", C: "Risultati generati in modo completamente casuale", D: "Risultati identici per tutti gli utenti indipendentemente dalla storia" },
    correct: "B",
    exp: "I dataset distorti producono risultati che replicano stereotipi e pregiudizi."
  },
  {
    id: 46,
    category: "Affidabilità delle Fonti",
    q: "Come è possibile distinguere fatti verificabili da opinioni personali all'interno di una fonte informativa online?",
    a: { A: "Basandosi sui colori utilizzati nel design del sito", B: "Valutando l'obiettività e la presenza di prove o dati verificabili a supporto", C: "Contando il numero di visite o visualizzazioni", D: "Misurando la lunghezza complessiva del testo pubblicato" },
    correct: "B",
    exp: "I fatti verificabili hanno prove documentabili, le opinioni esprimono interpretazioni personali."
  },
  {
    id: 47,
    category: "Deepfake e Manipolazione",
    q: "Qual è un metodo efficace per verificare l'autenticità di un video che potrebbe essere un deepfake?",
    a: { A: "Contare il numero di pixel visibili nello schermo", B: "Utilizzare tool specifici di analisi basati su intelligenza artificiale per rilevare manipolazioni", C: "Ignorare il video e passare al successivo", D: "Condividerlo immediatamente per ottenere opinioni altrui" },
    correct: "B",
    exp: "Tool come InVID/WeVerify analizzano i video per rilevare segnali di manipolazione."
  },
  {
    id: 48,
    category: "Gestione Contatti",
    q: "Come si gestisce l'archiviazione dei contatti su uno smartphone in modo organizzato e sicuro?",
    a: { A: "Salvandoli esclusivamente in un file di testo semplice", B: "Utilizzando l'app Contatti nativa per aggiungere, modificare e sincronizzare", C: "Memorizzandoli solo nella rubrica email", D: "Scrivendoli su un browser web temporaneo" },
    correct: "B",
    exp: "L'app Contatti nativa permette sincronizzazione cloud e gestione centralizzata."
  },
  {
    id: 49,
    category: "Infodemia",
    q: "Qual è un rischio concreto del sovraccarico informativo noto come infodemia in un contesto digitale quotidiano?",
    a: { A: "Maggiore capacità di acquisire conoscenza in tempi brevi", B: "Confusione, difficoltà nel prendere decisioni informate e stress cognitivo", C: "Riduzione del tempo necessario per la ricerca online", D: "Aumento del numero di amici sui social network" },
    correct: "B",
    exp: "Il sovraccarico informativo causa confusione e paralisi decisionale."
  },
  {
    id: 50,
    category: "Fogli di Calcolo",
    q: "Quale formula base utilizzabile in un foglio elettronico per calcolare la media di un intervallo di celle contenenti dati numerici?",
    a: { A: "=SOMMA", B: "=MEDIA", C: "=MAX", D: "=MIN" },
    correct: "B",
    exp: "La sintassi =MEDIA(A1:A10) calcola la media dei valori nell'intervallo specificato."
  },
  {
    id: 51,
    category: "Assistenti Vocali",
    q: "Come è possibile utilizzare gli assistenti vocali per effettuare una ricerca informativa in modo efficace e preciso?",
    a: { A: "Formulando domande confuse", B: "Ponendo domande chiare, precise e singole", C: "Utilizzando comandi lunghi e complessi", D: "Senza specificare l'argomento" },
    correct: "B",
    exp: "Domande concise e specifiche producono risposte più accurate dagli assistenti vocali."
  },
  {
    id: 52,
    category: "Affidabilità delle Fonti",
    q: "Qual è un esempio tipico di contenuto promozionale di un influencer?",
    a: { A: "Post neutro senza scopo commerciale", B: "Post con hashtag #ad o #sponsorizzato", C: "Notizia governativa ufficiale", D: "Foto personale senza fini commerciali" },
    correct: "B",
    exp: "Gli hashtag #ad o #sponsorizzato indicano chiaramente contenuto promozionale."
  },
  {
    id: 53,
    category: "Backup e Sicurezza",
    q: "Come si gestisce un backup su cloud in modo sicuro?",
    a: { A: "Backup manuale sporadicso", B: "Configurando il backup automatico nelle impostazioni", C: "Ignorando la funzione di backup", D: "Effettuando backup solo in locale" },
    correct: "B",
    exp: "Il backup automatico configurato garantisce protezione costante dei dati."
  },
  {
    id: 54,
    category: "Rappresentazione Dati",
    q: "Quale grafico è appropriato per visualizzare trend temporali?",
    a: { A: "Grafico a torta", B: "Grafico a linee", C: "Istogramma", D: "Grafico a barre" },
    correct: "B",
    exp: "I grafici a linee mostrano l'evoluzione di un dato nel tempo."
  },
  {
    id: 55,
    category: "Affidabilità delle Fonti",
    q: "Come riconoscere un sito web affidabile?",
    a: { A: "Design accattivante e moderno", B: "Presenza di autore identificato, data di pubblicazione e dominio istituzionale", C: "Molta pubblicità presente", D: "Colori vivaci e animazioni" },
    correct: "B",
    exp: "I criteri CRAAP (Currency, Relevance, Authority, Accuracy, Purpose) valutano l'affidabilità."
  },
  {
    id: 56,
    category: "Bias e Algoritmi",
    q: "Qual è un rischio dei bias di popolarità nei risultati di ricerca?",
    a: { A: "Risultati sempre completamente casuali", B: "Priorità a contenuti virali ma non necessariamente accurati", C: "Risultati neutri e oggettivi", D: "Risultati identici per tutti gli utenti" },
    correct: "B",
    exp: "I contenuti virali vengono privilegiati anche se non accurati o affidabili."
  },
  {
    id: 57,
    category: "Tecniche di Ricerca",
    q: "Come limitare i risultati di una ricerca a un intervallo di date specifico?",
    a: { A: "Senza utilizzare filtri", B: "Impostando l'intervallo nei filtri avanzati del motore di ricerca", C: "Solo con parole chiave", D: "Ignorando il fattore temporale" },
    correct: "B",
    exp: "I filtri temporali permettono di trovare informazioni recenti o in un periodo specifico."
  },
  {
    id: 58,
    category: "Fake News e Disinformazione",
    q: "Qual è un metodo efficace per verificare notizie potenzialmente false?",
    a: { A: "Leggere solo il titolo della notizia", B: "Consultare siti di fact-checking e confrontare più fonti indipendenti", C: "Basarsi solo sui commenti degli utenti", D: " fidarsi della prima fonte trovata" },
    correct: "B",
    exp: "Siti come Facta, Snopes, PolitiFact verificano la veridicità delle notizie."
  },
  {
    id: 59,
    category: "Open Data",
    q: "Come è possibile integrare open data in un foglio elettronico per analisi?",
    a: { A: "Ignorando completamente i dati aperti", B: "Importando tramite la funzione 'Da web' o file CSV", C: "Solo visualizzando i dati senza importarli", D: "Copiando manualmente i dati uno per uno" },
    correct: "B",
    exp: "L'importazione automatica permette di lavorare con dati aggiornati direttamente nel foglio."
  },
  {
    id: 60,
    category: "Intelligenza Artificiale",
    q: "Quale tra le seguenti affermazioni sugli algoritmi di IA nei motori di ricerca è corretta?",
    a: { A: "I motori di ricerca non utilizzano alcuna forma di intelligenza artificiale", B: "I motori di ricerca e i social media utilizzano spesso algoritmi di IA per personalizzare i risultati", C: "Gli algoritmi di IA mostrano sempre risultati identici per tutti gli utenti", D: "Gli algoritmi di IA sono utilizzati solo nei videogiochi" },
    correct: "B",
    exp: "Gli algoritmi di IA personalizzano i risultati in base al comportamento e alle preferenze dell'utente."
  },
  {
    id: 61,
    category: "Intelligenza Artificiale",
    q: "Cosa si intende con l'espressione 'scatola nera' riferita agli algoritmi di IA?",
    a: { A: "Il colore del dispositivo hardware su cui vengono eseguiti gli algoritmi", B: "Il fatto che gli algoritmi operano con modalità non visibili o comprensibili dall'utente", C: "Un tipo di algoritmo usato per la crittografia dei dati", D: "Un errore di sistema che si verifica quando l'algoritmo smette di funzionare" },
    correct: "B",
    exp: "La 'scatola nera' indica l'opacità dei processi interni dell'IA non trasparenti per l'utente."
  },
  {
    id: 62,
    category: "Intelligenza Artificiale",
    q: "Quale rischio è associato ai dati utilizzati per addestrare i sistemi di Intelligenza Artificiale?",
    a: { A: "I dati sono sempre perfettamente bilanciati e privi di errori", B: "I dati possono contenere pregiudizi o distorsioni come stereotipi che l'IA può replicare", C: "I dati vengono sempre verificati manualmente da esperti umani", D: "L'IA elimina automaticamente qualsiasi pregiudizio" },
    correct: "B",
    exp: "I bias nei dati di addestramento vengono replicati e amplificati dall'IA nei risultati."
  },
  {
    id: 63,
    category: "Intelligenza Artificiale",
    q: "In che modo l'Intelligenza Artificiale genera risposte personalizzate per gli utenti?",
    a: { A: "L'IA genera risposte completamente casuali", B: "L'IA analizza i dati e il comportamento dell'utente per fornire contenuti su misura", C: "L'IA fornisce sempre le stesse risposte a tutti gli utenti", D: "L'IA genera risposte personalizzate solo con input manuale delle preferenze" },
    correct: "B",
    exp: "L'IA utilizza dati sul comportamento e le preferenze per personalizzare le risposte."
  },
  {
    id: 64,
    category: "Tecniche di Ricerca",
    q: "Quale funzionalità avanzata di un motore di ricerca permette di limitare i risultati a un determinato sito web?",
    a: { A: "Scrivere il nome del sito in lettere maiuscole", B: "Utilizzare l'operatore site: seguito dal nome del dominio", C: "Aggiungere la parola 'solo' prima della query", D: "Utilizzare il tasto Invio due volte" },
    correct: "B",
    exp: "L'operatore 'site:wikipedia.org' limita la ricerca al dominio specificato."
  },
  {
    id: 65,
    category: "Assistenti Vocali",
    q: "Quale tra i seguenti assistenti vocali è sviluppato da Amazon?",
    a: { A: "Siri (Apple)", B: "Alexa (Amazon)", C: "Cortana (Microsoft)", D: "Google Assistant (Google)" },
    correct: "B",
    exp: "Alexa è l'assistente vocale Amazon integrato nei dispositivi Echo."
  },
  {
    id: 66,
    category: "Assistenti Vocali",
    q: "Quale tra i seguenti è un esempio di agente conversazionale basato su IA?",
    a: { A: "Microsoft Excel", B: "Siri di Apple", C: "Adobe Premiere Pro", D: "WinRAR" },
    correct: "B",
    exp: "Siri è un assistente vocale IA che risponde a domande e esegue comandi."
  },
  {
    id: 67,
    category: "Fogli di Calcolo",
    q: "Quale tra le seguenti è una buona pratica per formulare richieste efficaci a un assistente vocale?",
    a: { A: "Parlare in modo confuso e veloce utilizzando frasi molto lunghe", B: "Formulare richieste chiare e concise specificando l'azione desiderata", C: "Ripetere la stessa richiesta molte volte senza modificare", D: "Non specificare mai il contesto della richiesta" },
    correct: "B",
    exp: "Richieste chiare e specifiche producono risposte più accurate."
  },
  {
    id: 68,
    category: "Affidabilità delle Fonti",
    q: "Quale tra i seguenti tipi di siti web ha generalmente il livello di affidabilità più elevato?",
    a: { A: "Blog personale anonimo senza autore", B: "Sito istituzionale con dominio .gov o .edu", C: "Forum online senza controllo editoriale", D: "Dominio recente senza informazioni" },
    correct: "B",
    exp: "Siti .gov (governativi) e .edu (accademici) sono gestiti da istituzioni ufficiali."
  },
  {
    id: 69,
    category: "Affidabilità delle Fonti",
    q: "Perché è importante confrontare le informazioni trovate online con più fonti diverse?",
    a: { A: "Non è necessario, tutte le informazioni su Internet sono accurate", B: "Confrontare più fonti permette di verificare l'accuratezza e individuare manipolazioni", C: "Le informazioni sulla prima fonte sono sempre le più accurate", D: "Solo i social media necessitano verifica" },
    correct: "B",
    exp: "Il cross-checking riduce il rischio di accettare contenuti errati o manipolati."
  },
  {
    id: 70,
    category: "Bias e Algoritmi",
    q: "Quale tra i seguenti è un rischio associato alla personalizzazione dei risultati di ricerca da parte dell'IA?",
    a: { A: "L'utente riceve sempre risultati casuali e non pertinenti", B: "L'utente potrebbe essere esposto solo a informazioni che confermano le proprie opinioni", C: "La personalizzazione garantisce sempre una visione completa", D: "I risultati personalizzati sono sempre più accurati" },
    correct: "B",
    exp: "La personalizzazione può creare 'echo chamber' limitando il pensiero critico."
  }
];

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
  
  // Random selection and shuffle
  const shuffledQuestions = shuffleArray(PANIERE);
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

// Close modal only on button clicks, not overlay or ESC
document.getElementById('modal-legal').addEventListener('click', function(e) {
  // Do nothing on overlay click
});

document.getElementById('modal-confirm').addEventListener('click', function(e) {
  // Do nothing on overlay click
});