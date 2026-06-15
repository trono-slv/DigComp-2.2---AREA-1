// ============================================
// ⚙️ CONFIGURAZIONE
// ============================================
const CONFIG = {
  NUM_DOMANDE: 30,
  DURATA_TIMER: 30 * 60,
  SOGLIA_ECCELLENTE: 80,
  SOGLIA_SUFFICIENTE: 60,
  ALERT_TIMER_SOGLIA: 300,
  FILTRO_DIFFICOLTA: null,
  DISTRIBUZIONE_DIFFICOLTA: { facile: 10, medio: 10, difficile: 10 }
};

// ============================================
// 📚 PANIERE COMPLETO (180 DOMANDE)
// ============================================
const PANIERE = [
  // ===== CAPITOLO 1.1 - FACILE (1-20) =====
  { id: 1, category: "1.1", difficulty: "facile", q: "Che cos'è un browser?", a: { A: "Un software che permette di accedere e navigare nel World Wide Web", B: "Un dispositivo fisico per collegarsi alla rete elettrica", C: "Un programma usato solo per scrivere testi", D: "Un archivio locale di immagini e video" }, correct: "A", exp: "Il browser è il software che consente di accedere e navigare sul web." },
  { id: 2, category: "1.1", difficulty: "facile", q: "Quale tra i seguenti è un esempio di browser?", a: { A: "Excel", B: "Google Chrome", C: "Windows", D: "Word" }, correct: "B", exp: "Google Chrome è uno dei principali browser disponibili." },
  { id: 3, category: "1.1", difficulty: "facile", q: "A cosa serve principalmente un motore di ricerca?", a: { A: "A modificare immagini digitali", B: "A proteggere il computer dai virus", C: "A trovare informazioni e contenuti disponibili online", D: "A creare cartelle sul computer" }, correct: "C", exp: "Il motore di ricerca serve a individuare informazioni e contenuti online." },
  { id: 4, category: "1.1", difficulty: "facile", q: "Quale attività è possibile svolgere tramite Internet?", a: { A: "Solo stampare documenti", B: "Solo usare programmi offline", C: "Solo accendere il computer", D: "Effettuare acquisti online e comunicare in tempo reale" }, correct: "D", exp: "Internet permette acquisti, comunicazioni, formazione e altri servizi digitali." },
  { id: 5, category: "1.1", difficulty: "facile", q: "Che cosa interpreta un browser per visualizzare una pagina web?", a: { A: "Il codice HTML", B: "Il codice fiscale dell'utente", C: "Il numero seriale del computer", D: "Il codice PIN della rete Wi-Fi" }, correct: "A", exp: "Il browser interpreta il codice HTML e visualizza la pagina in forma leggibile." },
  { id: 6, category: "1.1", difficulty: "facile", q: "Quale tra questi è un browser indicato nel capitolo?", a: { A: "PowerPoint", B: "Safari", C: "Paint", D: "Calcolatrice" }, correct: "B", exp: "Safari è un browser citato tra i principali." },
  { id: 7, category: "1.1", difficulty: "facile", q: "Che cosa indica generalmente un URL?", a: { A: "La velocità della connessione Internet", B: "La dimensione di un file", C: "L'indirizzo di una risorsa sul web", D: "Il nome dell'utente collegato" }, correct: "C", exp: "L'URL è l'indirizzo che identifica una risorsa sul web." },
  { id: 8, category: "1.1", difficulty: "facile", q: "In un indirizzo web, cosa rappresenta il dominio?", a: { A: "La password di accesso al sito", B: "Il tipo di dispositivo usato", C: "Il colore della pagina web", D: "L'indirizzo del server che ospita la risorsa" }, correct: "D", exp: "Il dominio identifica il server che ospita la risorsa." },
  { id: 9, category: "1.1", difficulty: "facile", q: "A cosa servono i segnalibri o preferiti del browser?", a: { A: "A salvare pagine web per ritrovarle facilmente", B: "A cancellare automaticamente la cronologia", C: "A spegnere il computer", D: "A modificare il codice HTML dei siti" }, correct: "A", exp: "I segnalibri permettono di salvare e ritrovare facilmente pagine web." },
  { id: 10, category: "1.1", difficulty: "facile", q: "Quale icona viene spesso usata per aggiungere un sito ai preferiti?", a: { A: "Una stampante", B: "Una stella", C: "Un lucchetto rotto", D: "Un cestino" }, correct: "B", exp: "Nei browser l'icona della stella è comunemente usata per aggiungere preferiti." },
  { id: 11, category: "1.1", difficulty: "facile", q: "Qual è il primo passo per fare una ricerca efficace online?", a: { A: "Aprire casualmente molti siti", B: "Scaricare subito un file", C: "Identificare parole chiave pertinenti", D: "Eliminare la cronologia del browser" }, correct: "C", exp: "Una ricerca efficace parte dall'identificazione di parole chiave pertinenti." },
  { id: 12, category: "1.1", difficulty: "facile", q: "Quale tra questi è un motore di ricerca generalista?", a: { A: "Photoshop", B: "Outlook", C: "VLC", D: "Google" }, correct: "D", exp: "Google è un motore di ricerca generalista." },
  { id: 13, category: "1.1", difficulty: "facile", q: "Che cosa sono le parole chiave in una ricerca online?", a: { A: "Termini specifici usati per cercare informazioni pertinenti", B: "Password personali da inserire nei siti web", C: "File temporanei del browser", D: "Immagini salvate sul computer" }, correct: "A", exp: "Le parole chiave sono termini mirati che guidano la ricerca." },
  { id: 14, category: "1.1", difficulty: "facile", q: "Quale strumento è indicato per cercare articoli accademici?", a: { A: "Google Maps", B: "Google Scholar", C: "Blocco note", D: "Esplora file" }, correct: "B", exp: "Google Scholar è indicato per fonti accademiche e scientifiche." },
  { id: 15, category: "1.1", difficulty: "facile", q: "Perché è utile formulare domande chiare a un assistente virtuale?", a: { A: "Per ridurre la luminosità dello schermo", B: "Per aumentare il volume del dispositivo", C: "Per ottenere risposte più precise", D: "Per eliminare i file temporanei" }, correct: "C", exp: "Domande chiare migliorano la precisione delle risposte degli assistenti virtuali." },
  { id: 16, category: "1.1", difficulty: "facile", q: "Gli assistenti virtuali hanno bisogno di Internet per accedere a informazioni aggiornate?", a: { A: "No, funzionano sempre solo offline", B: "No, usano solo dati salvati nel telefono", C: "No, non rispondono mai a domande online", D: "Sì, spesso dipendono dalla connessione online" }, correct: "D", exp: "Gli assistenti virtuali spesso richiedono Internet per informazioni aggiornate." },
  { id: 17, category: "1.1", difficulty: "facile", q: "Quale tra queste è una buona pratica nella ricerca online?", a: { A: "Usare parole chiave specifiche e pertinenti", B: "Cercare solo con frasi casuali", C: "Aprire il primo risultato senza valutarlo", D: "Usare sempre una sola parola generica" }, correct: "A", exp: "Parole chiave specifiche aumentano la pertinenza dei risultati." },
  { id: 18, category: "1.1", difficulty: "facile", q: "Che cosa consente di fare Internet in ambito formativo?", a: { A: "Solo stampare dispense", B: "Seguire corsi online tramite piattaforme digitali", C: "Usare solo programmi installati localmente", D: "Evitare qualsiasi interazione con docenti e studenti" }, correct: "B", exp: "Internet consente di seguire corsi online tramite piattaforme digitali." },
  { id: 19, category: "1.1", difficulty: "facile", q: "Che cosa può includere un indirizzo web oltre al dominio?", a: { A: "Solo il nome del computer", B: "Solo il numero di telefono dell'utente", C: "Percorsi e parametri", D: "Solo immagini e video" }, correct: "C", exp: "Un URL può includere percorsi e parametri oltre al dominio." },
  { id: 20, category: "1.1", difficulty: "facile", q: "Qual è un vantaggio dei corsi online?", a: { A: "Richiedono sempre la presenza fisica", B: "Non permettono l'accesso ai materiali", C: "Non consentono interazione", D: "Offrono flessibilità di fruizione" }, correct: "D", exp: "La formazione online offre flessibilità di accesso e fruizione." },

  // ===== CAPITOLO 1.1 - MEDIA (21-40) =====
  { id: 21, category: "1.1", difficulty: "media", q: "Quale descrizione distingue correttamente browser e motore di ricerca?", a: { A: "Il browser permette di navigare nel web; il motore di ricerca aiuta a trovare contenuti online", B: "Il browser serve solo per scrivere testi; il motore di ricerca serve solo per stampare", C: "Sono la stessa cosa e non hanno differenze funzionali", D: "Il motore di ricerca è un dispositivo hardware, il browser è un cavo di rete" }, correct: "A", exp: "Browser e motore di ricerca hanno funzioni diverse ma complementari." },
  { id: 22, category: "1.1", difficulty: "media", q: "In un URL, cosa indicano i parametri dopo il punto interrogativo ?", a: { A: "Il nome del browser", B: "Dati aggiuntivi passati al server", C: "La marca del computer", D: "Il sistema operativo dell'utente" }, correct: "B", exp: "I parametri trasmettono dati aggiuntivi al server." },
  { id: 23, category: "1.1", difficulty: "media", q: "Quale parte dell'indirizzo https://www.google.com rappresenta il nome di dominio?", a: { A: "https://", B: "www", C: "google.com", D: ".html" }, correct: "C", exp: "In https://www.google.com, il dominio è google.com." },
  { id: 24, category: "1.1", difficulty: "media", q: "Perché è utile organizzare i segnalibri in cartelle?", a: { A: "Per aumentare automaticamente la velocità Internet", B: "Per impedire l'accesso a tutti i siti", C: "Per cancellare i cookie", D: "Per ritrovare più facilmente le pagine salvate" }, correct: "D", exp: "Le cartelle aiutano a organizzare e recuperare meglio i preferiti." },
  { id: 25, category: "1.1", difficulty: "media", q: "Quale sequenza è corretta per aggiungere un sito ai preferiti?", a: { A: "Aprire il sito, cliccare sulla stella, scegliere la cartella di destinazione", B: "Spegnere il browser, cancellare la cronologia, riaprire il sito", C: "Aprire il cestino, selezionare il sito, salvarlo sul desktop", D: "Disinstallare il browser e reinstallarlo" }, correct: "A", exp: "La procedura corretta prevede apertura sito, stella e scelta cartella." },
  { id: 26, category: "1.1", difficulty: "media", q: "Quale motore di ricerca viene associato alla tutela della privacy?", a: { A: "Google Scholar", B: "DuckDuckGo", C: "Yandex", D: "OpenAlex" }, correct: "B", exp: "DuckDuckGo è noto per l'attenzione alla privacy." },
  { id: 27, category: "1.1", difficulty: "media", q: "Quando può essere utile Google Scholar?", a: { A: "Per cercare esclusivamente immagini personali", B: "Per gestire contatti telefonici", C: "Per cercare articoli accademici, paper scientifici e tesi", D: "Per comprimere file video" }, correct: "C", exp: "Google Scholar è adatto a ricerche scientifiche e accademiche." },
  { id: 28, category: "1.1", difficulty: "media", q: "Quale comportamento migliora l'efficacia di una ricerca online?", a: { A: "Usare parole vaghe e generiche", B: "Evitare di specificare l'argomento", C: "Aprire solo risultati sponsorizzati", D: "Definire con precisione l'argomento e le parole chiave" }, correct: "D", exp: "Una ricerca efficace richiede argomento definito e parole chiave mirate." },
  { id: 29, category: "1.1", difficulty: "media", q: "Che cosa significa svolgere una ricerca 'ben definita'?", a: { A: "Cercare con un obiettivo chiaro e parole chiave pertinenti", B: "Cercare usando solo immagini", C: "Cercare senza sapere cosa si vuole trovare", D: "Cercare sempre con una sola parola" }, correct: "A", exp: "Una ricerca ben definita ha obiettivo chiaro e termini pertinenti." },
  { id: 30, category: "1.1", difficulty: "media", q: "Perché è importante evitare richieste troppo vaghe a un assistente virtuale?", a: { A: "Perché il dispositivo potrebbe spegnersi", B: "Perché aumentano il rischio di risposte poco precise", C: "Perché impediscono l'uso del browser", D: "Perché cancellano i segnalibri" }, correct: "B", exp: "Richieste vaghe generano più facilmente risposte imprecise." },
  { id: 31, category: "1.1", difficulty: "media", q: "Quale affermazione descrive correttamente la funzione dei browser?", a: { A: "Salvano solo fotografie sul computer", B: "Bloccano sempre tutti i siti Internet", C: "Interpretano contenuti web e li rendono leggibili e interattivi", D: "Servono solo per inviare SMS" }, correct: "C", exp: "I browser trasformano contenuti web in pagine leggibili e interattive." },
  { id: 32, category: "1.1", difficulty: "media", q: "Quale tra questi elementi può comparire in un URL?", a: { A: "Un percorso con cartelle e sottocartelle", B: "Una cartella fisica della scrivania", C: "Un codice bancomat", D: "Un numero di serie del monitor" }, correct: "A", exp: "Gli URL possono contenere percorsi con cartelle e sottocartelle." },
  { id: 33, category: "1.1", difficulty: "media", q: "Perché Internet è utile nelle attività quotidiane?", a: { A: "Perché consente solo attività ludiche", B: "Perché elimina la necessità di comunicare", C: "Perché permette attività come acquisti, formazione, banking e comunicazione", D: "Perché funziona solo in presenza" }, correct: "C", exp: "Internet supporta molte attività quotidiane: formazione, acquisti, banking e comunicazione." },
  { id: 34, category: "1.1", difficulty: "media", q: "Che cosa consente la barra dei preferiti?", a: { A: "Di visualizzare rapidamente i segnalibri salvati", B: "Di cancellare automaticamente tutti i file", C: "Di modificare il sistema operativo", D: "Di disinstallare il browser" }, correct: "A", exp: "La barra dei preferiti permette accesso rapido ai segnalibri." },
  { id: 35, category: "1.1", difficulty: "media", q: "Qual è un possibile limite degli algoritmi di IA usati nei servizi digitali?", a: { A: "Sono sempre completamente trasparenti", B: "Non usano mai dati", C: "Possono funzionare come 'scatole nere' poco comprensibili", D: "Non influenzano mai i contenuti proposti" }, correct: "C", exp: "Alcuni sistemi di IA sono poco trasparenti nel processo decisionale." },
  { id: 36, category: "1.1", difficulty: "media", q: "Che cosa si intende con 'scatola nera' riferita all'IA?", a: { A: "Un computer fisico di colore nero", B: "Una cartella nascosta del browser", C: "Un errore della connessione Internet", D: "Un sistema il cui processo decisionale interno non è facilmente comprensibile" }, correct: "D", exp: "La 'scatola nera' indica un processo interno non facilmente comprensibile." },
  { id: 37, category: "1.1", difficulty: "media", q: "Quale rischio può derivare da dati di addestramento squilibrati nei sistemi di IA?", a: { A: "La produzione di risultati discriminatori o distorti", B: "L'aumento automatico della memoria del computer", C: "La riduzione del consumo elettrico del dispositivo", D: "La cancellazione dei preferiti del browser" }, correct: "A", exp: "Dati squilibrati possono produrre risultati discriminatori o distorti." },
  { id: 38, category: "1.1", difficulty: "media", q: "Quale strategia aiuta a ridurre i pregiudizi nei sistemi di IA?", a: { A: "Usare dati sempre uguali e poco rappresentativi", B: "Utilizzare dataset diversificati e bilanciati", C: "Evitare ogni forma di monitoraggio", D: "Rimuovere tutte le fonti informative" }, correct: "B", exp: "Dataset diversificati e bilanciati aiutano a ridurre i bias." },
  { id: 39, category: "1.1", difficulty: "media", q: "Perché le piattaforme digitali possono influenzare ciò che vediamo online?", a: { A: "Perché mostrano contenuti sempre in ordine alfabetico", B: "Perché non usano mai algoritmi", C: "Perché le nostre interazioni possono orientare i contenuti proposti", D: "Perché impediscono ogni personalizzazione" }, correct: "C", exp: "Le interazioni dell'utente possono influenzare i contenuti proposti." },
  { id: 40, category: "1.1", difficulty: "media", q: "Quale comportamento è corretto quando si usa un assistente virtuale?", a: { A: "Fare richieste multiple e confuse", B: "Non verificare mai la connessione Internet", C: "Usare domande ambigue e incomplete", D: "Formulare domande chiare e specifiche" }, correct: "D", exp: "Domande chiare e specifiche migliorano l'interazione con assistenti virtuali." },

  // ===== CAPITOLO 1.1 - DIFFICILE (41-60) =====
  { id: 41, category: "1.1", difficulty: "difficile", q: "Quale affermazione descrive meglio il rapporto tra algoritmo, dati e risultati nei sistemi di IA?", a: { A: "Gli algoritmi analizzano dati e producono suggerimenti o decisioni, ma il processo può non essere trasparente", B: "Gli algoritmi producono risultati casuali senza usare dati", C: "Gli algoritmi sono sempre completamente comprensibili agli utenti", D: "Gli algoritmi non influenzano mai le informazioni visualizzate online" }, correct: "A", exp: "Gli algoritmi analizzano dati, ma il loro funzionamento può essere opaco." },
  { id: 42, category: "1.1", difficulty: "difficile", q: "Perché la natura 'opaca' di alcuni algoritmi di IA è rilevante per l'utente digitale?", a: { A: "Perché impedisce sempre l'accesso a Internet", B: "Perché rende difficile comprendere come si arrivi a certi suggerimenti o decisioni", C: "Perché elimina automaticamente i dati personali", D: "Perché consente solo ricerche accademiche" }, correct: "B", exp: "L'opacità rende difficile capire perché un sistema produce certi risultati." },
  { id: 43, category: "1.1", difficulty: "difficile", q: "Quale situazione rappresenta un possibile effetto di bias nei dati di addestramento?", a: { A: "Un browser che salva correttamente un preferito", B: "Un motore di ricerca che apre una nuova scheda", C: "Un sistema di riconoscimento facciale meno accurato per gruppi poco rappresentati nel dataset", D: "Un URL che contiene un percorso e dei parametri" }, correct: "C", exp: "Un dataset non rappresentativo può causare errori su gruppi poco presenti." },
  { id: 44, category: "1.1", difficulty: "difficile", q: "Perché è importante monitorare continuamente i modelli di IA?", a: { A: "Per aumentare il numero di schede aperte nel browser", B: "Per impedire l'uso dei motori di ricerca", C: "Per rendere inutilizzabili i dataset", D: "Per individuare e correggere eventuali pregiudizi o distorsioni" }, correct: "D", exp: "Il monitoraggio serve a individuare e correggere bias e distorsioni." },
  { id: 45, category: "1.1", difficulty: "difficile", q: "Quale opzione rappresenta una ricerca online più efficace?", a: { A: "bonus cultura 2026 requisiti sito ufficiale", B: "cosa", C: "informazioni varie", D: "dimmi tutto" }, correct: "A", exp: "La query è specifica, contestualizzata e orientata a una fonte ufficiale." },
  { id: 46, category: "1.1", difficulty: "difficile", q: "Quale combinazione di elementi rende una query più mirata?", a: { A: "Parole generiche, nessun contesto, nessun obiettivo", B: "Parole chiave specifiche, argomento definito, termini correlati", C: "Solo emoticon e abbreviazioni", D: "Domande volutamente ambigue" }, correct: "B", exp: "Una query mirata combina parole chiave specifiche, contesto e termini correlati." },
  { id: 47, category: "1.1", difficulty: "difficile", q: "Quale affermazione sui contenuti online proposti dalle piattaforme è più corretta?", a: { A: "Sono sempre neutrali e identici per tutti gli utenti", B: "Dipendono solo dal caso", C: "Possono essere influenzati dalle interazioni dell'utente e da sistemi algoritmici", D: "Non dipendono mai da dati o comportamenti precedenti" }, correct: "C", exp: "I contenuti possono essere personalizzati dagli algoritmi in base alle interazioni." },
  { id: 48, category: "1.1", difficulty: "difficile", q: "Quale rischio è associato alla personalizzazione algoritmica dei contenuti?", a: { A: "La possibilità di ricevere contenuti filtrati o orientati in base al comportamento precedente", B: "L'impossibilità di accedere a qualsiasi pagina web", C: "La cancellazione automatica dei motori di ricerca", D: "L'eliminazione dei browser dal dispositivo" }, correct: "A", exp: "La personalizzazione può filtrare i contenuti mostrati all'utente." },
  { id: 49, category: "1.1", difficulty: "difficile", q: "In quale caso è più opportuno usare Google Scholar invece di un motore generalista?", a: { A: "Quando si cercano paper scientifici o fonti accademiche", B: "Quando si vuole solo cambiare lo sfondo del desktop", C: "Quando si devono eliminare i contatti telefonici", D: "Quando si vuole spegnere il router" }, correct: "A", exp: "Google Scholar è adatto alla ricerca di fonti accademiche e paper scientifici." },
  { id: 50, category: "1.1", difficulty: "difficile", q: "Quale scelta è più adatta per una ricerca in ambito russo o area di influenza russa, secondo il materiale?", a: { A: "OpenAlex", B: "Yandex", C: "Blocco note", D: "Edge come sistema operativo" }, correct: "B", exp: "Yandex è indicato per ricerche in russo e nell'area collegata." },
  { id: 51, category: "1.1", difficulty: "difficile", q: "Quale interpretazione dell'indirizzo https://www.example.com/cartella/sottocartella?a=7&b=5 è corretta?", a: { A: "cartella/sottocartella rappresenta il browser usato", B: "a=7&b=5 rappresenta il nome del dominio", C: "cartella/sottocartella indica un percorso e a=7&b=5 sono parametri", D: "https indica il nome dell'autore della pagina" }, correct: "C", exp: "Il percorso identifica la posizione della risorsa; i parametri passano dati." },
  { id: 52, category: "1.1", difficulty: "difficile", q: "Quale affermazione è corretta sul dominio di secondo livello e primo livello presi insieme?", a: { A: "Rappresentano il colore grafico della pagina", B: "Identificano il tipo di tastiera utilizzata", C: "Coincidono sempre con il percorso del file", D: "Rappresentano l'indirizzo del server che ospita la risorsa" }, correct: "D", exp: "Dominio di secondo livello e primo livello identificano il server della risorsa." },
  { id: 53, category: "1.1", difficulty: "difficile", q: "Quale comportamento mostra competenza nella gestione dei preferiti?", a: { A: "Salvare pagine utili in cartelle tematiche ed eliminare quelle non più necessarie", B: "Salvare ogni pagina visitata senza criterio", C: "Non usare mai la barra dei preferiti", D: "Confondere preferiti e cronologia" }, correct: "A", exp: "Gestire bene i preferiti significa organizzarli e mantenerli aggiornati." },
  { id: 54, category: "1.1", difficulty: "difficile", q: "Quale rischio può derivare da una richiesta troppo complessa e ambigua a un assistente virtuale?", a: { A: "Il browser cambia automaticamente lingua", B: "La risposta può essere meno precisa o non aderente all'intento dell'utente", C: "Il computer elimina tutti i file locali", D: "Il motore di ricerca smette di funzionare" }, correct: "B", exp: "Richieste ambigue rendono più difficile ottenere risposte precise." },
  { id: 55, category: "1.1", difficulty: "difficile", q: "Quale frase rappresenta una richiesta ben formulata a un assistente virtuale?", a: { A: "'Cose Internet?'", B: "'Fammi tutto'", C: "'Spiegami in 5 punti la differenza tra browser e motore di ricerca con esempi'", D: "'Boh, cerca qualcosa'" }, correct: "C", exp: "La richiesta è chiara, delimitata e specifica nel formato desiderato." },
  { id: 56, category: "1.1", difficulty: "difficile", q: "Quale aspetto rende gli algoritmi di apprendimento automatico difficili da comprendere per l'utente comune?", a: { A: "Il fatto che usano solo carta stampata", B: "Il fatto che funzionano senza dati", C: "Il fatto che non producono risultati", D: "La complessità dei modelli statistici e delle reti neurali profonde" }, correct: "D", exp: "Modelli complessi e reti neurali rendono l'IA difficile da interpretare." },
  { id: 57, category: "1.1", difficulty: "difficile", q: "Quale approccio è coerente con una ricerca digitale consapevole?", a: { A: "Definire obiettivo, parole chiave e fonte più adatta al tipo di informazione cercata", B: "Cercare sempre il primo risultato senza leggere il contesto", C: "Evitare motori specializzati anche quando servono", D: "Usare solo parole casuali e generiche" }, correct: "A", exp: "Una ricerca consapevole richiede obiettivo, parole chiave e scelta della fonte." },
  { id: 58, category: "1.1", difficulty: "difficile", q: "Quale affermazione chiarisce correttamente il ruolo dell'utente rispetto agli algoritmi digitali?", a: { A: "L'utente non può mai essere influenzato dai contenuti proposti online", B: "L'utente dovrebbe essere consapevole che le proprie interazioni possono influenzare i contenuti visualizzati", C: "L'utente deve evitare sempre qualsiasi ricerca online", D: "L'utente non deve mai interrogarsi sulla provenienza dei contenuti" }, correct: "B", exp: "L'utente deve sapere che le interazioni influenzano i contenuti visualizzati." },
  { id: 59, category: "1.1", difficulty: "difficile", q: "Perché è importante diversificare i dataset usati nei sistemi di IA?", a: { A: "Per aumentare il numero di schede del browser", B: "Per ridurre la velocità dei motori di ricerca", C: "Per rappresentare equamente gruppi diversi e ridurre possibili bias", D: "Per impedire l'uso degli assistenti virtuali" }, correct: "C", exp: "Dataset diversificati favoriscono equità e riducono bias nei sistemi di IA." },
  { id: 60, category: "1.1", difficulty: "difficile", q: "Quale affermazione è più corretta sulla navigazione e ricerca online?", a: { A: "Riguarda solo la memorizzazione meccanica degli indirizzi web", B: "Riguarda solo l'uso di un browser specifico", C: "Riguarda solo l'acquisto di prodotti online", D: "Include la capacità di navigare, cercare, filtrare e comprendere contenuti digitali in modo consapevole" }, correct: "D", exp: "La competenza 1.1 riguarda navigazione, ricerca, filtro e comprensione dei contenuti digitali." },

  // ===== CAPITOLO 1.2 - FACILE (61-80) =====
  { id: 61, category: "1.2", difficulty: "facile", q: "Cosa significa valutare un contenuto digitale?", a: { A: "Analizzare la sua affidabilità", B: "Copiarlo", C: "Stamparlo", D: "Condividerlo" }, correct: "A", exp: "Valutare significa analizzare affidabilità e qualità delle informazioni." },
  { id: 62, category: "1.2", difficulty: "facile", q: "Qual è un elemento importante per valutare una fonte?", a: { A: "Il colore del sito", B: "L'autore", C: "Il numero di immagini", D: "La lunghezza del testo" }, correct: "B", exp: "L'autore è un indicatore chiave di credibilità." },
  { id: 63, category: "1.2", difficulty: "facile", q: "Una fonte è più affidabile se:", a: { A: "È molto lunga", B: "È scritta in inglese", C: "Proviene da un ente autorevole", D: "Ha molte pubblicità" }, correct: "C", exp: "Le fonti autorevoli garantiscono maggiore affidabilità." },
  { id: 64, category: "1.2", difficulty: "facile", q: "Cosa indica la data di pubblicazione?", a: { A: "Il costo", B: "L'autore", C: "Il formato", D: "L'aggiornamento" }, correct: "D", exp: "La data indica quanto l'informazione è aggiornata." },
  { id: 65, category: "1.2", difficulty: "facile", q: "Un contenuto promozionale ha lo scopo di:", a: { A: "Informare in modo neutrale", B: "Vendere o promuovere", C: "Educare", D: "Riassumere" }, correct: "B", exp: "Il contenuto promozionale ha finalità commerciale." },
  { id: 66, category: "1.2", difficulty: "facile", q: "Qual è un segnale di contenuto pubblicitario?", a: { A: "Linguaggio neutro", B: "Obiettività", C: "Invito all'acquisto", D: "Fonti citate" }, correct: "C", exp: "L'invito all'acquisto è tipico della pubblicità." },
  { id: 67, category: "1.2", difficulty: "facile", q: "Cosa significa 'fonte autorevole'?", a: { A: "Molto lunga", B: "Scritta bene", C: "Popolare", D: "Affidabile e riconosciuta" }, correct: "D", exp: "Una fonte autorevole è riconosciuta e affidabile." },
  { id: 68, category: "1.2", difficulty: "facile", q: "Per verificare un'informazione è utile:", a: { A: "Leggere solo un sito", B: "Confrontare più fonti", C: "Guardare solo immagini", D: "Ignorare la fonte" }, correct: "B", exp: "Confrontare fonti riduce il rischio di errore." },
  { id: 69, category: "1.2", difficulty: "facile", q: "Le fake news sono:", a: { A: "Notizie aggiornate", B: "Notizie verificate", C: "Notizie false o fuorvianti", D: "Notizie scientifiche" }, correct: "C", exp: "Le fake news sono informazioni false o manipolate." },
  { id: 70, category: "1.2", difficulty: "facile", q: "Un'informazione è attendibile se:", a: { A: "È condivisa da amici", B: "È confermata da fonti diverse", C: "È breve", D: "È recente" }, correct: "B", exp: "La verifica su più fonti aumenta l'attendibilità." },
  { id: 71, category: "1.2", difficulty: "facile", q: "La pertinenza indica:", a: { A: "La lunghezza", B: "Il costo", C: "La difficoltà", D: "Quanto è utile rispetto alla richiesta" }, correct: "D", exp: "La pertinenza misura l'utilità rispetto alla ricerca." },
  { id: 72, category: "1.2", difficulty: "facile", q: "Un linguaggio emotivo indica:", a: { A: "Neutralità", B: "Obiettività", C: "Possibile manipolazione", D: "Accuratezza" }, correct: "C", exp: "L'obiettività implica assenza di opinioni personali." },
  { id: 73, category: "1.2", difficulty: "facile", q: "Cosa si intende per bias?", a: { A: "Errore tecnico", B: "Pregiudizio", C: "Formato file", D: "Dimensione" }, correct: "B", exp: "Il bias indica una distorsione o parzialità." },
  { id: 74, category: "1.2", difficulty: "facile", q: "Una fonte aggiornata è:", a: { A: "Vecchia", B: "Non verificata", C: "Modificata recentemente", D: "Tradotta" }, correct: "C", exp: "L'aggiornamento è essenziale per validità dei dati." },
  { id: 75, category: "1.2", difficulty: "facile", q: "I contenuti sponsorizzati sono:", a: { A: "Informazioni ufficiali", B: "Contenuti promozionali", C: "Dati tecnici", D: "Documenti pubblici" }, correct: "B", exp: "I contenuti sponsorizzati sono pubblicitari." },
  { id: 76, category: "1.2", difficulty: "facile", q: "L'autore di un contenuto serve a:", a: { A: "Decorare", B: "Riempire spazio", C: "Aumentare lunghezza", D: "Valutare credibilità" }, correct: "D", exp: "L'autore è fondamentale per valutare la credibilità." },
  { id: 77, category: "1.2", difficulty: "facile", q: "Confrontare fonti serve a:", a: { A: "Perdere tempo", B: "Confondere", C: "Verificare attendibilità", D: "Ridurre contenuti" }, correct: "C", exp: "Il confronto tra fonti permette una visione completa." },
  { id: 78, category: "1.2", difficulty: "facile", q: "Una fonte istituzionale è:", a: { A: "Un blog personale", B: "Un social", C: "Un forum", D: "Un sito ufficiale" }, correct: "D", exp: "Le fonti istituzionali sono generalmente più affidabili." },
  { id: 79, category: "1.2", difficulty: "facile", q: "Un contenuto oggettivo è:", a: { A: "Basato su opinioni", B: "Esagerato", C: "Basato su fatti", D: "Pubblicitario" }, correct: "C", exp: "L'obiettività evita interpretazioni personali." },
  { id: 80, category: "1.2", difficulty: "facile", q: "L'obiettivo della valutazione è:", a: { A: "Copiare dati", B: "Stampare file", C: "Salvare immagini", D: "Capire se l'informazione è affidabile" }, correct: "D", exp: "La valutazione serve a determinare l'affidabilità dell'informazione." },

  // ===== CAPITOLO 1.2 - MEDIA (81-100) =====
  { id: 81, category: "1.2", difficulty: "media", q: "Qual è il primo passo nella valutazione di una fonte?", a: { A: "Verificare l'autore", B: "Scaricare il file", C: "Condividerlo", D: "Stamparlo" }, correct: "A", exp: "Il primo passo è verificare l'autore della fonte." },
  { id: 82, category: "1.2", difficulty: "media", q: "Una fonte accademica è:", a: { A: "Un blog", B: "Una pubblicità", C: "Un social", D: "Una pubblicazione scientifica" }, correct: "D", exp: "Le fonti accademiche sono verificate e attendibili." },
  { id: 83, category: "1.2", difficulty: "media", q: "La presenza di pubblicità indica:", a: { A: "Sempre falsità", B: "Possibile interesse commerciale", C: "Qualità elevata", D: "Veridicità" }, correct: "B", exp: "Le pubblicità cercano di influenzare l'utente." },
  { id: 84, category: "1.2", difficulty: "media", q: "Il dominio .gov indica:", a: { A: "Sito personale", B: "Sito commerciale", C: "Sito governativo", D: "Sito anonimo" }, correct: "C", exp: "Il dominio .gov identifica siti governativi." },
  { id: 85, category: "1.2", difficulty: "media", q: "L'analisi comparativa serve a:", a: { A: "Eliminare dati", B: "Confrontare fonti", C: "Copiare contenuti", D: "Tradurre testi" }, correct: "B", exp: "L'analisi comparativa confronta diverse fonti." },
  { id: 86, category: "1.2", difficulty: "media", q: "Una fonte non aggiornata può essere:", a: { A: "Più affidabile", B: "Irrilevante", C: "Più veloce", D: "Più completa" }, correct: "B", exp: "Una fonte non aggiornata può essere irrilevante." },
  { id: 87, category: "1.2", difficulty: "media", q: "L'accuratezza indica:", a: { A: "Velocità", B: "Precisione delle informazioni", C: "Lunghezza", D: "Grafica" }, correct: "B", exp: "L'accuratezza indica precisione e correttezza." },
  { id: 88, category: "1.2", difficulty: "media", q: "Un conflitto di interesse si ha quando:", a: { A: "L'autore è anonimo", B: "Il contenuto è breve", C: "L'autore ha interessi personali", D: "Il sito è lento" }, correct: "C", exp: "Il conflitto di interesse può influenzare l'obbiettività." },
  { id: 89, category: "1.2", difficulty: "media", q: "La diversificazione delle fonti permette:", a: { A: "Riduzione informazioni", B: "Visione più completa", C: "Più confusione", D: "Più pubblicità" }, correct: "B", exp: "La diversificazione riduce il rischio di bias." },
  { id: 90, category: "1.2", difficulty: "media", q: "Un contenuto aggiornato dimostra:", a: { A: "Disinteresse", B: "Impegno dell'autore", C: "Casualità", D: "Pubblicità" }, correct: "B", exp: "L'aggiornamento dimostra cura del contenuto." },
  { id: 91, category: "1.2", difficulty: "media", q: "Una fonte primaria è:", a: { A: "Opinione", B: "Riassunto", C: "Documento originale", D: "Commento" }, correct: "C", exp: "Le fonti primarie sono dirette e verificabili." },
  { id: 92, category: "1.2", difficulty: "media", q: "Il linguaggio neutrale indica:", a: { A: "Bias", B: "Pubblicità", C: "Emozione", D: "Oggettività" }, correct: "D", exp: "Il linguaggio neutrale è indice di oggettività." },
  { id: 93, category: "1.2", difficulty: "media", q: "Le omissioni nei contenuti indicano:", a: { A: "Completezza", B: "Mancanza di informazioni", C: "Precisione", D: "Aggiornamento" }, correct: "B", exp: "Le omissioni possono nascondere informazioni importanti." },
  { id: 94, category: "1.2", difficulty: "media", q: "Un sito affidabile cita:", a: { A: "Opinioni", B: "Pubblicità", C: "Fonti verificabili", D: "Commenti" }, correct: "C", exp: "Le fonti verificabili aumentano l'affidabilità." },
  { id: 95, category: "1.2", difficulty: "media", q: "La verifica incrociata consiste in:", a: { A: "Copiare dati", B: "Confrontare fonti diverse", C: "Eliminare fonti", D: "Ignorare dati" }, correct: "B", exp: "La verifica incrociata aumenta affidabilità." },
  { id: 96, category: "1.2", difficulty: "media", q: "Un contenuto virale è:", a: { A: "Sempre vero", B: "Sempre falso", C: "Molto condiviso", D: "Sempre aggiornato" }, correct: "C", exp: "La viralità non è indice di veridicità." },
  { id: 97, category: "1.2", difficulty: "media", q: "La reputazione della fonte indica:", a: { A: "Grafica", B: "Credibilità", C: "Lunghezza", D: "Colore" }, correct: "B", exp: "La reputazione è un indicatore di credibilità." },
  { id: 98, category: "1.2", difficulty: "media", q: "Un contenuto manipolato può essere:", a: { A: "Chiaro", B: "Completo", C: "Alterato", D: "Neutro" }, correct: "C", exp: "La manipolazione altera il contenuto originale." },
  { id: 99, category: "1.2", difficulty: "media", q: "La trasparenza indica:", a: { A: "Mancanza autore", B: "Chiarezza delle informazioni", C: "Pubblicità", D: "Velocità" }, correct: "B", exp: "La trasparenza è chiarezza nelle informazioni." },
  { id: 100, category: "1.2", difficulty: "media", q: "L'affidabilità si basa su:", a: { A: "Emozioni", B: "Opinioni", C: "Fonti e verifiche", D: "Lunghezza" }, correct: "C", exp: "Affidabilità = fonti verificabili e accurate." },

  // ===== CAPITOLO 1.2 - DIFFICILE (101-120) =====
  { id: 101, category: "1.2", difficulty: "difficile", q: "Un deepfake è:", a: { A: "Un errore tecnico", B: "Un contenuto IA falsificato", C: "Un file corrotto", D: "Un formato video" }, correct: "B", exp: "I deepfake sono contenuti artificiali realistici." },
  { id: 102, category: "1.2", difficulty: "difficile", q: "Il rischio dei deepfake è:", a: { A: "Migliorare qualità", B: "Ridurre dati", C: "Diffondere disinformazione", D: "Velocizzare internet" }, correct: "C", exp: "I deepfake possono diffondere disinformazione." },
  { id: 103, category: "1.2", difficulty: "difficile", q: "L'infodemia è:", a: { A: "Mancanza informazioni", B: "Sovraccarico informativo", C: "Velocità rete", D: "Sicurezza" }, correct: "B", exp: "L'infodemia è sovraccarico di informazioni." },
  { id: 104, category: "1.2", difficulty: "difficile", q: "La filter bubble comporta:", a: { A: "Più dati", B: "Meno contenuti", C: "Contenuti personalizzati", D: "Più sicurezza" }, correct: "C", exp: "La filter bubble crea una bolla informativa personalizzata." },
  { id: 105, category: "1.2", difficulty: "difficile", q: "La camera dell'eco indica:", a: { A: "Diversità opinioni", B: "Ripetizione delle stesse idee", C: "Aggiornamento", D: "Neutralità" }, correct: "B", exp: "La camera dell'eco amplifica le stesse opinioni." },
  { id: 106, category: "1.2", difficulty: "difficile", q: "Gli algoritmi dei social mostrano:", a: { A: "Contenuti casuali", B: "Contenuti personalizzati", C: "Solo pubblicità", D: "Solo notizie" }, correct: "B", exp: "Gli algoritmi personalizzano i contenuti in base ai dati utente." },
  { id: 107, category: "1.2", difficulty: "difficile", q: "Il NLP serve a:", a: { A: "Comprimere file", B: "Analizzare linguaggio", C: "Salvare dati", D: "Eliminare contenuti" }, correct: "B", exp: "Il NLP aiuta a comprendere il linguaggio umano." },
  { id: 108, category: "1.2", difficulty: "difficile", q: "Il machine learning permette:", a: { A: "Stampare dati", B: "Apprendere dai dati", C: "Eliminare errori", D: "Ridurre memoria" }, correct: "B", exp: "Il machine learning apprende dai dati per migliorare." },
  { id: 109, category: "1.2", difficulty: "difficile", q: "Un dataset sbilanciato può causare:", a: { A: "Precisione", B: "Equità", C: "Bias", D: "Velocità" }, correct: "C", exp: "Dataset sbilanciati generano bias nei sistemi IA." },
  { id: 110, category: "1.2", difficulty: "difficile", q: "Per ridurre bias nei dati si deve:", a: { A: "Ridurre dati", B: "Diversificare dati", C: "Eliminare dati", D: "Copiare dati" }, correct: "B", exp: "L'equità richiede dati rappresentativi." },
  { id: 111, category: "1.2", difficulty: "difficile", q: "La credibilità di una fonte si valuta anche tramite:", a: { A: "Colore sito", B: "Design", C: "Autorevolezza", D: "Font" }, correct: "C", exp: "L'autorevolezza è un indicatore di credibilità." },
  { id: 112, category: "1.2", difficulty: "difficile", q: "Un contenuto aggiornato è importante perché:", a: { A: "È lungo", B: "È recente e valido", C: "È grafico", D: "È semplice" }, correct: "B", exp: "L'aggiornamento mantiene validità." },
  { id: 113, category: "1.2", difficulty: "difficile", q: "L'obiettività richiede:", a: { A: "Opinioni", B: "Emozioni", C: "Neutralità", D: "Pubblicità" }, correct: "C", exp: "L'obiettività evita distorsioni." },
  { id: 114, category: "1.2", difficulty: "difficile", q: "Un contenuto con bias è:", a: { A: "Oggettivo", B: "Completo", C: "Parziale", D: "Neutro" }, correct: "C", exp: "Il bias rende il contenuto parziale." },
  { id: 115, category: "1.2", difficulty: "difficile", q: "La valutazione critica richiede:", a: { A: "Fiducia cieca", B: "Analisi", C: "Velocità", D: "Condivisione" }, correct: "B", exp: "La valutazione critica richiede analisi attiva." },
  { id: 116, category: "1.2", difficulty: "difficile", q: "Un'informazione verificata è:", a: { A: "Condivisa", B: "Popolare", C: "Confermata", D: "Breve" }, correct: "C", exp: "La verifica conferma la correttezza." },
  { id: 117, category: "1.2", difficulty: "difficile", q: "L'affidabilità aumenta con:", a: { A: "Opinioni", B: "Pubblicità", C: "Fonti multiple", D: "Emozioni" }, correct: "C", exp: "Più fonti = maggiore affidabilità." },
  { id: 118, category: "1.2", difficulty: "difficile", q: "La valutazione delle fonti evita:", a: { A: "Velocità", B: "Accesso", C: "Disinformazione", D: "Condivisione" }, correct: "C", exp: "Valutare le fonti aiuta a evitare disinformazione." },
  { id: 119, category: "1.2", difficulty: "difficile", q: "Un contenuto completo è:", a: { A: "Parziale", B: "Dettagliato", C: "Breve", D: "Promozionale" }, correct: "B", exp: "Completezza = presenza di informazioni dettagliate." },
  { id: 120, category: "1.2", difficulty: "difficile", q: "L'analisi critica serve a:", a: { A: "Copiare", B: "Salvare", C: "Condividere", D: "Comprendere e valutare" }, correct: "D", exp: "L'obiettivo è comprendere e valutare." },

  // ===== CAPITOLO 1.3 - FACILE (121-140) =====
  { id: 121, category: "1.3", difficulty: "facile", q: "Cosa significa gestire dati digitali?", a: { A: "Organizzarli e conservarli", B: "Stamparli", C: "Eliminarli", D: "Condividerli" }, correct: "A", exp: "Gestire dati significa organizzarli e conservarli." },
  { id: 122, category: "1.3", difficulty: "facile", q: "Una cartella serve a:", a: { A: "Eliminare file", B: "Organizzare file", C: "Modificare file", D: "Stampare file" }, correct: "B", exp: "Le cartelle servono a strutturare i file." },
  { id: 123, category: "1.3", difficulty: "facile", q: "Un file è:", a: { A: "Un programma", B: "Un contenitore di dati", C: "Un dispositivo", D: "Un sistema operativo" }, correct: "B", exp: "Un file contiene dati digitali." },
  { id: 124, category: "1.3", difficulty: "facile", q: "Qual è un esempio di file?", a: { A: "Tastiera", B: "Monitor", C: "Documento Word", D: "Router" }, correct: "C", exp: "Un documento Word è un file." },
  { id: 125, category: "1.3", difficulty: "facile", q: "Un nome file corretto dovrebbe essere:", a: { A: "Casuale", B: "Lungo", C: "Con simboli strani", D: "Chiaro e descrittivo" }, correct: "D", exp: "Un nome chiaro facilita la gestione." },
  { id: 126, category: "1.3", difficulty: "facile", q: "L'archiviazione serve a:", a: { A: "Eliminare dati", B: "Salvare dati", C: "Copiare dati", D: "Stampare dati" }, correct: "B", exp: "Archiviare significa salvare dati." },
  { id: 127, category: "1.3", difficulty: "facile", q: "Un dispositivo di archiviazione è:", a: { A: "Mouse", B: "Hard disk", C: "Tastiera", D: "Monitor" }, correct: "B", exp: "L'hard disk è un dispositivo di memoria." },
  { id: 128, category: "1.3", difficulty: "facile", q: "Il cloud è:", a: { A: "Un dispositivo fisico", B: "Un software locale", C: "Uno spazio online", D: "Una cartella" }, correct: "C", exp: "Il cloud è spazio online accessibile via Internet." },
  { id: 129, category: "1.3", difficulty: "facile", q: "Un file eliminato finisce:", a: { A: "Nel browser", B: "Nel cloud", C: "Nel cestino", D: "Nel desktop" }, correct: "C", exp: "I file eliminati vanno nel cestino." },
  { id: 130, category: "1.3", difficulty: "facile", q: "I contatti su smartphone servono a:", a: { A: "Navigare", B: "Comunicare", C: "Stampare", D: "Salvare file" }, correct: "B", exp: "I contatti servono per comunicare." },
  { id: 131, category: "1.3", difficulty: "facile", q: "Una chiavetta USB serve a:", a: { A: "Stampare", B: "Archiviare dati", C: "Navigare", D: "Scrivere" }, correct: "B", exp: "La USB memorizza e trasporta dati." },
  { id: 132, category: "1.3", difficulty: "facile", q: "Un file PDF è:", a: { A: "Un video", B: "Un audio", C: "Un documento", D: "Un programma" }, correct: "C", exp: "Il PDF è un formato documento." },
  { id: 133, category: "1.3", difficulty: "facile", q: "Il backup è:", a: { A: "Eliminazione dati", B: "Copia di sicurezza", C: "Condivisione", D: "Compressione" }, correct: "B", exp: "Il backup è una copia di sicurezza." },
  { id: 134, category: "1.3", difficulty: "facile", q: "Il desktop è:", a: { A: "Una stampante", B: "Un file", C: "Un'area del sistema", D: "Un cloud" }, correct: "C", exp: "Il desktop è l'interfaccia principale." },
  { id: 135, category: "1.3", difficulty: "facile", q: "Un file immagine può essere:", a: { A: "MP3", B: "JPEG", C: "TXT", D: "EXE" }, correct: "B", exp: "JPEG è formato immagine." },
  { id: 136, category: "1.3", difficulty: "facile", q: "Salvare un file significa:", a: { A: "Eliminarlo", B: "Modificarlo", C: "Chiuderlo", D: "Memorizzarlo" }, correct: "D", exp: "Salvare = memorizzare dati." },
  { id: 137, category: "1.3", difficulty: "facile", q: "Una cartella può contenere:", a: { A: "Solo immagini", B: "Solo testi", C: "Solo video", D: "Più tipi di file" }, correct: "D", exp: "Le cartelle possono contenere vari file." },
  { id: 138, category: "1.3", difficulty: "facile", q: "La ricerca file serve a:", a: { A: "Eliminare", B: "Trovare", C: "Stampare", D: "Copiare" }, correct: "B", exp: "Serve per trovare file rapidamente." },
  { id: 139, category: "1.3", difficulty: "facile", q: "Un file video è:", a: { A: "JPG", B: "MP3", C: "MP4", D: "TXT" }, correct: "C", exp: "MP4 è formato video." },
  { id: 140, category: "1.3", difficulty: "facile", q: "La gestione dei file serve a:", a: { A: "Confondere", B: "Velocizzare", C: "Disordinare", D: "Organizzare" }, correct: "D", exp: "La gestione organizza i dati." },

  // ===== CAPITOLO 1.3 - MEDIA (141-160) =====
  { id: 141, category: "1.3", difficulty: "media", q: "Una buona struttura di cartelle deve essere:", a: { A: "Casuale", B: "Complessa", C: "Logica", D: "Disordinata" }, correct: "C", exp: "Una struttura logica facilita il recupero." },
  { id: 142, category: "1.3", difficulty: "media", q: "L'archiviazione locale avviene su:", a: { A: "Server remoti", B: "Internet", C: "Dispositivi fisici", D: "Cloud" }, correct: "C", exp: "L'archiviazione locale è su dispositivo fisico." },
  { id: 143, category: "1.3", difficulty: "media", q: "Il cloud permette di:", a: { A: "Stampare file", B: "Accedere ai dati online", C: "Eliminare dati", D: "Bloccare file" }, correct: "B", exp: "Il cloud consente accesso remoto." },
  { id: 144, category: "1.3", difficulty: "media", q: "Uno svantaggio del cloud è:", a: { A: "Accesso remoto", B: "Condivisione", C: "Dipendenza da Internet", D: "Backup" }, correct: "C", exp: "Il cloud richiede connessione Internet." },
  { id: 145, category: "1.3", difficulty: "media", q: "Un vantaggio dell'archiviazione locale è:", a: { A: "Accesso offline", B: "Accesso globale", C: "Condivisione facile", D: "Collaborazione" }, correct: "A", exp: "L'archiviazione locale non richiede Internet." },
  { id: 146, category: "1.3", difficulty: "media", q: "Un file RAW è:", a: { A: "Compresso", B: "Non compresso", C: "Audio", D: "Testo" }, correct: "B", exp: "RAW è un formato non compresso." },
  { id: 147, category: "1.3", difficulty: "media", q: "La dimensione dei file dipende da:", a: { A: "Colore", B: "Nome", C: "Risoluzione", D: "Cartella" }, correct: "C", exp: "La risoluzione influenza la dimensione del file." },
  { id: 148, category: "1.3", difficulty: "media", q: "Un file grande:", a: { A: "È sempre migliore", B: "Occupà più spazio", C: "È più veloce", D: "È inutile" }, correct: "B", exp: "I file grandi richiedono più spazio." },
  { id: 149, category: "1.3", difficulty: "media", q: "I file multimediali sono:", a: { A: "Solo testo", B: "Solo immagini", C: "Contenuti audio/video", D: "Codice" }, correct: "C", exp: "I file multimediali includono audio e video." },
  { id: 150, category: "1.3", difficulty: "media", q: "Un backup serve per:", a: { A: "Recuperare dati", B: "Eliminare dati", C: "Stampare", D: "Condividere" }, correct: "A", exp: "Il backup protegge dalla perdita dati." },
  { id: 151, category: "1.3", difficulty: "media", q: "La sincronizzazione cloud consente:", a: { A: "Eliminazione", B: "Aggiornamento automatico", C: "Compressione", D: "Stampa" }, correct: "B", exp: "La sincronizzazione aggiorna tra dispositivi." },
  { id: 152, category: "1.3", difficulty: "media", q: "Un contatto può contenere:", a: { A: "Solo nome", B: "Solo telefono", C: "Solo email", D: "Più informazioni" }, correct: "D", exp: "I contatti includono più informazioni." },
  { id: 153, category: "1.3", difficulty: "media", q: "Modificare un contatto significa:", a: { A: "Eliminarlo", B: "Aggiornarlo", C: "Stamparlo", D: "Bloccarlo" }, correct: "B", exp: "Modificare aggiorna i dati del contatto." },
  { id: 154, category: "1.3", difficulty: "media", q: "L'ordinamento file serve a:", a: { A: "Disordinare", B: "Organizzare", C: "Eliminare", D: "Copiare" }, correct: "B", exp: "Ordinare aiuta a organizzare." },
  { id: 155, category: "1.3", difficulty: "media", q: "Un file duplicato è:", a: { A: "Unico", B: "Copia", C: "Corrotto", D: "Vuoto" }, correct: "B", exp: "I file duplicati occupano spazio inutile." },
  { id: 156, category: "1.3", difficulty: "media", q: "I dati nel cloud sono:", a: { A: "Solo locali", B: "Solo offline", C: "Accessibili online", D: "Inaccessibili" }, correct: "C", exp: "I dati nel cloud sono accessibili online." },
  { id: 157, category: "1.3", difficulty: "media", q: "La sicurezza dei dati riguarda:", a: { A: "Colore", B: "Protezione", C: "Nome", D: "Dimensione" }, correct: "B", exp: "La sicurezza protegge i dati." },
  { id: 158, category: "1.3", difficulty: "media", q: "Un dispositivo esterno è:", a: { A: "CPU", B: "RAM", C: "Hard disk esterno", D: "GPU" }, correct: "C", exp: "L'hard disk esterno è un dispositivo di archiviazione." },
  { id: 159, category: "1.3", difficulty: "media", q: "La gestione dei contatti facilita:", a: { A: "Stampa", B: "Comunicazione", C: "Navigazione", D: "Backup" }, correct: "B", exp: "Gestire contatti facilita la comunicazione." },
  { id: 160, category: "1.3", difficulty: "media", q: "Una cartella ben organizzata permette:", a: { A: "Confusione", B: "Accesso rapido", C: "Errori", D: "Duplicati" }, correct: "B", exp: "L'organizzazione migliora l'accesso." },

  // ===== CAPITOLO 1.3 - DIFFICILE (161-180) =====
  { id: 161, category: "1.3", difficulty: "difficile", q: "I big data sono:", a: { A: "Piccoli dati", B: "Grandi volumi di dati", C: "File locali", D: "File temporanei" }, correct: "B", exp: "I big data sono grandi quantità di dati." },
  { id: 162, category: "1.3", difficulty: "difficile", q: "I big data servono a:", a: { A: "Eliminare file", B: "Analizzare informazioni", C: "Stampare dati", D: "Ridurre dati" }, correct: "B", exp: "L'analisi dei big data produce informazioni utili." },
  { id: 163, category: "1.3", difficulty: "difficile", q: "La compressione dati serve a:", a: { A: "Aumentare dimensione", B: "Ridurre spazio", C: "Eliminare dati", D: "Bloccare file" }, correct: "B", exp: "La compressione riduce dimensioni." },
  { id: 164, category: "1.3", difficulty: "difficile", q: "Un formato lossless:", a: { A: "Perde dati", B: "Non perde qualità", C: "È audio", D: "È video" }, correct: "B", exp: "Lossless = nessuna perdita di qualità." },
  { id: 165, category: "1.3", difficulty: "difficile", q: "JPEG è:", a: { A: "Lossless", B: "Lossy", C: "Audio", D: "Testo" }, correct: "B", exp: "JPEG è un formato lossy (con perdita)." },
  { id: 166, category: "1.3", difficulty: "difficile", q: "MP4 è un formato:", a: { A: "Testo", B: "Video", C: "Immagine", D: "Sistema" }, correct: "B", exp: "MP4 è un contenitore video." },
  { id: 167, category: "1.3", difficulty: "difficile", q: "La scelta del formato incide su:", a: { A: "Colore", B: "Dimensione e qualità", C: "Nome", D: "Cartella" }, correct: "B", exp: "Il formato influisce sulla dimensione." },
  { id: 168, category: "1.3", difficulty: "difficile", q: "Un grafico a barre serve a:", a: { A: "Sommare", B: "Confrontare dati", C: "Scrivere", D: "Eliminare" }, correct: "B", exp: "Il grafico a barre confronta valori." },
  { id: 169, category: "1.3", difficulty: "difficile", q: "Un diagramma a torta rappresenta:", a: { A: "Confronto", B: "Parti di un totale", C: "Testo", D: "Audio" }, correct: "B", exp: "Il grafico a torta mostra proporzioni." },
  { id: 170, category: "1.3", difficulty: "difficile", q: "Un istogramma mostra:", a: { A: "Testi", B: "Distribuzione dati", C: "Video", D: "Audio" }, correct: "B", exp: "L'istogramma rappresenta distribuzioni." },
  { id: 171, category: "1.3", difficulty: "difficile", q: "Un foglio elettronico è:", a: { A: "Documento testo", B: "Tabella dati", C: "Video", D: "Audio" }, correct: "B", exp: "Il foglio elettronico gestisce dati tabellari." },
  { id: 172, category: "1.3", difficulty: "difficile", q: "Una cella è:", a: { A: "Riga", B: "Colonna", C: "Intersezione riga-colonna", D: "File" }, correct: "C", exp: "La cella è intersezione riga-colonna." },
  { id: 173, category: "1.3", difficulty: "difficile", q: "I dati aperti sono:", a: { A: "Privati", B: "Protetti", C: "Accessibili", D: "Eliminati" }, correct: "C", exp: "Gli open data sono accessibili liberamente." },
  { id: 174, category: "1.3", difficulty: "difficile", q: "Il cloud favorisce:", a: { A: "Isolamento", B: "Collaborazione", C: "Eliminazione", D: "Riduzione" }, correct: "B", exp: "Il cloud facilita collaborazione." },
  { id: 175, category: "1.3", difficulty: "difficile", q: "La gestione dati efficace richiede:", a: { A: "Disordine", B: "Metodo", C: "Casualità", D: "Velocità" }, correct: "B", exp: "Serve metodo per gestione efficace." },
  { id: 176, category: "1.3", difficulty: "difficile", q: "L'archiviazione sicura prevede:", a: { A: "Nessuna copia", B: "Backup", C: "Eliminazione", D: "Condivisione" }, correct: "B", exp: "Il backup protegge i dati." },
  { id: 177, category: "1.3", difficulty: "difficile", q: "La perdita dati può derivare da:", a: { A: "Backup", B: "Sicurezza", C: "Guasto hardware", D: "Cloud" }, correct: "C", exp: "I guasti hardware causano perdita dati." },
  { id: 178, category: "1.3", difficulty: "difficile", q: "Un sistema organizzato riduce:", a: { A: "Efficienza", B: "Errori", C: "Accesso", D: "Velocità" }, correct: "B", exp: "L'organizzazione riduce errori." },
  { id: 179, category: "1.3", difficulty: "difficile", q: "I dati strutturati sono:", a: { A: "Disordinati", B: "Organizzati", C: "Casuali", D: "Eliminati" }, correct: "B", exp: "Dati strutturati = organizzati." },
  { id: 180, category: "1.3", difficulty: "difficile", q: "La visualizzazione dati serve a:", a: { A: "Confondere", B: "Nascondere", C: "Ridurre", D: "Comprendere meglio" }, correct: "D", exp: "La visualizzazione aiuta la comprensione." }
];

