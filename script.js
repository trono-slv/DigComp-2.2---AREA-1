// ============================================
// ⚙️ CONFIGURAZIONE
// ============================================
const CONFIG = {
  NUM_DOMANDE: 30,
  DURATA_TIMER: 2 * 60, // 2 minuti per domanda
  SOGLIA_ECCELLENTE: 80,
  SOGLIA_SUFFICIENTE: 60,
  ALERT_TIMER_SOGLIA: 300, // 5 minuti
};

// ============================================
// 📚 PANIERE DOMANDE (180 TOTALI)
// ============================================
const PANIERE = [
  // ===== CATEGORIA 1.1 (60 DOMANDE) =====
  {
    id: 1,
    category: "1.1",
    q: "Qual è la funzione principale di un motore di ricerca?",
    a: {
      A: "Indicizzare e recuperare pagine web in base a parole chiave",
      B: "Proteggere i dati personali",
      C: "Creare siti web",
      D: "Gestire email"
    },
    correct: "A",
    exp: "Un motore di ricerca indicizza milioni di pagine web e le organizza per permetterti di trovarle rapidamente con parole chiave."
  },
  {
    id: 2,
    category: "1.1",
    q: "Cosa significa 'algoritmo di ranking'?",
    a: {
      A: "Il sistema che determina l'ordine dei risultati di ricerca",
      B: "Un tipo di virus informatico",
      C: "Un file di backup",
      D: "Una password criptata"
    },
    correct: "A",
    exp: "L'algoritmo di ranking (come PageRank di Google) determina quale pagina appare prima tra i risultati, in base a centinaia di fattori."
  },
  {
    id: 3,
    category: "1.1",
    q: "Come si chiama la barra dove digiti l'indirizzo di un sito?",
    a: {
      A: "Indirizzo URL o barra degli indirizzi",
      B: "Barra di ricerca",
      C: "Cache",
      D: "Cookie"
    },
    correct: "A",
    exp: "La barra degli indirizzi (address bar) mostra l'URL completo del sito che stai visitando (es: https://www.google.com)."
  },
  {
    id: 4,
    category: "1.1",
    q: "Cosa sono i 'cookie' nel contesto di Internet?",
    a: {
      A: "Piccoli file che memorizzano dati del tuo browser",
      B: "Un tipo di malware",
      C: "Cartelle compresse",
      D: "Email criptate"
    },
    correct: "A",
    exp: "I cookie sono piccoli file di testo memorizzati dal browser che ricordano le tue preferenze, login, e comportamenti online."
  },
  {
    id: 5,
    category: "1.1",
    q: "Qual è il significato di 'cache' nel browser?",
    a: {
      A: "Una memoria temporanea che immagazzina copie di pagine visitate",
      B: "Un antivirus",
      C: "Un firewall",
      D: "Una VPN"
    },
    correct: "A",
    exp: "La cache del browser memorizza immagini, CSS, JavaScript e altri file per caricare le pagine più velocemente al prossimo accesso."
  },
  {
    id: 6,
    category: "1.1",
    q: "Come si chiama la tecnica di ricerca che usa le virgolette?",
    a: {
      A: "Ricerca esatta - cerca la frase precisa tra virgolette",
      B: "Ricerca booleana",
      C: "Ricerca avanzata",
      D: "Ricerca filtrata"
    },
    correct: "A",
    exp: "Mettendo una frase tra virgolette (es: \"climate change\") cerchi quella sequenza esatta, non singole parole sparse."
  },
  {
    id: 7,
    category: "1.1",
    q: "Cosa significa 'SEO'?",
    a: {
      A: "Search Engine Optimization - ottimizzazione per i motori di ricerca",
      B: "Secure Email Operation",
      C: "System Error Output",
      D: "Software Evaluation Offline"
    },
    correct: "A",
    exp: "La SEO è l'insieme di tecniche per fare apparire un sito web più in alto nei risultati di ricerca naturali (organici)."
  },
  {
    id: 8,
    category: "1.1",
    q: "Cosa sono i 'browser'?",
    a: {
      A: "Applicazioni che permettono di navigare su Internet (Chrome, Firefox, Safari)",
      B: "Antivirus",
      C: "Social network",
      D: "Email provider"
    },
    correct: "A",
    exp: "I browser (come Google Chrome, Mozilla Firefox, Microsoft Edge, Safari) sono programmi che usi per visualizzare pagine web."
  },
  {
    id: 9,
    category: "1.1",
    q: "Cosa significa 'phishing'?",
    a: {
      A: "Tentativo fraudolento di ottenere informazioni sensibili fingendosi un'entità affidabile",
      B: "Un tipo di file",
      C: "Un backup automatico",
      D: "Un protocollo di rete"
    },
    correct: "A",
    exp: "Il phishing usa email o siti falsi per indurti a rivelare password, numeri di carta, o dati personali. È un attacco frequente."
  },
  {
    id: 10,
    category: "1.1",
    q: "Cosa significa 'HTTPS'?",
    a: {
      A: "HTTP Secure - versione crittografata di HTTP che protegge i dati trasmessi",
      B: "Hypertext Hyper Secure",
      C: "High Technology Protocol System",
      D: "Home Transfer Protocol Secure"
    },
    correct: "A",
    exp: "HTTPS (con il lucchetto 🔒) significa che la connessione tra te e il server è crittografata, proteggendo i tuoi dati da intercettazioni."
  },
  {
    id: 11,
    category: "1.1",
    q: "Cosa sono i 'metadati' di una pagina web?",
    a: {
      A: "Informazioni sul contenuto della pagina (titolo, descrizione, autore) usate dai motori di ricerca",
      B: "Il codice HTML visibile",
      C: "Gli annunci pubblicitari",
      D: "I link esterni"
    },
    correct: "A",
    exp: "I metadati sono tag HTML come <title>, <meta description>, <keywords> che descrivono la pagina ai motori di ricerca."
  },
  {
    id: 12,
    category: "1.1",
    q: "Cosa significa 'link' o 'collegamento ipertestuale'?",
    a: {
      A: "Un riferimento a un'altra pagina web o risorsa cliccabile",
      B: "Un tipo di virus",
      C: "Una cartella del computer",
      D: "Un file compratto"
    },
    correct: "A",
    exp: "Un link (di solito blu e sottolineato) ti reindirizza a un'altra pagina. Può puntare a URL esterni, email, file, o sezioni della stessa pagina."
  },
  {
    id: 13,
    category: "1.1",
    q: "Cosa significa 'spam' nel contesto di Internet?",
    a: {
      A: "Messaggi indesiderati, ripetitivi, spesso pubblicitari, inviati in massa",
      B: "Un tipo di meat",
      C: "Un protocollo di sicurezza",
      D: "Una cartella del computer"
    },
    correct: "A",
    exp: "Lo spam sono email, messaggi, o commenti non richiesti, spesso con contenuti pubblicitari, truffe, o malware."
  },
  {
    id: 14,
    category: "1.1",
    q: "Cosa significa 'indirizzo IP'?",
    a: {
      A: "Internet Protocol Address - identificativo univoco di un dispositivo su Internet",
      B: "Informazioni Personali",
      C: "Internet Provider Address",
      D: "Internal Page Index"
    },
    correct: "A",
    exp: "L'IP (es: 192.168.1.1) identifica uniquely il tuo dispositivo su Internet. Ogni sito che visiti vede il tuo IP pubblico."
  },
  {
    id: 15,
    category: "1.1",
    q: "Cosa significa 'DNS'?",
    a: {
      A: "Domain Name System - servizio che traduce nomi di dominio (google.com) in indirizzi IP",
      B: "Data Network Storage",
      C: "Digital Name Service",
      D: "Domain Name Shortener"
    },
    correct: "A",
    exp: "Il DNS è come un 'elenco telefonico' di Internet: digiti google.com il DNS traduce in indirizzo IP (es: 142.250.185.46)."
  },
  {
    id: 16,
    category: "1.1",
    q: "Cosa significa 'URL'?",
    a: {
      A: "Uniform Resource Locator - l'indirizzo completo di una pagina web (es: https://www.google.com/search)",
      B: "User Resource List",
      C: "Universal Reference Language",
      D: "Upload Request Library"
    },
    correct: "A",
    exp: "L'URL contiene: protocollo (https://), dominio (google.com), percorso (/search), parametri (?q=...)."
  },
  {
    id: 17,
    category: "1.1",
    q: "Cosa significa 'parola chiave' o 'keyword'?",
    a: {
      A: "Termine che inserisci nel motore di ricerca per trovare informazioni",
      B: "Una password",
      C: "Un hashtag",
      D: "Una descrizione breve"
    },
    correct: "A",
    exp: "Le keyword sono i termini che digiti nella barra di ricerca. Un'ottima ricerca usa 2-5 keywords specifiche e rilevanti."
  },
  {
    id: 18,
    category: "1.1",
    q: "Cosa significa 'ricerca booleana'?",
    a: {
      A: "Ricerca avanzata che usa operatori logici (AND, OR, NOT) per raffinare i risultati",
      B: "Ricerca vocale",
      C: "Ricerca per immagini",
      D: "Ricerca storica"
    },
    correct: "A",
    exp: "Esempio: 'economia AND Italia NOT euro' trova pagine con economia e Italia ma non euro. Utile per ricerche precise."
  },
  {
    id: 19,
    category: "1.1",
    q: "Cosa significa 'filtro' in una ricerca?",
    a: {
      A: "Opzione che restringe i risultati per criteri specifici (data, lingua, tipo di file, dominio)",
      B: "Un tipo di malware",
      C: "Un'estensione del browser",
      D: "Una cartella nascosta"
    },
    correct: "A",
    exp: "Google Immagini: puoi filtrare per dimensione, colore, tipo. Google News: per data, fonte, lingua. Utili per raffinare risultati."
  },
  {
    id: 20,
    category: "1.1",
    q: "Cosa significa 'assistente virtuale'?",
    a: {
      A: "Programma che comprende comandi vocali/testuali e esegue compiti (Alexa, Siri, Google Assistant)",
      B: "Un chatbot",
      C: "Un social network",
      D: "Un motore di ricerca"
    },
    correct: "A",
    exp: "Gli assistenti virtuali usano AI per capire richieste naturali e svolgere compiti: aprire app, fare ricerche, controllare smart home."
  },
  {
    id: 21,
    category: "1.1",
    q: "Come funziona il ranking di Google?",
    a: {
      A: "Considera centinaia di fattori: qualità contenuto, backlink, velocità, mobile-friendliness, esperienza utente",
      B: "Solo il numero di visite",
      C: "La data di creazione",
      D: "Il numero di parole"
    },
    correct: "A",
    exp: "Google E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness. Punteggi bassi se lento, non mobile, scarico contenuto."
  },
  {
    id: 22,
    category: "1.1",
    q: "Cosa significa 'dark web'?",
    a: {
      A: "Parte di Internet accessibile solo con software speciale (Tor) dove anonimato è massimo",
      B: "Internet offline",
      C: "Siti hackerati",
      D: "Email criptate"
    },
    correct: "A",
    exp: "Dark web è nascosto dai motori di ricerca. Ha usi legittimi (privacy, libertà stampa in paesi censori) ma è famoso per commercio illegale."
  },
  {
    id: 23,
    category: "1.1",
    q: "Cosa significano i 'risultati sponsorizzati' nei motori di ricerca?",
    a: {
      A: "Annunci pubblicitari pagati dagli inserzionisti, identificati con etichetta 'Ad' o 'Sponsorizzato'",
      B: "Siti verificati",
      C: "Siti più affidabili",
      D: "Risultati organici"
    },
    correct: "A",
    exp: "I risultati sponsorizzati (Google Ads) appaiono in cima ai risultati organici. L'inserzionista paga per ogni click (modello PPC)."
  },
  {
    id: 24,
    category: "1.1",
    q: "Cosa significa 'crawling' nel contesto SEO?",
    a: {
      A: "Il processo tramite cui i bot dei motori di ricerca visitano e scansionano le pagine web",
      B: "Un attacco hacker",
      C: "Una lentezza della rete",
      D: "Un tipo di virus"
    },
    correct: "A",
    exp: "I crawler (bot come Googlebot) seguono i link e scansionano il contenuto per indicizzarlo. Se bloccati da robots.txt, non indicizzano."
  },
  {
    id: 25,
    category: "1.1",
    q: "Cosa significa 'indicizzazione'?",
    a: {
      A: "Processo di aggiunta di una pagina web nel database di un motore di ricerca",
      B: "Cancellazione di una pagina",
      C: "Backup di un sito",
      D: "Criptazione di contenuti"
    },
    correct: "A",
    exp: "Google indicizza una pagina dopo che Googlebot l'ha visitata e analizzata. Una volta indicizzata, appare nei risultati di ricerca."
  },
  {
    id: 26,
    category: "1.1",
    q: "Cosa significa 'backlink'?",
    a: {
      A: "Link da altri siti che puntano al tuo sito, importante fattore di ranking",
      B: "Link interni di un sito",
      C: "Link rotti",
      D: "Link non seguiti"
    },
    correct: "A",
    exp: "Un backlink è un voto di fiducia. Siti autorevoli che linkano al tuo site → il tuo sito è considerato più affidabile da Google."
  },
  {
    id: 27,
    category: "1.1",
    q: "Cosa significa 'anchor text'?",
    a: {
      A: "Il testo visibile e cliccabile di un link, dovrebbe essere descrittivo e rilevante",
      B: "Un'etichetta HTML",
      C: "Un nome di dominio",
      D: "Una meta descrizione"
    },
    correct: "A",
    exp: "Buono: <a href=\"...\">Come fare SEO</a>. Cattivo: <a href=\"...\">clicca qui</a>. L'anchor text aiuta SEO e accessibilità."
  },
  {
    id: 28,
    category: "1.1",
    q: "Cosa significa '404 Not Found'?",
    a: {
      A: "Errore HTTP che indica la pagina richiesta non esiste sul server",
      B: "Errore di Internet",
      C: "Errore di password",
      D: "Errore di database"
    },
    correct: "A",
    exp: "Ricevi 404 quando clicchi un link morto o digiti un URL inesistente. Il server risponde: 'Non trovato'."
  },
  {
    id: 29,
    category: "1.1",
    q: "Cosa significano i 'rich snippets'?",
    a: {
      A: "Risultati di ricerca arricchiti con dati strutturati (valutazioni, prezzi, immagini, orari)",
      B: "File compressi",
      C: "Cartelle nascoste",
      D: "Email criptate"
    },
    correct: "A",
    exp: "Un ristorante con schema markup mostra nel risultato: valutazione ⭐⭐⭐⭐⭐, prezzo, orari. Ricchi di info, aumentano click."
  },
  {
    id: 30,
    category: "1.1",
    q: "Cosa significa 'semantic web'?",
    a: {
      A: "Web basato sulla comprensione semantica dei contenuti (significato, non solo parole)",
      B: "Un database",
      C: "Un antivirus",
      D: "Un file"
    },
    correct: "A",
    exp: "Semantic web usa ontologie e schema markup per far comprendere il significato ai computer, non solo agli umani. È il Web 3.0."
  },
  {
    id: 31,
    category: "1.1",
    q: "Cosa significa 'Web 3.0'?",
    a: {
      A: "Internet decentralizzato, basato su blockchain, AI, e data ownership personale",
      B: "La versione 3.0 di un sito",
      C: "Un social network",
      D: "Un browser"
    },
    correct: "A",
    exp: "Web 3.0 promette: decentralizzazione (senza big tech), proprietà dei dati, transazioni peer-to-peer, smart contracts."
  },
  {
    id: 32,
    category: "1.1",
    q: "Cosa significa 'KPI'?",
    a: {
      A: "Key Performance Indicator - metrica che misura il successo di una strategia digitale",
      B: "File di sistema",
      C: "Cartelle",
      D: "Backup"
    },
    correct: "A",
    exp: "KPI per sito: traffico, bounce rate, conversioni, tempo medio sessione. Per social: engagement, reach, follower growth."
  },
  {
    id: 33,
    category: "1.1",
    q: "Cosa significa 'crawl budget'?",
    a: {
      A: "Numero limitato di pagine che Googlebot visita per indicizzare un sito, basato su crawl rate e demand",
      B: "Un file",
      C: "Una password",
      D: "Un backup"
    },
    correct: "A",
    exp: "Siti grandi: Google visita solo una frazione. Ottimizzare: rimuovi pagine duplicate, migliora crawlability, usa XML sitemap."
  },
  {
    id: 34,
    category: "1.1",
    q: "Cosa significa 'snippet'?",
    a: {
      A: "Breve anteprima di una pagina nei risultati di ricerca (titolo + descrizione + URL)",
      B: "Un hashtag",
      C: "Un commento",
      D: "Un'estensione"
    },
    correct: "A",
    exp: "Uno snippet Google tipico: titolo (max 60 char), descrizione meta (max 160 char), URL. Determina se clicchi o no."
  },
  {
    id: 35,
    category: "1.1",
    q: "Cosa significa 'SERP'?",
    a: {
      A: "Search Engine Results Page - la pagina che mostra i risultati dopo una ricerca",
      B: "Un sito web",
      C: "Un file",
      D: "Un database"
    },
    correct: "A",
    exp: "La SERP è la pagina che vedi dopo aver digitato keywords. Contiene: annunci, risultati organici, knowledge graph, featured snippets."
  },
  {
    id: 36,
    category: "1.1",
    q: "Cosa significa 'featured snippet'?",
    a: {
      A: "Risultato di ricerca in evidenza (posizione 0) che mostra risposta diretta prima dei risultati normali",
      B: "Un sito in prima pagina",
      C: "Un annuncio pubblicitario",
      D: "Un segnalibro"
    },
    correct: "A",
    exp: "Ricerca 'quante calorie ha una mela?': Featured snippet mostra direttamente '95 calorie' prima di cliccare. Ottimo per CTR."
  },
  {
    id: 37,
    category: "1.1",
    q: "Come si usa un motore di ricerca avanzato?",
    a: {
      A: "Usando filtri per data, lingua, tipo di file, dominio, e operatori booleani per raffinare la ricerca",
      B: "Scrivendo più parole possibili",
      C: "Cercando solo in maiuscolo",
      D: "Non è possibile"
    },
    correct: "A",
    exp: "Google Ricerca Avanzata: filtra per linguaggio, regione, ultima modifica, tipo di file (.pdf, .doc), sito specifico (site:wikipedia.org)."
  },
  {
    id: 38,
    category: "1.1",
    q: "Cosa significa 'caching' a livello di sito?",
    a: {
      A: "Memorizzazione temporanea del contenuto per caricare il sito più velocemente agli utenti",
      B: "Eliminazione di file",
      C: "Backup automatico",
      D: "Criptazione di dati"
    },
    correct: "A",
    exp: "Cache del sito: il server salva versioni HTML statiche. First visit è lenta, successivi sono veloci. Usato dai CDN per velocità globale."
  },
  {
    id: 39,
    category: "1.1",
    q: "Cosa significa 'Ad rank' in Google Ads?",
    a: {
      A: "Posizione di un annuncio nella SERP, basata su bid, quality score, e expected impact",
      B: "Numero di click ricevuti",
      C: "Prezzo dell'annuncio",
      D: "Numero di impressioni"
    },
    correct: "A",
    exp: "Ad Rank = Max CPC × Quality Score. Anche con bid basso, puoi essere primo se il tuo Quality Score è alto (landing page rilevante, CTR)."
  },
  {
    id: 40,
    category: "1.1",
    q: "Cosa significa 'quality score'?",
    a: {
      A: "Valutazione (1-10) della qualità di un annuncio Google, basata su CTR atteso, relevance, landing page experience",
      B: "Numero di conversioni",
      C: "Budget speso",
      D: "Numero di impressioni"
    },
    correct: "A",
    exp: "Quality Score alto: annunci rilevanti, landing page veloce/ottimizzata, buono storico CTR. Risultato: prezzi più bassi, posizioni migliori."
  },
  {
    id: 41,
    category: "1.1",
    q: "Come filtrare risultati per una lingua specifica su Google?",
    a: {
      A: "Usando 'Strumenti' > 'Lingua' oppure aggiungendo 'lang:it' nella ricerca avanzata",
      B: "Non è possibile",
      C: "Cambiando lingua del browser",
      D: "Usando VPN"
    },
    correct: "A",
    exp: "Google permette di filtrare per lingua nella ricerca avanzata. Utile se cerchi contenuti in italiano, francese, ecc."
  },
  {
    id: 42,
    category: "1.1",
    q: "Cosa significa 'organic reach'?",
    a: {
      A: "Numero di persone che vedono il tuo contenuto senza annunci a pagamento (tramite ricerca naturale, condivisioni, follower)",
      B: "Numero totale di visualizzazioni",
      C: "Numero di click pagati",
      D: "Numero di conversioni"
    },
    correct: "A",
    exp: "Organic reach dipende da SEO, qualità contenuto, social sharing. Contrario di paid reach (annunci a pagamento)."
  },
  {
    id: 43,
    category: "1.1",
    q: "Cosa significa 'bounce rate'?",
    a: {
      A: "Percentuale di utenti che lasciano il sito senza visitare altre pagine (alta = cattiva user experience)",
      B: "Numero di link che non funzionano",
      C: "Numero di errori del server",
      D: "Numero di spam ricevuti"
    },
    correct: "A",
    exp: "Bounce rate alto (>70%) segnala: contenuto irrilevante, pagina lenta, design scadente, call-to-action poco chiara."
  },
  {
    id: 44,
    category: "1.1",
    q: "Cosa significa 'time on page'?",
    a: {
      A: "Tempo medio che un utente passa su una pagina prima di andare altrove",
      B: "Tempo di caricamento",
      C: "Tempo di creazione",
      D: "Tempo di modifica"
    },
    correct: "A",
    exp: "Time on page alto = contenuto interessante. Basso = pagina poco rilevante o confusa. Utile metrica di engagement."
  },
  {
    id: 45,
    category: "1.1",
    q: "Come si misura il successo di una ricerca?",
    a: {
      A: "Analizzando: CTR (click-through rate), bounce rate, time on page, conversioni, goal completament",
      B: "Solo dal numero di click",
      C: "Solo dalla posizione nei risultati",
      D: "Non è misurabile"
    },
    correct: "A",
    exp: "Una ricerca di successo porta traffico qualificato che converte. Se trovi utenti che rimbalzano subito, la ricerca è stata poco utile."
  },
  {
    id: 46,
    category: "1.1",
    q: "Cosa significano 'long tail keywords'?",
    a: {
      A: "Parole chiave lunghe e specifiche (3+ parole) meno cercate ma con intenzione di ricerca più chiara",
      B: "Parole chiave generiche",
      C: "Parole chiave non rilevanti",
      D: "Parole chiave in un'altra lingua"
    },
    correct: "A",
    exp: "'SEO' = 10k ricerche/mese, alta competizione. 'Come fare SEO per ecommerce' = 100 ricerche, bassa competizione, buyer-ready."
  },
  {
    id: 47,
    category: "1.1",
    q: "Cosa significano i 'web analytics'?",
    a: {
      A: "Analisi dei dati di traffico di un sito: visitor, pageviews, comportamento, conversioni, sorgenti",
      B: "Annunci online",
      C: "Statistiche di ricerca",
      D: "Dati dei competitor"
    },
    correct: "A",
    exp: "Web analytics (Google Analytics) ti mostra: da dove vengono i visitatori, quali pagine visitano, quanto tempo passano, se convertono."
  },
  {
    id: 48,
    category: "1.1",
    q: "Cosa significa 'session'?",
    a: {
      A: "Periodo di tempo in cui un utente interagisce con il tuo sito, termina se inattivo per 30 minuti",
      B: "Una pagina",
      C: "Un click",
      D: "Un acquisto"
    },
    correct: "A",
    exp: "Una session: utente entra → visita 5 pagine → se inattivo 30 min → session termina. Successivo accesso = nuova session."
  },
  {
    id: 49,
    category: "1.1",
    q: "Come ottimizzare per la ricerca vocale?",
    a: {
      A: "Usare frasi naturali, domande (What, How, Why), long tail keywords, featured snippets, optimizzare per 'near me'",
      B: "Non si può ottimizzare",
      C: "Solo per siti commerciali",
      D: "Usando keyword semplici"
    },
    correct: "A",
    exp: "Ricerca vocale: 'Dove trovo pizzeria vicino?' non 'pizzeria Roma'. Ottimizza per conversazioni naturali, non keyword secche."
  },
  {
    id: 50,
    category: "1.1",
    q: "Cosa significa 'content marketing'?",
    a: {
      A: "Creazione e distribuzione di contenuto di valore (blog, video, infografiche) per attrarre e convertire audience",
      B: "Pubblicità tradizionale",
      C: "Email marketing",
      D: "Social media selling"
    },
    correct: "A",
    exp: "Invece di 'compra ora!', offri guida gratuita su SEO → audience ti scopre, legge, si fida → poi compra servizi SEO da te."
  },
  {
    id: 51,
    category: "1.1",
    q: "Cosa significa 'inbound marketing'?",
    a: {
      A: "Strategia che attira clienti tramite contenuto utile invece di interromperli con pubblicità",
      B: "Email dirette",
      C: "Chiamate di vendita",
      D: "Pubblicità televisiva"
    },
    correct: "A",
    exp: "Inbound (pull): crei blog, SEO, social → clienti ti trovano. Outbound (push): compri pubblicità, chiami freddo → clienti non vogliono."
  },
  {
    id: 52,
    category: "1.1",
    q: "Come evitare penalizzazioni SEO di Google?",
    a: {
      A: "Evitare: content duplicato, backlink spam, keyword stuffing, cloaking, soft 404, pagine vuote, malware",
      B: "Non ci sono penalizzazioni",
      C: "Pagare di più",
      D: "Usare HTML vecchio"
    },
    correct: "A",
    exp: "Google Webmaster Guidelines vietano tecniche black hat. Violazioni = ranking drop, deindexing, ban permanente."
  },
  {
    id: 53,
    category: "1.1",
    q: "Cosa significa 'white hat' vs 'black hat' SEO?",
    a: {
      A: "White hat = seguire le linee guida Google; black hat = usare trucchi per salire ranking, rischi penalizzazione",
      B: "Sono uguali",
      C: "Black hat è più efficace",
      D: "White hat costa più"
    },
    correct: "A",
    exp: "White hat: contenuto di qualità, link organici, user experience. Black hat: keyword stuffing, cloaking, PBN. Sconsigliato."
  },
  {
    id: 54,
    category: "1.1",
    q: "Cosa significa 'robots.txt'?",
    a: {
      A: "File di testo nella root del sito che dice ai crawler quali pagine indicizzare e quali no",
      B: "Un programma antivirus",
      C: "Un backup",
      D: "Una password"
    },
    correct: "A",
    exp: "robots.txt esempio: Disallow: /admin/, /temp/. Impedisce l'accesso a Googlebot su sezioni sensibili senza eseguire login."
  },
  {
    id: 55,
    category: "1.1",
    q: "Cosa significano i 'breadcrumbs'?",
    a: {
      A: "Navigazione gerarchica (es: Home > Prodotti > Categoria > Prodotto) che aiuta user experience e SEO",
      B: "Briciole di pane vere",
      C: "File temporanei",
      D: "Segnalibri"
    },
    correct: "A",
    exp: "Breadcrumb: utente vede il percorso, può tornare indietro facilmente. Google comprende la struttura del sito."
  },
  {
    id: 56,
    category: "1.1",
    q: "Cosa significa 'mobile-first indexing'?",
    a: {
      A: "Google indicizza principalmente la versione mobile del sito, non desktop. Mobile optimization è obbligatorio",
      B: "Google preferisce desktop",
      C: "Solo per siti nuovi",
      D: "Non è importante"
    },
    correct: "A",
    exp: "Dal 2021, Google indicizza versione mobile per default. Se non è mobile-friendly, ranking cala. Responsive design = essenziale."
  },
  {
    id: 57,
    category: "1.1",
    q: "Cosa significa 'Core Web Vitals'?",
    a: {
      A: "Metriche Google che misurano user experience: LCP (velocità caricamento), FID (velocità interattività), CLS (stabilità layout)",
      B: "Velocità della rete",
      C: "Numero di plugin",
      D: "Tipo di hosting"
    },
    correct: "A",
    exp: "Score basso Core Web Vitals = ranking penalty. Monitora in Google Search Console, migliora con CDN, image optimization, lazy loading."
  },
  {
    id: 58,
    category: "1.1",
    q: "Cosa significa 'heading tags' (H1, H2, H3...)?",
    a: {
      A: "Tag HTML che strutturano il contenuto gerarchicamente, aiutano SEO e accessibilità",
      B: "Email headers",
      C: "Intestazioni di documento",
      D: "Titoli bancari"
    },
    correct: "A",
    exp: "Una pagina: un H1 (titolo principale), vari H2 (sottosezioni), H3 (dettagli). Aiuta crawler a capire struttura e importanza."
  },
  {
    id: 59,
    category: "1.1",
    q: "Cosa significa 'schema markup' o 'structured data'?",
    a: {
      A: "Codice JSON-LD, Microdata, RDFa che descrive il contenuto ai motori di ricerca e browser",
      B: "Un semplice tag HTML",
      C: "Un CSS personalizzato",
      D: "Un plugin JavaScript"
    },
    correct: "A",
    exp: "Schema markup (schema.org): ristorante con rating, prezzo; articolo con autore, data; prodotto con prezzo, disponibilità."
  },
  {
    id: 60,
    category: "1.1",
    q: "Cosa significa 'internal linking'?",
    a: {
      A: "Pratica di linkare pagine interne del tuo sito tra loro per distribuire authority e migliorare navigazione",
      B: "Link verso siti esterni",
      C: "Link nei commenti",
      D: "Link nei social"
    },
    correct: "A",
    exp: "Buon internal linking: pagina A (high authority) linka a pagina B (new) con anchor text rilevante. Trasmette autorità, aiuta ranking."
  },

  // ===== CATEGORIA 1.2 (60 DOMANDE) =====
  {
    id: 61,
    category: "1.2",
    q: "Cosa significa 'fonte affidabile'?",
    a: {
      A: "Una fonte verificabile, con autore identificato, dati controllabili, e trasparente sulle metodologie",
      B: "Una pagina con molti like",
      C: "Un post su social network",
      D: "Un video virale"
    },
    correct: "A",
    exp: "Fonte affidabile: puoi identificare autore, data, fonti primarie, verificare info in modo indipendente."
  },
  {
    id: 62,
    category: "1.2",
    q: "Cosa sono le 'fake news'?",
    a: {
      A: "Informazioni false o fuorvianti diffuse come se fossero vere",
      B: "Notizie critiche su personaggi pubblici",
      C: "Comunicati stampa ufficiali",
      D: "Articoli di opinione"
    },
    correct: "A",
    exp: "Fake news: contenuti deliberatamente falsi, manipolati, o fuori contesto diffusi per ingannare, influenzare opinioni, ottenere attenzione."
  },
  {
    id: 63,
    category: "1.2",
    q: "Cosa significa 'bias cognitivo'?",
    a: {
      A: "Distorsione sistematica nel nostro modo di interpretare informazioni, basata su credenze, pregiudizi, esperienza",
      B: "Un errore di calcolo",
      C: "Un virus informatico",
      D: "Un'impostazione sbagliata"
    },
    correct: "A",
    exp: "Confirmation bias: cerchiamo info che confermano opinioni. Availability bias: sopravvalutiamo info recenti/memorabili."
  },
  {
    id: 64,
    category: "1.2",
    q: "Come si distingue un 'fatto' da un''opinione'?",
    a: {
      A: "Fatti sono verificabili e oggettivi; opinioni sono soggettive e non verificabili",
      B: "Fatti sono più importanti",
      C: "Opinioni sono scritte in MAIUSCOLO",
      D: "Non c'è differenza"
    },
    correct: "A",
    exp: "Fatto: 'L'Italia confina con la Francia' (verificabile). Opinione: 'La cucina italiana è superiore' (soggettivo)."
  },
  {
    id: 65,
    category: "1.2",
    q: "Cosa significa 'verificare una fonte'?",
    a: {
      A: "Controllare autore, data, fonti citate, cercare conferme su altre fonti autorevoli indipendenti",
      B: "Contare i like",
      C: "Leggere i commenti",
      D: "Controllare il design del sito"
    },
    correct: "A",
    exp: "Verification checklist: chi scrive? Data? Fonti primarie? Citazioni verificabili? Altre fonti autorevoli concordano?"
  },
  {
    id: 66,
    category: "1.2",
    q: "Cosa sono i 'deepfake'?",
    a: {
      A: "Video o audio sintetici creati con AI per imitare persone reali in modo realistico",
      B: "Foto sfocate",
      C: "Screenshot falsi",
      D: "Email contraffatte"
    },
    correct: "A",
    exp: "Deepfake: reti neurali (GAN) creano video di persone che dicono/fanno cose mai fatte. Arma di disinformazione potente."
  },
  {
    id: 67,
    category: "1.2",
    q: "Cosa significa 'conflitto di interessi'?",
    a: {
      A: "Quando chi scrive ha motivi finanziari, personali, o ideologici per favorire una posizione",
      B: "Un disaccordo tra persone",
      C: "Una discussione online",
      D: "Un errore di lettura"
    },
    correct: "A",
    exp: "Es: ricerca finanziata da azienda farmaceutica sulla sua medicina = conflitto. Fonte non neutrale, risultati sospetti."
  },
  {
    id: 68,
    category: "1.2",
    q: "Cosa sono i 'metadati'?",
    a: {
      A: "Dati su altri dati (data creazione, autore, modifiche, localizzazione di un file)",
      B: "Dati falsi",
      C: "Dati compatti",
      D: "Dati criptati"
    },
    correct: "A",
    exp: "Metadati foto: data, ora, GPS location, fotocamera, ISO. Metadati documento: autore, date creazione/modifica, revisioni."
  },
  {
    id: 69,
    category: "1.2",
    q: "Cosa significa 'validità interna' di uno studio?",
    a: {
      A: "Capacità dello studio di misurare effettivamente quello che intende misurare, senza errori sistematici",
      B: "Numero di partecipanti",
      C: "Lunghezza dello studio",
      D: "Budget speso"
    },
    correct: "A",
    exp: "Studio ben progettato con valida interna dimostra relazione causa-effetto. Confondimenti, bias = valida interna compromessa."
  },
  {
    id: 70,
    category: "1.2",
    q: "Cosa significa 'generalizzare' una conclusione?",
    a: {
      A: "Applicare conclusioni di uno studio specifico a popolazioni o contesti più ampi senza basi sufficienti",
      B: "Scrivere in modo vago",
      C: "Riassumere un testo",
      D: "Rifiutare i dettagli"
    },
    correct: "A",
    exp: "Studio su 100 donne italiane NON dimostra comportamenti di donne globali. Generalizzazione errata = fallacia logica frequente."
  },
  {
    id: 71,
    category: "1.2",
    q: "Cosa significa 'campione' statistico?",
    a: {
      A: "Sottoinsieme di una popolazione usato per inferire caratteristiche della popolazione intera",
      B: "Un prodotto gratis",
      C: "Una prova",
      D: "Un modello"
    },
    correct: "A",
    exp: "Sondaggio: chiedi 1000 persone su 60 milioni. Campione di 1000 deve essere rappresentativo (random, stratificato) per validità."
  },
  {
    id: 72,
    category: "1.2",
    q: "Cosa significano 'credibilità' e 'affidabilità' di una fonte?",
    a: {
      A: "Credibilità = percezione che fonte è attendibile; affidabilità = realmente fa quello che promette",
      B: "Sono sinonimi",
      C: "Non importano",
      D: "Dipendono dal numero di like"
    },
    correct: "A",
    exp: "Una fonte può sembrare credibile (buon design, tono professionale) ma non essere affidabile (dati falsi). Verifica entrambe."
  },
  {
    id: 73,
    category: "1.2",
    q: "Cosa significa 'fact-checking'?",
    a: {
      A: "Processo di verifica di affermazioni fattiche consultando fonti primarie, esperti, studi peer-reviewed",
      B: "Leggere più fonti",
      C: "Controllare la grammatica",
      D: "Contare le parole"
    },
    correct: "A",
    exp: "Fact-checker: Snopes, FactCheck.org, PolitiFact verificano affermazioni pubbliche contro evidenza disponibile. Etichettano da TRUE a FALSE."
  },
  {
    id: 74,
    category: "1.2",
    q: "Cosa significa 'echo chamber'?",
    a: {
      A: "Ambiente digitale dove vedi solo informazioni che confermano tue credenze (filtri algortimici, follow selettivo)",
      B: "Un forum",
      C: "Un blog",
      D: "Un giornale"
    },
    correct: "A",
    exp: "Echo chamber su Facebook: se clicki content politica conservatrice, algoritmo ti mostra più di quello, rafforza tue opinioni."
  },
  {
    id: 75,
    category: "1.2",
    q: "Cosa significa 'misinformation' vs 'disinformation'?",
    a: {
      A: "Misinformation = falso condiviso senza intento; disinformation = falso deliberato per ingannare",
      B: "Sono la stessa cosa",
      C: "Non c'è differenza semantica",
      D: "Misinformation è più grave"
    },
    correct: "A",
    exp: "Condividi articolo falso senza sapere = misinformation. Governo crea propaganda falsa = disinformation. Intento è cruciale."
  },
  {
    id: 76,
    category: "1.2",
    q: "Cosa sono i 'leading questions'?",
    a: {
      A: "Domande che guidano la risposta verso una conclusione predefinita, viziando i risultati",
      B: "Domande principali",
      C: "Domande finali",
      D: "Domande aperte"
    },
    correct: "A",
    exp: "'Non pensi che il nuovo prodotto sia fantastico?' guida verso SI. Neutra: 'Quale è la tua opinione sul nuovo prodotto?' "
  },
  {
    id: 77,
    category: "1.2",
    q: "Cosa significano 'fonti primarie' vs 'secondarie'?",
    a: {
      A: "Primarie = source originale (studio, testimone, documento); secondarie = interpretazione/analisi di primaria",
      B: "Primarie sono meno importanti",
      C: "Secondarie sono più affidabili",
      D: "Non c'è differenza"
    },
    correct: "A",
    exp: "Studio scientifico originale = primaria. Articolo che lo cita e commenta = secondaria. Per validità, preferisci primarie."
  },
  {
    id: 78,
    category: "1.2",
    q: "Cosa significa 'peer review'?",
    a: {
      A: "Processo dove esperti controllano uno studio prima della pubblicazione per verificarne qualità e validità scientifica",
      B: "Commenti di lettori",
      C: "Approvazione del direttore",
      D: "Voto pubblico"
    },
    correct: "A",
    exp: "Ricerca peer-reviewed: esperti anonimi controllano metodologia, risultati, conclusioni. Gold standard in ricerca scientifica."
  },
  {
    id: 79,
    category: "1.2",
    q: "Cosa significa 'correlazione' vs 'causalità'?",
    a: {
      A: "Correlazione = due cose variano insieme; causalità = una causa l'altra. Correlazione NON implica causalità",
      B: "Sono la stessa cosa",
      C: "Causalità è più rara",
      D: "Correlazione è più importante"
    },
    correct: "A",
    exp: "Gelato consumato ↑, annegamenti ↑ (correlazione). Ma causa = estate caldo. Un confondimento, non rapporto di causa."
  },
  {
    id: 80,
    category: "1.2",
    q: "Cosa significano i 'valori aberranti' o 'outlier'?",
    a: {
      A: "Dati anomali che si discostano significativamente dalla media, possono distorcere analisi se non trattati",
      B: "Errori tipici",
      C: "Dati normali",
      D: "Dati eliminati"
    },
    correct: "A",
    exp: "Dataset salari: media distorta da 1 CEO multimilionario tra 100 impiegati normali. Mediana è più robusta agli outlier."
  },
  {
    id: 81,
    category: "1.2",
    q: "Cosa significa 'confirmation bias'?",
    a: {
      A: "Tendenza a cercare, interpretare, ricordare info che confermano nostre credenze pregresse",
      B: "Errore casuale",
      C: "Errore del ricercatore",
      D: "Non è un bias"
    },
    correct: "A",
    exp: "Credi che l'immigrazione è negativa → leggi solo articoli negativi su immigrazione → confermi la tua credenza (ciclo vizioso)."
  },
  {
    id: 82,
    category: "1.2",
    q: "Cosa significa 'availability bias'?",
    a: {
      A: "Tendenza a sopravvalutare la probabilità di eventi che ci vengono facilmente in mente (recenti, memorabili)",
      B: "Bias di scelta",
      C: "Bias di formato",
      D: "Bias di velocità"
    },
    correct: "A",
    exp: "Incidenti aerei sono rari ma ci ricordiamo di uno recente → pensiamo siano frequenti. Auto uccidono più persone (meno memorabili)."
  },
  {
    id: 83,
    category: "1.2",
    q: "Cosa significa 'anchoring bias'?",
    a: {
      A: "Dipendenza eccessiva dal primo numero/informazione ricevuta per prendere decisioni successive",
      B: "Bias nella lettura",
      C: "Bias nella scelta del colore",
      D: "Bias nel tempo"
    },
    correct: "A",
    exp: "Negoziante dice 'Prezzo originale €100, oggi €50'. Primo numero (100) influenza percezione. Sconto sembra buono (non lo è)."
  },
  {
    id: 84,
    category: "1.2",
    q: "Cosa significa 'selection bias'?",
    a: {
      A: "Distorsione nei risultati perché il campione non è rappresentativo della popolazione (non random)",
      B: "Scelta personale",
      C: "Scelta del tema",
      D: "Scelta del metodo"
    },
    correct: "A",
    exp: "Sondaggio online su persone ricche = selection bias. Solo chi ha internet risponde. Non rappresenta poberi/rural."
  },
  {
    id: 85,
    category: "1.2",
    q: "Cosa significa 'survivorship bias'?",
    a: {
      A: "Focalizzazione sui casi di successo/sopravvivenza, ignorando i fallimenti, portando a conclusioni distorte",
      B: "Bias di sopravvivenza biologica",
      C: "Bias di tema",
      D: "Bias di tempo"
    },
    correct: "A",
    exp: "'Miliardari dicono: svegliarsi alle 5am è la chiave'. Ignoriamo persone che si svegliano alle 5am e rimangono poveri. Survivorship bias."
  },
  {
    id: 86,
    category: "1.2",
    q: "Cosa significa 'sensationalismo'?",
    a: {
      A: "Esagerazione drammatica di fatti per attirare attenzione, spesso sacrificando accuratezza",
      B: "Informazione accurata",
      C: "Giornalismo serio",
      D: "Ricerca scientifica"
    },
    correct: "A",
    exp: "Titolo sensazionalista: 'SCOPERTA MIRACOLO CHE CURA CANCRO!' Articolo: 'Studio iniziale su topi, anni da veri risultati'."
  },
  {
    id: 87,
    category: "1.2",
    q: "Cosa significa 'cherry-picking'?",
    a: {
      A: "Selezione selettiva di dati che supportano conclusione desiderata, ignorando dati contrari",
      B: "Scelta casuale",
      C: "Scelta scientifica",
      D: "Scelta rappresentativa"
    },
    correct: "A",
    exp: "Politico cita 3 studi che supportano sua politica, ignora 50 studi contrari. Presentazione disonesta di dati."
  },
  {
    id: 88,
    category: "1.2",
    q: "Cosa significano i 'talking points'?",
    a: {
      A: "Argomenti preparati e semplificati per influenzare opinione pubblica, spesso senza sfumature",
      B: "Argomenti scientifici",
      C: "Argomenti accademici",
      D: "Argomenti personali"
    },
    correct: "A",
    exp: "Politico ripete talking point: 'Economia è forte!' anche se dati mostrano crescita debole. Messaggi ripetuti per persuasione."
  },
  {
    id: 89,
    category: "1.2",
    q: "Cosa significa 'astroturfing'?",
    a: {
      A: "Campagna di opinione pubblica 'grassroots' artificiale, finanziata da organizzazioni/governi per sembrare spontanea",
      B: "Herpes labiale",
      C: "Un tipo di film",
      D: "Protesta genuina"
    },
    correct: "A",
    exp: "Grande azienda crea 'movimento cittadino spontaneo' contro regolazione per proteggere suoi interessi. Falso grassroots."
  },
  {
    id: 90,
    category: "1.2",
    q: "Cosa significa 'weasel words'?",
    a: {
      A: "Parole vague e sfuggenti che attenuano affermazioni rendendole difficili da smontare ('probabilmente', 'alcuni dicono')",
      B: "Parole scure",
      C: "Parole lunghe",
      D: "Parole rare"
    },
    correct: "A",
    exp: "'Alcuni studi suggeriscono...' = vago, non specifico. 'Lo studio della Yale di 2024 dimostra...' = concreto, verificabile."
  },
  {
    id: 91,
    category: "1.2",
    q: "Cosa significa 'loaded language'?",
    a: {
      A: "Uso di parole emotivamente cariche per manipolare opinione anzichè informare obbiettivamente",
      B: "Linguaggio tecnico",
      C: "Linguaggio accademico",
      D: "Linguaggio chiaro"
    },
    correct: "A",
    exp: "Loaded: 'criminali migranti invadono il paese!' Neutrale: 'Migrazione è aumentata del 5% quest'anno'."
  },
  {
    id: 92,
    category: "1.2",
    q: "Cosa significa 'straw man argument'?",
    a: {
      A: "Distorsione dell'argomento dell'avversario in versione più debole/estrema per facile confutazione",
      B: "Argomento valido",
      C: "Argomento logico",
      D: "Argomento forte"
    },
    correct: "A",
    exp: "'Chi vuole servizi pubblici migliori vuole socialismo!'  Distorsione. Vero: 'Alcuni propongono aumento investimenti in sanità'."
  },
  {
    id: 93,
    category: "1.2",
    q: "Cosa significa 'ad hominem'?",
    a: {
      A: "Attacco alla persona che argomenta invece che confutare l'argomento stesso",
      B: "Accordo con una persona",
      C: "Apprezzamento di una persona",
      D: "Analisi logica"
    },
    correct: "A",
    exp: "'Ecologista va in aereo, quindi ambientalismo è falso!' Attacca persona, non l'argomento eco. Fallacia logica."
  },
  {
    id: 94,
    category: "1.2",
    q: "Cosa significano 'opinioni di esperti'?",
    a: {
      A: "Pareri di persone con expertise riconosciuta in un dominio, più credibili se dichiarano conflitti di interesse",
      B: "Opinioni di chiunque",
      C: "Opinioni su social",
      D: "Qualsiasi affermazione"
    },
    correct: "A",
    exp: "Opinione di epidemiologo su COVID > opinione random su Twitter. Ma controllare: conflitti, peer-review, consenso tra esperti."
  },
  {
    id: 95,
    category: "1.2",
    q: "Cosa significa 'scientific consensus'?",
    a: {
      A: "Accordo generale tra la maggioranza di esperti scientifici su un'area, basato su evidenza accumulata",
      B: "Un'opinione",
      C: "Un voto",
      D: "Una decisione politica"
    },
    correct: "A",
    exp: "Consensus climatico: 97%+ scienziati clima concordano riscaldamento globale è umano. È l'opposto di singoli studi contrari."
  },
  {
    id: 96,
    category: "1.2",
    q: "Come identificare un articolo clickbait?",
    a: {
      A: "Titolo sensazionista, promette info non fornita, generico, usa numeri vaghi ('Doctoris odiano questo trucco!')",
      B: "Titolo lunghissimo",
      C: "Articolo con molte parole",
      D: "Articolo con foto"
    },
    correct: "A",
    exp: "Clickbait: 'Questo fa dimagrire in 1 settimana!' Realtà: lungo articolo su esercizio+dieta. Titolo bugia per click."
  },
  {
    id: 97,
    category: "1.2",
    q: "Come verificare un'immagine su internet?",
    a: {
      A: "Usare reverse image search (Google Immagini, TinEye) per trovare fonte originale, contesto, data",
      B: "Fidarsi del post",
      C: "Contare i like",
      D: "Chiedere ai commenti"
    },
    correct: "A",
    exp: "Foto virale di 'inondazione COVID': reverse search rivela foto di 2017 di inondazione naturale, usata fuori contesto. Verifica critica."
  },
  {
    id: 98,
    category: "1.2",
    q: "Cosa significa 'context collapse'?",
    a: {
      A: "Perdita di contesto quando contenuti privati/per gruppo specifico vengono condivisi pubblicamente",
      B: "Errore del server",
      C: "Crash del browser",
      D: "Lentezza della rete"
    },
    correct: "A",
    exp: "Tweet scherzoso per amici condiviso al capo = mal interpretato. Contesto privato collassa in pubblico, conseguenze impreviste."
  },
  {
    id: 99,
    category: "1.2",
    q: "Cosa significano 'algoritmi raccomandazione'?",
    a: {
      A: "Sistemi che decidono quali contenuti mostrare basati su interazioni passate, viste, like, seguiti",
      B: "Semplici liste",
      C: "Scelte casuali",
      D: "Preferenze manuali"
    },
    correct: "A",
    exp: "YouTube raccomanda video simili a quelli guardati. Se guardi conspiracy → YouTube suggerisce più conspiracy. Echo chamber automatica."
  },
  {
    id: 100,
    category: "1.2",
    q: "Come valutare affidabilità di un sito web?",
    a: {
      A: "Controllare: chi gestisce, data ultima modifica, autorità su argomento, link a fonti, assenza conflitti, contatti chiari",
      B: "Design del sito",
      C: "Colore dei bottoni",
      D: "Font usato"
    },
    correct: "A",
    exp: "Red flags: 'Chi siamo' assente, date vecchie, nessun autore, link tutti rotti, grammatica pessima, ads ovunque."
  },
  {
    id: 101,
    category: "1.2",
    q: "Cosa significano 'media literacy' o 'alfabetizzazione mediatica'?",
    a: {
      A: "Competenza di analizzare criticamente media (TV, giornali, social, video), riconoscere bias, manipolazione, persuasione",
      B: "Leggere notizie",
      C: "Guardare video",
      D: "Usare social"
    },
    correct: "A",
    exp: "Media literacy: capire propaganda, pubblicità nascosta, algoritmi manipolativi. Essenziale in era disinformazione."
  },
  {
    id: 102,
    category: "1.2",
    q: "Cosa significa '404 Not Found'?",
    a: {
      A: "Errore HTTP che pagina non esiste, spesso significa link rotto, fonte migrata, o contenuto eliminato",
      B: "Errore di password",
      C: "Virus",
      D: "Problema di rete"
    },
    correct: "A",
    exp: "Link morto → 404 = fonte non più affidabile/disponibile. Se fonte principale è 404, articolo è meno verificabile."
  },
  {
    id: 103,
    category: "1.2",
    q: "Cosa significano 'whitepaper' e 'report'?",
    a: {
      A: "Whitepaper = documento tecnico dettagliato; report = analisi strutturata. Spesso più credibili di articoli generici",
      B: "Sono articoli brevi",
      C: "Sono post social",
      D: "Sono video"
    },
    correct: "A",
    exp: "Report Amnesty International su violazioni: credibile. Whitepaper tecnico da ricercatore peer-reviewed: credibile."
  },
  {
    id: 104,
    category: "1.2",
    q: "Cosa significa 'pressione dei pari' (peer pressure)?",
    a: {
      A: "Influenza sociale che ci spinge ad accettare credenze/comportamenti per conformismo, ridotto pensiero critico",
      B: "Pressione atmosferica",
      C: "Pressione fisica",
      D: "Stress di lavoro"
    },
    correct: "A",
    exp: "Social media: se tutti condividono fake news, tendi a credere per conformismo. Peer pressure online = pericolosa per misinformation."
  },
  {
    id: 105,
    category: "1.2",
    q: "Cosa significa 'digital literacy'?",
    a: {
      A: "Competenza di usare tecnologia digitale efficacemente e criticamente (info finding, evaluation, communication)",
      B: "Saper leggere",
      C: "Usare un computer",
      D: "Avere email"
    },
    correct: "A",
    exp: "Digital literacy include: valutare fonti online, riconoscere phishing, capire privacy, usare tool collaboration, valutare credibilità."
  },
  {
    id: 106,
    category: "1.2",
    q: "Come riconoscere 'propaganda'?",
    a: {
      A: "Info parziale/distorta per persuadere verso un'ideologia, spesso usa emozioni, omette contesti, semplifica eccessivamente",
      B: "Qualsiasi comunicazione",
      C: "Comunicazione chiara",
      D: "Comunicazione obiettiva"
    },
    correct: "A",
    exp: "Propaganda di regime: video eroico soldati, omette perdite. Propaganda commerciale: 'Questo prodotto CAMBIA la vita!' (vago)."
  },
  {
    id: 107,
    category: "1.2",
    q: "Cosa significa 'polarizzazione'?",
    a: {
      A: "Divisione di società/dibattito in due poli opposti estremi con poco middle ground, spesso amplificata da algoritmi",
      B: "Un tipo di luce",
      C: "Un fenomeno fisico",
      D: "Una proprietà magnetica"
    },
    correct: "A",
    exp: "Twitter: posizioni moderate scompaiono. Vedi solo estrema sinistra vs estrema destra. Algoritmo amplifica engagement polarizzato."
  },
  {
    id: 108,
    category: "1.2",
    q: "Cosa significano 'dati statistici attendibili'?",
    a: {
      A: "Dati da fonti verificabili (enti ufficiali, ricerca peer-reviewed), con trasparenza su metodologia, margine errore",
      B: "Dati da qualsiasi fonte",
      C: "Dati che supportano mia opinione",
      D: "Dati più recenti"
    },
    correct: "A",
    exp: "ISTAT, WHO, ricerca peer-reviewed = dati attendibili con metodologia nota. Blog random con tabella = dubbioso."
  },
  {
    id: 109,
    category: "1.2",
    q: "Cosa significa 'punto di vista eterogeno'?",
    a: {
      A: "Considerare diverse prospettive/opinioni di esperti da sfere diverse prima di formare giudizio",
      B: "Credere tutti",
      C: "Non decidere mai",
      D: "Seguire maggioranza"
    },
    correct: "A",
    exp: "Clima: leggi IPCC (scienziati), ma anche critiche peer-reviewed, economisti, storici. Visione multidimensionale."
  },
  {
    id: 110,
    category: "1.2",
    q: "Come proteggersi dalla manipolazione emotiva online?",
    a: {
      A: "Riconoscere quando contenuto usa paura/rabbia per azione impulsiva, attendere, verificare con fonti neutre",
      B: "Non leggere notizie",
      C: "Fidarsi dell'istinto",
      D: "Creare account falsi"
    },
    correct: "A",
    exp: "Post virale: 'GOVERNO MENTE! CONDIVIDI PRIMA CANCELLAZIONE!' Pausa → leggi, verifica, non ricondividere se falso."
  },
  {
    id: 111,
    category: "1.2",
    q: "Cosa significa 'slacktivism'?",
    a: {
      A: "Attivismo superficiale online (like, share, retweet) che non produce azione concreta offline",
      B: "Attivismo sincero",
      C: "Attivismo offline",
      D: "Attivismo politico"
    },
    correct: "A",
    exp: "Condividi ribbon rosso per AIDS ma non doni soldi/volontariato. Slacktivism = feel-good senza impatto."
  },
  {
    id: 112,
    category: "1.2",
    q: "Cosa significa 'troll' o 'trolling'?",
    a: {
      A: "Persona che intenzionalmente provoca, offende, disturba conversazione online per reazione, spesso anonima",
      B: "Creature mitologiche",
      C: "Un gioco online",
      D: "Un tipo di pesce"
    },
    correct: "A",
    exp: "Troll posta commento infiammatorio, aspetta reazioni arrabbiati. Goal = caos conversazione, non discussione seria."
  },
  {
    id: 113,
    category: "1.2",
    q: "Come identificare 'sarcasmo' e 'ironia' online?",
    a: {
      A: "Difficile senza contesto/tono voce. Usa contesto post, storia account, /s tag, emojis, community norms",
      B: "Sempre evidente",
      C: "Non identifiable",
      D: "Segui hashtag"
    },
    correct: "A",
    exp: "Tweet: 'Lockdown è fantastico!' Sarcasmo se da account critico lockdown. Ironia se da satira satirica. Contesto essenziale."
  },
  {
    id: 114,
    category: "1.2",
    q: "Cosa significa 'infodemico'?",
    a: {
      A: "Sovrabbondanza di informazioni (vere, false, fuorvianti) che rende difficile trovare fonti affidabili",
      B: "Epidemia",
      C: "Pandemia",
      D: "Malattia"
    },
    correct: "A",
    exp: "COVID infodemic: milioni articoli, studi conflittuali, fake news. Difficile sapere cosa credere. Info overload + uncertainty."
  },
  {
    id: 115,
    category: "1.2",
    q: "Cosa significa 'burden of proof'?",
    a: {
      A: "Chi fa affermazione straordinaria deve fornire evidenza. Affirmative (pro) deve provare, non negative deve provare assenza",
      B: "Responsabilità del lettore",
      C: "Dovere di governo",
      D: "Dovere dell'insegnante"
    },
    correct: "A",
    exp: "'Omeopatia cura cancro': affermazione straordinaria. Burden on proponent. Non: 'Provate che NON cura'."
  },
  {
    id: 116,
    category: "1.2",
    q: "Come valutare attendibilità di un'opinione online?",
    a: {
      A: "Verificare: esperienza autore, conflitti interessé, evidenze supporto, se citata da altre fonti autorevoli",
      B: "Numero di like",
      C: "Numero di commenti",
      D: "Numero di condivisioni"
    },
    correct: "A",
    exp: "Tweet virale non = vero. Conta più: chi parla, con quale expertise, quale evidenza, chi altrove concordia."
  },
  {
    id: 117,
    category: "1.2",
    q: "Cosa significano 'microaggressive' o 'microaggressioni'?",
    a: {
      A: "Commenti/comportamenti apparentemente minori ma che perpetuano stereotipi, discriminazioni sutilmente",
      B: "Aggressioni fisiche",
      C: "Insulti diretti",
      D: "Critiche costruttive"
    },
    correct: "A",
    exp: "'Da dove vieni DAVVERO?' a persona con accento. Microaggressione: assume non sia autoctono. Cumulativo effetto."
  },
  {
    id: 118,
    category: "1.2",
    q: "Cosa significa 'postverità'?",
    a: {
      A: "Era dove appello emotivo/opinione prevalere su fatti obiettivi nel formare opinioni pubbliche",
      B: "Mancanza di verità",
      C: "Verità nascosta",
      D: "Verità multipla"
    },
    correct: "A",
    exp: "Post-truth politics: 'Sentiamo che è vero' > 'prove scientifiche mostrano...' Emozione batte dati (era moderna)."
  },
  {
    id: 119,
    category: "1.2",
    q: "Come riconoscere 'content farm'?",
    a: {
      A: "Sito che pubblica contenuti di bassa qualità in massa per SEO/ads, spesso copiato, scritto male, inaccurato",
      B: "Un sito agricolo",
      C: "Un blog personale",
      D: "Un giornale"
    },
    correct: "A",
    exp: "Content farm: articoli generici, clickbait, sovraccarico ads, nessun autore identificato, testo AI-generated di bassa qualità."
  },
  {
    id: 120,
    category: "1.2",
    q: "Cosa significa 'sockpuppet' online?",
    a: {
      A: "Account fake controllato da persona/organizzazione reale per simulare persona indipendente, manipolare opinione",
      B: "Un peluche",
      C: "Un giocattolo",
      D: "Un personaggio TV"
    },
    correct: "A",
    exp: "Azienda crea 5 account fake per elogiare prodotto come se fossero clienti veri. Sockpuppet manipulation."
  },

  // ===== CATEGORIA 1.3 (60 DOMANDE) =====
  {
    id: 121,
    category: "1.3",
    q: "Cosa significa 'gestire dati'?",
    a: {
      A: "Organizzare, archiviare, proteggere, accedere, condividere dati in modo sicuro e efficiente",
      B: "Eliminare tutto",
      C: "Memorizzare ovunque",
      D: "Non fare nulla"
    },
    correct: "A",
    exp: "Gestione dati: cartelle organizzate, backup regolari, password protette, accesso controllato, backup cloudiffer."
  },
  {
    id: 122,
    category: "1.3",
    q: "Cosa significa 'privacy'?",
    a: {
      A: "Diritto di controllare quali dati personali vengono raccolti, usati, condivisi su di te",
      B: "Segretezza totale",
      C: "Anonimato online",
      D: "Rifiutare Internet"
    },
    correct: "A",
    exp: "Privacy: sapere chi ha tuoi dati, come li usa, avere diritto cancellazione. GDPR protegge questo diritto in UE."
  },
  {
    id: 123,
    category: "1.3",
    q: "Cosa significa 'dato personale'?",
    a: {
      A: "Qualsiasi informazione relativa a persona identificata/identificabile (nome, email, IP, foto, numero carta)",
      B: "Solo numero documento",
      C: "Solo password",
      D: "Solo data nascita"
    },
    correct: "A",
    exp: "Dato personale: IP pubblico, email, foto con volto, numero telefono, posizione GPS. Ampia definizione legale."
  },
  {
    id: 124,
    category: "1.3",
    q: "Cosa significa 'GDPR'?",
    a: {
      A: "General Data Protection Regulation - legge UE che protegge dati personali, dà diritti a soggetti",
      B: "Un antivirus",
      C: "Un browser",
      D: "Un social network"
    },
    correct: "A",
    exp: "GDPR (2018): diritto accesso, rettifica, oblio, portabilità. Aziende devono informare, ottenere consenso esplicito."
  },
  {
    id: 125,
    category: "1.3",
    q: "Cosa significano i 'cookie'?",
    a: {
      A: "File piccoli memorizzati nel browser che ricordano preferenze, login, comportamento per personalizzazione",
      B: "Dolci",
      C: "File temporanei",
      D: "Cartelle"
    },
    correct: "A",
    exp: "Cookie session: ricorda login finché online. Cookie persistenti: ricordano per settimane. Possono tracciare navigazione."
  },
  {
    id: 126,
    category: "1.3",
    q: "Cosa significano 'cookie di terze parti'?",
    a: {
      A: "Cookie di siti terzi (ad network, tracker) caricati in siti che visiti per tracciare comportamento cross-site",
      B: "Cookie del sito principale",
      C: "Cookie del browser",
      D: "Cookie di sistema"
    },
    correct: "A",
    exp: "Visiti sito A, Google Analytics (terzo) carica cookie per tracciare te. Quando visiti sito B, Google sa chi sei (tracking cross-site)."
  },
  {
    id: 127,
    category: "1.3",
    q: "Cosa significa 'tracciamento' (tracking) online?",
    a: {
      A: "Raccolta sistematica di dati su comportamento online (siti visitati, click, tempo, acquisti) per profilazione",
      B: "Seguire una persona",
      C: "Leggere email",
      D: "Registrare video"
    },
    correct: "A",
    exp: "Aziende tracciamento: Google, Facebook, Amazon. Creano profilo dettagliato dei tuoi interessi per target pubblicità."
  },
  {
    id: 128,
    category: "1.3",
    q: "Cosa significa 'profilazione'?",
    a: {
      A: "Creazione di profilo comportamentale/preferenze basato su dati raccolti, usato per personalizzazione e targeting",
      B: "Foto profilo",
      C: "Bio social",
      D: "Descrizione personale"
    },
    correct: "A",
    exp: "Facebook sa: età, interessi, politica, acquisti, relazioni. Profilo dettagliato venduto a inserzionisti per pubblicità targetizzata."
  },
  {
    id: 129,
    category: "1.3",
    q: "Cosa significa 'consenso' nel contesto privacy?",
    a: {
      A: "Approvazione esplicita, informata, libera per raccolta/uso dati. Deve essere attivo (checkbox), non preselezionato",
      B: "Accettazione automatica",
      C: "Implicito",
      D: "Opzionale"
    },
    correct: "A",
    exp: "GDPR: consenso deve essere esplicito (checkbox non preselezionato), informato (sai che dati, come usati), libero (no coercizione)."
  },
  {
    id: 130,
    category: "1.3",
    q: "Cosa significa 'diritto di accesso' ai dati personali?",
    a: {
      A: "Diritto di chiedere all'azienda quali dati personali ha su di te, come acquisiti, come usati",
      B: "Accesso al sito",
      C: "Accesso account",
      D: "Accesso file"
    },
    correct: "A",
    exp: "GDPR Articolo 15: puoi chiedere a Facebook 'Mi scarici tutti i dati che hai su di me'. Facebook deve rispondere in 30 giorni."
  },
  {
    id: 131,
    category: "1.3",
    q: "Cosa significa 'diritto di oblio' o 'right to be forgotten'?",
    a: {
      A: "Diritto di chiedere cancellazione dati personali su te se non più necessari, obsoleti, o raccolti illegittimamente",
      B: "Eliminare storia browser",
      C: "Cancellare account",
      D: "Ignorare notifiche"
    },
    correct: "A",
    exp: "GDPR Articolo 17: puoi chiedere 'Google, cancella il mio nome dai risultati di ricerca'. Google deve valutare e obliare dati."
  },
  {
    id: 132,
    category: "1.3",
    q: "Cosa significa 'portabilità dei dati'?",
    a: {
      A: "Diritto di ricevere dati personali in formato accessibile e trasferirli a altro fornitore",
      B: "Portare dati su USB",
      C: "Copiare file",
      D: "Sincronizzare dispositivi"
    },
    correct: "A",
    exp: "GDPR Articolo 20: puoi chiedere a Facebook i tuoi dati (post, foto, contatti) in CSV/JSON e portarli a Instagram. Interoperabilità."
  },
  {
    id: 133,
    category: "1.3",
    q: "Cosa significa 'backup'?",
    a: {
      A: "Copia di dati/file su dispositivo/server secondario per protezione da perdita, guasto, ransomware",
      B: "File temporaneo",
      C: "Cache",
      D: "Archiviazione"
    },
    correct: "A",
    exp: "Backup 3-2-1: 3 copie dati, 2 dispositivi diversi, 1 offsite. Es: hard drive + cloud + NAS esterno."
  },
  {
    id: 134,
    category: "1.3",
    q: "Cosa significano 'cloud storage' e 'cloud computing'?",
    a: {
      A: "Cloud storage = archiviare file online (Google Drive, OneDrive). Cloud computing = usare server online per elaborare dati",
      B: "Lo stesso",
      C: "Internet",
      D: "Backup locale"
    },
    correct: "A",
    exp: "Cloud storage: foto in Google Photos. Cloud computing: Excel online elabora file big data su server, non sul tuo PC."
  },
  {
    id: 135,
    category: "1.3",
    q: "Cosa significa 'archiviazione locale'?",
    a: {
      A: "Conservare dati su dispositivo personale (hard drive interno, USB, SSD) senza cloud",
      B: "Cloud storage",
      C: "Backup online",
      D: "Server remoto"
    },
    correct: "A",
    exp: "Archiviazione locale: hard drive esterno in casa tua. Vantaggi: veloce, privato. Svantaggi: rischio perdita/furto, no accesso remoto."
  },
  {
    id: 136,
    category: "1.3",
    q: "Quali sono i vantaggi del cloud storage?",
    a: {
      A: "Accesso da ovunque, sincronizzazione automatica, backup automatico, scalabilità, condivisione facile",
      B: "Gratis",
      C: "Anonimato",
      D: "Velocità infinita"
    },
    correct: "A",
    exp: "Cloud: Google Drive accedi da phone/PC/tablet. Foto auto-upload. Sharing link easy. Ma: privacy concerns, dipendenza connessione."
  },
  {
    id: 137,
    category: "1.3",
    q: "Quali sono i rischi del cloud storage?",
    a: {
      A: "Hack account, violazione privacy, governo accesso, provider chiude servizio, perdita dati dovuta provider",
      B: "Non ci sono",
      C: "Solo lentezza",
      D: "Solo costi"
    },
    correct: "A",
    exp: "Cloud risks: Dropbox hacked 2012, milioni password compromesse. Google legge Gmail per ads. China costringe fornitori accesso."
  },
  {
    id: 138,
    category: "1.3",
    q: "Cosa significa 'criptazione' o 'encryption'?",
    a: {
      A: "Processo di conversione di dati in codice intelligibile solo a chi ha chiave decrittazione, protegge da accesso non autorizzato",
      B: "Compressione file",
      C: "Archiviazione dati",
      D: "Backup automatico"
    },
    correct: "A",
    exp: "AES-256 encryption: email criptata è leggibile solo da destinatario. Gmail legge email PRIMA criptazione (non end-to-end)."
  },
  {
    id: 139,
    category: "1.3",
    q: "Cosa significa 'end-to-end encryption' (E2E)?",
    a: {
      A: "Criptazione dove solo mittente e destinatario decrittano, provider non accede al contenuto (WhatsApp, Signal)",
      B: "Criptazione totale",
      C: "Criptazione debole",
      D: "Criptazione locale"
    },
    correct: "A",
    exp: "WhatsApp E2E: messaggio criptato sul phone mittente, decripto solo phone destinatario. WhatsApp stessa non legge."
  },
  {
    id: 140,
    category: "1.3",
    q: "Cosa significa 'password forte'?",
    a: {
      A: "Almeno 12 caratteri, mix maiuscole/minuscole/numeri/simboli, unica per ogni account, non parole dizionario",
      B: "Password lunga",
      C: "Password con numero",
      D: "Password con lettera maiuscola"
    },
    correct: "A",
    exp: "Debole: '123456' o 'password'. Forte: 'J7#kL9@mQ2$xP%Z1'. Usa password manager (1Password, Bitwarden) per gestione."
  },
  {
    id: 141,
    category: "1.3",
    q: "Cosa significa 'autenticazione a due fattori' (2FA)?",
    a: {
      A: "Verifica in due step: password + secondo fattore (codice SMS, app autenticatore, impronta), aumenta sicurezza",
      B: "Una sola password",
      C: "Password doppia",
      D: "Due password uguali"
    },
    correct: "A",
    exp: "2FA: digiti password Facebook, poi codice da Google Authenticator app. Anche se hacker ha password, non accede senza app."
  },
  {
    id: 142,
    category: "1.3",
    q: "Cosa significa 'malware'?",
    a: {
      A: "Software dannoso progettato per infiltrarsi, rubare dati, danneggiare sistema (virus, worm, trojan, ransomware)",
      B: "Software legale",
      C: "Programma di pulizia",
      D: "Sistema operativo"
    },
    correct: "A",
    exp: "Malware: viruses auto-replicanti, worm spreads rete, trojan (app falsa), ransomware (cripta file, chiede riscatto)."
  },
  {
    id: 143,
    category: "1.3",
    q: "Cosa significa 'phishing'?",
    a: {
      A: "Attacco fraudolento via email/SMS/sito fake per rubare credenziali fingendosi entità legittima",
      B: "Un tipo di virus",
      C: "Un backup",
      D: "Una password"
    },
    correct: "A",
    exp: "Phishing: email 'Verifica account Amazon' con link fake → sito copiato Amazon → inserisci password → hacker ha credenziali."
  },
  {
    id: 144,
    category: "1.3",
    q: "Cosa significa 'ransomware'?",
    a: {
      A: "Malware che cripta file vitali, rende inaccessibili, chiede denaro (ransom) per decrittazione, spesso colpisce aziende",
      B: "Virus lento",
      C: "Spyware",
      D: "Adware"
    },
    correct: "A",
    exp: "Ransomware attack: CryptoLocker cripta tutti file azienda, chiede €50k Bitcoin per chiave. Backup 3-2-1 protegge."
  },
  {
    id: 145,
    category: "1.3",
    q: "Cosa significa 'spyware'?",
    a: {
      A: "Malware che spia attività: legge email, cattura tasti (keylogger), accede webcam, registra schermo",
      B: "Software antivirus",
      C: "Programma di pulizia",
      D: "Firewall"
    },
    correct: "A",
    exp: "Spyware: malware disattiva video on laptop → spia con webcam. Keylogger registra password digitate."
  },
  {
    id: 146,
    category: "1.3",
    q: "Cosa significa 'firewall'?",
    a: {
      A: "Software/hardware che monitora e controlla traffico rete entrante/uscente, blocca non autorizzato",
      B: "Un antivirus",
      C: "Un backup",
      D: "Una password"
    },
    correct: "A",
    exp: "Firewall Windows: blocca app che cercano connettersi senza permesso. Chiede 'Consenti Python accedere rete?' Tu approvi/nega."
  },
  {
    id: 147,
    category: "1.3",
    q: "Cosa significa 'antivirus'?",
    a: {
      A: "Software che scansiona sistema per rilevare, mettere in quarantena, eliminare malware noto/sospetto",
      B: "Programma di pulizia",
      C: "Backup",
      D: "Password manager"
    },
    correct: "A",
    exp: "Antivirus (Windows Defender, Norton, Kaspersky): scansiona file, paragona signature database malware noti, elimina minacce."
  },
  {
    id: 148,
    category: "1.3",
    q: "Cosa significa 'organizzare file'?",
    a: {
      A: "Strutturare cartelle gerarchicamente (es: Documenti > Progetti > 2024 > Progetto A), nomi file descrittivi, versioning",
      B: "Mettere file ovunque",
      C: "Non fare nulla",
      D: "Eliminare tutto"
    },
    correct: "A",
    exp: "Struttura: Drive > Lavoro > Progetti > 2024 > Progetto_X > Documenti / Immagini / Video. File: '2024_Progetto_X_v3_FINAL.docx'."
  },
  {
    id: 149,
    category: "1.3",
    q: "Cosa significano 'metadati di file'?",
    a: {
      A: "Info su file: data creazione, autore, modifiche, dimensione, localizzazione GPS (foto), proprietà proprietario",
      B: "Contenuto file",
      C: "Nome file",
      D: "Tipo file"
    },
    correct: "A",
    exp: "Foto: metadati includono data, ora, fotocamera, GPS coordinate dove scattata. Pericolo privacy: foto con GPS condivisa = localizzazione."
  },
  {
    id: 150,
    category: "1.3",
    q: "Cosa significa 'controllo accesso' ai file?",
    a: {
      A: "Impostare permessi: chi legge (read), modifica (write), esegue (execute) file/cartelle (proprietario, gruppo, pubblico)",
      B: "Accesso totale",
      C: "Nessun controllo",
      D: "Accesso anonimo"
    },
    correct: "A",
    exp: "Windows/Mac: click destro file > Proprietà > Sicurezza. Puoi dare read-only a collega, full access amico fidato, no access altri."
  },
  {
    id: 151,
    category: "1.3",
    q: "Cosa significa 'cartella condivisa' (shared folder)?",
    a: {
      A: "Cartella accessibile da più utenti rete o cloud per collaborazione, con permessi controllati",
      B: "Cartella pubblica",
      C: "Cartella aperta",
      D: "Cartella sincronizzata"
    },
    correct: "A",
    exp: "Google Drive shared folder: team vede documenti, modifica, commenta. Proprietario controlla chi accede e quali permessi."
  },
  {
    id: 152,
    category: "1.3",
    q: "Cosa significa 'versioning' di file?",
    a: {
      A: "Mantenere storiacopie di file a diversi punti temporali per tracciare modifiche, recuperare versione precedente",
      B: "Una copia",
      C: "Un backup",
      D: "Una sincronizzazione"
    },
    correct: "A",
    exp: "Google Docs auto-salva versioni. Clicchi 'Version history' → vedi chi ha scritto cosa, quando. Puoi ripristinare versione v1."
  },
  {
    id: 153,
    category: "1.3",
    q: "Cosa significa 'compressione file'?",
    a: {
      A: "Riduzione dimensione file (ZIP, RAR, 7Z) per archiviazione/trasferimento veloce, mantenendo dati originali",
      B: "Eliminazione dati",
      C: "Criptazione",
      D: "Deframmentazione"
    },
    correct: "A",
    exp: "Cartella 100MB zippata = 30MB. Utile per email (allegati max), upload lento. Dezippa per usare file originali."
  },
  {
    id: 154,
    category: "1.3",
    q: "Cosa significa 'sincronizzazione' file?",
    a: {
      A: "Automatico aggiornamento file identico su più dispositivi, modifica un device = aggiorna tutti",
      B: "Copia manuale",
      C: "Backup offline",
      D: "Archiviazione"
    },
    correct: "A",
    exp: "Google Drive sync: modifica documento su PC, si aggiorna automaticamente su phone/tablet. Sempre ultimo versione ovunque."
  },
  {
    id: 155,
    category: "1.3",
    q: "Come si condivide un file in sicurezza?",
    a: {
      A: "Usa link con password, scadenza data, permessi limitati (view-only), avvisa ricevente via canale separato",
      B: "Link pubblico",
      C: "Nessun controllo",
      D: "Email incriptata"
    },
    correct: "A",
    exp: "Google Drive: genera link 'share' > 'Restricted' > 'Viewer only' > password + expiration. Ricevente vede senza editare."
  },
  {
    id: 156,
    category: "1.3",
    q: "Cosa significa 'contenuto digitale'?",
    a: {
      A: "Qualsiasi informazione in formato digitale: testi, immagini, video, audio, codice, dati, condivisibili/archiviabili",
      B: "Solo testo",
      C: "Solo video",
      D: "Solo immagini"
    },
    correct: "A",
    exp: "Contenuto digitale: articolo blog, foto Instagram, canzone Spotify, video TikTok, app Python, database Excel."
  },
  {
    id: 157,
    category: "1.3",
    q: "Cosa significa 'diritto d'autore' (copyright)?",
    a: {
      A: "Proprietà intellettuale di creatore su opera originale, protegge da copia/uso non autorizzato per una durata (vita+50 anni)",
      B: "Diritto di copiare",
      C: "Diritto pubblico",
      D: "No proprietà"
    },
    correct: "A",
    exp: "Canzoni Beatles: copyright EMI fino 2070 circa. Non puoi copiare/distribuire senza licenza. Fair use minore (critica, educazione)."
  },
  {
    id: 158,
    category: "1.3",
    q: "Cosa significa 'licenza creativa' (Creative Commons)?",
    a: {
      A: "Licenza flessibile permettendo usi specifici (attribuzione, no commerciale, modifiche) di opera originale",
      B: "Pubblico dominio",
      C: "No copyright",
      D: "Proprietà totale"
    },
    correct: "A",
    exp: "Foto CC-BY: puoi usare se citi autore. CC-BY-NC: puoi usare se non commerciale e citi. CC-BY-ND: puoi condividere non modificare."
  },
  {
    id: 159,
    category: "1.3",
    q: "Cosa significa 'fair use'?",
    a: {
      A: "Eccezione copyright permettendo usi limitati (critica, insegnamento, parodia, news) senza permesso autore",
      B: "Uso totalmente libero",
      C: "Uso solo educativo",
      D: "Uso commerciale libero"
    },
    correct: "A",
    exp: "Puoi riprodurre corta frase articolo in review critica (fair use). Non puoi riprodurre intera canzone (violazione copyright)."
  },
  {
    id: 160,
    category: "1.3",
    q: "Cosa significa 'pirateria digitale'?",
    a: {
      A: "Distribuzione non autorizzata di contenuto protetto (musica, film, software) violando copyright per profitto/gratis",
      B: "Download legale",
      C: "Acquisto online",
      D: "Streaming ufficiale"
    },
    correct: "A",
    exp: "Pirateria: scaricare film da torrent illegale, vendere copie software original no licenza. Illegale, rischio multa/carcere."
  },
  {
    id: 161,
    category: "1.3",
    q: "Cosa significano 'dati aperti' (Open Data)?",
    a: {
      A: "Dati pubblici rilasciati da governi/organizzazioni per uso libero, analisi, ricerca, innovazione senza restrizioni",
      B: "Dati privati",
      C: "Dati nascosti",
      D: "Dati riservati"
    },
    correct: "A",
    exp: "Open Data: dati censimento ISTAT pubblicamente scaricabili. Ricercatori analizzano, giornalisti fanno inchieste. Trasparenza."
  },
  {
    id: 162,
    category: "1.3",
    q: "Cosa significa 'leggere documentazione' di un file?",
    a: {
      A: "Consultare info su file: come usarlo, quali dati contiene, formato, compatibilità, diritti uso, metadati descrittivi",
      B: "Non fare nulla",
      C: "Leggi tutto il file",
      D: "Modifica il file"
    },
    correct: "A",
    exp: "Dataset CSV: leggi README che spiega colonne, fonte, data, metodologia raccolta. Essenziale per interpretazione corretta."
  },
  {
    id: 163,
    category: "1.3",
    q: "Come proteggere account online da hacking?",
    a: {
      A: "Password forte unica, 2FA, verifica permessi app terze, rivedi login recenti, non riutilizzare password, update regolare",
      B: "Nessuno protegge",
      C: "Password semplice facile",
      D: "Nessun 2FA"
    },
    correct: "A",
    exp: "Sicurezza account: '123456' → cambio 'J7#kL9@mQ2'. Abilito 2FA Gmail. Revoco accesso app suspe (Settings > Apps > Remove)."
  },
  {
    id: 164,
    category: "1.3",
    q: "Come riconoscere email di phishing?",
    a: {
      A: "Controlla mittente, non cliccare link sospetti, verifica indirizzo reale, grammatica scarsa, urgenza artificiale, link malevoli",
      B: "Tutte le email sono sicure",
      C: "Credere subito",
      D: "Nessun controllo"
    },
    correct: "A",
    exp: "Phishing email: 'Urgent! Verifica account!' da 'amaz0n.com' (non amazon.com), link fake. Legittima: amazon.com, nessun urgenza."
  },
  {
    id: 165,
    category: "1.3",
    q: "Come gestire password sicuramente?",
    a: {
      A: "Usa password manager (1Password, Bitwarden), password unica forte per account, 2FA, NON scrivere carta, NON email",
      B: "Scrivi su carta",
      C: "Stessa password ovunque",
      D: "Password semplice"
    },
    correct: "A",
    exp: "Password manager: memorizza 100+ password dietro master password uno. Genera password forti. Sincronizza dispositivi."
  },
  {
    id: 166,
    category: "1.3",
    q: "Cosa significa 'aggiornamento di sicurezza'?",
    a: {
      A: "Update software che risolve vulnerabilità scoperte, previene exploit malware, essenziale installare rapidamente",
      B: "Feature nuova",
      C: "Miglioramento velocità",
      D: "Cambio interfaccia"
    },
    correct: "A",
    exp: "Windows Update: patch bug sicurezza. Se non agiorni, hacker sfrutta bug → accesso PC. Aggiorna subito."
  },
  {
    id: 167,
    category: "1.3",
    q: "Come riconoscere una connessione WiFi sicura?",
    a: {
      A: "WiFi personale con password, crittografia WPA3/WPA2, nome non broadcast, non WiFi pubblica aperta per dati sensibili",
      B: "WiFi aperta",
      C: "WiFi senza password",
      D: "Non importa"
    },
    correct: "A",
    exp: "Caffè WiFi aperta: hacker vicino sniffa password email. Casa: WiFi password WPA3 crittografia. Pubblico = niente banking."
  },
  {
    id: 168,
    category: "1.3",
    q: "Cosa significa 'VPN' (Virtual Private Network)?",
    a: {
      A: "Tunnel crittografato che reindirizza traffico rete tramite server remoto, nasconde IP reale, aumenta privacy/sicurezza",
      B: "Un antivirus",
      C: "Un firewall",
      D: "Un browser"
    },
    correct: "A",
    exp: "VPN: connetti a server VPN, IP tuo diventa IP server. Siti vedono server IP, non tuo reale. Crittografia protegge dal WiFi hacker."
  },
  {
    id: 169,
    category: "1.3",
    q: "Quali dati personali non dovrei mai condividere online?",
    a: {
      A: "Password, numero carta credito, SSN, numero documenti, risposte domande sicurezza, PIN, coordinate bancarie",
      B: "Nome",
      C: "Email",
      D: "Foto"
    },
    correct: "A",
    exp: "Mai condividere: password (ovvio), numero carta (furto), SSN (identity theft), risposte sicurezza (hacko account)."
  },
  {
    id: 170,
    category: "1.3",
    q: "Cosa significa 'footprint digitale'?",
    a: {
      A: "Traccia digitale che lasci online: post, foto, commenti, ricerche, acquisti, localizzazioni, persino dati cancellati",
      B: "Password",
      C: "Account",
      D: "Dispositivo"
    },
    correct: "A",
    exp: "Footprint digitale: tweet 2010 ancora online su Wayback Machine, foto rimosso ma cache Google, ex partner salva screenshot."
  },
  {
    id: 171,
    category: "1.3",
    q: "Come minimizzare footprint digitale?",
    a: {
      A: "Usa pseudonimo, abilita privacy social, elimina post vecchio, nega tracciamento, revoca app terzi, richiedi oblio Google",
      B: "Non usare Internet",
      C: "Nessun controllo",
      D: "Pubblica tutto"
    },
    correct: "A",
    exp: "Privacy: Twitter account privato, post eliminati, Facebook Privacy > Stricter, Google Takeout scarica dati, chiedi cancellazione."
  },
  {
    id: 172,
    category: "1.3",
    q: "Cosa significa 'data breach'?",
    a: {
      A: "Accesso non autorizzato a database azienda, furto dati clienti (email, password hash, indirizzi, CC), violazione sicurezza",
      B: "Accesso legale",
      C: "Backup corretto",
      D: "Aggiornamento software"
    },
    correct: "A",
    exp: "Equifax breach 2017: 147 milioni SSN, data nascita, indirizzi rubati. Identità theft per anni dopo."
  },
  {
    id: 173,
    category: "1.3",
    q: "Come sapere se il tuo account è stato in data breach?",
    a: {
      A: "Usa sito 'Have I Been Pwned' (hibp.org), inserisci email, vedi se in breach noti, leggi quali dati esposti, cambia password",
      B: "Non controllare mai",
      C: "Credere sempre è sicuro",
      D: "Nessun modo"
    },
    correct: "A",
    exp: "Verifica email account: mia@email.com appeared in 12 breaches (LinkedIn 2012, Dropbox 2012...). Cambio password immediato."
  },
  {
    id: 174,
    category: "1.3",
    q: "Cosa significa 'gestione della reputazione online'?",
    a: {
      A: "Monitorare e controllare come sei presentato online: rimuovere contenuto negativo, amplificare positivo, rispondere critiche",
      B: "Nessun controllo",
      C: "Credere tutto",
      D: "Ignorare online"
    },
    correct: "A",
    exp: "Reputazione: post vecchio offensivo arreca danno. Richiedi rimozione, pubblica contenuto positivo per far scendere nei ranking."
  },
  {
    id: 175,
    category: "1.3",
    q: "Come proteggere la privacy dei minori online?",
    a: {
      A: "Parental controls su dispositivi, monitora attività, insegna rischi, limita share personale, proteggi foto/video da distribuzioni",
      B: "Nessun controllo",
      C: "Dai accesso libero",
      D: "Non parlare mai"
    },
    correct: "A",
    exp: "Bambino: abilita Screen Time iPhone, limita app, monitora chat, vietiagg phishing, insegna no condividere foto intime."
  },
  {
    id: 176,
    category: "1.3",
    q: "Cosa significa 'sextortion'?",
    a: {
      A: "Ricatto sessuale online: hacker ha foto intima, minaccia distribuzione se non paghi, spesso falso ma intimorisce",
      B: "Una malattia",
      C: "Un social network",
      D: "Un virus"
    },
    correct: "A",
    exp: "Email sextortion: 'Ho hackerato webcam tua, video di te... Pagami €500 o distribuisco!' Spesso false, ma terrificano vittime."
  },
  {
    id: 177,
    category: "1.3",
    q: "Cosa significa 'cyberstalking'?",
    a: {
      A: "Molestia online persistente: messaggi minacciosi, diffamazione, tracciamento localizzazione, outing privato, impersonazione",
      B: "Un gioco online",
      C: "Un social network",
      D: "Una comunità"
    },
    correct: "A",
    exp: "Cyberstalking: ex partner crea fake account, pubblica foto intima, minaccia, hacker localizza. Illegale, segnala polizia."
  },
  {
    id: 178,
    category: "1.3",
    q: "Come segnalare abuso online?",
    a: {
      A: "Usa flag/report built-in platform (Facebook, Twitter, YouTube), salva evidenza (screenshot), segnala polizia se criminalità",
      B: "Non fare nulla",
      C: "Rispondere verbalmente",
      D: "Ignorare"
    },
    correct: "A",
    exp: "Abuso su Twitter: icona > 'Report Tweet' > 'It's abusive/harmful' > fornisci dettagli. Twitter agisce se violazione policy."
  },
  {
    id: 179,
    category: "1.3",
    q: "Cosa significano i 'termini di servizio' (ToS)?",
    a: {
      A: "Contratto legale tra te e fornitore (Facebook, Google) che regola uso, raccolta dati, responsabilità, modifiche unilaterali",
      B: "Suggerimenti",
      C: "Consenso visuo",
      D: "Raccomandazioni"
    },
    correct: "A",
    exp: "ToS Facebook: 'Raccogliamo dati di navigazione per advertising', 'possiamo modificare termini avviso 30 giorni', 'siamo non responsabili'."
  },
  {
    id: 180,
    category: "1.3",
    q: "Come proteggere i tuoi dati quando usi servizi online?",
    a: {
      A: "Leggi ToS/privacy policy, usa password manager, abilita 2FA, limita dati condivisi, revoca app non usate, backup regolare",
      B: "Credere sempre sicuro",
      C: "Non proteggere nulla",
      D: "Ignorare avvisi"
    },
    correct: "A",
    exp: "Protezione: Gmail 2FA, Drive backup, revoco accesso Spotify a Facebook, cambio password trimestrale, uso VPN WiFi pubblico."
  }
];

