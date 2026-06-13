// ============================================
// DigComp 2.0 Quiz - Area 1: Ricerca e gestione di informazioni, dati e contenuti digitali
// ============================================

const CONFIG = {
  NUM_DOMANDE: 30,
  DURATA_TIMER: 3600,
  SOGLIA_ECCELLENTE: 80,
  SOGLIA_SUFFICIENTE: 60,
  ALERT_TIMER_SOGLIA: 300
};

const PANIERE = [
  {"id": 1, "category": "base", "q": "Quale delle seguenti affermazioni descrive correttamente un \"Dato\"?", "a": {"A": "Un elemento grezzo, isolato e privo di un contesto o significato specifico.", "B": "Una notizia verificata e strutturata, pronta per essere pubblicata sul web.", "C": "Un file multimediale complesso pronto per essere archiviato su chiavetta USB.", "D": "Il giudizio espresso da un algoritmo di Intelligenza Artificiale su una ricerca."}, "correct": "A", "exp": "Il dato è l'unità minima d'informazione, privo di elaborazione o contesto."},
  {"id": 2, "category": "base", "q": "Che cos'è l' \"Informazione\" nell'ambito digitale?", "a": {"A": "Il codice sorgente binario utilizzato per programmare un motore di ricerca.", "B": "Il risultato dell'elaborazione, interpretazione e contestualizzazione di uno o più dati.", "C": "Un qualsiasi file PDF che viene caricato su un servizio cloud esterno.", "D": "L'algoritmo che decide in quale posizione mostrare un sito web su Google."}, "correct": "B", "exp": "L'informazione nasce quando i dati grezzi vengono organizzati, dotandoli di significato."},
  {"id": 3, "category": "base", "q": "Che cos'è il framework europeo \"DigComp 2.2\"?", "a": {"A": "Un software antivirus obbligatorio per i computer della pubblica amministrazione.", "B": "Un motore di ricerca europeo alternativo a Google e specializzato in dati aperti.", "C": "Il quadro di riferimento europeo per le competenze digitali dei cittadini.", "D": "Una licenza d'uso gratuita utilizzata per proteggere le immagini online."}, "correct": "C", "exp": "DigComp 2.2 è il quadro di riferimento europeo per le competenze digitali dei cittadini."},
  {"id": 4, "category": "base", "q": "Qual è la funzione principale di un \"Crawler\" (o Spider) di un motore di ricerca?", "a": {"A": "Proteggere il computer dell'utente finale dal download di malware o virus.", "B": "Generare risposte testuali automatiche tramite l'uso dell'Intelligenza Artificiale.", "C": "Scansionare costantemente la rete web per raccogliere e catalogare pagine nuove o aggiornate.", "D": "Comprimere i file di grandi dimensioni prima di caricarli su una piattaforma cloud."}, "correct": "C", "exp": "I crawler scandagliano costantemente il web alla ricerca di nuove pagine da catalogare."},
  {"id": 5, "category": "base", "q": "Che cos'è l' \"Indicizzazione\" (Indexing) effettuata da un motore di ricerca?", "a": {"A": "Il pagamento di una tariffa pubblicitaria per apparire tra i primi risultati di ricerca.", "B": "L'inserimento delle informazioni raccolte dai crawler in un database ordinato (indice).", "C": "L'atto di condividere una cartella di lavoro in cloud con altri colleghi del proprio ufficio.", "D": "La traduzione automatica di una pagina web in lingua inglese o in altre lingue europee."}, "correct": "B", "exp": "L'indicizzazione consiste nel salvare e organizzare i siti scansionati in un database gigante."},
  {"id": 6, "category": "base", "q": "Quale tra i seguenti è un motore di ricerca noto per non tracciare i dati personali degli utenti?", "a": {"A": "Google.", "B": "Bing.", "C": "DuckDuckGo.", "D": "Yahoo."}, "correct": "C", "exp": "DuckDuckGo è rinomato per la sua politica orientata alla privacy che non traccia le ricerche."},
  {"id": 7, "category": "base", "q": "Che cosa si intende per \"Contenuto Digitale\"?", "a": {"A": "Un qualsiasi file, media o informazione espresso in formato digitale (es. testo, audio, video).", "B": "La velocità con cui un dispositivo si connette a internet tramite rete Wi-Fi.", "C": "L'insieme dei componenti hardware presenti all'interno del case di un computer.", "D": "Il cavo di rete che consente di connettere un router al proprio modem di casa."}, "correct": "A", "exp": "Un contenuto digitale è qualsiasi risorsa o media codificato in formato digitale."},
  {"id": 8, "category": "base", "q": "Quale tra le seguenti è una caratteristica distintiva della ricerca tramite Intelligenza Artificiale rispetto a quella tradizionale?", "a": {"A": "Non richiede mai una connessione ad internet attiva per generare risposte.", "B": "Fornisce una risposta strutturata e diretta elaborando più fonti, invece di una lista di link.", "C": "Garantisce al 100% che ogni singola parola generata sia scientificamente vera.", "D": "Permette di cercare file solo se sono stati precedentemente salvati su una chiavetta USB."}, "correct": "B", "exp": "La ricerca IA è conversazionale e fornisce risposte strutturate sintetizzando più fonti."},
  {"id": 9, "category": "base", "q": "Nel motore di ricerca Google, qual è l'effetto di racchiudere una frase tra virgolette alte (es. \"lavoro d'ufficio\")?", "a": {"A": "Il motore cercherà esclusivamente i file in formato PDF contenenti quel termine.", "B": "Il motore cercherà solo le pagine web che contengono esattamente quella sequenza di parole.", "C": "Il motore tradurrà automaticamente la frase nella lingua impostata come predefinita.", "D": "Il motore escluderà dai risultati tutte le pagine che contengono una delle due parole."}, "correct": "B", "exp": "Le virgolette costringono il motore a cercare l'esatta corrispondenza letterale della frase."},
  {"id": 10, "category": "base", "q": "Quale componente di un motore di ricerca decide l'ordine dei risultati mostrati all'utente?", "a": {"A": "L'algoritmo di classificazione (Ranking).", "B": "Il sistema di compressione dei file ZIP.", "C": "Il browser di navigazione dell'utente.", "D": "L'antivirus installato sul sistema operativo."}, "correct": "A", "exp": "L'algoritmo di ranking determina la rilevanza dei risultati e l'ordine in cui mostrarli."},
  {"id": 11, "category": "base", "q": "Se un dato non ha contesto, cosa possiamo affermare su di esso?", "a": {"A": "Che si tratta di un'informazione completa ma riservata.", "B": "Che è impossibile leggerlo senza un programma antivirus aggiornato.", "C": "Che non fornisce alcun valore informativo o conoscenza immediata all'utente.", "D": "Che è stato generato in modo scorretto da un software di Intelligenza Artificiale."}, "correct": "C", "exp": "Senza contesto un dato è un elemento isolato e privo di valore informativo reale."},
  {"id": 12, "category": "base", "q": "Di cosa si occupa nello specifico l'Area 1 del framework DigComp?", "a": {"A": "Della protezione dei dati personali e della sicurezza informatica dei dispositivi.", "B": "Della creazione di contenuti multimediali originali e della programmazione software.", "C": "Dell'alfabetizzazione su informazioni e dati (ricerca, valutazione e gestione).", "D": "Della risoluzione di problemi tecnici legati al malfunzionamento del computer."}, "correct": "C", "exp": "L'Area 1 di DigComp è incentrata sull'alfabetizzazione su informazioni e dati."},
  {"id": 13, "category": "base", "q": "Che cos'è un \"Browser\"?", "a": {"A": "Un programma che serve per navigare sul web visualizzando le pagine internet.", "B": "Un tipo di file compresso utilizzato per risparmiare spazio sul disco fisso.", "C": "Il server fisico in cui sono memorizzati i siti web di tutto il mondo.", "D": "Un operatore logico utilizzato per escludere parole chiave da una ricerca."}, "correct": "A", "exp": "Il browser è l'applicazione software necessaria per navigare e visualizzare il web."},
  {"id": 14, "category": "base", "q": "Che cosa si intende per \"Query\" di ricerca?", "a": {"A": "Il tempo impiegato da un server per rispondere a un comando dell'utente.", "B": "Il testo, la parola o la frase inseriti dall'utente nella barra del motore di ricerca.", "C": "La copia di sicurezza dei propri file personali salvati su una memoria esterna.", "D": "Un file di testo speciale utilizzato per installare i programmi su Windows."}, "correct": "B", "exp": "La query rappresenta la stringa di testo che l'utente digita per effettuare la ricerca."},
  {"id": 15, "category": "base", "q": "Qual è lo scopo principale dell'utilizzo di un motore di ricerca?", "a": {"A": "Modificare i file PDF senza disporre di un software di scrittura a pagamento.", "B": "Archiviare in modo permanente i propri documenti personali sul cloud.", "C": "Trovare informazioni e contenuti digitali pertinenti sparsi nella rete internet.", "D": "Proteggere il proprio indirizzo e-mail dai messaggi pubblicitari indesiderati."}, "correct": "C", "exp": "La funzione primaria dei motori è reperire informazioni utili all'interno della rete."},
  {"id": 16, "category": "base", "q": "In quale dei seguenti casi ci troviamo di fronte a un \"Contenuto Digitale\"?", "a": {"A": "Un documento stampato su carta chimica e riposto in un faldone d'archivio.", "B": "Una telefonata vocale tradizionale effettuata tramite linea telefonica fissa.", "C": "Un file video in formato MP4 caricato su una piattaforma di streaming.", "D": "Il libretto cartaceo delle istruzioni per l'uso di un elettrodomestico."}, "correct": "C", "exp": "Un video digitale (es. MP4) è un tipico esempio di contenuto digitale multimediale."},
  {"id": 17, "category": "base", "q": "Quale tra i seguenti è il browser preinstallato di default sui sistemi operativi Windows più recenti?", "a": {"A": "Google Chrome.", "B": "Microsoft Edge.", "C": "Mozilla Firefox.", "D": "Safari."}, "correct": "B", "exp": "Microsoft Edge è il browser integrato di fabbrica nei sistemi operativi Windows."},
  {"id": 18, "category": "base", "q": "Che cosa rappresenta il termine \"allucinazione\" riferito all'Intelligenza Artificiale Generativa?", "a": {"A": "Una funzione avanzata che permette di generare immagini tridimensionali.", "B": "La generazione da parte dell'IA di informazioni del tutto false o inventate, presentate come reali.", "C": "L'arresto improvviso del computer a causa di un sovraccarico della scheda video.", "D": "La capacità dell'algoritmo di rilevare malware nascosti all'interno di documenti di testo."}, "correct": "B", "exp": "Le allucinazioni dell'IA sono risposte false formulate con apparente logica e sicurezza."},
  {"id": 19, "category": "base", "q": "Quale delle seguenti affermazioni sulla ricerca web è corretta?", "a": {"A": "Google mostra a tutti gli utenti del mondo gli stessi identici risultati per qualsiasi parola chiave.", "B": "I risultati di ricerca possono variare in base alla posizione geografica e alla cronologia dell'utente.", "C": "Per effettuare una ricerca su internet è obbligatorio registrarsi con un indirizzo e-mail valido.", "D": "Le ricerche effettuate sui motori di ricerca non consumano mai energia elettrica o risorse di rete."}, "correct": "B", "exp": "La personalizzazione (IP, cronologia) fa sì che i risultati varino da utente a utente."},
  {"id": 20, "category": "base", "q": "Qual è la prima operazione che compie un motore di ricerca per mappare il web?", "a": {"A": "La formattazione del disco rigido dei server di destinazione.", "B": "L'invio di messaggi pubblicitari personalizzati agli utenti registrati.", "C": "L'analisi del testo tramite modelli di Intelligenza Artificiale Generativa.", "D": "La scansione automatica (crawling) delle pagine tramite software dedicati."}, "correct": "D", "exp": "La mappatura (crawling) è il primo step fondamentale per rilevare i siti presenti sul web."},
  {"id": 21, "category": "intermedio", "q": "Se stai cercando informazioni ufficiali emesse solo da siti della Pubblica Amministrazione italiana, quale comando di ricerca utilizzerai su Google?", "a": {"A": "`site:.gov.it` unito alla parola chiave.", "B": "`filetype:gov.it` unito alla parola chiave.", "C": "`admin:italy` unito alla parola chiave.", "D": "`search:.gov` unito alla parola chiave."}, "correct": "A", "exp": "Il comando `site:.gov.it` limita la ricerca solo ai siti istituzionali italiani."},
  {"id": 22, "category": "intermedio", "q": "Devi escludere i risultati relativi alle offerte di vacanze a \"Roma\" quando cerchi informazioni storiche sulla città. Qual è la query corretta?", "a": {"A": "`Roma NOT vacanze`", "B": "`Roma -vacanze`", "C": "`Roma /senza_vacanze`", "D": "`\"Roma escludi vacanze\"`"}, "correct": "B", "exp": "L'operatore meno `-` esclude un termine specifico dai risultati di ricerca."},
  {"id": 23, "category": "intermedio", "q": "Stai cercando un modello ufficiale di contratto di locazione in formato PDF. Quale sintassi di ricerca avanzata è la più appropriata?", "a": {"A": "`contratto locazione PDF`", "B": "`contratto locazione file:pdf`", "C": "`contratto locazione filetype:pdf`", "D": "`contratto locazione site:pdf`"}, "correct": "C", "exp": "Il comando `filetype:pdf` filtra i risultati esclusivamente per quel formato di file."},
  {"id": 24, "category": "intermedio", "q": "Un tuo collega sostiene che qualsiasi informazione trovata su Wikipedia può essere inserita in una relazione aziendale ufficiale senza alcuna verifica. Come valuti questa affermazione in base al DigComp 2.2?", "a": {"A": "È corretta, perché Wikipedia è approvata e controllata direttamente dai governi europei.", "B": "È parzialmente corretta, ma solo se la pagina di Wikipedia è scritta interamente in lingua inglese.", "C": "È errata, poiché Wikipedia è un'enciclopedia collaborativa e le fonti originarie vanno sempre verificate.", "D": "È errata, perché è vietato per legge copiare informazioni da siti web ad accesso gratuito."}, "correct": "C", "exp": "Wikipedia è collaborativa; le informazioni devono sempre essere verificate alla fonte d'origine."},
  {"id": 25, "category": "intermedio", "q": "Qual è il vantaggio principale dell'utilizzare l'operatore booleano `OR` in una ricerca?", "a": {"A": "Permette di trovare pagine che contengono almeno uno dei termini specificati, ampliando i risultati.", "B": "Consente di ordinare i risultati di ricerca dal sito più recente a quello meno recente.", "C": "Forza il motore di ricerca a mostrare esclusivamente siti web protetti da crittografia.", "D": "Esclude in modo permanente i siti web commerciali o contenenti banner pubblicitari."}, "correct": "A", "exp": "L'operatore `OR` amplia la ricerca includendo pagine che contengono almeno uno dei termini."},
  {"id": 26, "category": "intermedio", "q": "Quale dei seguenti elementi è un indicatore cruciale per valutare l'attendibilità e l'autorevolezza di una fonte informativa online?", "a": {"A": "Il numero totale di immagini colorate presenti sulla pagina web.", "B": "La presenza di informazioni chiare sull'autore o sull'editore e sulle fonti citate.", "C": "La velocità con cui il sito web si carica sullo schermo dello smartphone.", "D": "La presenza di tasti per la condivisione diretta su Facebook e WhatsApp."}, "correct": "B", "exp": "L'indicazione chiara di autore e fonti è il pilastro per valutare l'attendibilità."},
  {"id": 27, "category": "intermedio", "q": "Cosa significa che un'informazione trovata in rete è \"aggiornata\"?", "a": {"A": "Che è stata tradotta in tutte le lingue ufficiali dell'Unione Europea.", "B": "Che fa riferimento a un periodo temporale coerente con l'uso che se ne deve fare.", "C": "Che è stata pubblicata esclusivamente da un account social con la spunta blu di verifica.", "D": "Che il file digitale che la contiene ha una dimensione inferiore a 1 Megabyte (MB)."}, "correct": "B", "exp": "L'aggiornamento di un'informazione garantisce la sua validità temporale per l'uso richiesto."},
  {"id": 28, "category": "intermedio", "q": "Nel valutare un articolo di notizie online, cos'è il \"bias di conferma\"?", "a": {"A": "La tendenza dell'algoritmo di ricerca a mostrare solo siti web commerciali.", "B": "La tendenza dell'utente a considerare affidabili solo le informazioni che confermano le proprie idee preesistenti.", "C": "Un errore tecnico del computer che impedisce l'apertura dei collegamenti ipertestuali.", "D": "Il sistema di protezione dei dati personali introdotto dal regolamento europeo GDPR."}, "correct": "B", "exp": "Il bias di conferma porta l'utente ad accettare solo ciò che si allinea alle sue idee."},
  {"id": 29, "category": "intermedio", "q": "Cosa indica la sigla \"HTTPS\" all'inizio dell'indirizzo di un sito web?", "a": {"A": "Che il sito web è stato creato da un'azienda registrata in Italia o in Europa.", "B": "Che la connessione tra il tuo browser e il sito è crittografata e sicura.", "C": "Che il sito web contiene esclusivamente informazioni certificate e scientificamente provate.", "D": "Che il sito web non utilizza in alcun modo l'Intelligenza Artificiale."}, "correct": "B", "exp": "Il protocollo HTTPS indica una connessione web cifrata e sicura da intercettazioni."},
  {"id": 30, "category": "intermedio", "q": "Un articolo online riporta un titolo sensazionalistico e non cita alcuna fonte ufficiale o studio. Come dovresti comportarti?", "a": {"A": "Considerare la notizia come sicuramente falsa e segnalarla immediatamente alla Polizia Postale.", "B": "Condividere immediatamente l'articolo sui propri canali social per avvisare colleghi e amici.", "C": "Verificare la notizia effettuando ricerche incrociate su testate giornalistiche o fonti istituzionali note.", "D": "Ignorare l'articolo e disinstallare il browser dal proprio dispositivo per motivi di sicurezza."}, "correct": "C", "exp": "L'assenza di fonti in un articolo richiede sempre una verifica incrociata."},
  {"id": 31, "category": "intermedio", "q": "Quale operatore booleano è implicitamente applicato quando inserisci due parole distanti su Google (es. `corso informatica`)?", "a": {"A": "L'operatore `OR`.", "B": "L'operatore `NOT`.", "C": "L'operatore `AND`.", "D": "L'operatore `XOR`."}, "correct": "C", "exp": "Se separiamo due parole, il motore applica di default l'operatore di unione logica `AND`."},
  {"id": 32, "category": "intermedio", "q": "Perché è utile consultare la sezione \"Immagini\" o \"News\" nei filtri nativi di ricerca di Google?", "a": {"A": "Per limitare la ricerca solo a tipologie specifiche di contenuti multimediali o informativi.", "B": "Per velocizzare il download di file pesanti direttamente sul proprio computer.", "C": "Per evitare di consumare i dati della propria offerta telefonica mobile.", "D": "Per tradurre automaticamente i termini di ricerca in immagini grafiche."}, "correct": "A", "exp": "I filtri nativi di Google permettono di restringere la ricerca a specifiche categorie di media."},
  {"id": 33, "category": "intermedio", "q": "Se trovi una notizia sensazionale su un blog amatoriale, qual è la prassi corretta per verificarne la veridicità?", "a": {"A": "Controllare se la stessa notizia è riportata da agenzie di stampa nazionali o siti istituzionali.", "B": "Chiedere un parere a un software di IA Generativa, accettando la sua risposta come definitiva.", "C": "Verificare se il blog amatoriale ha molti follower e commenti positivi sotto l'articolo.", "D": "Ricaricare la pagina web più volte per vedere se il testo della notizia cambia nel tempo."}, "correct": "A", "exp": "La veridicità si controlla verificando la presenza della notizia su testate o agenzie ufficiali."},
  {"id": 34, "category": "intermedio", "q": "Quale delle seguenti pratiche rappresenta un corretto approccio critico all'uso dei motori di ricerca?", "a": {"A": "Considerare attendibili solo i primi tre risultati proposti da Google.", "B": "Confrontare i risultati di motori di ricerca diversi e analizzare la data dei contenuti.", "C": "Utilizzare esclusivamente motori di ricerca che richiedono un abbonamento mensile.", "D": "Non cliccare mai sui link che portano a siti web esterni a quelli governativi."}, "correct": "B", "exp": "L'approccio critico richiede l'uso di più motori e il controllo temporale dei contenuti."},
  {"id": 35, "category": "intermedio", "q": "Quale informazione sul copyright è importante verificare prima di riutilizzare un'immagine trovata sul web per una brochure aziendale?", "a": {"A": "Se l'immagine ha una risoluzione superiore a 1080 pixel.", "B": "Se l'immagine è associata a licenze d'uso libere (come le licenze Creative Commons).", "C": "Se l'immagine è stata scansionata da un crawler di Google o di Bing.", "D": "Se l'immagine contiene il nome di un file in formato JPG o in formato PNG."}, "correct": "B", "exp": "Le licenze Creative Commons indicano le modalità legali per riutilizzare un'opera altrui."},
  {"id": 36, "category": "intermedio", "q": "Che cosa indica l'estensione di dominio `.org` nell'URL di un sito web?", "a": {"A": "Che il sito appartiene a un'organizzazione, spesso non a scopo di lucro.", "B": "Che il sito è gestito direttamente dagli organi di polizia internazionale.", "C": "Che si tratta di un sito web non sicuro e privo di certificato crittografico.", "D": "Che il sito web è scritto interamente in linguaggio di programmazione Java."}, "correct": "A", "exp": "Il dominio `.org` identifica storicamente organizzazioni non commerciali o no-profit."},
  {"id": 37, "category": "intermedio", "q": "Quale tra i seguenti costituisce un segnale di potenziale inattendibilità di un sito web di informazione?", "a": {"A": "La totale assenza di errori di ortografia o di sintassi nei testi proposti.", "B": "L'assenza di dati di contatto, di una redazione chiaramente identificabile e di note legali.", "C": "La presenza di un certificato di sicurezza HTTPS visibile nella barra degli indirizzi.", "D": "L'inserimento del sito all'interno dei motori di ricerca alternativi come Bing."}, "correct": "B", "exp": "La mancanza di contatti o note legali è un forte segnale di potenziale inattendibilità."},
  {"id": 38, "category": "intermedio", "q": "Cosa si intende per \"Fact-checking\" (verifica dei fatti) nel contesto dell'informazione digitale?", "a": {"A": "Il processo manuale o automatico di formattazione di un testo per renderlo leggibile.", "B": "Il lavoro di ricerca e verifica delle fonti per confermare o smentire la veridicità di una notizia.", "C": "La scansione periodica del disco fisso per individuare ed eliminare file duplicati.", "D": "L'ottimizzazione del codice di un sito internet per migliorarne il posizionamento sui motori."}, "correct": "B", "exp": "Il fact-checking è l'attività di verifica metodica dei fatti e delle notizie diffuse."},
  {"id": 39, "category": "intermedio", "q": "Se utilizzi un'applicazione di IA Generativa per scrivere un report commerciale, perché devi comunque rileggere e validare il testo?", "a": {"A": "Perché l'IA potrebbe inserire dati fittizi ma scritti in modo estremamente convincente.", "B": "Perché la licenza d'uso dell'IA vieta l'utilizzo dei testi senza la firma del software.", "C": "Perché i report scritti dall'IA vengono bloccati automaticamente dal sistema operativo Windows.", "D": "Perché il testo generato dall'IA viene sempre formattato in caratteri non leggibili."}, "correct": "A", "exp": "La revisione è cruciale perché l'IA può formulare falsità persuasive."},
  {"id": 40, "category": "intermedio", "q": "In che modo i filtri di ricerca per \"Data\" (es. \"Ultimo anno\") migliorano la qualità delle informazioni trovate?", "a": {"A": "Consentono di visualizzare solo le pagine che si caricano più rapidamente.", "B": "Riducono il rischio di basare decisioni professionali su dati obsoleti o non più validi.", "C": "Impediscono al computer di scaricare file infetti da malware o virus di rete.", "D": "Permetto di trovare esclusivamente siti web che hanno sede nel fuso orario italiano."}, "correct": "B", "exp": "Filtrare per data esclude informazioni obsolete che potrebbero invalidare il lavoro."},
  {"id": 41, "category": "avanzato", "q": "Che cosa si intende per \"bolla di filtraggio\" (filter bubble) quando si effettuano ricerche in rete?", "a": {"A": "Una barriera di sicurezza informatica che impedisce l'accesso a siti non sicuri.", "B": "L'isolamento informativo dell'utente dovuto alla personalizzazione dei risultati operata dagli algoritmi.", "C": "Il blocco temporaneo della connessione internet a causa di un traffico dati eccessivo.", "D": "L'effetto grafico che evidenzia in giallo le parole chiave cercate all'interno di una pagina web."}, "correct": "B", "exp": "La bolla di filtraggio è causata dagli algoritmi che mostrano solo ciò che piace all'utente."},
  {"id": 42, "category": "avanzato", "q": "Per quale motivo l'IA generativa può produrre \"allucinazioni\" (ovvero inventare informazioni) pur sembrando accurata?", "a": {"A": "Perché calcola la probabilità statistica della parola successiva anziché comprendere realmente il significato del testo.", "B": "Perché i server fisici su cui è ospitata l'IA subiscono frequenti sbalzi di tensione elettrica.", "C": "Perché i creatori del software inseriscono volutamente notizie false per confondere gli utenti.", "D": "Perché l'IA non ha accesso a schede video sufficientemente potenti per elaborare le query."}, "correct": "A", "exp": "L'IA genera testi basandosi su calcoli predittivi e probabilistici, non sulla comprensione logica."},
  {"id": 43, "category": "avanzato", "q": "Nel contesto del DigComp 2.2, come si definisce la capacità di riconoscere se un'immagine o un video è stato modificato o generato artificialmente (Deepfake)?", "a": {"A": "Alfabetizzazione visiva ed estetica avanzata dei contenuti editoriali.", "B": "Competenza critica nella valutazione della provenienza e dell'integrità dei media digitali.", "C": "Conoscenza dei linguaggi di programmazione applicati alla grafica tridimensionale.", "D": "Abilità nell'installare patch di sicurezza per la protezione del monitor del PC."}, "correct": "B", "exp": "Il DigComp 2.2 richiede lo sviluppo di un forte spirito critico nei confronti dei deepfake."},
  {"id": 44, "category": "avanzato", "q": "Quale strategia avanzata è preferibile adottare per analizzare l'attendibilità di uno studio scientifico citato in un articolo di giornale?", "a": {"A": "Condividere lo studio sui social per raccogliere le opinioni e i commenti degli utenti non esperti.", "B": "Risalire alla pubblicazione scientifica originale peer-reviewed verificando l'autorevolezza della rivista e dei ricercatori.", "C": "Verificare se lo studio è formattato con caratteri eleganti e se include grafici colorati in alta definizione.", "D": "Utilizzare esclusivamente l'operatore booleano `OR` per cercare smentite su blog di opinione personali."}, "correct": "B", "exp": "Verificare le pubblicazioni peer-reviewed originarie è l'unica via scientificamente valida."},
  {"id": 45, "category": "avanzato", "q": "Cosa rappresenta l'indice \"H-index\" quando si valuta l'autorevolezza di un ricercatore scientifico trovato durante una ricerca online?", "a": {"A": "Il numero di volte in cui il ricercatore ha effettuato l'accesso ai motori di ricerca.", "B": "La velocità con cui il ricercatore risponde alle e-mail inviate tramite il suo sito ufficiale.", "C": "Una misura che valuta la produttività e l'impatto delle citazioni delle pubblicazioni del ricercatore.", "D": "Il livello di sicurezza crittografica del server che ospita la pagina del ricercatore."}, "correct": "C", "exp": "L'H-index quantifica la rilevanza accademica calcolando pubblicazioni e citazioni."},
  {"id": 46, "category": "avanzato", "q": "Qual è un rischio concreto legato all'affidarsi esclusivamente a modelli di IA Generativa per l'analisi di dati di mercato aziendali?", "a": {"A": "L'impossibilità di stampare i dati su carta a causa di blocchi del formato file.", "B": "La potenziale violazione della riservatezza dei dati aziendali se inseriti in modelli di IA pubblici.", "C": "L'obbligo di pagare tasse doganali aggiuntive per l'esportazione di file all'estero.", "D": "Il danneggiamento fisico dei dischi rigidi (SSD) del computer di chi effettua la query."}, "correct": "B", "exp": "L'inserimento di dati proprietari in IA pubbliche espone l'azienda a gravi rischi di privacy."},
  {"id": 47, "category": "avanzato", "q": "Quale tra i seguenti operatori di ricerca avanzata di Google consente di trovare pagine web che contengono un termine specifico direttamente nell'URL del sito?", "a": {"A": "`inurl:`", "B": "`intitle:`", "C": "`filetype:`", "D": "`site:`"}, "correct": "A", "exp": "Il comando `inurl:` limita la ricerca alle pagine che contengono il termine nell'indirizzo web."},
  {"id": 48, "category": "avanzato", "q": "Come influisce il \"SEO\" (Search Engine Optimization) sulla visibilità delle informazioni che trovi sui motori di ricerca?", "a": {"A": "Impedisce ai browser non aggiornati di visualizzare i siti web di piccole imprese locali.", "B": "Ottimizza i siti affinché appaiano più in alto nei risultati, indipendentemente dalla loro assoluta veridicità.", "C": "Garantisce che tutti i siti web in prima pagina abbiano superato un controllo di veridicità dello Stato.", "D": "Cripta i dati degli utenti per impedire che Google possa leggere le loro ricerche personali."}, "correct": "B", "exp": "La SEO posiziona i siti in base a logiche di ottimizzazione, non in base alla veridicità."},
  {"id": 49, "category": "avanzato", "q": "Quando valuti l'attendibilità di un report aziendale scaricato da un sito web, su quale elemento dovresti concentrarti per verificare possibili bias?", "a": {"A": "Il numero di parole totali del documento e la dimensione del file in KB.", "B": "L'analisi degli obiettivi dell'ente promotore, degli eventuali conflitti d'interesse e delle fonti utilizzate.", "C": "La presenza di un logo colorato e di un design grafico moderno e accattivante.", "D": "La quantità di pubblicità display presente sul sito web da cui è stato scaricato il report."}, "correct": "B", "exp": "I report aziendali possono soffrire di bias promozionali o pratiche di greenwashing."},
  {"id": 50, "category": "avanzato", "q": "Perché utilizzare una VPN (Virtual Private Network) durante le ricerche può influenzare i risultati ottenuti?", "a": {"A": "Perché le VPN aumentano automaticamente la velocità di connessione ai server di Google.", "B": "Perché obbligano tutti i siti web a visualizzare la versione in formato solo testo.", "C": "Perché rendono invisibili i cookie di profilazione e impediscono la personalizzazione dei risultati.", "D": "Perché una VPN maschera la reale provenienza geografica, azzerando le personalizzazioni locali."}, "correct": "D", "exp": "Una VPN maschera la reale provenienza geografica, azzerando le personalizzazioni locali."},
  {"id": 51, "category": "avanzato", "q": "Cosa sono gli \"Open Data\" nel contesto della gestione delle informazioni digitali?", "a": {"A": "Dati pubblici resi disponibili liberamente, senza restrizioni di copyright o licenze d'uso.", "B": "Dati personali degli utenti raccolti automaticamente dai browser durante la navigazione.", "C": "Dati crittografati con password e salvati esclusivamente su hard disk esterni.", "D": "Dati relativi alle attività commerciali di un'azienda protetti da segreto industriale."}, "correct": "A", "exp": "Gli Open Data sono dati pubblici privi di restrizioni d'uso o di copyright."},
  {"id": 52, "category": "avanzato", "q": "Cosa significa esercitare il \"pensiero critico\" quando si valutano le informazioni trovate online?", "a": {"A": "Accettare senza discussione tutto ciò che viene pubblicato da siti istituzionali governativi.", "B": "Analizzare scopi, conflitti d'interesse e fonti delle informazioni prima di considerarle affidabili.", "C": "Condividere solo notizie che confermano le proprie opinioni personali sui social media.", "D": "Evitare qualsiasi ricerca che richieda più di 5 minuti di tempo per essere completata."}, "correct": "B", "exp": "Analizzare scopi, conflitti d'interesse e fonti definisce il vero pensiero critico."},
  {"id": 53, "category": "avanzato", "q": "Quale operatore avanzato di Google permette di trovare siti web con contenuti simili a un sito specifico già conosciuto?", "a": {"A": "`link:`", "B": "`cache:`", "C": "`related:`", "D": "`info:`"}, "correct": "C", "exp": "Il comando `related:` mostra siti con contenuti simili a quello specificato."},
  {"id": 54, "category": "avanzato", "q": "Qual è la differenza tra \"disinformazione\" e \"misinformazione\" nel contesto digitale?", "a": {"A": "La disinformazione è sempre legale, mentre la misinformazione è sempre illegale.", "B": "La disinformazione riguarda solo i social media, mentre la misinformazione riguarda solo i giornali.", "C": "La disinformazione presuppone la deliberata intenzione di ingannare, la misinformazione no.", "D": "Non c'è alcuna differenza; i due termini sono completamente intercambiabili."}, "correct": "C", "exp": "La disinformazione presuppone la deliberata intenzione di ingannare o creare un danno."},
  {"id": 55, "category": "avanzato", "q": "Quando utilizzi contenuti digitali trovati sul web per un progetto lavorativo, quale principio etico e legale devi rispettare?", "a": {"A": "Puoi utilizzare qualsiasi contenuto trovato online senza alcuna limitazione.", "B": "L'uso etico impone il rispetto del copyright, delle licenze e la corretta citazione delle fonti.", "C": "È sufficiente modificare leggermente il testo per renderlo proprio e non essere perseguibili.", "D": "Solo i contenuti con più di 10 anni sono liberi da diritti d'autore."}, "correct": "B", "exp": "L'uso etico impone il rispetto del copyright, delle licenze e la corretta citazione."},
  {"id": 56, "category": "avanzato", "q": "Cos'è la \"misinformazione\" nel contesto della comunicazione digitale?", "a": {"A": "La diffusione intenzionale di notizie false per causare un danno deliberato.", "B": "La diffusione di informazioni errate senza l'intenzione di ingannare, ma per errore o disattenzione.", "C": "Il blocco automatico di un account social per violazione delle condizioni d'uso.", "D": "L'uso di tecniche di marketing aggressivo per vendere prodotti online."}, "correct": "B", "exp": "La misinformazione è la diffusione di notizie errate ma senza un intento doloso originator."},
  {"id": 57, "category": "avanzato", "q": "Cosa si intende per \"echo chamber\" (camera di risonanza) nel contesto dell'informazione digitale?", "a": {"A": "Una tecnologia hardware che amplifica il segnale Wi-Fi per migliorare la copertura.", "B": "Un ambiente informativo dove le opinioni simili vengono amplificate, mentre quelle contrarie vengono filtrate.", "C": "Un metodo di archiviazione dei file che riduce lo spazio occupato su disco.", "D": "Un tipo di licenza Creative Commons che impedisce la modifica dei contenuti."}, "correct": "B", "exp": "La cassa di risonanza isola l'utente in un flusso di notizie coerenti con le sue idee."},
  {"id": 58, "category": "avanzato", "q": "Cosa indica una licenza \"CC0\" (Creative Commons Zero) applicata a un contenuto digitale?", "a": {"A": "Che il contenuto è protetto da copyright e non può essere utilizzato senza permesso.", "B": "Che il creatore rinuncia a tutti i diritti, rendendo il contenuto di pubblico dominio.", "C": "Che il contenuto può essere utilizzato solo per scopi educativi e non commerciali.", "D": "Che il contenuto è stato creato da un'intelligenza artificiale e non da un essere umano."}, "correct": "B", "exp": "La licenza CC0 (Creative Commons Zero) indica la totale rinuncia ai diritti d'autore."},
  {"id": 59, "category": "avanzato", "q": "Quando un'IA generativa ti fornisce una risposta con citazioni o riferimenti, qual è la pratica corretta da seguire?", "a": {"A": "Accettare sempre i riferimenti come veritieri senza ulteriori verifiche.", "B": "Controllare manualmente che i link o le fonti citate esistano effettivamente e supportino quanto affermato.", "C": "Ignorare completamente i riferimenti perché le IA non sono attendibili.", "D": "Copiare solo il testo principale senza leggere le fonti citate."}, "correct": "B", "exp": "L'utente avanzato controlla che i link forniti dall'IA confermino effettivamente il testo."},
  {"id": 60, "category": "avanzato", "q": "Quale tra i seguenti costituisce un esempio di utilizzo corretto del comando `intitle:` in una ricerca avanzata su Google?", "a": {"A": "Trovare pagine web che contengono la parola cercata esclusivamente all'interno del codice sorgente delle immagini.", "B": "Trovare pagine web che contengono la parola chiave specificata all'interno del titolo principale del documento o della pagina.", "C": "Trovare pagine web che appartengono esclusivamente a siti web di e-commerce o negozi online.", "D": "Trovare file multimediali che sono stati condivisi in cloud da utenti residenti in Italia."}, "correct": "B", "exp": "Il comando `intitle:` restringe la ricerca alle pagine con la keyword nel titolo principale."}
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

const modal = document.getElementById('modal-legal');
const modalConfirm = document.getElementById('modal-confirm');

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
  Object.values(screens).forEach(s => s.classList.add('hidden'));
  screens[screenName].classList.remove('hidden');
  screens[screenName].classList.add('fade-in');
  currentScreen = screenName;
}