// ============================================
// NAVIGAZIONE FLUIDA E MODAL POPUP
// ============================================
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith('teoria.html')) {
    const homeBtn = document.querySelector('.home-button');
    if (homeBtn) {
      homeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'index.html';
      });
    }
  }
});

// ============================================
// STATO DEL QUIZ
// ============================================
let quizState = {
  questions: [],
  currentIndex: 0,
  score: 0,
  answers: [],
  timer: null,
  timeLeft: 0,
  isRunning: false
};

// ============================================
// GESTIONE MODAL E NAVIGAZIONE
// ============================================
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
// SELEZIONE CAPITOLO E AVVIO QUIZ
// ============================================
function selectChapter(chapter) {
  // Filtra domande per capitolo
  let pool = chapter === 'all'
    ? [...PANIERE]
    : PANIERE.filter(d => d.category === chapter);
  
  // Estrai NUM_DOMANDE casuali
  let selected = [];
  let shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  selected = shuffled.slice(0, Math.min(CONFIG.NUM_DOMANDE, shuffled.length));
  
  // Inizializza stato quiz
  quizState.questions = selected;
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.answers = [];
  quizState.timeLeft = CONFIG.DURATA_TIMER;
  quizState.isRunning = false;
  
  // Mostra schermata quiz
  document.getElementById('screen-chapter-select').classList.remove('active');
  document.getElementById('screen-quiz').classList.add('active');
  
  // Aggiorna UI
  document.getElementById('progress-bar').style.width = '0%';
  
  // Mostra prima domanda
  showQuestion();
  startTimer();
}

