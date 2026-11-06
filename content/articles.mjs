// Articoli del blog. Ogni articolo: metadati SEO + corpo HTML (gli <h2 id> diventano l'indice).
// Parole chiave ricavate dai suggerimenti di ricerca Google in italiano (novembre 2026).

export const articles = [
  {
    slug: 'supporto-tra-pari-cos-e',
    title: 'Supporto tra pari: cos\'è e perché funziona',
    seoTitle: 'Supporto tra pari: cos\'è, chi sono gli esperti per esperienza (ESP)',
    description: 'Cos\'è il supporto tra pari (peer support) nella salute mentale, chi sono gli esperti per esperienza e perché parlare con chi ci è passato aiuta davvero.',
    keywords: ['supporto tra pari', 'peer support salute mentale', 'esperto in supporto tra pari', 'esperti per esperienza', 'ESP'],
    category: 'Supporto tra pari',
    cover: 'ascolto',
    coverAlt: 'Due donne sedute a un tavolino che parlano con calma.',
    readMin: 6,
    excerpt: 'Parlare con qualcuno che ha vissuto qualcosa di simile cambia il modo in cui ci si sente capiti. Ecco cos\'è il supporto tra pari e cosa può (e non può) fare.',
    summary: [
      'Il supporto tra pari è l\'aiuto offerto da persone che hanno vissuto una difficoltà simile.',
      'Gli esperti per esperienza (ESP) hanno trasformato il proprio vissuto in una competenza.',
      'Non sostituisce medici e psicologi: li affianca.',
    ],
    body: `
<p>C'è una frase che sentiamo spesso nei nostri incontri: <em>«Finalmente qualcuno che non devo convincere»</em>. È il cuore del <strong>supporto tra pari</strong>: l'aiuto che arriva da chi ha attraversato una difficoltà simile alla tua e sa, senza bisogno di spiegazioni, di cosa stai parlando.</p>

<h2 id="cos-e">Cos'è il supporto tra pari</h2>
<p>Il supporto tra pari (in inglese <em>peer support</em>) è una relazione di aiuto tra persone che condividono un'esperienza: un periodo di depressione o di ansia, una dipendenza, un lutto, la malattia di un familiare, la solitudine. Chi offre supporto non lo fa da una posizione "più in alto", ma da una posizione <strong>accanto</strong>: "io ci sono passato, e sono ancora qui".</p>
<p>Non è una chiacchierata qualsiasi e non è una terapia. È uno spazio di ascolto, confronto e speranza concreta, dove l'esperienza vissuta diventa una risorsa per qualcun altro.</p>

<h2 id="esperti-per-esperienza">Chi sono gli esperti per esperienza</h2>
<p>In Italia si parla di <strong>ESP, Esperti in Supporto tra Pari</strong>, e in alcune realtà di <strong>UFE, Utenti e Familiari Esperti</strong>. Sono persone che hanno vissuto in prima persona, come utenti o come familiari, un problema di salute mentale e che hanno trasformato quell'esperienza in una competenza, spesso attraverso percorsi di formazione specifici.</p>
<p>Oggi in diverse regioni gli esperti per esperienza collaborano con i servizi di salute mentale, nei gruppi e nelle attività sul territorio. Il loro valore non sta in un titolo, ma in qualcosa che nessun manuale insegna: sapere com'è <em>da dentro</em>.</p>

<h2 id="perche-funziona">Perché funziona</h2>
<ul>
  <li><strong>Ci si sente meno soli.</strong> Scoprire che altri hanno provato le stesse cose riduce la vergogna e l'isolamento.</li>
  <li><strong>La speranza diventa credibile.</strong> Sentire "si può stare meglio" da chi ci è riuscito vale più di cento rassicurazioni.</li>
  <li><strong>Si impara da chi ha già fatto la strada.</strong> Piccoli trucchi quotidiani, modi di chiedere aiuto, come parlare con la famiglia o con il medico.</li>
  <li><strong>Lo stigma si abbassa.</strong> Parlare apertamente di fragilità, alla pari, rende normale ciò che spesso viene nascosto.</li>
</ul>

<blockquote>«Non devi spiegarci tutto. Qualcosa lo sappiamo già.»</blockquote>

<h2 id="cosa-non-e">Cosa il supporto tra pari non è</h2>
<p>È importante essere chiari: il supporto tra pari <strong>non sostituisce</strong> medici, psicologi, psichiatri o i servizi pubblici. Non facciamo diagnosi e non diamo terapie. Lavoriamo al loro fianco e, quando serve, ti aiutiamo a raggiungerli: per esempio il medico di base o il Centro Psico-Sociale (CPS) della tua zona.</p>
<p>Se ti trovi in una situazione di pericolo, non aspettare: chiama il <strong>112</strong>.</p>

<h2 id="come-iniziare">Come iniziare</h2>
<p>A Lived Experiences il supporto tra pari prende forme diverse: <a href="/#attivita">incontri individuali di ascolto alla pari</a>, <a href="/blog/gruppi-auto-mutuo-aiuto/">gruppi di auto mutuo aiuto</a>, spazi dedicati ai familiari. Tutto è gratuito e riservato.</p>
<p>Non serve sapere già cosa dire. Basta un messaggio.</p>
`,
    faqs: [
      { q: 'Il supporto tra pari è gratuito?', a: 'Sì. Gli incontri di ascolto alla pari e i gruppi di Lived Experiences sono gratuiti.' },
      { q: 'Chi offre il supporto tra pari è uno psicologo?', a: 'No. È una persona che ha vissuto un\'esperienza simile alla tua e si è preparata ad ascoltare. Non sostituisce psicologi e medici, ma li affianca.' },
    ],
    related: ['gruppi-auto-mutuo-aiuto', 'diventare-esperto-per-esperienza'],
  },

  {
    slug: 'gruppi-auto-mutuo-aiuto',
    title: 'Gruppi di auto mutuo aiuto: cosa sono e come funziona un incontro',
    seoTitle: 'Gruppi di auto mutuo aiuto (AMA): significato e come funzionano',
    description: 'Auto mutuo aiuto: significato, come si svolge un incontro di un gruppo AMA, le regole del gruppo e a chi è utile, dall\'ansia alla depressione al lutto.',
    keywords: ['auto mutuo aiuto', 'auto mutuo aiuto significato', 'gruppi di auto mutuo aiuto', 'gruppi AMA', 'gruppi auto aiuto depressione', 'gruppi auto aiuto attacchi di panico'],
    category: 'Supporto tra pari',
    cover: 'cerchio',
    coverAlt: 'Un gruppo di persone sedute in cerchio su un prato.',
    readMin: 6,
    excerpt: 'Un cerchio di sedie, poche regole e la libertà di parlare o solo ascoltare. Ecco come funziona davvero un gruppo di auto mutuo aiuto.',
    summary: [
      'Un gruppo AMA è un piccolo gruppo di persone che condividono un\'esperienza e si incontrano regolarmente.',
      'Non c\'è un "esperto" che dirige: c\'è un facilitatore che custodisce le regole.',
      'Riservatezza, ascolto senza giudizio e libertà di non parlare sono le basi.',
    ],
    body: `
<p>Se l'idea di raccontarti davanti a sconosciuti ti mette a disagio, sei in buona compagnia: è la prima cosa che quasi tutti ci dicono. Poi, dopo uno o due incontri, cambia qualcosa. Proviamo a spiegarti perché.</p>

<h2 id="significato">Auto mutuo aiuto: il significato</h2>
<p><strong>Auto mutuo aiuto</strong> (AMA) vuol dire aiutare sé stessi aiutando gli altri. Un gruppo AMA è un piccolo gruppo di persone che vivono, o hanno vissuto, una situazione simile e che si incontrano con regolarità per sostenersi a vicenda. Nessuno è lì per "curare" qualcun altro: ognuno porta la propria esperienza e prende quella degli altri.</p>
<p>Il modello nasce nel mondo anglosassone, con i gruppi degli Alcolisti Anonimi negli anni Trenta, e oggi esistono gruppi su moltissimi temi: depressione, ansia e attacchi di panico, dipendenze, lutto, disturbi alimentari, malattie croniche, gruppi per genitori e per caregiver.</p>

<h2 id="come-funziona">Come funziona un incontro</h2>
<p>Ogni gruppo ha il suo stile, ma un incontro tipico assomiglia a questo:</p>
<ol>
  <li><strong>Accoglienza.</strong> Ci si siede in cerchio, chi arriva per la prima volta viene presentato (se vuole) e si ricordano le regole.</li>
  <li><strong>Giro di parola.</strong> Chi se la sente racconta come sta, cosa è successo, cosa lo preoccupa. Si può anche dire solo "oggi ascolto".</li>
  <li><strong>Condivisione.</strong> Gli altri rispondono con la propria esperienza, non con consigli o giudizi: "a me è successo così, io ho provato questo".</li>
  <li><strong>Chiusura.</strong> Un breve giro finale per salutarsi e portarsi a casa qualcosa.</li>
</ol>
<p>Un incontro dura in genere un'ora e mezza, e i gruppi si ritrovano con una cadenza fissa, per esempio ogni settimana o ogni due.</p>

<h2 id="regole">Le regole del gruppo</h2>
<ul>
  <li><strong>Riservatezza:</strong> ciò che si dice nel gruppo resta nel gruppo.</li>
  <li><strong>Niente giudizi:</strong> si parla in prima persona, senza dire agli altri cosa devono fare.</li>
  <li><strong>Libertà:</strong> nessuno è obbligato a parlare, e si può smettere di venire in qualsiasi momento.</li>
  <li><strong>Rispetto dei tempi:</strong> ognuno ha il suo spazio, nessuno monopolizza.</li>
</ul>

<h2 id="facilitatore">Il ruolo del facilitatore</h2>
<p>Nei gruppi c'è un <strong>facilitatore</strong>: non è un terapeuta né un capo, ma una persona formata che custodisce le regole, fa in modo che tutti abbiano spazio e tiene un clima sicuro. Spesso è lui stesso un pari, con un'esperienza simile a quella del gruppo.</p>

<h2 id="per-chi">Per chi è utile</h2>
<p>Un gruppo di auto mutuo aiuto può essere utile se ti senti solo con quello che stai vivendo, se vuoi confrontarti con chi ci è già passato o se, come familiare, hai bisogno di uno spazio per te. Non è adatto alle emergenze: in quel caso chiama il <strong>112</strong> o rivolgiti ai servizi sanitari.</p>
<p>Non sai se fa per te? Puoi venire a un primo incontro solo per ascoltare, oppure <a href="/#contatti">scriverci</a> e parlarne prima con uno di noi.</p>
`,
    faqs: [
      { q: 'Devo per forza parlare durante il gruppo?', a: 'No. Puoi partecipare solo ascoltando, per tutto il tempo che ti serve.' },
      { q: 'Cosa vuol dire AMA?', a: 'AMA sta per auto mutuo aiuto: persone che condividono un\'esperienza simile e si sostengono a vicenda, senza un professionista che guida il gruppo.' },
      { q: 'Ci sono gruppi di auto aiuto per depressione e attacchi di panico?', a: 'Sì, sono tra i temi più diffusi. Scrivici e ti diciamo quali gruppi sono attivi o in partenza.' },
    ],
    related: ['supporto-tra-pari-cos-e', 'ansia-come-uscirne'],
  },

  {
    slug: 'come-aiutare-un-familiare-depresso',
    title: 'Come aiutare un familiare depresso (senza annullare te stesso)',
    seoTitle: 'Come aiutare un familiare depresso: consigli da chi ci è passato',
    description: 'Come aiutare una persona con depressione in famiglia: cosa dire e cosa evitare, come comportarsi se non vuole essere aiutata e come proteggere anche te stesso.',
    keywords: ['come aiutare un familiare depresso', 'come aiutare una persona con depressione', 'come aiutare un figlio che non vuole essere aiutato', 'familiari salute mentale', 'caregiver'],
    category: 'Familiari',
    cover: 'insieme',
    coverAlt: 'Quattro persone abbracciate di spalle che guardano il tramonto.',
    readMin: 7,
    excerpt: 'Vorresti aiutare ma ogni parola sembra sbagliata. Cosa dire, cosa evitare e come non perdere te stesso quando chi ami soffre di depressione.',
    summary: [
      'Ascoltare vale più che consigliare: "ti credo" è già un aiuto.',
      'Incoraggia l\'aiuto professionale senza forzare, un passo alla volta.',
      'Anche chi sta accanto ha bisogno di sostegno: non restare solo.',
    ],
    body: `
<p>Quando una persona che ami soffre di depressione, ti senti spesso impotente. Vorresti "aggiustare" le cose, e invece ogni frase sembra cadere nel vuoto o, peggio, ferire. Molti di noi sono stati da entrambe le parti: chi stava male e chi stava accanto. Ecco cosa abbiamo imparato.</p>

<h2 id="capire">Capire cosa sta succedendo</h2>
<p>La depressione non è tristezza passeggera né mancanza di volontà. Può togliere energia, sonno, appetito, interesse per le cose che prima piacevano, e far sentire una persona un peso per gli altri. Non è colpa sua, e non è colpa tua. Il primo aiuto è ricordarlo, a lei e a te.</p>

<h2 id="cosa-dire">Cosa dire (e cosa evitare)</h2>
<p>Frasi che aiutano:</p>
<ul>
  <li>«Ti credo. Non devi dimostrarmi niente.»</li>
  <li>«Sono qui, anche se non sai cosa dire.»</li>
  <li>«Vuoi che lo cerchiamo insieme, un aiuto?»</li>
</ul>
<p>Frasi da evitare, anche se dette con amore:</p>
<ul>
  <li>«Dai, tirati su», «Pensa a chi sta peggio».</li>
  <li>«Devi solo uscire di più».</li>
  <li>Paragoni con altri o con "come eri prima".</li>
</ul>
<p>Spesso la cosa più utile non è parlare, ma <strong>esserci</strong>: una passeggiata, un caffè insieme, una commissione fatta in due.</p>

<h2 id="non-vuole-aiuto">Se non vuole essere aiutato</h2>
<p>È una delle situazioni più frequenti e dolorose, soprattutto con un figlio o una figlia adulti. Forzare raramente funziona. Puoi:</p>
<ul>
  <li><strong>Tenere la porta aperta</strong>, senza ultimatum: «Quando vorrai, io ci sono».</li>
  <li><strong>Proporre passi piccoli</strong>: una visita dal medico di base è spesso più accettabile di "uno psichiatra".</li>
  <li><strong>Chiedere aiuto tu per primo</strong>: informarti presso i servizi (medico di base, Centro Psico-Sociale) su come muoverti.</li>
</ul>

<h2 id="segnali">Quando preoccuparsi subito</h2>
<p>Se la persona parla di morte, di non voler più vivere, si isola completamente o smette di mangiare e bere, <strong>non aspettare</strong>. Chiama il <strong>112</strong>. Parlare apertamente di questi pensieri non li "mette in testa": spesso è un sollievo.</p>

<h2 id="anche-tu">Prenditi cura anche di te</h2>
<p>Chi sta accanto a una persona con depressione rischia di esaurirsi. Senso di colpa, rabbia, stanchezza sono normali. Non sei egoista se:</p>
<ul>
  <li>ti prendi del tempo per te;</li>
  <li>dici "oggi non ce la faccio";</li>
  <li>cerchi un posto dove parlare di quello che vivi tu.</li>
</ul>
<p>Per questo a Lived Experiences esistono <a href="/#attivita">spazi dedicati ai familiari</a>, con persone che sono state nella tua stessa posizione. Non devi farcela da solo.</p>
`,
    faqs: [
      { q: 'Cosa posso fare se mio figlio adulto rifiuta ogni aiuto?', a: 'Mantieni la relazione e la porta aperta, proponi passi piccoli (come il medico di base) e chiedi supporto tu per primo: ai servizi del territorio e a chi ha vissuto la stessa situazione.' },
      { q: 'Ci sono gruppi per familiari a Castiglione delle Stiviere?', a: 'Lived Experiences organizza spazi di ascolto per familiari. Scrivici per sapere quando si tengono i prossimi incontri.' },
    ],
    related: ['chiedere-aiuto-castiglione-delle-stiviere', 'sentirsi-soli'],
  },

  {
    slug: 'ansia-come-uscirne',
    title: 'Ansia: come uscirne quando ti sembra di essere l\'unico',
    seoTitle: 'Ansia e attacchi di panico: come uscirne, cosa fare subito',
    description: 'Ansia e attacchi di panico: cosa fare subito durante una crisi, piccoli passi quotidiani che aiutano e perché parlarne con chi ci è passato fa la differenza.',
    keywords: ['ansia come uscirne', 'attacchi di panico cosa fare subito', 'ansia e attacchi di panico', 'gruppi auto aiuto attacchi di panico', 'ansia sociale'],
    category: 'Benessere',
    cover: 'crepa',
    coverAlt: 'Fiori colorati che crescono dentro una crepa nel cemento.',
    readMin: 6,
    excerpt: 'Il cuore che corre, il respiro corto, la paura di impazzire. L\'ansia isola, ma è una delle esperienze più condivise che esistano. Da dove ripartire.',
    summary: [
      'Un attacco di panico è terribile ma passa: rallentare il respiro aiuta.',
      'Evitare le situazioni fa crescere l\'ansia; piccoli passi la riducono.',
      'Un medico può escludere altre cause e indicarti un percorso.',
    ],
    body: `
<p>Chi ha avuto un attacco di panico lo ricorda per sempre: il cuore che batte all'impazzata, il respiro che manca, la certezza che stia per succedere qualcosa di terribile. E subito dopo, spesso, la vergogna: "perché proprio a me?". Molti di noi ci sono passati. Ecco cosa ci ha aiutato.</p>

<h2 id="non-sei-solo">Non sei l'unico</h2>
<p>L'ansia è una delle esperienze più diffuse in assoluto, eppure è anche una delle più nascoste. Si ha paura di essere giudicati "deboli". Il primo passo per uscirne spesso è proprio questo: <strong>dirlo a qualcuno</strong>.</p>

<h2 id="cosa-fare-subito">Attacco di panico: cosa fare subito</h2>
<ul>
  <li><strong>Ricordati che passa.</strong> Un attacco di panico raggiunge il picco e poi cala, di solito in pochi minuti.</li>
  <li><strong>Rallenta il respiro.</strong> Inspira dal naso contando fino a 4, espira lentamente contando fino a 6. Ripeti.</li>
  <li><strong>Ancorati al presente.</strong> Nomina 5 cose che vedi, 4 che tocchi, 3 che senti.</li>
  <li><strong>Non scappare se puoi.</strong> Restare, anche solo un po', insegna al corpo che non c'è un pericolo reale.</li>
</ul>
<p>Se è la prima volta, o se hai dolore al petto e dubbi, fatti vedere da un medico o chiama il <strong>112</strong>: è giusto escludere altre cause.</p>

<h2 id="piccoli-passi">Piccoli passi quotidiani</h2>
<p>L'ansia tende a restringere la vita: si evitano luoghi, persone, situazioni. Ogni volta che evitiamo, però, l'ansia cresce. Quello che ha funzionato per molti di noi:</p>
<ul>
  <li>riaffrontare le situazioni temute <strong>gradualmente</strong>, un passo piccolo alla volta;</li>
  <li>curare sonno, movimento e caffeina, che influiscono più di quanto pensiamo;</li>
  <li>scrivere cosa succede prima di un momento di ansia, per riconoscere gli schemi;</li>
  <li>parlarne con chi può capire, senza minimizzare.</li>
</ul>

<h2 id="aiuto">Quando chiedere aiuto</h2>
<p>Se l'ansia ti impedisce di lavorare, studiare, uscire o dormire, merita attenzione. Il medico di base è un buon primo passo: può indirizzarti verso uno psicologo o i servizi del territorio. Esistono percorsi efficaci, e chiedere aiuto non è un fallimento.</p>

<h2 id="pari">Il valore di chi ci è passato</h2>
<p>Nei nostri <a href="/blog/gruppi-auto-mutuo-aiuto/">gruppi di auto mutuo aiuto</a> e negli incontri di <a href="/blog/supporto-tra-pari-cos-e/">ascolto alla pari</a> incontri persone che hanno vissuto attacchi di panico, ansia sociale, ansia generalizzata. Nessuno ti dirà "è tutto nella tua testa". Ti diranno: "anche a me, e guarda, si va avanti".</p>
`,
    faqs: [
      { q: 'Quanto dura un attacco di panico?', a: 'Di solito raggiunge il picco in pochi minuti e poi cala. Se hai dubbi o sintomi nuovi, rivolgiti a un medico o chiama il 112.' },
      { q: 'Si può uscire dall\'ansia da soli?', a: 'Alcune strategie quotidiane aiutano molto, ma non devi farlo da solo: confrontarsi con altri e, se serve, con un professionista rende il percorso più leggero.' },
    ],
    related: ['gruppi-auto-mutuo-aiuto', 'sentirsi-soli'],
  },

  {
    slug: 'sentirsi-soli',
    title: 'Sentirsi soli in mezzo alla gente: cosa puoi fare',
    seoTitle: 'Sentirsi soli in mezzo alla gente: perché succede e cosa fare',
    description: 'Sentirsi soli anche in coppia, in famiglia o in mezzo alla gente: perché succede, come riconoscerlo e da dove ripartire per trovare qualcuno che ti capisca.',
    keywords: ['sentirsi soli', 'sentirsi soli in mezzo alla gente', 'sentirsi soli in famiglia', 'vorrei parlare con qualcuno che mi capisca', 'solitudine'],
    category: 'Benessere',
    cover: 'cammino',
    coverAlt: 'Un gruppo di giovani che cammina sorridendo lungo una strada.',
    readMin: 5,
    excerpt: 'Puoi avere persone intorno e sentirti comunque solo. La solitudine non si misura in contatti, ma in quanto ti senti capito.',
    summary: [
      'La solitudine riguarda la qualità dei legami, non il numero.',
      'Riconoscerla è il primo passo, e non è un difetto.',
      'Un contatto alla volta: anche un incontro di gruppo è un inizio.',
    ],
    body: `
<p>"Vorrei parlare con qualcuno che mi capisca." È una delle frasi che più spesso le persone cercano su internet, di notte. Se ci sei arrivato anche tu, sappi che non sei strano: sei umano.</p>

<h2 id="perche">Perché ci si sente soli anche in mezzo alla gente</h2>
<p>La solitudine non dipende da quante persone hai intorno, ma da <strong>quanto ti senti visto</strong>. Si può essere soli in coppia, in famiglia, in un ufficio pieno. Succede quando non riesci a dire quello che provi davvero, o quando hai la sensazione che nessuno potrebbe capirlo.</p>
<p>Spesso la solitudine arriva insieme ad altro: un lutto, una separazione, un trasferimento, un periodo di ansia o depressione, la pensione, la malattia. E più ci si sente soli, più diventa faticoso cercare gli altri.</p>

<h2 id="riconoscerla">Come riconoscerla</h2>
<ul>
  <li>Ti senti stanco dopo aver visto gente, invece che più leggero.</li>
  <li>Hai l'impressione di "recitare" con gli altri.</li>
  <li>Eviti di raccontare come stai per non pesare.</li>
  <li>Passi molto tempo sui social ma ti senti più vuoto.</li>
</ul>

<h2 id="cosa-fare">Cosa puoi fare, un passo alla volta</h2>
<ul>
  <li><strong>Scegli una persona</strong> e dille una cosa vera, anche piccola: "ultimamente non sto benissimo".</li>
  <li><strong>Cerca contesti con un interesse comune</strong>: un corso, un'attività di volontariato, un gruppo di cammino.</li>
  <li><strong>Accetta l'imbarazzo iniziale</strong>: le prime volte sono sempre le più difficili, per tutti.</li>
  <li><strong>Cerca chi ha vissuto qualcosa di simile</strong>: con loro non devi spiegare tutto da capo.</li>
</ul>

<h2 id="da-noi">Da noi</h2>
<p>Il nostro <a href="/#attivita">caffè delle esperienze</a> nasce proprio per questo: incontri informali, aperti, senza impegno, dove si può anche solo ascoltare. È il modo più leggero per fare il primo passo. E se preferisci iniziare a tu per tu, puoi chiedere un incontro di <a href="/blog/supporto-tra-pari-cos-e/">ascolto alla pari</a>.</p>
<p>Se la solitudine diventa disperazione o pensi di farti del male, chiama il <strong>112</strong>. Puoi anche parlare subito con qualcuno al Telefono Amico, <a href="tel:0223272327">02 2327 2327</a>.</p>
`,
    faqs: [
      { q: 'È normale sentirsi soli anche in famiglia?', a: 'Sì, succede a moltissime persone. La solitudine riguarda quanto ci si sente capiti, non quante persone si hanno intorno.' },
      { q: 'Posso venire a un incontro senza conoscere nessuno?', a: 'Certo. Quasi tutti arrivano da soli la prima volta, e puoi limitarti ad ascoltare.' },
    ],
    related: ['ansia-come-uscirne', 'supporto-tra-pari-cos-e'],
  },

  {
    slug: 'chiedere-aiuto-castiglione-delle-stiviere',
    title: 'Chiedere aiuto a Castiglione delle Stiviere: a chi rivolgersi',
    seoTitle: 'Supporto psicologico e ascolto a Castiglione delle Stiviere: a chi rivolgersi',
    description: 'Hai bisogno di aiuto a Castiglione delle Stiviere e nell\'Alto Mantovano? Medico di base, CPS, SERD, consultorio, ascolto gratuito alla pari e numeri per le emergenze.',
    keywords: ['supporto psicologico gratuito', 'ascolto gratuito', 'sportello ascolto gratuito', 'CPS Castiglione delle Stiviere', 'salute mentale Mantova', 'associazione Castiglione delle Stiviere'],
    category: 'Territorio',
    cover: 'garda',
    coverAlt: 'Ulivi e cipressi sulla riva del lago di Garda in una giornata di sole.',
    readMin: 5,
    excerpt: 'Sapere a quale porta bussare è già metà del lavoro. Una mappa semplice dei servizi e degli spazi di ascolto per chi vive a Castiglione e dintorni.',
    summary: [
      'Emergenza: 112, sempre.',
      'Primo passo: il medico di base, che conosce i servizi.',
      'A Castiglione l\'ASST di Mantova ha CPS, SERD, consultorio e Punto Unico di Accesso.',
    ],
    body: `
<p>Quando si sta male, anche capire <em>a chi</em> chiedere aiuto può sembrare una montagna. Questa è una piccola mappa per chi vive a Castiglione delle Stiviere e nell'Alto Mantovano. Non è completa e i servizi possono cambiare: verifica sempre orari e contatti sui siti ufficiali.</p>

<h2 id="emergenza">In caso di emergenza</h2>
<p>Se tu o qualcuno vicino a te è in pericolo, chiama subito il <strong>112</strong>. Se hai bisogno di parlare con qualcuno in un momento di forte sofferenza, il Telefono Amico risponde al <a href="tel:0223272327">02 2327 2327</a>.</p>

<h2 id="medico">Il primo passo: il medico di base</h2>
<p>Il tuo medico di medicina generale è spesso la porta d'ingresso più semplice. Conosce la tua storia, può escludere cause fisiche e indirizzarti verso lo specialista o il servizio giusto.</p>

<h2 id="servizi-pubblici">I servizi pubblici sul territorio</h2>
<p>A Castiglione delle Stiviere l'ASST di Mantova offre diversi servizi, tra cui:</p>
<ul>
  <li><strong>Centro Psico-Sociale (CPS)</strong>: il servizio pubblico di riferimento per la salute mentale degli adulti.</li>
  <li><strong>SERD</strong>: il servizio per le dipendenze (alcol, sostanze, gioco d'azzardo), anche per i familiari.</li>
  <li><strong>Consultorio familiare</strong>: sostegno a coppie, famiglie, genitori e giovani.</li>
  <li><strong>Punto Unico di Accesso (PUA)</strong>: aiuta a orientarsi tra i servizi sociosanitari.</li>
</ul>
<p>Per indirizzi, orari e modalità di accesso aggiornati, consulta il sito dell'<a href="https://www.asst-mantova.it" target="_blank" rel="noopener">ASST di Mantova</a>.</p>

<h2 id="ascolto-alla-pari">L'ascolto alla pari di Lived Experiences</h2>
<p>Accanto ai servizi, c'è uno spazio diverso: quello di chi ci è passato. In Via Moscati 17 offriamo <strong>ascolto gratuito alla pari</strong>, <a href="/blog/gruppi-auto-mutuo-aiuto/">gruppi di auto mutuo aiuto</a> e spazi per i familiari. Non sostituiamo i servizi: possiamo accompagnarti a raggiungerli, o esserci mentre fai il tuo percorso.</p>

<h2 id="come-contattarci">Come contattarci</h2>
<p>Puoi <a href="/#contatti">scriverci dal sito</a>, anche senza nome: ci basta un modo per risponderti. Ti ricontatteremo con calma, nei tempi che preferisci.</p>
`,
    faqs: [
      { q: 'Esiste un supporto psicologico gratuito a Castiglione delle Stiviere?', a: 'I servizi pubblici dell\'ASST (come il CPS e il consultorio) sono accessibili tramite il sistema sanitario. Lived Experiences offre inoltre ascolto alla pari gratuito, che non è psicoterapia ma un sostegno da chi ci è passato.' },
      { q: 'Il SERD aiuta anche i familiari?', a: 'Sì, i servizi per le dipendenze possono offrire supporto anche ai familiari. Verifica le modalità sul sito dell\'ASST di Mantova.' },
    ],
    related: ['come-aiutare-un-familiare-depresso', 'supporto-tra-pari-cos-e'],
  },

  {
    slug: 'diventare-esperto-per-esperienza',
    title: 'Diventare esperto per esperienza: trasformare la tua storia in aiuto',
    seoTitle: 'Diventare esperto per esperienza (ESP) e volontario nella salute mentale',
    description: 'Come diventare esperto per esperienza o volontario nel supporto tra pari: requisiti, formazione, cosa si fa davvero e come iniziare con Lived Experiences.',
    keywords: ['esperto per esperienza', 'esperto in supporto tra pari corso', 'facilitatore sociale', 'diventare volontario salute mentale', 'volontariato Castiglione delle Stiviere'],
    category: 'Partecipa',
    cover: 'kintsugi',
    coverAlt: 'Piatti e ciotole in ceramica riparati con venature d\'oro secondo la tecnica del kintsugi.',
    readMin: 5,
    excerpt: 'Hai attraversato un periodo difficile e oggi vorresti che servisse a qualcuno? Ecco come la tua esperienza può diventare un aiuto concreto.',
    summary: [
      'Serve aver vissuto un\'esperienza ed averla in parte elaborata.',
      'La formazione insegna ascolto, confini e cura di sé.',
      'Si può iniziare anche con piccoli impegni: eventi, comunicazione, accoglienza.',
    ],
    body: `
<p>Nel kintsugi, l'arte giapponese di riparare la ceramica con l'oro, la crepa non si nasconde: diventa la parte più preziosa. Molti di noi hanno scelto di fare lo stesso con la propria storia.</p>

<h2 id="chi-e">Chi è un esperto per esperienza</h2>
<p>Un <strong>esperto per esperienza</strong> (o Esperto in Supporto tra Pari, ESP) è una persona che ha vissuto in prima persona una difficoltà, come utente o come familiare, e ha imparato a usare quel vissuto per sostenere altri. In alcune regioni si parla anche di <strong>facilitatori sociali</strong> o di UFE, Utenti e Familiari Esperti.</p>

<h2 id="requisiti">Serve un requisito?</h2>
<p>Più che requisiti formali, servono alcune condizioni:</p>
<ul>
  <li>aver attraversato un'esperienza difficile e averla, almeno in parte, <strong>elaborata</strong>;</li>
  <li>sentirsi abbastanza stabili da ascoltare le storie degli altri senza esserne travolti;</li>
  <li>voglia di formarsi e di lavorare in squadra.</li>
</ul>
<p>Non serve essere "guariti del tutto" né avere titoli di studio particolari.</p>

<h2 id="formazione">La formazione</h2>
<p>In Italia esistono corsi per esperti in supporto tra pari e per facilitatori di gruppi, promossi da servizi sanitari, centri di servizio per il volontariato e associazioni. Con Lived Experiences proponiamo percorsi su:</p>
<ul>
  <li>ascolto attivo e comunicazione non giudicante;</li>
  <li>condividere la propria storia in modo utile e sicuro;</li>
  <li>confini personali e cura di sé;</li>
  <li>lavoro in rete con i servizi del territorio.</li>
</ul>

<h2 id="cosa-si-fa">Cosa si fa davvero</h2>
<p>Gli esperti per esperienza possono affiancare incontri individuali, facilitare <a href="/blog/gruppi-auto-mutuo-aiuto/">gruppi di auto mutuo aiuto</a>, portare testimonianze nelle scuole e nei luoghi di lavoro, accogliere chi arriva per la prima volta.</p>
<p>E se non te la senti di raccontare la tua storia? C'è spazio anche per chi vuole dare una mano con eventi, comunicazione, organizzazione.</p>

<h2 id="iniziare">Come iniziare</h2>
<p>Il primo passo è semplice: <a href="/#partecipa">compila il modulo "Voglio partecipare"</a> e scegli "Fare volontariato". Ti ricontattiamo per un primo colloquio conoscitivo, senza impegno.</p>
`,
    faqs: [
      { q: 'Devo essere guarito per diventare volontario?', a: 'No. Serve aver elaborato almeno in parte la propria esperienza e sentirsi abbastanza stabili da ascoltare gli altri. Ne parliamo insieme in un primo colloquio.' },
      { q: 'Come funziona la formazione per i volontari?', a: 'Dipende dal ruolo che vuoi avere. Scrivici: nel primo colloquio ti spieghiamo i percorsi attivi, i tempi e le modalità.' },
    ],
    related: ['supporto-tra-pari-cos-e', 'gruppi-auto-mutuo-aiuto'],
  },
];

export const categories = ['Supporto tra pari', 'Familiari', 'Benessere', 'Territorio', 'Partecipa'];
