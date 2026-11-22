/* Lupos Rechen-Baustelle · Inhalte für die 2. Mathearbeit Klasse 5c (Addition und Subtraktion)
   Quellen: Übungszettel „Das kannst du für die Mathematikarbeit am 23.11.2026 üben“, Regelheft S. 34/38/42/46,
   Buch Dreifach Mathe 5 S. 34, 35, 53, 54, 55, Zwischentest-Seite, Arbeitsblätter Fachbegriffe.
   Regel-Check: Jede Station beginnt mit kurzen Fragen zu den Regeln (regeln: q mit ___, opt, r, m = Merksatz-Index).
   Kartentypen: mc, tf, sort, match, multi, type, self (wie im Bio-Testtrainer) und neu:
     num      Rechenaufgabe mit Zahl als Antwort ({term} wird von der App ausgerechnet)
     begriff  fehlende Zahl ergänzen und Fachbegriff nennen ({aufgabe} mit ■)
     ueb      Überschlag ({t}, {stelle}: 10/100/1000, {genau}: danach genau rechnen)
     probe    Ergebnis mit der Umkehraufgabe prüfen ({t}: "83 − 47 = 44")
     klammer  Klammern so setzen, dass {ziel} herauskommt
     schrift  schriftlich rechnen im Stellenwert-Raster ({t} oder {gen}, optional {ueb})
     vorteil  passende Zahlen zuerst zusammenrechnen ({zahlen})
     kette    mehrere Schritte (Textaufgaben): schritte [{typ:"num"|"mc", f, term|loes, opt, r, tipp}]
   Alle Ergebnisse rechnet die App selbst aus den Termen aus. */

window.TESTTAG = "2026-11-23";

