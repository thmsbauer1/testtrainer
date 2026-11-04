/* Lupos Hundeschule · Inhalte für den Biotest „Der Hund“ (Klasse 5)
   Quellen: Probetest, Arbeitsblätter und Heftseiten (Natur und Technik 5/6).
   Kartentypen: mc, tf, order, sort, match, multi, type, self, skelName, skelTap, skelType, zahn, pose */

window.TESTTAG = "2026-11-06";

/* Skelett: Nummern wie auf Arbeitsblatt 3 und im Probetest */
window.SKELETT = {
  1:  {name:"Beckenknochen",        ok:["beckenknochen","becken"], alt:[3,11]},
  2:  {name:"Wirbelsäule",          ok:["wirbelsäule","wirbel"], alt:[9,1]},
  3:  {name:"Schulterblatt",        ok:["schulterblatt"], alt:[1,5]},
  4:  {name:"Schädel",              ok:["schädel","schädelknochen"], alt:[2,3]},
  5:  {name:"Oberarmknochen",       ok:["oberarmknochen","oberarm"], alt:[11,6]},
  6:  {name:"Unterarmknochen",      ok:["unterarmknochen","unterarm","elle und speiche","speiche und elle","elle","speiche"], alt:[10,5]},
  7:  {name:"Mittelhandknochen",    ok:["mittelhandknochen","mittelhand"], alt:[13,8]},
  8:  {name:"Fingerknochen",        ok:["fingerknochen","finger","zehenknochen","zehen"], alt:[7,12], extra:"die Zehen der Vorderpfote"},
  9:  {name:"Rippen",               ok:["rippen","rippe"], alt:[2,3]},
  10: {name:"Unterschenkelknochen", ok:["unterschenkelknochen","unterschenkel","schienbein","wadenbein","schienbein und wadenbein"], alt:[6,11], extra:"Schienbein und Wadenbein"},
  11: {name:"Oberschenkelknochen",  ok:["oberschenkelknochen","oberschenkel"], alt:[5,10]},
  12: {name:"Fersenknochen",        ok:["fersenknochen","ferse"], alt:[13,7]},
  13: {name:"Mittelfußknochen",     ok:["mittelfußknochen","mittelfuß"], alt:[7,14]},
  14: {name:"Zehenknochen",         ok:["zehenknochen","zehen"], alt:[13,12]}
};

window.ZAEHNE = {
  s:{name:"Schneidezähne", zahl:"12", wozu:"nagen Fleischreste von den Knochen ab"},
  f:{name:"Fangzähne",     zahl:"4",  wozu:"packen die Beute und halten sie fest"},
  r:{name:"Reißzähne",     zahl:"4",  wozu:"zerschneiden Fleisch wie eine Schere"},
  b:{name:"Backenzähne",   zahl:"",   wozu:"zerknacken und zermahlen Knochen"}
};

window.POSEN = {
  drohen:{name:"Drohen", sagt:"„Geh weg, sonst beiße ich!“", sieht:"Schwanz gerade abgestreckt, Fell am Rücken gesträubt, Zähne gebleckt, er knurrt."},
  angst:{name:"Angst", sagt:"„Ich habe Angst!“", sieht:"Schwanz eingeklemmt, Körper geduckt."},
  freude:{name:"Freude", sagt:"„Ich freue mich!“", sieht:"Er wedelt mit dem Schwanz und schnuppert."},
  unterwerfung:{name:"Unterwerfung", sagt:"„Ich unterwerfe mich!“", sieht:"Schwanz eingeklemmt, er liegt auf dem Rücken und zeigt den Bauch."},
  locker:{name:"Entspannt", sagt:"„Ich bin ganz locker!“", sieht:"Aufrechte Haltung, Schwanz hängt locker herab, Schnauze leicht geöffnet."}
};

