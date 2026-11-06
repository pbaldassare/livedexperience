// Domande frequenti, raggruppate. Le risposte sono HTML semplice.
// I dati ancora da definire (quota, IBAN, C.F.) sono dichiarati come tali: non inventare cifre.

export const faqGroups = [
  {
    id: 'chiedere-aiuto',
    title: 'Chiedere aiuto',
    items: [
      { q: 'Cos\'è Lived Experiences?', a: '<p>È un\'associazione di Castiglione delle Stiviere (MN) basata sul <a href="/blog/supporto-tra-pari-cos-e/">supporto tra pari</a>: persone che hanno attraversato momenti difficili, come disagio psichico, dipendenze, lutti, malattie o solitudine, si mettono accanto a chi ci sta passando adesso.</p>' },
      { q: 'Il vostro aiuto è gratuito?', a: '<p>Sì. Gli incontri di ascolto alla pari, i gruppi di auto mutuo aiuto e gli spazi per i familiari sono gratuiti.</p>' },
      { q: 'Siete psicologi o medici?', a: '<p>No. Siamo pari: persone con un\'esperienza vissuta, che si sono preparate ad ascoltare. <strong>Non facciamo diagnosi né terapie</strong> e non sostituiamo i professionisti, ma possiamo aiutarti a raggiungerli e accompagnarti durante il percorso.</p>' },
      { q: 'Come faccio a contattarvi?', a: '<p>Puoi <a href="/#contatti">scriverci dal modulo del sito</a>, anche senza nome: ci serve solo un\'email o un telefono per risponderti. Ti ricontattiamo con calma, nei tempi che preferisci.</p>' },
      { q: 'Posso restare anonimo?', a: '<p>Sì. Puoi usare un nome di fantasia e raccontare solo quello che ti senti. Ci serve unicamente un recapito per risponderti.</p>' },
      { q: 'E se è un\'emergenza?', a: '<p>Non siamo un servizio di emergenza. Se tu o qualcuno vicino a te è in pericolo, chiama subito il <strong>112</strong>. Se hai bisogno di parlare con qualcuno in un momento di forte sofferenza puoi chiamare il Telefono Amico al <a href="tel:0223272327">02 2327 2327</a>.</p>' },
      { q: 'Dove vi trovate?', a: '<p>La sede è in Via Moscati 17, 46043 Castiglione delle Stiviere (MN). Gli incontri si possono fare anche al telefono o in un luogo dove ti senti più a tuo agio. Per una mappa dei servizi della zona leggi <a href="/blog/chiedere-aiuto-castiglione-delle-stiviere/">a chi rivolgersi a Castiglione delle Stiviere</a>.</p>' },
    ],
  },
  {
    id: 'incontri',
    title: 'Come funzionano gli incontri',
    items: [
      { q: 'Cosa succede al primo incontro?', a: '<p>Ci si conosce. Racconti quello che vuoi, alla velocità che vuoi, a una persona che ha vissuto un\'esperienza vicina alla tua. Poi decidi tu se e come continuare: incontri individuali, un gruppo o un aiuto per arrivare ai servizi giusti.</p>' },
      { q: 'Cos\'è un gruppo di auto mutuo aiuto?', a: '<p>Un piccolo gruppo di persone che condividono un\'esperienza simile e si incontrano con regolarità per sostenersi a vicenda, con un facilitatore che custodisce le regole. <a href="/blog/gruppi-auto-mutuo-aiuto/">Qui spieghiamo come funziona un incontro</a>.</p>' },
      { q: 'Devo per forza parlare nel gruppo?', a: '<p>No. Puoi partecipare solo ascoltando, per tutto il tempo che ti serve.</p>' },
      { q: 'Quello che racconto resta riservato?', a: '<p>Sì. La riservatezza è la prima regola di ogni incontro: ciò che si dice resta tra le persone presenti. I tuoi dati sono trattati secondo l\'<a href="/privacy.html">informativa privacy</a>.</p>' },
      { q: 'Di quali temi vi occupate?', a: '<p>Disagio psichico, ansia e depressione, dipendenze, lutto, malattia, solitudine e il vissuto dei familiari. Se il tuo tema non è tra questi, scrivici lo stesso: ti aiutiamo a trovare il posto giusto.</p>' },
    ],
  },
  {
    id: 'familiari',
    title: 'Per i familiari',
    items: [
      { q: 'Posso rivolgermi a voi per un mio familiare?', a: '<p>Sì. Chi sta accanto a una persona in difficoltà ha bisogno di sostegno quanto lei. Abbiamo spazi di ascolto dedicati a genitori, partner, figli e amici. Leggi anche <a href="/blog/come-aiutare-un-familiare-depresso/">come aiutare un familiare depresso</a>.</p>' },
      { q: 'Mio figlio non vuole essere aiutato: cosa posso fare?', a: '<p>Forzare raramente funziona. Tieni la porta aperta, proponi passi piccoli, come una visita dal medico di base, e chiedi aiuto tu per primo. Possiamo ascoltarti e aiutarti a capire come muoverti.</p>' },
    ],
  },
  {
    id: 'partecipare',
    title: 'Diventare socio e volontario',
    items: [
      { q: 'Come divento socio?', a: '<p>Compila il modulo <a href="/#partecipa">"Voglio partecipare"</a> e scegli "Diventare socio": ti ricontattiamo per completare l\'iscrizione al libro soci. Da socio partecipi all\'assemblea e sostieni le attività gratuite.</p>' },
      { q: 'Quanto costa la quota associativa?', a: '<p>L\'importo della quota annuale è in via di definizione: lo pubblicheremo qui appena deciso dall\'assemblea.</p>' },
      { q: 'Posso fare volontariato anche se non ho vissuto un\'esperienza difficile?', a: '<p>Sì. Oltre al supporto tra pari servono mani per eventi, comunicazione, accoglienza e organizzazione.</p>' },
      { q: 'Come si diventa esperto per esperienza?', a: '<p>Serve aver elaborato, almeno in parte, la propria esperienza e seguire un percorso di formazione su ascolto, confini e cura di sé. <a href="/blog/diventare-esperto-per-esperienza/">Ne parliamo qui</a>.</p>' },
      { q: 'Scuole, enti e aziende possono collaborare con voi?', a: '<p>Sì. Portiamo testimonianze e percorsi di sensibilizzazione contro lo stigma. <a href="/#contatti">Scrivici</a> scegliendo "Per collaborare".</p>' },
    ],
  },
  {
    id: 'sostenere',
    title: 'Donazioni e 5×1000',
    items: [
      { q: 'Come posso fare una donazione?', a: '<p>Con un bonifico all\'associazione. L\'IBAN sarà pubblicato a breve nella sezione <a href="/#partecipa">Partecipa</a>; nel frattempo puoi <a href="/#contatti">scriverci</a>.</p>' },
      { q: 'Come posso donare il mio 5×1000?', a: '<p>Nella dichiarazione dei redditi firma nel riquadro dedicato agli enti del Terzo settore e scrivi il codice fiscale dell\'associazione, che pubblicheremo qui appena disponibile. A te non costa nulla.</p>' },
      { q: 'Come vengono usate le donazioni?', a: '<p>Per sostenere gli incontri gratuiti: sale, materiali, formazione dei volontari e attività di sensibilizzazione sul territorio.</p>' },
    ],
  },
];
