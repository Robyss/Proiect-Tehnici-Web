# Proiect Tehnici Web 

## Etapa 1


Site-uri folosite:
- https://favicon.io/
- https://www.wordtracker.com/


Etapa 1 (punctaj recomandat 0.5)
- [x] 1. Creați prima pagină a site-ului (doar prima pagină; fără stilizare încă, fiindcă veți primi taskuri legate de acest aspect). Puteți pune în această pagină text care va fi mutat în alte pagini, mai târziu, dar nu faceți încă mai multe pagini fiindcă le vom genera prin Node! La prezentare vă rog să aveți pentru fiecare task notată linia din program la care l-ați rezolvat ca să nu dureze prezentarea mai mult de 3-4 minute. 
- [x] 2. Creați un folder al proiectului care va cuprinde toate fisierele necesare site-ului vostru. Creați în el un fisier  numit index.html. Deschideți acest fișier cu un editor de text care marchează sintaxa. Adăugați în fișier doctype și setați limba documentului în tagul html
- [x] 3. Adaugati un title corespunzător conținutului textului. Folosiți 4 taguri meta relevante pentru a specifica: charset-ul, autorul, cuvintele cheie, descrierea.
- [x] 4. Creați un folder (de exemplu numit "resurse") care va conține toate fișierele folosite de site, dar care nu sunt pagini html (de exemplu imagini, fisiere de stilizare etc). In el creati un folder numit ico. Adaugati un favicon relevant pentru temă. Folosiți https://realfavicongenerator.net pentru a genera toate dimensiunile necesare de favicon și codul compatibil pentru diversele browsere și sisteme de operare. Pentru favicon transparent, trebuie sa setati si o culoare a tile-ului (de background), care trebuie specificata și în tagul meta: `<meta name="msapplication-TileColor" content="...culoarea aleasa de voi...">`
- [x] 5. Împărțiți body-ul în header, main, footer.
- [x] 6. În header faceți un sistem de navigare ca în curs (nav cu listă neordonată de linkuri), cu opțiuni  principale (care vor reprezenta paginile site-ului) și secundare (pentru opțiunea "Acasă", adică pagina principală, subopțiunile vor cuprinde linkuri către secțiunile paginii, care vor avea id-uri relevante). Folosiți în header h1 pentru titlul site-ului. 
- [x] 7. Folosiți minim un tag dintre: section, article, aside. Trebuie să existe măcar un caz de taguri de secționare imbricate (secțiune în secțiune). Puneți headingul cu nivelul corespunzător nivelului imbricării. Atenție, nu folosim headinguri decât ca titluri pentru tagurile de secționare. Observație: nivelul headingului trebuie să corespundă nivelului de imbricare a secțiunii (de exemplu un tag de secționare aflat direct în body  are titlul scris cu h2, dar un tag de sectionare aflat intr-un tag de secționare care la rândul lui se află în body, va avea titlul scris cu h3
- [ ] 8. În cadrul secțiunilor folosiți minim 2 taguri dintre următoare taguri de grupare: p, ol, ul, blockquote, dl
- [ ] 9. Adăugați în pagină o imagine cu descriere, folosind figure și figcaption. Pe ecran mic (mobil) trebuie să se încarce o variantă mai redusă în dimensiune (bytes) a imaginii, pe tabletă o variantă medie, iar pe ecran mare varianta cea mai mare a imaginii. Folosiți un editor grafic pentru cropping și redimensionare pentru a obține cele 3 variante de imagini. Textul trebuie să conțină toate cuvintele cheie identificate pentru pagina curentă. Puteți găsi mai multe sintagme cheie pe care le puteți folosi, cu https://www.wordtracker.com/  sau https://app.neilpatel.com/en/ubersuggest/keyword_ideas Acestea trebuie să apară de mai multe ori în pagină, în taguri relevante.
- [ ] 10. În cadrul textului îndepliniți 3 dintre cerințele de mai jos, la alegere:
    - marcați cuvintele și sintagmele cheie cu ajutorul tagului b
    - marcați textul idiomatic (termeni științifici, în altă limbă, tehnici, de jargon, etc) cu tagul i
    - marcați textul de atenționare cu strong
    - marcați textul accentuat cu em
    - marcați textul șters (corectat sau care nu mai e relevant) cu tagul s și textul inserat în loc cu tagul ins
    - marcați o abreviere cu abbr și cu atributul title specificați sintagma abreviată
    - marcați un termen definit cu dfn
    - marcați un citat cu tagul q
- [ ] 11. Creați următoarele linkuri speciale: 
    - un link extern (va fi in continutul paginii, nu in meniu, va face referire la alt site si se va deschide in fereastră nouă)
    - un link în footer către începutul paginii, minim două linkuri care se deschid într-un iframe (se poate face ca în exemplul de curs, linkuri care deschid videoclipuri relevante de pe youtube în iframe). Atentie nu e vorba de src-ul iframe-ului ce de taguri `<a>` care la click se deschid in iframe. Iframe-ul va contine in mod default una dintre resursele specificate in linkuri
    - Un link de tip download
- [ ] 12. Creați în pagină mai multe zone de details și summary. Pot fi întrebări frecvente, pot fi niște oferte pentru care afișăm titlul și utilizatorul le deschide pe cele care îl interesează, pot fi secțiuni explicative etc.
- [ ] 13. În footer se vor adăuga cu ajutorul tagului address informații de contact:
    - telefon fictiv, marcat cu tagul `<a>` si URI Scheme-ul corespunzător
    - adresă fictivă care la click deschide o locatie pe Google Maps (locatia in mod normal ar corespunde cu adresa dar voi veti pune drept locatie in maps, Facultatea de matematica si informatica)
    - e-mail fictiv, marcat cu tagul `<a>` si URI Scheme-ul corespunzător în href
    - Link care deschide o aplicatie de comunicare precum skype sau whatsapp pentru chat
- [ ] 14. În footer se va adăuga informație de copyright, folosind tagul small, simbolul specific de copyright cu codul html necesar (forma &cod;) și data creării paginii scrisă în limba română și pusă în tagul time cu atributul datetime corespunzător. 
Pagina trebuie sa fie valida din punct de vedere sintactic. Deci verificati cu validatorul html. Validatorul va fi pregătit într-un tab, la prezentare, și pagina se va valida pe loc.
Se poate da bonus pentru o temă bine făcută sau pentru folosirea mai multor taguri decât minimul specificat (dar studentul trebuie să anunțe la prezentare că le-a folosit)
Evitați pentru moment să adăugați alte taguri fiindcă vor apărea în taskurile următoare.
**Bonus** (0.05) Folosirea unei formule scrise în MathML - formula trebuie să aibă sens în contextul site-ului.