// ============================================
// 🎮 VARIABILI GLOBALI
// ============================================
let currentScreen = 'welcome';
let selectedChapter = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizQuestions = [];
let timerInterval = null;
let timeRemaining = 0;
let modalAccepted = false;

// ============================================
// 🎮 INIZIALIZZAZIONE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  showScreen('welcome');
});

// ============================================
// 📱 GESTIONE SCHERMATE
// ============================================
function showScreen(screenName) {
  document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
  const screenEl = document.getElementById(`screen-${screenName}`);
  if (screenEl) {
    screenEl.classList.remove('hidden');
    currentScreen = screenName;
    if (screenName === 'welcome') {
      modalAccepted = false;
    }
  }
}

// ============================================
// 🚨 MODAL WARNING
// ============================================
function openModalWarning() {
  const modal = document.getElementById('modal-overlay');
  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('modal-overlay');
  modal.classList.add('hidden');
}

function acceptModal() {
  modalAccepted = true;
  closeModal();
  showScreen('chapter');
}

function rejectModal() {
  closeModal();
  showScreen('welcome');
}

// Impedisci click fuori e ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('modal-overlay');
    if (!modal.classList.contains('hidden')) {
      e.preventDefault();
    }
  }
});

document.addEventListener('click', (e) => {
  const modal = document.getElementById('modal-overlay');
  if (!modal.classList.contains('hidden') && e.target === modal) {
    e.preventDefault();
  }
});