window.STATIONEN = [
/* ------------------------------------------------------------------ */
{ id:"s1", name:"Haus-, Heim- und Nutztiere", kurz:"Tierarten", bild:"tiere",
  merk:[
    "<b>Haustiere</b> sind alle Tiere, die der Mensch zu seinem Nutzen oder zum Vergnügen hält und züchtet.",
    "<b>Heimtiere</b> sind Haustiere, die zur Freude gehalten werden. Beispiele: Hund, Katze, Hamster.",
    "<b>Nutztiere</b> sind Haustiere, die der Mensch nutzt, um Fleisch, Milch, Wolle oder Leder zu gewinnen. Beispiele: Schwein, Huhn, Rind, Schaf.",
    "Haustier ist der Oberbegriff: Heimtiere und Nutztiere sind beides Haustiere.",
    "Der Hund ist ein Haustier. Als Familienhund ist er ein Heimtier."
  ],
  papa:"Erklär Papa den Unterschied zwischen Heimtier und Nutztier, mit je zwei Beispielen.",
  karten:[
    {id:"s1a", typ:"mc", frage:"Was ist ein Haustier?", optionen:["Ein Tier, das der Mensch zu seinem Nutzen oder zum Vergnügen hält und züchtet","Ein Tier, das im Haus wohnt","Ein Wildtier, das in der Nähe von Häusern lebt"], richtig:0, warum:"Haustier ist der Oberbegriff. Dazu gehören Heimtiere und Nutztiere."},
    {id:"s1b", typ:"mc", frage:"Was ist ein Heimtier?", optionen:["Ein Haustier, das zur Freude gehalten wird","Ein Tier, das kein Zuhause hat","Ein Haustier, das Fleisch und Milch liefert"], richtig:0, warum:"Zum Beispiel Hund, Katze oder Hamster."},
    {id:"s1c", typ:"mc", frage:"Was ist ein Nutztier?", optionen:["Ein Haustier, das Fleisch, Milch, Wolle oder Leder liefert","Jedes Tier, das irgendwie nützlich ist","Ein Haustier, das zur Freude gehalten wird"], richtig:0, warum:"Zum Beispiel Schwein, Huhn, Rind oder Schaf."},
    {id:"s1d", typ:"sort", frage:"Heimtier oder Nutztier? Tippe für jedes Tier die richtige Gruppe.", toepfe:["Heimtier","Nutztier"], items:[["Hamster",0],["Schwein",1],["Katze",0],["Schaf",1],["Huhn",1],["Familienhund",0],["Rind",1],["Wellensittich",0]]},
    {id:"s1e", typ:"tf", aussage:"Heimtiere und Nutztiere gehören beide zu den Haustieren.", wahr:true, warum:"Haustier ist der Oberbegriff für beide Gruppen."},
    {id:"s1f", typ:"tf", aussage:"Ein Heimtier ist einfach ein Tier, das kein Nutztier ist.", wahr:false, warum:"Zu ungenau. Ein Fuchs ist auch kein Nutztier und trotzdem kein Heimtier. Ein Heimtier ist ein Haustier, das zur Freude gehalten wird."},
    {id:"s1g", typ:"type", frage:"Nenne ein Produkt, das der Mensch von Nutztieren gewinnt.", ok:["fleisch","milch","wolle","leder","eier","ei","käse","wurst","honig","butter","federn"], zeige:"Fleisch, Milch, Wolle oder Leder"},
    {id:"s1h", typ:"mc", frage:"Was stimmt für den Hund?", optionen:["Er ist ein Haustier. Als Familienhund ist er ein Heimtier.","Er ist ein Wildtier.","Er ist ein Nutztier, weil man ihn melken kann."], richtig:0, warum:"Der Mensch hält Hunde und züchtet sie. Darum sind sie Haustiere."},
    {id:"s1self", typ:"self", frage:"Erkläre, was ein Heimtier ist. (Genau so stand es im Probetest!)", hinweis:"Sag es laut oder schreib es auf. Dann deck die Musterlösung auf.",
      punkte:["Ein Heimtier ist ein Haustier.","Es wird zur Freude gehalten, nicht für Fleisch, Milch oder Wolle.","Ein Beispiel: Hund, Katze oder Hamster."],
      muster:"Ein Heimtier ist ein Haustier, das der Mensch zur Freude hält, zum Beispiel ein Hund, eine Katze oder ein Hamster."}
  ]
},
/* ------------------------------------------------------------------ */
{ id:"s2", name:"Das Skelett", kurz:"Skelett", bild:"skelett",
  merk:[
    "Das Skelett besteht aus Knochen. Man teilt es ein in <b>Schädel, Rumpf, Schwanz und Gliedmaßen</b> (Arme und Beine).",
    "Die <b>Wirbelsäule</b> besteht aus einzelnen Wirbeln.",
    "Hunde sind <b>Zehengänger</b>: Sie treten nur mit den Zehen auf. Ihre Krallen können sie nicht einziehen. Weiche Ballen federn den Gang ab.",
    "Hunde sind <b>Hetzjäger</b> wie der Wolf: Sie verfolgen ihre Beute über lange Strecken, bis sie erschöpft ist. Herz und Lunge sind sehr leistungsfähig, darum laufen Hunde ausdauernd."
  ],
  papa:"Zeig Papa an deinem eigenen Bein: Oberschenkel, Unterschenkel, Ferse und Zehen. Wo hat der Hund diese Knochen?",
  karten:[
    {id:"sk2n", typ:"skelName", n:2}, {id:"sk3n", typ:"skelName", n:3}, {id:"sk5n", typ:"skelName", n:5},
    {id:"sk6n", typ:"skelName", n:6}, {id:"sk7n", typ:"skelName", n:7}, {id:"sk8n", typ:"skelName", n:8},
    {id:"sk10n", typ:"skelName", n:10}, {id:"sk12n", typ:"skelName", n:12}, {id:"sk13n", typ:"skelName", n:13},
    {id:"sk14n", typ:"skelName", n:14},
    {id:"sk11p", typ:"skelTap", n:11}, {id:"sk5p", typ:"skelTap", n:5}, {id:"sk12p", typ:"skelTap", n:12},
    {id:"sk1t", typ:"skelType", n:1}, {id:"sk4t", typ:"skelType", n:4}, {id:"sk9t", typ:"skelType", n:9}, {id:"sk11t", typ:"skelType", n:11},
    {id:"s2a", typ:"tf", aussage:"Hunde sind Zehengänger. Sie treten nur mit den Zehen auf.", wahr:true, warum:"Die weichen Ballen unter den Pfoten federn den Gang ab."},
    {id:"s2b", typ:"tf", aussage:"Hunde können ihre Krallen einziehen, so wie Katzen.", wahr:false, warum:"Hunde können ihre Krallen nicht einziehen."},
    {id:"s2c", typ:"mc", frage:"Was bedeutet: Der Hund ist ein Hetzjäger?", optionen:["Er verfolgt die Beute über lange Strecken, bis sie erschöpft ist.","Er lauert der Beute auf und springt sie plötzlich an.","Er frisst vor allem Pflanzen."], richtig:0, warum:"Genau wie sein Vorfahr, der Wolf."},
    {id:"s2d", typ:"mc", frage:"Warum können Hunde so ausdauernd laufen?", optionen:["Herz und Lunge sind sehr leistungsfähig.","Sie haben besonders viele Zehen.","Ihre Wirbelsäule ist aus einem Stück."], richtig:0, warum:"Das brauchen sie als Hetzjäger."},
    {id:"s2e", typ:"sort", frage:"Rumpf oder Gliedmaßen? Tippe für jeden Knochen die richtige Gruppe.", toepfe:["Rumpf","Gliedmaßen"], items:[["Rippen",0],["Oberschenkelknochen",1],["Wirbelsäule",0],["Oberarmknochen",1],["Zehenknochen",1],["Unterarmknochen",1]]}
  ]
},
/* ------------------------------------------------------------------ */
{ id:"s3", name:"Das Gebiss", kurz:"Gebiss", bild:"gebiss",
  merk:[
    "<b>Schneidezähne</b> (12, klein, ganz vorne): nagen Fleischreste von den Knochen ab.",
    "<b>Fangzähne</b> (4, lang und spitz, auch Eckzähne genannt): packen die Beute und halten sie fest.",
    "<b>Reißzähne</b> (4, groß und scharf): zerschneiden Fleisch wie eine Schere.",
    "<b>Backenzähne</b> (hinten): zerknacken und zermahlen Knochen.",
    "Ein erwachsener Hund hat <b>42 Zähne</b>. So ein Gebiss heißt <b>Fleischfresser- oder Raubtiergebiss</b>.",
    "Merksatz: Schneidezähne nagen, Fangzähne packen, Reißzähne schneiden, Backenzähne knacken."
  ],
  papa:"Schau mit Papa in den Spiegel: Wo sind deine Schneidezähne und deine Eckzähne? Erklär ihm, was der Hund mit diesen Zähnen macht.",
  karten:[
    {id:"z_s", typ:"zahn", t:"s"}, {id:"z_f", typ:"zahn", t:"f"}, {id:"z_r", typ:"zahn", t:"r"}, {id:"z_b", typ:"zahn", t:"b"},
    {id:"s3m", typ:"match", frage:"Welcher Zahn macht was? Tippe erst links, dann rechts.", paare:[["Schneidezähne","nagen Fleischreste ab"],["Fangzähne","packen und halten die Beute"],["Reißzähne","schneiden wie eine Schere"],["Backenzähne","zerknacken Knochen"]]},
    {id:"s3tf1", typ:"tf", aussage:"Die Schneidezähne des Hundes sind zum Zermalmen von Knochen.", wahr:false, warum:"Knochen zermalmen die Backenzähne hinten. Die kleinen Schneidezähne vorne nagen Fleischreste ab. Diese Aussage war im Probetest!"},
    {id:"s3tf2", typ:"tf", aussage:"Die Fangzähne sind zum Ergreifen und Festhalten der Beute.", wahr:true, warum:"Die langen, spitzen Fangzähne packen zu."},
    {id:"s3tf3", typ:"tf", aussage:"Ein Hund hat 2 Fangzähne.", wahr:false, warum:"Er hat 4: zwei oben und zwei unten."},
    {id:"s3tf4", typ:"tf", aussage:"Hunde sind Säugetiere und Raubtiere.", wahr:true, warum:"Säugetiere, weil die Welpen Muttermilch trinken. Raubtiere, weil sie Beute jagen und ein Raubtiergebiss haben."},
    {id:"s3a", typ:"mc", frage:"Wie viele Zähne hat ein erwachsener Hund?", optionen:["42","32","28"], richtig:0, warum:"Wir Menschen haben 32."},
    {id:"s3b", typ:"mc", frage:"Welche Zähne arbeiten wie eine Schere?", optionen:["Reißzähne","Schneidezähne","Fangzähne"], richtig:0, warum:"Reißzähne zerschneiden Fleisch."},
    {id:"s3c", typ:"type", frage:"Wie heißen die langen, spitzen Zähne, mit denen der Hund seine Beute packt?", ok:["fangzähne","fangzahn","eckzähne","eckzahn"], zeige:"Fangzähne"},
    {id:"s3d", typ:"mc", frage:"Wie nennt man das Gebiss des Hundes?", optionen:["Raubtiergebiss","Pflanzenfressergebiss","Nagetiergebiss"], richtig:0, warum:"Man sagt auch Fleischfressergebiss."}
  ]
},
/* ------------------------------------------------------------------ */
{ id:"s4", name:"Die Sprache der Hunde", kurz:"Körpersprache", bild:"posen",
  merk:[
    "Hunde sprechen mit dem ganzen Körper: Schwanz, Fell, Zähne, Körperhaltung und Laute.",
    "Hunde erkennen sich am Geruch. Sie beschnuppern am liebsten das Hinterteil.",
    "Beim Wedeln fächelt der Hund dem anderen seinen Eigengeruch zu und nimmt dessen Geruch auf.",
    "Ein ängstlicher Hund klemmt den Schwanz ein. So will er seinen Eigengeruch verbergen.",
    "Wichtig für den Test: Bei „Beschreibe das Verhalten“ schreibst du zuerst, was du siehst. Danach schreibst du, was der Hund sagen will."
  ],
  papa:"Mach Papa eine Hundehaltung vor. Er muss raten, was du sagen willst. Dann tauscht ihr!",
  karten:[
    {id:"p_dro", typ:"pose", p:"drohen"}, {id:"p_ang", typ:"pose", p:"angst"}, {id:"p_fre", typ:"pose", p:"freude"},
    {id:"p_unt", typ:"pose", p:"unterwerfung"}, {id:"p_loc", typ:"pose", p:"locker"},
    {id:"s4m", typ:"match", frage:"Was sieht man, was bedeutet es? Tippe erst links, dann rechts.", paare:[["Fell gesträubt, Zähne gebleckt","Drohen"],["Schwanz eingeklemmt, geduckt","Angst"],["Wedelt und schnuppert","Freude"],["Liegt auf dem Rücken","Unterwerfung"],["Schwanz hängt locker","Entspannt"]]},
    {id:"s4a", typ:"mc", frage:"Warum zeigt ein Hund bei der Unterwerfung seinen Bauch?", optionen:["Er zeigt seine verletzliche Seite und will nicht kämpfen.","Er will gekrault werden, weil er müde ist.","Er droht dem anderen Hund."], richtig:0, warum:"Der überlegene Hund weiß dann: Der andere gibt auf."},
    {id:"s4b", typ:"mc", frage:"Warum wedelt ein Hund bei der Begrüßung mit dem Schwanz?", optionen:["Er fächelt dem anderen seinen Eigengeruch zu und nimmt dessen Geruch auf.","Er vertreibt Fliegen.","Er will drohen."], richtig:0, warum:"Hunde erkennen sich am Geruch."},
    {id:"s4c", typ:"mc", frage:"Warum klemmt ein ängstlicher Hund den Schwanz ein?", optionen:["Er will seinen Eigengeruch verbergen.","Ihm ist kalt.","Er will angreifen."], richtig:0, warum:"Er verdeckt seine Körperöffnungen, damit man ihn schlechter riecht."},
    {id:"s4tf", typ:"tf", aussage:"Hunde erkennen sich gegenseitig am Geruch.", wahr:true, warum:"Darum beschnuppern sie sich, am liebsten am Hinterteil."},
    {id:"s4self", typ:"self", bild:"pose:drohen", frage:"Beschreibe das Verhalten des Hundes. Was möchte er damit aussagen? (So war Aufgabe 4 im Probetest.)", hinweis:"Für volle Punkte: erst beschreiben, was du siehst, dann die Bedeutung.",
      punkte:["Schwanz: gerade abgestreckt","Fell am Rücken: gesträubt","Zähne gebleckt, er knurrt","Bedeutung: Er droht. „Geh weg, sonst beiße ich!“"],
      muster:"Der Schwanz ist gerade abgestreckt, das Fell am Rücken ist gesträubt, die Zähne sind gebleckt und der Hund knurrt. Er droht und will sagen: „Geh weg, sonst beiße ich!“"},
    {id:"s4self2", typ:"self", bild:"pose:angst", frage:"Beschreibe das Verhalten dieses Hundes. Was möchte er damit aussagen?", hinweis:"Erst beschreiben, dann die Bedeutung.",
      punkte:["Schwanz: eingeklemmt","Körperhaltung: geduckt","Bedeutung: „Ich habe Angst!“"],
      muster:"Der Schwanz ist eingeklemmt und der Hund duckt sich. Er will sagen: „Ich habe Angst!“"}
  ]
},
/* ------------------------------------------------------------------ */
{ id:"s5", name:"Welpen und Säugetiere", kurz:"Welpen", bild:"welpen",
  merk:[
    "Hündinnen werden mit 8 bis 12 Monaten geschlechtsreif und sind zweimal im Jahr <b>läufig</b>, jeweils etwa drei Wochen.",
    "Die <b>Tragzeit</b> dauert etwas mehr als zwei Monate. Vor der Geburt baut die Hündin ein „Nest“.",
    "Sie wirft meist <b>4 bis 10 Welpen</b>. Jeder Welpe steckt in einer <b>Fruchtblase</b>.",
    "Die Hündin: 1. reißt die Fruchtblase auf (und frisst sie), 2. beißt die Nabelschnur durch, 3. leckt den Welpen trocken.",
    "Die Welpen: kriechen unbeholfen zum Bauch, suchen mit Pendelbewegungen des Kopfes die Zitzen, saugen, treten mit den Vorderpfoten gegen den Bauch (<b>Milchtritt</b>). Das regt die Milchbildung an, und sie trinken die Milch.",
    "Die Augen sind erst zu und öffnen sich nach 10 bis 12 Tagen. Mit 3 bis 4 Wochen gibt es Welpenfutter dazu. Vor 8 Wochen darf man Welpen nicht von der Mutter trennen.",
    "<b>Säugetiere</b>: Die Jungen trinken Muttermilch, die Körpertemperatur ist gleichwarm, die meisten haben ein Fell, alle atmen mit Lungen.",
    "<b>Brutpflege</b>: Die Mutter säugt, schützt, wärmt und leckt ihre Jungen sauber."
  ],
  papa:"Erzähl Mama, was ein Welpe in den ersten Minuten nach der Geburt erlebt, in der richtigen Reihenfolge.",
  karten:[
    {id:"s5o1", typ:"order", frage:"Was macht die Hündin direkt nach der Geburt? Tippe in der richtigen Reihenfolge.", schritte:["Aufreißen der Fruchtblase","Zerbeißen der Nabelschnur","Trockenlecken"], tipp:"Zuerst muss der Welpe aus der Fruchtblase."},
    {id:"s5o2", typ:"order", frage:"Was passiert bei den Welpen? Tippe in der richtigen Reihenfolge.", schritte:["Unbeholfenes Kriechen","Pendeln mit dem Kopf","Saugen an den Zitzen","Milchtritt","Milchbildung","Trinken der Milch"], tipp:"Erst zum Bauch kriechen, dann die Zitze suchen. Die Milch kommt ganz am Ende."},
    {id:"s5tf1", typ:"tf", aussage:"Hündinnen lecken ihre Jungen trocken.", wahr:true, warum:"Das gehört zur Brutpflege."},
    {id:"s5tf2", typ:"tf", aussage:"Die Nabelschnur fällt nach der Geburt der Welpen von allein ab.", wahr:false, warum:"Die Hündin beißt die Nabelschnur durch."},
    {id:"s5a", typ:"mc", frage:"Was ist der Milchtritt?", optionen:["Die Welpen treten mit den Vorderpfoten gegen den Bauch. Das regt die Milchbildung an.","Die Hündin tritt die Welpen weg, wenn sie satt sind.","Die Welpen laufen zur Milchschale."], richtig:0, warum:"Durch das Treten bilden die Milchdrüsen Milch."},
    {id:"s5b", typ:"mc", frage:"Warum gehört der Hund zu den Säugetieren?", optionen:["Die Jungen werden mit Muttermilch ernährt.","Er hat vier Beine.","Er frisst Fleisch."], richtig:0, warum:"Säugen heißt: Die Jungen trinken an den Zitzen der Mutter."},
    {id:"s5c", typ:"mc", frage:"Wie lange dauert die Tragzeit bei Hunden?", optionen:["Etwas mehr als zwei Monate","Neun Monate","Zwei Wochen"], richtig:0, warum:"Neun Monate dauert eine Schwangerschaft beim Menschen."},
    {id:"s5d", typ:"mc", frage:"Wann öffnen die Welpen ihre Augen?", optionen:["Nach 10 bis 12 Tagen","Direkt nach der Geburt","Nach 8 Wochen"], richtig:0, warum:"Vorher sind die Augenlider miteinander verwachsen."},
    {id:"s5e", typ:"mc", frage:"Ab wann darf man Welpen von der Mutter trennen?", optionen:["Frühestens mit 8 Wochen","Nach 3 Tagen","Nach 2 Wochen"], richtig:0, warum:"Mit 3 bis 4 Wochen beginnt erst die Entwöhnung."},
    {id:"s5multi", typ:"multi", frage:"Typische Merkmale eines Säugetiers: Tippe alle richtigen an.", optionen:[["Die Jungen trinken Muttermilch",true],["Gleichwarme Körpertemperatur",true],["Meist ein Fell",true],["Atmet mit Lungen",true],["Legt Eier mit harter Schale",false],["Hat Federn",false]]},
    {id:"s5f", typ:"type", frage:"Die Mutter säugt, schützt, wärmt und leckt ihre Jungen sauber. Wie nennt man das?", ok:["brutpflege"], zeige:"Brutpflege"},
    {id:"s5self", typ:"self", frage:"Was versteht man unter Brutpflege?", hinweis:"Sag es laut oder schreib es auf.",
      punkte:["Die Mutter kümmert sich um ihre Jungen.","Sie säugt sie (Muttermilch).","Sie schützt und wärmt sie und leckt sie sauber."],
      muster:"Brutpflege heißt: Die Mutter säugt ihre Jungen, schützt sie, wärmt sie und leckt sie sauber."}
  ]
},
/* ------------------------------------------------------------------ */
{ id:"s6", name:"Wolf, Rassen und Hundeberufe", kurz:"Wolf & Berufe", bild:"wolf",
  merk:[
    "Der Hund stammt vom <b>Wolf</b> ab. Wölfe leben und jagen gemeinsam im <b>Rudel</b>. Hunde sind also keine Einzelgänger.",
    "Gemeinsam haben Hund und Wolf: gleichen Körperbau, gleiches Gebiss, Rudelleben, Körpersprache, beide sind Hetzjäger.",
    "Unterschiede: Der Wolf ist ein Wildtier, scheu vor Menschen und hat einen stärkeren Jagdinstinkt. Der Hund lebt mit dem Menschen und ist ihm zugewandt.",
    "„Auch ein gezähmter Wolf ist immer noch ein Wildtier.“ Das stimmt: Zähmen ändert nur das eine Tier, nicht seine Anlagen. Hat er Hunger oder fühlt er sich bedroht, kann er gefährlich werden.",
    "<b>Züchtung</b>: Der Mensch wählt Tiere mit gewünschten Eigenschaften aus und lässt nur sie Junge bekommen, über viele Generationen. Beispiel Dackel: kurze Beine, langer Körper und Mut, damit er in den Bau von Fuchs und Dachs passt.",
    "Rassen aus dem Rätsel: Schäferhund, Dackel, Bernhardiner, Dalmatiner, Collie.",
    "<b>Hundeberufe</b>: Blindenhund (ruhig, gehorsam, konzentriert), Polizeihund (mutig, gute Nase, gehorsam), Rettungshund (sehr gute Nase, ausdauernd), Hütehund (schnell, wendig, aufmerksam), Spürhund beim Zoll (feine Nase)."
  ],
  papa:"Erklär Papa, warum ein Dackel so kurze Beine hat. Benutze das Wort Züchtung.",
  karten:[
    {id:"s6tf1", typ:"tf", aussage:"Ein Hund ist ein Einzelgänger.", wahr:false, warum:"Der Hund stammt vom Wolf ab, und Wölfe leben im Rudel."},
    {id:"s6a", typ:"mc", frage:"Von welchem Tier stammt der Hund ab?", optionen:["Vom Wolf","Vom Fuchs","Vom Bären"], richtig:0, warum:"Der Wolf ist der Stammvater unserer Hunde."},
    {id:"s6multi", typ:"multi", frage:"Was haben Hund und Wolf gemeinsam? Tippe alle richtigen an.", optionen:[["Gleicher Körperbau",true],["Gleiches Gebiss",true],["Leben im Rudel",true],["Beide sind Hetzjäger",true],["Beide sind scheu vor Menschen",false],["Beide wurden vom Menschen gezüchtet",false]]},
    {id:"s6b", typ:"mc", frage:"Was unterscheidet den Wolf vom Hund?", optionen:["Der Wolf ist ein Wildtier, scheu vor Menschen, mit stärkerem Jagdinstinkt.","Der Wolf hat ein anderes Gebiss.","Der Wolf lebt allein, der Hund im Rudel."], richtig:0, warum:"Körperbau und Gebiss sind gleich. Der Unterschied liegt im Verhalten."},
    {id:"s6c", typ:"mc", frage:"Ein Tierpfleger sagt: „Auch ein gezähmter Wolf ist immer noch ein Wildtier.“ Stimmt das?", optionen:["Ja. Zähmen ändert nur das eine Tier, nicht seine Anlagen. Er kann gefährlich werden.","Nein. Wer zahm ist, ist automatisch ein Haustier.","Nein. Wölfe sind nie gefährlich."], richtig:0, warum:"Zum Haustier wird ein Tier erst durch Züchtung über viele Generationen."},
    {id:"s6d", typ:"mc", frage:"Was bedeutet Züchtung?", optionen:["Der Mensch wählt Tiere mit gewünschten Eigenschaften aus und lässt nur sie Junge bekommen, über viele Generationen.","Man bringt einem Hund Kunststücke bei.","Man füttert einen Hund, bis er groß ist."], richtig:0, warum:"So sind alle Hunderassen entstanden."},
    {id:"s6e", typ:"mc", frage:"Wofür wurde der Dackel gezüchtet?", optionen:["Um Füchse und Dachse aus ihrem Bau zu treiben","Um Schafe zu hüten","Um Schlitten zu ziehen"], richtig:0, warum:"Mit seinen kurzen Beinen und dem langen Körper passt er in den Bau."},
    {id:"s6m", typ:"match", frage:"Welcher Hundeberuf braucht welche Eigenschaften? Tippe erst links, dann rechts.", paare:[["Blindenhund","ruhig, gehorsam, konzentriert"],["Rettungshund","sehr gute Nase, ausdauernd"],["Hütehund","schnell, wendig, aufmerksam"],["Polizeihund","mutig, gehorsam, gute Nase"]]},
    {id:"s6f", typ:"mc", frage:"Welche Eigenschaft braucht ein Blindenhund am meisten?", optionen:["Ruhig, gehorsam und nervenstark","Wild und verspielt","Scheu und ängstlich"], richtig:0, warum:"Er muss sich konzentrieren, auch wenn es laut ist."},
    {id:"s6self", typ:"self", frage:"Der Dackel wurde für die Jagd gezüchtet. Erläutere an diesem Beispiel den Begriff Züchtung.", hinweis:"Diese Aufgabe stand auf dem Arbeitsblatt. Sag es laut oder schreib es auf.",
      punkte:["Der Mensch wählt Tiere mit gewünschten Merkmalen aus.","Nur diese Tiere bekommen Junge, über viele Generationen.","Dackel: kurze Beine und langer Körper, damit er in den Bau von Fuchs und Dachs passt."],
      muster:"Bei der Züchtung wählt der Mensch Tiere mit gewünschten Merkmalen aus und lässt nur sie Junge bekommen, über viele Generationen. Beim Dackel wollte man Hunde mit kurzen Beinen und langem Körper, die in den Bau von Fuchs und Dachs passen."}
  ]
}
];

/* Generalprobe: aufgebaut wie der Probetest */
window.GENERALPROBE = ["s1self","sk1t","sk4t","sk9t","sk11t","s3tf4","s5tf1","s5tf2","s3tf1","s3tf2","s3tf3","s6tf1","s4self","s5o2","s3m","s5multi","s6self"];

window.MERKSAETZE = [
  "Schneidezähne nagen, Fangzähne packen, Reißzähne schneiden, Backenzähne knacken.",
  "Erst beschreiben, was du siehst. Dann sagen, was der Hund meint.",
  "Hündin: aufreißen, durchbeißen, trockenlecken.",
  "Welpen: kriechen, pendeln, saugen, treten. Dann kommt die Milch.",
  "Haustier ist der Oberbegriff. Heimtiere und Nutztiere sind beides Haustiere.",
  "Hunde sind Zehengänger und Hetzjäger.",
  "Ich habe 4 Fangzähne und 42 Zähne insgesamt. Wuff!",
  "Hunde sind keine Einzelgänger. Wir lieben unser Rudel!"
];