// ============================================
// MOSTRA DOMANDA
// ============================================
function showQuestion() {
  const q = quizState.questions[quizState.currentIndex];
  const container = document.getElementById('question-container');
  
  let html = `<div class="question-number">Domanda ${quizState.currentIndex + 1} di ${quizState.questions.length}</div>`;
  html += `<div class="question-text">${q.q}</div>`;
  html += `<div class="answers-grid">`;
  
  for (let letter of ['A', 'B', 'C', 'D']) {
    const disabled = quizState.answers[quizState.currentIndex] ? 'disabled' : '';
    const selected = quizState.answers[quizState.currentIndex] === letter ? 'selected' : '';
    const correct = quizState.answers[quizState.currentIndex] && letter === q.correct ? 'correct' : '';
    const wrong = quizState.answers[quizState.currentIndex] === letter && letter !== q.correct ? 'wrong' : '';
    
    html += `<button class="answer-btn ${disabled} ${selected} ${correct} ${wrong}" onclick="selectAnswer('${letter}')" ${disabled}>
      <span class="answer-letter">${letter}</span>
      <span class="answer-text">${q.a[letter]}</span>
    </button>`;
  }
  
  html += `</div>`;
  
  // Spiegazione se già risposta
  if (quizState.answers[quizState.currentIndex]) {
    html += `<div class="explanation-box">${q.exp}</div>`;
    html += `<button class="btn-primary next-btn" onclick="nextQuestion()">`;
    if (quizState.currentIndex < quizState.questions.length - 1) {
      html += `➡️ Prossima Domanda`;
    } else {
      html += `📊 Vedi Risultati`;
    }
    html += `</button>`;
  }
  
  container.innerHTML = html;
  
  // Aggiorna progress bar
  const progress = ((quizState.currentIndex + 1) / quizState.questions.length) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
}