// ============================================
// 📚 SELEZIONE CAPITOLO
// ============================================
function selectChapter(chapter) {
  selectedChapter = chapter;
  loadQuiz();
}

function loadQuiz() {
  // Filtra domande per capitolo
  let questions = PANIERE;

  if (selectedChapter === '1.1') {
    questions = PANIERE.filter(q => q.category === '1.1');
  } else if (selectedChapter === '1.2') {
    questions = PANIERE.filter(q => q.category === '1.2');
  } else if (selectedChapter === '1.3') {
    questions = PANIERE.filter(q => q.category === '1.3');
  }
  // 'all' mantiene PANIERE intero

  // Estrai casualmente CONFIG.NUM_DOMANDE domande
  quizQuestions = extractQuestions(questions, CONFIG.NUM_DOMANDE);

  // Rimescola opzioni per ogni domanda
  quizQuestions.forEach(q => shuffleOptions(q));

  // Reset stato
  currentQuestionIndex = 0;
  userAnswers = [];
  timeRemaining = quizQuestions.length * CONFIG.DURATA_TIMER;

  // Mostra prima domanda
  showScreen('quiz');
  displayQuestion();
  startTimer();
}

function extractQuestions(questions, numToExtract) {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numToExtract);
}

function shuffleOptions(question) {
  const options = ['A', 'B', 'C', 'D'];
  const shuffled = shuffleArray(options);
  
  const newOptions = {};
  shuffled.forEach((newLetter, index) => {
    newOptions[newLetter] = question.a[options[index]];
  });
  
  const oldCorrectIndex = options.indexOf(question.correct);
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
    stopTimer();
    showResults();
    return;
  }

  const question = quizQuestions[currentQuestionIndex];
  const container = document.getElementById('question-container');
  
  // Progress
  document.getElementById('progress-text').textContent = 
    `Domanda ${currentQuestionIndex + 1} di ${quizQuestions.length}`;
  const progress = (currentQuestionIndex / quizQuestions.length) * 100;
  document.getElementById('progress-bar').style.width = `${progress}%`;

  // Domanda
  let html = `
    <div class="question-box">
      <h2>${question.q}</h2>
      <ul class="options-list">
  `;

  // Opzioni
  ['A', 'B', 'C', 'D'].forEach(letter => {
    html += `
      <li>
        <button class="option" onclick="selectAnswer('${letter}', '${question.id}')">
          <span class="option-letter">${letter}</span>
          <span class="option-text">${question.a[letter]}</span>
        </button>
      </li>
    `;
  });

  html += `</ul></div>`;
  container.innerHTML = html;
}