// ============================================
// Modal Functions
// ============================================
function openModal() {
  modal.classList.remove('hidden');
  modal.classList.add('fade-in');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('hidden');
  modal.classList.remove('fade-in');
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
  
  // Random selection of questions
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
  const container = document.getElementById('question-container');
  const progress = document.getElementById('progress-text');
  const bar = document.getElementById('progress-bar-fill');
  
  progress.textContent = `${currentQuestionIndex + 1} / ${quizQuestions.length}`;
  bar.style.width = `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;
  
  container.innerHTML = `
    <div class="question-card">
      <div class="question-number">Domanda ${currentQuestionIndex + 1}</div>
      <div class="question-text">${q.q}</div>
      <div class="options-grid">
        ${Object.entries(q.a).map(([key, value]) => `
          <button class="option-btn" data-answer="${key}" aria-label="Opzione ${key}">
            <span class="option-letter">${key}</span>
            <span class="option-text">${value}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
  
  container.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(btn.dataset.answer));
  });
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
    } else {
      endQuiz();
    }
  }, 300);
}

function startTimer() {
  const timerDisplay = document.getElementById('timer-display');
  const timerAlert = document.getElementById('timer-alert');
  
  timerDisplay.textContent = formatTime(timeRemaining);
  
  timerInterval = setInterval(() => {
    timeRemaining--;
    timerDisplay.textContent = formatTime(timeRemaining);
    
    if (timeRemaining <= CONFIG.ALERT_TIMER_SOGLIA && !timerAlert.classList.contains('show')) {
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
  showResults();
}

function showResults() {
  showScreen('results');
  
  const correctCount = userAnswers.filter(a => a.isCorrect).length;
  const percentage = Math.round((correctCount / quizQuestions.length) * 100);
  
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
  document.getElementById('result-score').textContent = `${correctCount} / ${quizQuestions.length}`;
  document.getElementById('result-container').className = `result-box ${resultClass}`;
  
  const recapContainer = document.getElementById('recap-container');
  recapContainer.innerHTML = userAnswers.map((answer, index) => `
    <div class="recap-item ${answer.isCorrect ? 'correct' : 'wrong'}">
      <div class="recap-question">
        <span class="recap-number">${index + 1}.</span>
        <span class="recap-text">${answer.question.q}</span>
      </div>
      <div class="recap-answers">
        <div class="recap-user-answer">
          La tua risposta: <strong>${answer.userAnswer}</strong>
          ${answer.isCorrect ? ' ✓' : ''}
        </div>
        ${!answer.isCorrect ? `
          <div class="recap-correct-answer">
            Risposta corretta: <strong>${answer.correctAnswer}</strong>
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
  document.getElementById('timer-alert').classList.remove('show');
}

function goHome() {
  closeConfirmModal();
  clearInterval(timerInterval);
  document.getElementById('timer-alert').classList.remove('show');
  showScreen('welcome');
}

// ============================================
// Event Listeners
// ============================================
document.getElementById('btn-start').addEventListener('click', openModal);
document.getElementById('btn-card-procedi').addEventListener('click', openModal);
document.getElementById('btn-card-teoria').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'teoria.html';
});

document.getElementById('btn-cancel').addEventListener('click', closeModal);
document.getElementById('btn-accept').addEventListener('click', startQuiz);

document.getElementById('btn-home').addEventListener('click', openConfirmModal);
document.getElementById('btn-confirm-cancel').addEventListener('click', closeConfirmModal);
document.getElementById('btn-confirm-ok').addEventListener('click', goHome);

document.getElementById('btn-restart').addEventListener('click', restartQuiz);
document.getElementById('btn-restart-results').addEventListener('click', restartQuiz);

// ============================================
// localStorage stubs for future implementation
// ============================================
function saveProgress() {
  // localStorage.setItem('quizProgress', JSON.stringify({...}));
}

function loadProgress() {
  // const saved = localStorage.getItem('quizProgress');
  // return saved ? JSON.parse(saved) : null;
}