window.STATIONEN = [
/* ------------------------------------------------------------------ */
{ id:"f", name:"Fachbegriffe der Addition und Subtraktion", kurz:"Fachbegriffe",
  fig:"begriffe",
  merk:[
    "Beim <b>Addieren</b> (plus) heißen die Zahlen <b>1. Summand</b> und <b>2. Summand</b>. Das Ergebnis heißt <b>Wert der Summe</b>.",
    "Die ganze Aufgabe 215 + 44 heißt <b>Summe</b>. „Bilde die Summe aus 215 und 44“ heißt: Rechne 215 + 44.",
    "Beim <b>Subtrahieren</b> (minus) heißt die erste Zahl <b>Minuend</b>. Die Zahl, die abgezogen wird, heißt <b>Subtrahend</b>. Das Ergebnis heißt <b>Wert der Differenz</b>.",
    "Die ganze Aufgabe 356 − 143 heißt <b>Differenz</b>. „Die Differenz aus 356 und 143“ heißt: Rechne 356 − 143.",
    "Fehlt eine Zahl, hilft die <b>Umkehraufgabe</b>: ■ + 25 = 60 → 60 − 25 = 35. Also ist 35 der 1. Summand."
  ],
  regeln:[{q:"Beim Addieren heißen die Zahlen, die man zusammenzählt, ___.",opt:["Summanden", "Minuenden", "Differenzen"],r:0,m:0},{q:"Das Ergebnis einer Plusaufgabe heißt ___.",opt:["Wert der Summe", "Summe", "Differenz"],r:0,m:[0,1]},{q:"Bei 356 − 143 = 213 heißt 356 der ___.",opt:["Minuend", "Subtrahend", "Wert der Differenz"],r:0,m:2},{q:"Die Zahl, die abgezogen wird, heißt ___.",opt:["Subtrahend", "Minuend", "Summand"],r:0,m:2},{q:"Bei ■ + 25 = 60 findest du die fehlende Zahl mit der Umkehraufgabe ___.",opt:["60 − 25", "60 + 25", "25 − 60"],r:0,m:4}],
  papa:"Erklär Papa alle sechs Fachbegriffe an den Aufgaben 50 − 18 = 32 und 32 + 18 = 50.",
  karten:[
    {id:"f1", typ:"match", frage:"142 + 54 = 196. Was ist was? Tippe erst links, dann rechts.", paare:[["142","1. Summand"],["54","2. Summand"],["196","Wert der Summe"],["142 + 54","Summe"]]},
    {id:"f2", typ:"match", frage:"113 − 29 = 84. Was ist was? Tippe erst links, dann rechts.", paare:[["113","Minuend"],["29","Subtrahend"],["84","Wert der Differenz"],["113 − 29","Differenz"]]},
    {id:"f3", typ:"mc", frage:"Was ist bei 215 + 44 = 259 der Wert der Summe?", optionen:["259","215 + 44","44"], richtig:0, warum:"259 ist das Ergebnis, also der Wert der Summe. 215 + 44 ist die Summe."},
    {id:"f4", typ:"tf", aussage:"Bei 356 − 143 = 213 ist 356 der Subtrahend.", wahr:false, warum:"356 ist der Minuend. Der Subtrahend ist 143, die Zahl, die abgezogen wird."},
    {id:"f5", typ:"begriff", aufgabe:"■ + 25 = 60"},
    {id:"f6", typ:"begriff", aufgabe:"20 − ■ = 13"},
    {id:"f7", typ:"begriff", aufgabe:"■ − 19 = 15"},
    {id:"f8", typ:"begriff", aufgabe:"57 + ■ = 200"},
    {id:"f9", typ:"kette", art:"text2", text:"Der Subtrahend heißt 44, der Wert der Differenz ist 5.", schritte:[
      {typ:"mc", f:"Welche Aufgabe passt?", opt:["■ − 44 = 5","44 − ■ = 5","44 + 5 = ■"], r:0, tipp:"Der Subtrahend wird abgezogen. Er steht hinter dem Minus."},
      {typ:"num", f:"Wie heißt der Minuend?", term:"44 + 5", tipp:"Umkehraufgabe: 44 + 5"}
    ], warum:"49 − 44 = 5. Der Minuend ist 49."},
    {id:"f10", typ:"kette", art:"text2", text:"Der 1. Summand ist 64, der Wert der Summe beträgt 101.", schritte:[
      {typ:"mc", f:"Welche Aufgabe passt?", opt:["64 + ■ = 101","64 + 101 = ■","■ − 64 = 101"], r:0, tipp:"Der Wert der Summe ist das Ergebnis. Er steht hinter dem Gleichzeichen."},
      {typ:"num", f:"Wie heißt der 2. Summand?", term:"101 − 64", tipp:"Umkehraufgabe: 101 − 64"}
    ], warum:"64 + 37 = 101. Der 2. Summand ist 37."},
    {id:"f11", typ:"num", frage:"Berechne den Wert der Differenz aus 1000 und 125.", term:"1000 − 125", tipp:"Die Differenz aus 1000 und 125 heißt: 1000 − 125."},
    {id:"f12", typ:"kette", art:"text2", text:"Der Subtrahend ist 64. Er ist doppelt so groß wie der Wert der Differenz.", schritte:[
      {typ:"num", f:"Wie groß ist der Wert der Differenz?", loes:32, tipp:"64 ist das Doppelte. Was ist die Hälfte von 64?"},
      {typ:"num", f:"Wie heißt der Minuend?", term:"64 + 32", tipp:"Umkehraufgabe: Wert der Differenz + Subtrahend"}
    ], warum:"96 − 64 = 32. Und 64 ist doppelt so groß wie 32."},
    {id:"f13", typ:"type", frage:"Wie heißt die Zahl, die bei einer Minusaufgabe abgezogen wird? Schreib den Fachbegriff.", ok:["subtrahend"], zeige:"Subtrahend"},
    {id:"f14", typ:"type", frage:"Wie heißt das Ergebnis einer Plusaufgabe? Schreib den Fachbegriff.", ok:["wert der summe"], zeige:"Wert der Summe"}
  ]
},
/* ------------------------------------------------------------------ */
{ id:"u", name:"Überschlagen", kurz:"Überschlag",
  fig:"ueberschlag",
  merk:[
    "Beim <b>Überschlag</b> rechnest du mit <b>gerundeten</b> Zahlen. So siehst du schnell, wie groß das Ergebnis ungefähr ist.",
    "Das Zeichen <b>≈</b> heißt „ungefähr gleich“.",
    "Runden: Schau auf die Ziffer rechts neben der Rundungsstelle. Bei 0, 1, 2, 3, 4 wird <b>abgerundet</b>, bei 5, 6, 7, 8, 9 <b>aufgerundet</b>. 69 ≈ 70, 12 ≈ 10, 45 ≈ 50.",
    "<b>Achtung:</b> Steht „Überschlage“ in der Aufgabe, rechnest du <b>nicht genau</b>. Erst runden, dann rechnen. Das genaue Ergebnis kommt danach.",
    "Zweistellige Zahlen rundest du meist auf Zehner, größere auf Hunderter. Sagt die Aufgabe, worauf du runden sollst, mach es genau so.",
    "Danach vergleichen: Liegen Überschlag und genaues Ergebnis nah beieinander? Dann hast du dich wahrscheinlich nicht verrechnet."
  ],
  regeln:[{q:"Beim Überschlag rechnest du mit ___ Zahlen.",opt:["gerundeten", "genauen", "ganz großen"],r:0,m:0},{q:"Das Zeichen ≈ bedeutet ___.",opt:["ungefähr gleich", "genau gleich", "größer als"],r:0,m:1},{q:"Ist die Ziffer rechts neben der Rundungsstelle 5 oder größer, wird ___.",opt:["aufgerundet", "abgerundet"],r:0,m:2},{q:"Steht in der Aufgabe „Überschlage“, dann ___.",opt:["erst runden, dann rechnen", "gleich genau rechnen", "das Ergebnis schätzen, ohne zu rechnen"],r:0,m:3},{q:"Der Überschlag hilft dir zu prüfen, ___.",opt:["ob das genaue Ergebnis ungefähr stimmt", "ob die Aufgabe schwer ist", "wie viele Stellen die Zahlen haben"],r:0,m:5}],
  papa:"Erklär Papa, wofür ein Überschlag gut ist, und mach ihm einen vor: 98 + 44.",
  karten:[
    {id:"u1", typ:"mc", frage:"Was bedeutet das Zeichen ≈?", optionen:["ungefähr gleich","genau gleich","ist größer als"], richtig:0, warum:"69 ≈ 70 heißt: 69 ist ungefähr 70."},
    {id:"u2", typ:"sort", frage:"Auf Zehner runden: abrunden oder aufrunden? Tippe für jede Zahl.", toepfe:["abrunden","aufrunden"], items:[["64",0],["35",1],["12",0],["89",1],["43",0],["57",1],["71",0],["98",1]]},
    {id:"u3", typ:"num", frage:"Runde 249 auf Hunderter.", loes:200, falle:{wert:250, msg:"250 ist auf Zehner gerundet. Für Hunderter schaust du auf die Zehnerziffer: 4."}, tipp:"Schau auf die Zehnerziffer. Ist sie kleiner als 5, rundest du ab."},
    {id:"u4", typ:"num", frage:"Runde 4259 auf Hunderter.", loes:4300, falle:{wert:4260, msg:"4260 ist auf Zehner gerundet. Für Hunderter schaust du auf die Zehnerziffer: 5."}, tipp:"Die Zehnerziffer ist 5. Bei 5 wird aufgerundet."},
    {id:"u5", typ:"mc", frage:"Welcher Überschlag passt zu 98 + 44?", optionen:["100 + 40 = 140","98 + 44 = 142","90 + 40 = 130"], richtig:0, warum:"98 ≈ 100 und 44 ≈ 40. 98 + 44 = 142 ist schon genau gerechnet, das ist kein Überschlag."},
    {id:"u6", typ:"ueb", t:"19 + 32", stelle:10, genau:true},
    {id:"u7", typ:"ueb", t:"57 − 39", stelle:10, genau:true},
    {id:"u8", typ:"ueb", t:"123 + 81", stelle:10, genau:true},
    {id:"u9", typ:"ueb", t:"142 − 99", stelle:10, genau:true},
    {id:"u10", typ:"ueb", t:"2902 + 3075", stelle:100, genau:false},
    {id:"u11", typ:"ueb", t:"8183 − 2011", stelle:100, genau:false},
    {id:"u12", typ:"ueb", t:"17 + 14", stelle:10, genau:true, text:"Jasmins Vater kauft ein T-Shirt für 17 € und eine Hose für 14 €. Überschlage, wie viel er ungefähr bezahlen muss.", einheit:"€"},
    {id:"u13", typ:"tf", aussage:"Beim Überschlag rechnet man zuerst ganz genau und rundet dann das Ergebnis.", wahr:false, warum:"Andersherum: Erst jede Zahl runden, dann mit den gerundeten Zahlen rechnen."}
  ]
},
/* ------------------------------------------------------------------ */
{ id:"a", name:"Schriftlich addieren", kurz:"Schriftlich plus",
  fig:"schrift:1353 + 834 + 972",
  merk:[
    "Schreib die Zahlen genau untereinander: <b>Einer unter Einer, Zehner unter Zehner</b> und so weiter.",
    "Fang <b>rechts</b> bei den Einern an und addiere Spalte für Spalte.",
    "Kommt in einer Spalte 10 oder mehr heraus, schreibst du nur die Einerziffer hin. Den Rest schreibst du als <b>Übertrag</b> klein in die nächste Spalte und rechnest ihn dort mit.",
    "Bei drei oder mehr Zahlen kann der Übertrag auch 2 sein: 21 → schreib 1, Übertrag 2.",
    "Erst <b>überschlagen</b>, dann genau rechnen, dann vergleichen."
  ],
  regeln:[{q:"Beim schriftlichen Addieren schreibst du die Zahlen so untereinander: ___.",opt:["Einer unter Einer, Zehner unter Zehner", "alle Zahlen links bündig", "die größte Zahl nach unten"],r:0,m:0},{q:"Du fängst an bei den ___.",opt:["Einern ganz rechts", "Tausendern ganz links", "größten Ziffern"],r:0,m:1},{q:"In einer Spalte kommt 15 heraus. Du schreibst ___.",opt:["5 hin und 1 als Übertrag", "15 hin", "1 hin und 5 als Übertrag"],r:0,m:2},{q:"Den Übertrag rechnest du ___.",opt:["in der nächsten Spalte links mit", "gar nicht mit", "in derselben Spalte nochmal mit"],r:0,m:2},{q:"Bei drei Zahlen kommt in einer Spalte 21 heraus. Der Übertrag ist ___.",opt:["2", "1", "21"],r:0,m:3}],
  papa:"Rechne Papa eine Aufgabe vor und sag bei jeder Spalte laut, was du rechnest und wie groß der Übertrag ist.",
  karten:[
    {id:"a1", typ:"schrift", t:"735 + 124"},
    {id:"a2", typ:"schrift", t:"3419 + 363"},
    {id:"a3", typ:"schrift", t:"1186 + 533", ueb:100},
    {id:"a4", typ:"schrift", t:"2543 + 238 + 257", ueb:100},
    {id:"a5", typ:"schrift", t:"6817 + 795 + 1620", ueb:100},
    {id:"a6", typ:"schrift", t:"16807 + 965 + 4817"},
    {id:"a7", typ:"schrift", gen:{op:"+", d:[4,4]}},
    {id:"a8", typ:"schrift", gen:{op:"+", d:[4,3,4]}},
    {id:"a9", typ:"mc", frage:"In der Zehnerspalte kommt 7 + 3 + 5 = 15 heraus. Was machst du?", optionen:["Ich schreibe 5 hin und rechne 1 als Übertrag bei den Hundertern mit","Ich schreibe 15 in die Zehnerspalte","Ich schreibe 1 hin und rechne 5 als Übertrag mit"], richtig:0, warum:"Unten steht nur die Einerziffer von 15. Die 1 wandert als Übertrag in die nächste Spalte."}
  ]
},
/* ------------------------------------------------------------------ */
{ id:"s", name:"Schriftlich subtrahieren und Probe", kurz:"Schriftlich minus",
  fig:"schrift:1758 − 464 − 213",
  merk:[
    "Zahlen untereinander: Einer unter Einer … Der <b>Minuend</b> steht oben.",
    "Fang rechts an. Addiere die unteren Ziffern (ohne die oberste) und rechne, <b>wie viel noch bis zur obersten Ziffer fehlt</b>. Das schreibst du unten hin.",
    "Ist die untere Summe größer als die oberste Ziffer, ergänzt du bis zur nächsten Zahl mit dieser Endziffer, also bis 15 statt 5. Die 1 ist der <b>Übertrag</b> für die nächste Spalte.",
    "Mehrere Subtrahenden? Genau so: alle unteren Ziffern plus Übertrag zusammenzählen, dann bis oben ergänzen.",
    "<b>Probe mit der Umkehraufgabe:</b> Ergebnis + Subtrahend(en) muss den Minuenden ergeben. 100 − 81 = 19 → 19 + 81 = 100 ✓"
  ],
  regeln:[{q:"Beim schriftlichen Subtrahieren steht oben ___.",opt:["der Minuend", "der Subtrahend", "das Ergebnis"],r:0,m:0},{q:"In jeder Spalte zählst du die unteren Ziffern zusammen und rechnest dann, ___.",opt:["wie viel bis zur oberen Ziffer fehlt", "was alles zusammen ergibt", "welche Ziffer am größten ist"],r:0,m:1},{q:"Oben steht 5, unten zusammen 8. Dann ergänzt du bis ___.",opt:["15", "8", "5"],r:0,m:2},{q:"Hast du bis 15 ergänzt, ist der Übertrag für die nächste Spalte ___.",opt:["1", "5", "0"],r:0,m:2},{q:"Die Probe zu 100 − 81 = 19 heißt ___.",opt:["19 + 81 = 100", "100 + 81 = 181", "81 − 19 = 62"],r:0,m:4}],
  papa:"Erklär Papa an 1758 − 464 − 213, wie das Ergänzen funktioniert, und mach danach die Probe.",
  karten:[
    {id:"s1", typ:"schrift", t:"965 − 342"},
    {id:"s2", typ:"schrift", t:"8183 − 2011"},
    {id:"s3", typ:"schrift", t:"3000 − 1224"},
    {id:"s4", typ:"schrift", t:"7081 − 309 − 526"},
    {id:"s5", typ:"schrift", t:"3252 − 96 − 659", ueb:100},
    {id:"s6", typ:"schrift", t:"23817 − 5253 − 9323"},
    {id:"s7", typ:"schrift", gen:{op:"-", d:[4,3]}},
    {id:"s8", typ:"schrift", gen:{op:"-", d:[4,3,3]}},
    {id:"s9", typ:"probe", t:"83 − 47 = 44"},
    {id:"s10", typ:"probe", t:"602 − 397 = 405"},
    {id:"s11", typ:"probe", t:"149 + 248 = 397"}
  ]
},
/* ------------------------------------------------------------------ */
{ id:"k", name:"Klammern", kurz:"Klammern",
  fig:"klammer",
  merk:[
    "Was in der <b>Klammer</b> steht, rechnest du <b>immer zuerst</b>.",
    "246 − (63 + 22) = 246 − 85 = 161",
    "Ohne Klammern rechnest du bei Plus und Minus von links nach rechts.",
    "<b>Achtung bei Minus vor der Klammer:</b> 86 − (28 − 12) = 86 − 16 = 70. Ohne Klammer käme 46 heraus!",
    "Bei Plus vor der Klammer darfst du sie weglassen: 59 + (22 − 12) − 17 = 59 + 22 − 12 − 17 = 52."
  ],
  regeln:[{q:"Was in der Klammer steht, rechnest du ___.",opt:["zuerst", "zuletzt", "gar nicht"],r:0,m:0},{q:"Ohne Klammern rechnest du bei Plus und Minus ___.",opt:["von links nach rechts", "von rechts nach links", "erst alle Plus, dann alle Minus"],r:0,m:2},{q:"86 − (28 − 12) = ___",opt:["70", "46", "74"],r:0,m:3},{q:"Steht ein Minus vor der Klammer, darfst du die Klammer ___.",opt:["nicht einfach weglassen", "immer weglassen"],r:0,m:3},{q:"Steht ein Plus vor der Klammer, ändert sich das Ergebnis ohne Klammer ___.",opt:["nicht", "immer"],r:0,m:4}],
  papa:"Zeig Papa an 86 − (28 − 12), warum die Klammer hier wichtig ist.",
  karten:[
    {id:"k1", typ:"mc", frage:"Was rechnest du bei 120 − (45 + 15) zuerst?", optionen:["45 + 15","120 − 45","120 − 15"], richtig:0, warum:"Klammer zuerst: 45 + 15 = 60. Dann 120 − 60 = 60."},
    {id:"k2", typ:"num", term:"86 − (36 + 14)"},
    {id:"k3", typ:"num", term:"67 + 13 − (28 − 18)"},
    {id:"k4", typ:"num", term:"100 − (100 − 82) + 18"},
    {id:"k5", typ:"num", term:"246 − (63 + 22)"},
    {id:"k6", typ:"num", term:"86 − (28 − 12)"},
    {id:"k7", typ:"num", term:"(158 − 28) − (58 − 28)"},
    {id:"k8", typ:"tf", aussage:"Bei 59 + (22 − 12) − 17 kann man die Klammer weglassen, ohne dass sich das Ergebnis ändert.", wahr:true, warum:"Mit Klammer: 59 + 10 − 17 = 52. Ohne: 59 + 22 − 12 − 17 = 52. Vor der Klammer steht ein Plus."},
    {id:"k9", typ:"tf", aussage:"Bei 86 − (28 − 12) kann man die Klammer weglassen, ohne dass sich das Ergebnis ändert.", wahr:false, warum:"Mit Klammer: 86 − 16 = 70. Ohne: 86 − 28 − 12 = 46. Vor der Klammer steht ein Minus."},
    {id:"k10", typ:"klammer", aufgabe:"75 − 38 − 23 + 4 = 64", ziel:64, optionen:["(75 − 38) − 23 + 4","75 − (38 − 23) + 4","75 − 38 − (23 + 4)"]},
    {id:"k11", typ:"klammer", aufgabe:"88 − 42 + 13 − 7 = 40", ziel:40, optionen:["88 − (42 + 13) − 7","88 − (42 + 13 − 7)","(88 − 42) + 13 − 7"]}
  ]
},
/* ------------------------------------------------------------------ */
{ id:"v", name:"Rechengesetze und vorteilhaft rechnen", kurz:"Rechengesetze",
  fig:"gesetze",
  merk:[
    "<b>Vertauschungsgesetz</b> (Kommutativgesetz): In einer Summe darfst du die Summanden vertauschen. a + b = b + a, z. B. 37 + 51 = 51 + 37.",
    "<b>Verbindungsgesetz</b> (Assoziativgesetz): In einer Summe darfst du beliebig Klammern setzen. (a + b) + c = a + (b + c), z. B. (68 + 156) + 44 = 68 + (156 + 44).",
    "Beide Gesetze gelten <b>nur beim Addieren</b>. Beim Subtrahieren nicht: 10 − 3 ist nicht 3 − 10.",
    "<b>Vorteilhaft rechnen:</b> Such Zahlen, die zusammen eine glatte Zahl ergeben, also deren Einer zusammen 10 ergeben. Die rechnest du zuerst.",
    "24 + 39 + 21 = 24 + (39 + 21) = 24 + 60 = 84"
  ],
  regeln:[{q:"Vertauschungsgesetz: In einer Summe darfst du die Summanden ___.",opt:["vertauschen", "weglassen", "verdoppeln"],r:0,m:0},{q:"Das Vertauschungsgesetz heißt auch ___.",opt:["Kommutativgesetz", "Assoziativgesetz"],r:0,m:0},{q:"Verbindungsgesetz: In einer Summe darfst du beliebig ___ setzen.",opt:["Klammern", "Minuszeichen", "Gleichheitszeichen"],r:0,m:1},{q:"Diese beiden Gesetze gelten ___.",opt:["nur beim Addieren", "auch beim Subtrahieren"],r:0,m:2},{q:"Bei 24 + 39 + 21 rechnest du vorteilhaft zuerst ___.",opt:["39 + 21", "24 + 39", "24 + 21"],r:0,m:4}],
  papa:"Erklär Papa die beiden Rechengesetze mit eigenen Zahlen und rechne ihm 22 + 65 + 35 + 78 vorteilhaft vor.",
  karten:[
    {id:"v1", typ:"match", frage:"Welcher Name gehört zu welcher Regel? Tippe erst links, dann rechts.", paare:[["Vertauschungsgesetz","a + b = b + a"],["Verbindungsgesetz","(a + b) + c = a + (b + c)"],["Kommutativgesetz","anderer Name fürs Vertauschungsgesetz"],["Assoziativgesetz","anderer Name fürs Verbindungsgesetz"]]},
    {id:"v2", typ:"mc", frage:"Welches Gesetz wurde benutzt? 37 + 51 = 51 + 37", optionen:["Vertauschungsgesetz (Kommutativgesetz)","Verbindungsgesetz (Assoziativgesetz)","Klammerregel"], richtig:0, warum:"Die Summanden wurden vertauscht."},
    {id:"v3", typ:"mc", frage:"Welches Gesetz wurde benutzt? (68 + 156) + 44 = 68 + (156 + 44)", optionen:["Verbindungsgesetz (Assoziativgesetz)","Vertauschungsgesetz (Kommutativgesetz)","Klammerregel"], richtig:0, warum:"Die Reihenfolge bleibt gleich, nur die Klammer wurde anders gesetzt."},
    {id:"v4", typ:"tf", aussage:"Beim Subtrahieren darf man die Zahlen auch vertauschen: 50 − 20 = 20 − 50.", wahr:false, warum:"Das Vertauschungsgesetz gilt nur beim Addieren. 50 − 20 = 30, aber 20 − 50 geht nicht."},
    {id:"v5", typ:"tf", aussage:"Beim Addieren darf man Klammern beliebig setzen. Das Ergebnis bleibt gleich.", wahr:true, warum:"Das ist das Verbindungsgesetz (Assoziativgesetz)."},
    {id:"v6", typ:"vorteil", zahlen:[24,39,21]},
    {id:"v7", typ:"vorteil", zahlen:[83,22,28,7]},
    {id:"v8", typ:"vorteil", zahlen:[22,65,35,78]},
    {id:"v9", typ:"vorteil", zahlen:[248,12,52,88]},
    {id:"v10", typ:"vorteil", zahlen:[69,55,31,75]},
    {id:"v11", typ:"vorteil", zahlen:[75,87,113], text:"David hat mit seinen Matheaufgaben angefangen: 75 + 87 + 113 = 162 + 113 = … „Das ist viel zu schwierig“, stöhnt er. Hilf ihm, vorteilhaft zu rechnen."},
    {id:"v12", typ:"mc", frage:"56 + 45 + 24 + 5: Welche Zahlen rechnest du zuerst zusammen?", optionen:["56 + 24 und 45 + 5","56 + 45 und 24 + 5","56 + 5 und 45 + 24"], richtig:0, warum:"56 + 24 = 80 und 45 + 5 = 50. Dann 80 + 50 = 130."}
  ]
},
/* ------------------------------------------------------------------ */
{ id:"t", name:"Textaufgaben", kurz:"Textaufgaben",
  fig:"text",
  merk:[
    "<b>1. Lesen:</b> Lies die Aufgabe zweimal. Was ist gegeben? Was ist <b>gefragt</b>?",
    "<b>2. Notieren:</b> Schreib die wichtigen Zahlen auf oder mach eine Skizze.",
    "<b>3. Rechnen:</b> Plus, wenn etwas dazukommt oder zusammengezählt wird. Minus, wenn etwas weggeht oder du suchst, wie viel noch fehlt oder übrig ist.",
    "<b>4. Antwortsatz:</b> Er beantwortet genau die Frage, mit Einheit (€, km).",
    "Manchmal stehen Zahlen in der Aufgabe, die du für die Frage gar nicht brauchst."
  ],
  regeln:[{q:"Bei einer Textaufgabe machst du zuerst Folgendes: ___.",opt:["zweimal lesen: Was ist gefragt?", "sofort rechnen", "den Antwortsatz schreiben"],r:0,m:0},{q:"„Wie viel bleibt übrig?“ Dann rechnest du meistens ___.",opt:["minus", "plus"],r:0,m:2},{q:"„Wie viel kostet alles zusammen?“ Dann rechnest du ___.",opt:["plus", "minus"],r:0,m:2},{q:"Ein guter Antwortsatz ___.",opt:["beantwortet genau die Frage, mit Einheit", "wiederholt nur die Rechnung", "ist möglichst lang"],r:0,m:3},{q:"Alle Zahlen aus einer Textaufgabe brauchst du ___.",opt:["nicht immer", "immer"],r:0,m:4}],
  papa:"Denk dir eine eigene Textaufgabe für Papa aus, mit Frage, Rechnung und Antwortsatz. Er rechnet, du kontrollierst.",
  karten:[
    {id:"t1", typ:"kette", art:"text", text:"Ein Flugzeug kann 189 Passagiere transportieren. 98 Plätze wurden bereits gebucht. Wie viele Plätze sind noch frei?", schritte:[
      {typ:"mc", f:"Welche Rechnung passt?", opt:["189 − 98","189 + 98","98 − 189"], r:0, tipp:"Gesucht ist, was übrig bleibt."},
      {typ:"num", f:"Rechne aus.", term:"189 − 98"},
      {typ:"mc", f:"Welcher Antwortsatz passt?", opt:["Es sind noch 91 Plätze frei.","Es wurden 91 Plätze gebucht.","Im Flugzeug sitzen 91 Passagiere."], r:0, tipp:"Der Antwortsatz beantwortet genau die Frage."}
    ]},
    {id:"t2", typ:"kette", art:"text", text:"Die Klasse 6c macht einen Ausflug zum Erlebnis-Bauernhof. Der Eintritt kostet 126 €. Für den Bus zahlen sie 129 €. „Das sind zusammen ja mehr als 250 €!“, meint Jan. Wie viel sind es genau?", schritte:[
      {typ:"mc", f:"Welche Rechnung passt?", opt:["126 + 129","129 − 126","250 − 126"], r:0, tipp:"Eintritt und Bus werden zusammengezählt."},
      {typ:"num", f:"Rechne aus.", term:"126 + 129", einheit:"€"},
      {typ:"mc", f:"Welcher Antwortsatz passt?", opt:["Zusammen kostet es 255 €. Jan hat recht.","Zusammen kostet es 3 €.","Der Eintritt kostet 255 €."], r:0}
    ]},
    {id:"t3", typ:"kette", art:"text", text:"Der Klassenlehrer der 6c bezahlt an der Kasse des Erlebnis-Bauernhofs mit 150 €. Der Eintritt kostet 126 €, der Bus 129 €. Wie viel Wechselgeld bekommt der Lehrer an der Kasse?", schritte:[
      {typ:"mc", f:"Was brauchst du für die Frage?", opt:["150 € und den Eintritt 126 €","150 € und den Bus 129 €","Eintritt und Bus zusammen"], r:0, tipp:"An der Kasse vom Bauernhof wird nur der Eintritt bezahlt."},
      {typ:"num", f:"Rechne aus.", term:"150 − 126", einheit:"€"}
    ], warum:"Der Bus wird hier nicht gebraucht. Lies immer genau, was gefragt ist!"},
    {id:"t4", typ:"kette", art:"text", text:"In einer Kleinstadt leben 13845 Menschen. 4183 von ihnen sind Kinder. Wie viele Erwachsene leben in der Kleinstadt?", schritte:[
      {typ:"mc", f:"Welche Rechnung passt?", opt:["13845 − 4183","13845 + 4183","4183 − 13845"], r:0, tipp:"Alle Menschen ohne die Kinder."},
      {typ:"num", f:"Rechne aus (gern schriftlich im Heft).", term:"13845 − 4183"}
    ]},
    {id:"t5", typ:"schrift", t:"1059 + 1946 + 770 + 6891 + 8454", text:"Die Zählung in einem Zoo hat ergeben: 1059 Säugetiere, 1946 Vögel, 770 Lurche, 6891 Fische und 8454 Wirbellose. Wie viele Tiere leben insgesamt im Zoo?", einheit:"Tiere"},
    {id:"t6", typ:"kette", art:"text", text:"Theos Onkel macht eine sechstägige Radtour. Die Strecke ist insgesamt 453 km lang. An den ersten fünf Tagen fährt er 76 km, 83 km, 65 km, 91 km und 75 km. Wie weit fährt er am letzten Tag?", schritte:[
      {typ:"num", f:"Wie viele km fährt er an den ersten fünf Tagen zusammen?", term:"76 + 83 + 65 + 91 + 75", einheit:"km", tipp:"Vorteilhaft: 65 + 75 = 140 und 76 + 83 + 91 = 250."},
      {typ:"num", f:"Wie weit fährt er am letzten Tag?", term:"453 − 390", einheit:"km", tipp:"Gesamtstrecke minus das, was er schon gefahren ist."},
      {typ:"mc", f:"Welcher Antwortsatz passt?", opt:["Am letzten Tag fährt er 63 km.","Er fährt insgesamt 63 km.","In fünf Tagen fährt er 63 km."], r:0}
    ]},
    {id:"t7", typ:"kette", art:"text", text:"Elion kauft einen Fußball für 23 € und Fußballschuhe für 29 €. Er bezahlt mit einem 50-€-Schein und einem 20-€-Schein.", schritte:[
      {typ:"num", f:"Wie viel muss Elion bezahlen?", term:"23 + 29", einheit:"€"},
      {typ:"num", f:"Wie viel Wechselgeld bekommt er?", term:"70 − 52", einheit:"€", tipp:"Er gibt 50 € + 20 € = 70 €."}
    ]},
    {id:"t8", typ:"kette", art:"text", text:"Jasmins Vater muss 14 € für eine Hose bezahlen. Er zahlt mit einem 50-€-Schein und bekommt 26 € Wechselgeld. Stimmt das?", schritte:[
      {typ:"num", f:"Wie viel Wechselgeld müsste er bekommen?", term:"50 − 14", einheit:"€"},
      {typ:"mc", f:"Stimmt das Wechselgeld?", opt:["Nein, er müsste 36 € bekommen.","Ja, 26 € stimmt."], r:0}
    ], warum:"Probe: 36 + 14 = 50 ✓. Mit 26 € hätte er 10 € zu wenig bekommen."},
    {id:"t9", typ:"kette", art:"text", text:"Familie Fritsche fährt mit dem Auto in den Urlaub nach Istrien. Sie braucht zwei Tage. Am ersten Tag fahren sie 736 km, am zweiten Tag 558 km. Wie weit ist das Urlaubsziel entfernt?", schritte:[
      {typ:"num", f:"Rechne aus.", term:"736 + 558", einheit:"km"},
      {typ:"mc", f:"Welcher Antwortsatz passt?", opt:["Das Urlaubsziel ist 1294 km entfernt.","Am zweiten Tag fahren sie 1294 km.","Sie müssen noch 1294 km fahren."], r:0}
    ]},
    {id:"t10", typ:"kette", art:"text", text:"Im Zug sitzen 238 Fahrgäste. An der ersten Station steigen 125 aus und 173 ein. An der zweiten Station steigen 78 ein und 120 aus. Wie viele Fahrgäste sind jetzt im Zug?", schritte:[
      {typ:"num", f:"Wie viele sind nach der ersten Station im Zug?", term:"238 − 125 + 173", tipp:"Aussteigen heißt minus, einsteigen heißt plus."},
      {typ:"num", f:"Und nach der zweiten Station?", term:"286 + 78 − 120"}
    ], warum:"Jetzt sind 244 Fahrgäste im Zug."},
    {id:"t11", typ:"kette", art:"text", text:"Das Urlaubsziel Griechenland ist 2755 km entfernt. Am ersten Tag fährt Familie Stein 856 km, am zweiten Tag 798 km. Wie weit ist es noch?", schritte:[
      {typ:"mc", f:"Welche Rechnung passt?", opt:["2755 − 856 − 798","2755 + 856 + 798","856 + 798"], r:0, tipp:"Von der ganzen Strecke wird abgezogen, was schon gefahren ist."},
      {typ:"num", f:"Rechne aus (gern schriftlich im Heft).", term:"2755 − 856 − 798", einheit:"km"}
    ]}
  ]
}
];