function selectAnswer(letter, questionId) {
  const question = quizQuestions[currentQuestionIndex];
  const isCorrect = letter === question.correct;
  
  userAnswers.push({
    questionId: questionId,
    questionText: question.q,
    userLetter: letter,
    userAnswer: question.a[letter],
    correct: question.correct,
    correctAnswer: question.a[question.correct],
    isCorrect: isCorrect,
    exp: question.exp
  });

  // Avanza automaticamente
  setTimeout(() => {
    currentQuestionIndex++;
    displayQuestion();
  }, 300);
}

// ============================================
// ⏱️ TIMER
// ============================================
function startTimer() {
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    if (timeRemaining <= CONFIG.ALERT_TIMER_SOGLIA && timeRemaining > CONFIG.ALERT_TIMER_SOGLIA - 1) {
      showTimerAlert();
    }

    if (timeRemaining <= 0) {
      stopTimer();
      showResults();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('timer').textContent = display;
  
  if (timeRemaining < 300) {
    document.getElementById('timer').style.color = '#ef4444';
  }
}

function showTimerAlert() {
  const alert = document.getElementById('timer-alert');
  alert.classList.remove('hidden');
}

// ============================================
// 🏠 TORNA A HOME
// ============================================
function confirmBackHome() {
  if (confirm('Torna alla schermata iniziale? Il test verrà annullato.')) {
    stopTimer();
    showScreen('welcome');
  }
}

// ============================================
// 📊 RISULTATI
// ============================================
function showResults() {
  stopTimer();

  const correct = userAnswers.filter(a => a.is
/* ===== VARIABILI COLORI ===== */
:root {
  --primary: #f97316;
  --primary-dark: #ea580c;
  --primary-light: #fed7aa;
  --secondary: #1e293b;
  --secondary-light: #334155;
  --accent: #0ea5e9;
  --success: #10b981;
  --danger: #ef4444;
  --warning: #f59e0b;
  --dark-bg: #0f172a;
  --card-bg: #1e293b;
  --text-light: #e2e8f0;
  --text-muted: #94a3b8;
}

/* ===== RESET & BASE ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--dark-bg);
  color: var(--text-light);
  line-height: 1.6;
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--primary);
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* ===== LAYOUT SCREENS ===== */
.screen {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  animation: fadeIn 0.5s ease;
}

.screen.hidden {
  display: none !important;
}

.screen.active {
  display: flex;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* ===== HEADER ===== */
.site-header,
.chapter-header,
.quiz-header,
.results-header {
  background: linear-gradient(135deg, var(--secondary) 0%, var(--secondary-light) 100%);
  padding: 2rem;
  text-align: center;
  border-bottom: 3px solid var(--primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.site-header h1,
.chapter-header h1,
.quiz-header h1,
.results-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary-light);
}

.site-header p,
.chapter-header p {
  color: var(--text-muted);
  font-size: 1.1rem;
}

.author {
  margin-top: 1rem;
  font-size: 1rem;
  color: var(--primary);
  font-weight: 600;
}

.quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quiz-header h1 {
  flex: 1;
  margin: 0;
}

.quiz-controls {
  display: flex;
  gap: 2rem;
  align-items: center;
}

/* ===== MAIN & SECTIONS ===== */
.welcome-main,
.chapter-main,
.quiz-main,
.results-main {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.welcome-section {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(249, 115, 22, 0.2);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  animation: slideIn 0.6s ease;
}

.welcome-section h2 {
  color: var(--primary-light);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.welcome-section p {
  color: var(--text-light);
  margin-bottom: 1rem;
  line-height: 1.8;
}

.list-content {
  list-style: none;
  padding-left: 0;
}

.list-content li {
  padding-left: 2rem;
  margin-bottom: 1rem;
  position: relative;
  color: var(--text-light);
}

.list-content li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--success);
  font-weight: bold;
}

/* ===== CARDS WELCOME ===== */
.cards-section {
  margin-top: 3rem;
}

.cards-invite {
  color: var(--primary-light);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.card-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, var(--card-bg) 0%, var(--secondary-light) 100%);
  border: 2px solid var(--primary);
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: var(--text-light);
  cursor: pointer;
}

.card-link:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(249, 115, 22, 0.3);
  border-color: var(--primary-light);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary-light);
  margin-bottom: 0.5rem;
}

.card-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  text-align: center;
}