function selectAnswer(letter) {
  if (quizState.answers[quizState.currentIndex]) return;
  
  const q = quizState.questions[quizState.currentIndex];
  quizState.answers[quizState.currentIndex] = letter;
  
  if (letter === q.correct) {
    quizState.score++;
  }
  
  showQuestion();
  
  // Avanza automaticamente dopo 0.5 secondi
  setTimeout(() => {
    if (quizState.answers[quizState.currentIndex]) {
      nextQuestion();
    }
  }, 500);
}

function nextQuestion() {
  quizState.currentIndex++;
  
  if (quizState.currentIndex >= quizState.questions.length) {
    showResults();
  } else {
    showQuestion();
  }
}

// ============================================
// TIMER
// ============================================
function startTimer() {
  if (quizState.isRunning) return;
  quizState.isRunning = true;
  
  updateTimerDisplay();
  
  quizState.timer = setInterval(() => {
    quizState.timeLeft--;
    updateTimerDisplay();
    
    if (quizState.timeLeft <= CONFIG.ALERT_TIMER_SOGLIA) {
      document.getElementById('timer-alert').classList.remove('hidden');
    }
    
    if (quizState.timeLeft <= 0) {
      clearInterval(quizState.timer);
      quizState.isRunning = false;
      showResults();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const min = Math.floor(quizState.timeLeft / 60);
  const sec = quizState.timeLeft % 60;
  document.getElementById('timer').textContent =
    `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

// ============================================
// RISULTATI
// ============================================
function showResults() {
  clearInterval(quizState.timer);
  quizState.isRunning = false;
  
  document.getElementById('screen-quiz').classList.remove('active');
  document.getElementById('screen-results').classList.add('active');
  
  const total = quizState.questions.length;
  const score = quizState.score;
  const percentage = Math.round((score / total) * 100);
  
  let grade, gradeClass;
  if (percentage >= CONFIG.SOGLIA_ECCELLENTE) {
    grade = 'Eccellente! 🏆';
    gradeClass = 'excellent';
  } else if (percentage >= CONFIG.SOGLIA_SUFFICIENTE) {
    grade = 'Sufficiente 👍';
    gradeClass = 'sufficient';
  } else {
    grade = 'Migliorabile 📖';
    gradeClass = 'poor';
  }
  
  document.getElementById('score-card').innerHTML = `
    <div class="score-circle ${gradeClass}">
      <span class="score-percentage">${percentage}%</span>
      <span class="score-label">${grade}</span>
    </div>
    <div class="score-details">
      <p><strong>Risposte corrette:</strong> ${score}/${total}</p>
      <p><strong>Timer scaduto:</strong> ${quizState.isRunning ? 'No' : 'Sì'}</p>
    </div>
  `;
  
  // Riepilogo
  let reviewHtml = '';
  quizState.questions.forEach((q, i) => {
    const userAnswer = quizState.answers[i] || 'Non risposta';
    const isCorrect = userAnswer === q.correct;
    reviewHtml += `
      <div class="review-item ${isCorrect ? 'review-correct' : 'review-wrong'}">
        <div class="review-q">${i + 1}. ${q.q}</div>
        <div class="review-answer">
          <span><strong>Tua risposta:</strong> ${userAnswer}${userAnswer !== 'Non risposta' ? ' - ' + q.a[userAnswer] : ''}</span>
          ${!isCorrect ? `<span class="review-correct-answer"><strong>Corretta:</strong> ${q.correct} - ${q.a[q.correct]}</span>` : ''}
        </div>
        <div class="review-exp">${q.exp}</div>
      </div>
    `;
  });
  
  document.getElementById('results-list').innerHTML = reviewHtml;
}

// ============================================
// NAVIGAZIONE HOME
// ============================================
function confirmBackHome() {
  if (confirm('Sei sicuro di voler tornare alla home? Il quiz verrà perso.')) {
    clearInterval(quizState.timer);
    quizState.isRunning = false;
    document.getElementById('screen-quiz').classList.remove('active');
    document.getElementById('screen-welcome').classList.add('active');
  }
}

function navigateToTeoria() {
  window.location.href = 'teoria.html';
}

function restartQuiz() {
  document.getElementById('screen-results').classList.remove('active');
  document.getElementById('screen-welcome').classList.add('active');
  quizState.questions = [];
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.answers = [];
  quizState.isRunning = false;
}