/* Generalprobe: gemischt wie die Klassenarbeit, alle sieben Themen vom Übungszettel */
window.GENERALPROBE = ["f2","f6","f10","f14","u5","u8","a4","s4","s10","k3","k11","v3","v8","t3","t7"];

/* Generalprobe 2: lauter neue Aufgaben (nicht in den Stationen), alle sieben Themen */
window.EXTRA_KARTEN = [
  {id:"g1", typ:"match", frage:"248 + 37 = 285. Was ist was? Tippe erst links, dann rechts.", paare:[["248","1. Summand"],["37","2. Summand"],["285","Wert der Summe"],["248 + 37","Summe"]]},
  {id:"g2", typ:"begriff", aufgabe:"■ − 27 = 48"},
  {id:"g3", typ:"begriff", aufgabe:"36 + ■ = 91"},
  {id:"g4", typ:"kette", art:"text2", text:"Der Minuend heißt 250, der Wert der Differenz ist 85.", schritte:[
    {typ:"mc", f:"Welche Aufgabe passt?", opt:["250 − ■ = 85","■ − 250 = 85","250 + 85 = ■"], r:0, tipp:"Der Minuend steht vorne, der Wert der Differenz hinter dem Gleichzeichen."},
    {typ:"num", f:"Wie heißt der Subtrahend?", term:"250 − 85", tipp:"Umkehraufgabe: 250 − 85"}
  ], warum:"250 − 165 = 85. Der Subtrahend ist 165."},
  {id:"g5", typ:"type", frage:"Wie heißt die erste Zahl bei einer Minusaufgabe? Schreib den Fachbegriff.", ok:["minuend"], zeige:"Minuend"},
  {id:"g6", typ:"mc", frage:"Welcher Überschlag (auf Hunderter) passt zu 387 + 512?", optionen:["400 + 500 = 900","387 + 512 = 899","300 + 500 = 800"], richtig:0, warum:"387 ≈ 400 und 512 ≈ 500. 899 ist schon genau gerechnet, das ist kein Überschlag."},
  {id:"g7", typ:"ueb", t:"4682 − 1795", stelle:100, genau:false},
  {id:"g8", typ:"schrift", t:"4867 + 395 + 1748", ueb:100},
  {id:"g9", typ:"schrift", t:"6204 − 418 − 1375"},
  {id:"g10", typ:"probe", t:"512 − 287 = 235"},
  {id:"g11", typ:"num", term:"150 − (48 + 32) + 15"},
  {id:"g12", typ:"klammer", aufgabe:"96 − 40 − 16 + 8 = 80", ziel:80, optionen:["96 − (40 − 16) + 8","96 − 40 − (16 + 8)","(96 − 40) − 16 + 8"]},
  {id:"g13", typ:"mc", frage:"Welches Gesetz wurde benutzt? 29 + 64 + 36 = 29 + (64 + 36)", optionen:["Verbindungsgesetz (Assoziativgesetz)","Vertauschungsgesetz (Kommutativgesetz)","Klammerregel"], richtig:0, warum:"Die Reihenfolge bleibt gleich, nur die Klammer wurde gesetzt."},
  {id:"g14", typ:"vorteil", zahlen:[37,58,63,42]},
  {id:"g15", typ:"kette", art:"text", text:"Mia hat 85 € gespart. Sie kauft Inliner für 59 € und einen Helm für 18 €. Wie viel Geld bleibt ihr?", schritte:[
    {typ:"mc", f:"Welche Rechnung passt?", opt:["85 − 59 − 18","85 + 59 + 18","59 + 18"], r:0, tipp:"Vom Ersparten geht etwas weg."},
    {typ:"num", f:"Rechne aus.", term:"85 − 59 − 18", einheit:"€"},
    {typ:"mc", f:"Welcher Antwortsatz passt?", opt:["Mia bleiben 8 €.","Mia bezahlt 8 €.","Inliner und Helm kosten 8 €."], r:0}
  ]},
  {id:"g16", typ:"kette", art:"text", text:"Ein Kino hat 320 Plätze. Für die Nachmittagsvorstellung wurden 187 Karten verkauft, für die Abendvorstellung 254 Karten. Wie viele Plätze bleiben am Abend frei?", schritte:[
    {typ:"mc", f:"Was brauchst du für die Frage?", opt:["320 Plätze und 254 Karten am Abend","320 Plätze und 187 Karten am Nachmittag","Beide Vorstellungen zusammen"], r:0, tipp:"Gefragt ist nur nach dem Abend."},
    {typ:"num", f:"Rechne aus.", term:"320 − 254"}
  ], warum:"Die 187 Karten vom Nachmittag braucht man hier nicht. Lies genau, was gefragt ist!"}
];
window.GENERALPROBE2 = ["g1","g2","g3","g4","g5","g6","g7","g8","g9","g10","g11","g12","g13","g14","g15","g16"];

window.MERKSAETZE = [
  "Minuend minus Subtrahend gleich Wert der Differenz.",
  "1. Summand plus 2. Summand gleich Wert der Summe.",
  "Überschlag heißt: erst runden, dann rechnen.",
  "Klammer zuerst!",
  "Einer unter Einer, Zehner unter Zehner.",
  "Probe: Ergebnis plus Subtrahend gibt den Minuenden.",
  "Vertauschen und Klammern verschieben geht nur beim Plusrechnen.",
  "Erst die Frage lesen, dann rechnen, dann Antwortsatz.",
  "Minus vor der Klammer? Dann ist die Klammer wichtig!"
];