/* ===== CHAPTER SELECTION ===== */
.chapter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.chapter-card {
  background: linear-gradient(135deg, var(--card-bg) 0%, var(--secondary-light) 100%);
  border: 2px solid var(--secondary-light);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  color: var(--text-light);
}

.chapter-card h3 {
  font-size: 1.5rem;
  color: var(--primary-light);
  margin-bottom: 1rem;
}

.chapter-card p {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.card-count {
  display: inline-block;
  background: rgba(249, 115, 22, 0.2);
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.chapter-card:hover {
  border-color: var(--primary);
  box-shadow: 0 8px 20px rgba(249, 115, 22, 0.3);
  transform: translateY(-5px);
}

.chapter-card.full {
  grid-column: span 2;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  border-color: var(--primary-light);
}

.chapter-card.full:hover {
  box-shadow: 0 12px 30px rgba(249, 115, 22, 0.5);
}

/* ===== MODAL ===== */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.modal-overlay.hidden {
  display: none !important;
}

.modal-box {
  background: rgba(30, 41, 59, 0.95);
  border: 2px solid var(--primary);
  border-radius: 12px;
  padding: 2.5rem;
  max-width: 600px;
  width: 95%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 50px rgba(249, 115, 22, 0.4);
  animation: scaleIn 0.3s ease;
}

.modal-title {
  font-size: 1.8rem;
  color: var(--danger);
  margin-bottom: 1rem;
  font-weight: 700;
}

.modal-divider {
  height: 2px;
  background: linear-gradient(90deg, var(--primary), transparent);
  margin-bottom: 1.5rem;
}

.modal-legal {
  background: rgba(239, 68, 68, 0.1);
  border: 2px solid var(--danger);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.legal-header {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--danger);
  margin-bottom: 1.5rem;
}

.legal-section {
  margin-bottom: 1.5rem;
}

.legal-section h3 {
  color: var(--primary-light);
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.legal-section p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
}

.legal-list {
  list-style: none;
  padding: 0;
}

.legal-list li {
  color: var(--text-light);
  padding: 0.5rem 0;
  padding-left: 2rem;
  position: relative;
  font-size: 0.95rem;
}

.legal-list li::before {
  content: '❌';
  position: absolute;
  left: 0;
}

.modal-disclaimer {
  background: rgba(249, 115, 22, 0.1);
  border: 1px solid var(--primary);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.6;
}

.modal-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.btn-reject,
.btn-accept {
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-reject {
  background: var(--secondary);
  border: 2px solid var(--text-light);
  color: var(--text-light);
}

.btn-reject:hover {
  background: var(--danger);
  border-color: var(--danger);
  color: white;
}

.btn-accept {
  background: linear-gradient(135deg, var(--primary), #fbbf24);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(249, 115, 22, 0.4);
}

.btn-accept:hover {
  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.6);
  transform: translateY(-2px);
}

/* ===== QUIZ ===== */
.progress-container {
  height: 8px;
  background: rgba(52, 65, 84, 0.5);
  border-radius: 4px;
  margin-bottom: 1rem;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  width: 0%;
  transition: width 0.3s ease;
  border-radius: 4px;
}

.progress-text {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.question-container {
  background: linear-gradient(135deg, var(--card-bg) 0%, var(--secondary-light) 100%);
  padding: 2.5rem;
  border-radius: 12px;
  border-left: 5px solid var(--primary);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
  animation: slideIn 0.4s ease;
}

.question-box h2 {
  font-size: 1.4rem;
  color: var(--primary-light);
  margin-bottom: 2rem;
  font-weight: 600;
  line-height: 1.6;
}

.options-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.options-list li {
  list-style: none;
}

.option {
  background: linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary) 100%);
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid var(--secondary-light);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  text-align: left;
  color: var(--text-light);
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.option::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(249, 115, 22, 0.1);
  transition: left 0.3s ease;
  z-index: 0;
}

.option:hover::before {
  left: 100%;
}

.option:hover {
  border-color: var(--primary);
  transform: translateX(8px);
  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.3);
}

.option-letter {
  position: relative;
  z-index: 1;
  background: var(--primary);
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.option-text {
  position: relative;
  z-index: 1;
  flex: 1;
}

.option.selected {
  background: linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%);
  border-color: var(--primary);
  color: white;
  font-weight: bold;
  box-shadow: 0 8px 25px rgba(14, 165, 233, 0.4);
}

.option.selected .option-letter {
  background: white;
  color: var(--primary);
}

/* ===== TIMER ===== */
.timer {
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  color: var(--success);
  min-width: 100px;
  text-align: center;
}

.timer-alert {
  background: rgba(239, 68, 68, 0.2);
  border: 2px solid var(--danger);
  color: var(--danger);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 1rem;
  animation: slideIn 0.3s ease;
}

.timer-alert.hidden {
  display: none !important;
}

/* ===== RISULTATI ===== */
.score-card {
  background: linear-gradient(135deg, var(--card-bg) 0%, var(--secondary-light) 100%);
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.score-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.score-box.success {
  color: var(--success);
}

.score-box.warning {
  color: var(--warning);
}

.score-box.danger {
  color: var(--danger);
}

.score-badge {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.score-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.score-percentage {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.score-label {
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.results-review {
  margin-bottom: 2rem;
}

.results-review h2 {
  color: var(--primary-light);
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.result-item {
  background: linear-gradient(135deg, var(--card-bg) 0%, var(--secondary-light) 100%);
  border-left: 5px solid;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.result-item.correct {
  border-left-color: var(--success);
}

.result-item.incorrect {
  border-left-color: var(--danger);
}

.result-item h4 {
  color: var(--primary-light);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.result-item p {
  color: var(--text-light);
  margin-bottom: 0.8rem;
  line-height: 1.6;
}

.highlight {
  background: rgba(249, 115, 22, 0.2);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-weight: 600;
}

.result-item.incorrect .highlight {
  background: rgba(239, 68, 68, 0.2);
  color: var(--danger);
}

/* ===== BOTTONI ===== */
.btn-primary,
.btn-secondary,
.small {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), #fbbf24);
  color: white;
  box-shadow: 0 4px 15px rgba(249, 115, 22, 0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.6);
}

.btn-secondary {
  background: var(--secondary);
  color: var(--text-light);
  border: 2px solid var(--primary);
}

.btn-secondary:hover {
  background: var(--secondary-light);
  border-color: var(--primary-light);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

.btn-secondary.small {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.results-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(249, 115, 22, 0.2);
}

/* ===== FOOTER ===== */
.site-footer,
.chapter-footer {
  background: rgba(15, 23, 42, 0.8);
  text-align: center;
  padding: 2rem;
  margin-top: auto;
  border-top: 1px solid rgba(249, 115, 22, 0.3);
  color: var(--text-muted);
  font-size: 0.9rem;
}

.site-footer p,
.chapter-footer p {
  margin-bottom: 0.5rem;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .site-header h1,
  .chapter-header h1,
  .quiz-header h1,
  .results-header h1 {
    font-size: 1.75rem;
  }

  .quiz-header {
    flex-direction: column;
    gap: 1rem;
  }

  .quiz-controls {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  .chapter-grid {
    grid-template-columns: 1fr;
  }

  .chapter-card.full {
    grid-column: span 1;
  }

  .cards-grid {
    grid-template-columns: 1fr;
  }

  .modal-box {
    padding: 1.5rem;
    max-height: 95vh;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-buttons {
    flex-direction: column;
  }

  .btn-reject,
  .btn-accept {
    width: 100%;
  }

  .question-container {
    padding: 1.5rem;
  }

  .question-box h2 {
    font-size: 1.1rem;
  }

  .option {
    padding: 1rem;
    font-size: 1rem;
  }

  .option-letter {
    width: 2rem;
    height: 2rem;
    font-size: 0.9rem;
  }

  .score-number {
    font-size: 2rem;
  }

  .score-percentage {
    font-size: 1.8rem;
  }

  .results-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }

  .timer {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .welcome-main,
  .chapter-main,
  .quiz-main,
  .results-main {
    padding: 1rem;
  }

  .welcome-section {
    padding: 1.5rem;
  }

  .site-header,
  .chapter-header,
  .quiz-header,
  .results-header {
    padding: 1.5rem;
  }

  .author {
    font-size: 0.85rem;
  }

  .question-box h2 {
    font-size: 0.95rem;
  }

  .option {
    gap: 0.75rem;
    padding: 1rem 0.75rem;
  }

  .option-letter {
    width: 1.8rem;
    height: 1.8rem;
    font-size: 0.8rem;
  }

  .cards-invite {
    font-size: 1rem;
  }
}

