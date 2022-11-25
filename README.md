# Proiect Tehnici Web

## Etapa 3

- [x] 
    1. Se va crea un obiect server express care va asculta pe portul 8080. (sau alt port daca aveti deja folosit 8080)
- [x] 
    2. Se va folosi EJS pentru generarea (randarea) paginilor. Se va face un folder numit views în rădăcina proiectului. În el veți face un folder numit pagini (care conține paginile întregi) și altul numit fragmente (care conține părți de pagini (bucățele de cod html) ce pot fi refolosite pe mai multe pagini).
- [x] 
    3. Din index (care va fi redenumit index.ejs) se vor decupa headerul și footerul și se vor pune în ejs-uri separate. De asemenea se va decupa partea de head care conține codul care nu se schimbă în funcție de pagină (de exemplu, tagul meta cu encodingul sau autorul, includerea faviconului, fișierelor css generale (nu specifice paginii) a scripturilor generale etc). Se va folosi funcția include() pentru a include toate aceste fragmente în pagini
- [x] 
    4. Se va realiza (dacă nu l-ați făcut deja) un folder special cu toate resursele site-ului (în stilul exemplului de la curs în care am pus toate fișierele statice, precum imagini, fișiere de stil, videoclipuri etc în folderul "resurse"). Numele folderului îl decideți voi, însă va trebui să fie structurat, de asemenea, în subfoldere în funcție de tipul și modul de utilizarea al fișierelor. Se va defini în program acest folder ca fiind static
- [?] 
    5. Se vor schimba căile fișierelor-resursă folosite în pagini, astfel încât să nu mai fie relative ci stil cerere către server (de exemplu, /resurse/stiluri/ceva.css în loc de, de exemplu, ../resurse/stiluri/ceva.css)
- [x] 
    6. Prima pagină (index) trebuie să se poată accesa atât cu localhost:8080 cât și cu localhost:8080/index,  localhost:8080/home.
- [x] 
    7. Veți declara un app.get() general care tratează orice cerere de forma /pagina randând fișierul pagina.ejs. Dacă acesta nu există, se va randa o pagină specială de eroare 404. Se va crea o pagină specială pentru eroarea 404. Pagina va avea atât ca titlu cât și heading textul "Eroare 404". Pagina pentru 404 trebuie să conțină headerul (cu tot cu meniu) și footerul. Pagina va avea un text care să se potrivească cu tema site-ului și o imagine care să simbolizeze căutarea fără succes.Se va seta codul de eroare 404 al răspunsului folosind funcția status(). Paginile de erori trebuie sa fie create cu ajutorul unui template (eroare.ejs) iar datele erorilor să fie încărcate dintr-un JSON
- [x] 
    8. Veți mai face încă o pagină (cu puțin text sau imagini, ca să aibă conținut), de exemplu o pagină cu descrierea site-ului sau istoricul său, al firmei virtuale pentru care este făcut etc. Această pagină trebuie să poată fi accesată prin meniu (linkul să fie corect și să transmită o cerere de tip get). Nu faceti încă pagina de produse, fiindcă pe acelea le preluăm din baza de date. Nici paginile de înregistrare sau login, fiindca le tratăm separat.
- [x] 
    9. În zona din layout de date despre utilizator vom afișa ip-ul utilizatorului (prin program). Deocamdată, site-ul fiind local, veți vedea mereu ip-ul de localhost (adică ::1). Ip-ul real se va vedea când adăugați site-ul pe Heroku.
- [x] 
    10. La cererea oricărui fișier cu extensia ejs se va transmite o eroare de tip 403 Forbidden. Pagina de 403 va avea format similar cu cea de 404, folosind același template (eroare.ejs), dar textul și imaginea schimbate corespunzător, preluate din JSON

---
    
## Etapa 2

**Etapa 2 (punctaj recomandat 0.55)**

Atentie - unele cerinte au enunt diferit pentru fiecare student (si sunt marcate printr-un link). Trebuie sa va
inregistrati pe site pentru a le vedea.

Daca stilizarea dintr-o cerinta nu va place, puteti sa imi cereti o alta varianta (imi scrieti pe chat). Culorile din
imaginile si videoclipurile date ca exemplu nu trebuie.
[Link task-uri](http://irinaciocan.ro/tehnici_web/cerinte_custom_cti.php)

- [X] 
    1. Task schema cromatica.
- [x] 
    2. Task layout.
- [X] 
    3. Task meniu. (mai trebuie animatia de start)
- [x] 
    4. Task iconuri și font extern. Folosiți in prima pagină a site-ului un font extern: Google API. Folosiți în pagină,
       într-un loc relevant un icon static și unul animat (separat de eventuale alte taskuri care cer așa ceva) din
       colecția Font Awesome.
- [x] 
    5. Task label.
- [x] 
    6. Task taburi iframe.
- [X] 
    7. Link top.

Bonusuri:

- [x] (0.05) Resetarea css-ului cu redefinirea spațierilor, dimensiunilor, culorilor, stilurilor bol si italic, eventual a
  bulleturilor și indicilor de listă, a stilului tabelelor). In afară de body și html care vor primi dimensiuni în
  unități fixe, toate celelalte elemente vor folosi unități relative. Se vor folosi variabile pentru valori care se
  repetă și depind logic unele de altele.

- [x] (0.05)Stilizarea unei formule scrise în MathML.(dar părți diferite din formulă să aibă stil diferit.

- [x] (0.05) Icon-ul meniului "hamburger" să fie creat cu 3 divuri (eventual puse într-un div container în locul unei
  imagini).

- [x] (0.05) Cand se trece pe ecran mic și apare iconul pentru meniu, apariția să fie făcută printr-o animație asupra
  divurilor care să implice schimbarea tuturor următoarelor proprietăți: culoarea celor 3 bare, o transformare
  geometrică, opacitate. Puteți schimba și alte proprietăți dacă doriți. Animația trebuie să aibă minim 3 cadre cheie.

- [ ] (0.05) Pentru bonusul anterior, fiecare bară din hamburger-menu să aibă asociată o animație, însă animațiile să
  înceapă succesiv cu o diferența de t milisecunde (de exemplu t=300). Delayurile diferite în cadrul animației se vor
  genera cu o instrucțiune for scrisă în sass.

---

## Etapa 1

Site-uri folosite:

- https://favicon.io/
- https://www.wordtracker.com/
- [CompressorJS](https://fengyuanchen.github.io/compressorjs/)

**Etapa 1 (punctaj recomandat 0.5)**

- [x] 
    1. Creați un folder al proiectului care va cuprinde toate fisierele necesare site-ului vostru. Creați în el un
       fisier numit index.html. Deschideți acest fișier cu un editor de text care marchează sintaxa. Adăugați în fișier
       doctype și setați limba documentului în tagul html

- [x] 
    2. Adaugati un title corespunzător conținutului textului. Folosiți 4 taguri meta relevante pentru a specifica:
       charset-ul, autorul, cuvintele cheie, descrierea.

- [x] 
    3. Creați un folder (de exemplu numit "resurse") care va conține toate fișierele folosite de site, dar care nu sunt
       pagini html (de exemplu imagini, fisiere de stilizare etc). In el creati un folder numit ico. Adaugati un favicon
       relevant pentru temă. Folosiți https://realfavicongenerator.net pentru a genera toate dimensiunile necesare de
       favicon și codul compatibil pentru diversele browsere și sisteme de operare. Pentru favicon transparent, trebuie
       sa setati si o culoare a tile-ului (de background), care trebuie specificata și în tagul
       meta: `<meta name="msapplication-TileColor" content="...culoarea aleasa de voi...">`

- [x] 
    4. Împărțiți body-ul în header, main, footer.

- [x] 
    5. În header faceți un sistem de navigare ca în curs (nav cu listă neordonată de linkuri), cu opțiuni principale (
       care vor reprezenta paginile site-ului) și secundare (pentru opțiunea "Acasă", adică pagina principală,
       subopțiunile vor cuprinde linkuri către secțiunile paginii, care vor avea id-uri relevante). Folosiți în header
       h1 pentru titlul site-ului.

- [x] 
    6. Folosiți minim un tag dintre: section, article, aside. Trebuie să existe măcar un caz de taguri de secționare
       imbricate (secțiune în secțiune). Puneți headingul cu nivelul corespunzător nivelului imbricării. Atenție, nu
       folosim headinguri decât ca titluri pentru tagurile de secționare. Observație: nivelul headingului trebuie să
       corespundă nivelului de imbricare a secțiunii (de exemplu un tag de secționare aflat direct în body are titlul
       scris cu h2, dar un tag de sectionare aflat intr-un tag de secționare care la rândul lui se află în body, va avea
       titlul scris cu h3

- [x] 
    7. În cadrul secțiunilor folosiți minim 2 taguri dintre următoare taguri de grupare: p, ol, ul, blockquote, dl

- [x] 
    8. Adăugați în pagină o imagine cu descriere, folosind figure și figcaption. Pe ecran mic (mobil) trebuie să se
       încarce o variantă mai redusă în dimensiune (bytes) a imaginii, pe tabletă o variantă medie, iar pe ecran mare
       varianta cea mai mare a imaginii. Folosiți un editor grafic pentru cropping și redimensionare pentru a obține
       cele 3 variante de imagini.

- [x] 
    9. Textul trebuie să conțină toate cuvintele cheie identificate pentru pagina curentă. Puteți găsi mai multe
       sintagme cheie pe care le puteți folosi, cu https://www.wordtracker.com/
       sau https://app.neilpatel.com/en/ubersuggest/keyword_ideas Acestea trebuie să apară de mai multe ori în pagină,
       în taguri relevante.

- [x] 
    10. În cadrul textului îndepliniți 3 dintre cerințele de mai jos, la alegere:
        - **marcați cuvintele și sintagmele cheie cu ajutorul tagului b**
        - marcați textul idiomatic (termeni științifici, în altă limbă, tehnici, de jargon, etc) cu tagul i
        - marcați textul de atenționare cu strong
        - **marcați textul accentuat cu em**
        - marcați textul șters (corectat sau care nu mai e relevant) cu tagul s și textul inserat în loc cu tagul ins
        - marcați o abreviere cu abbr și cu atributul title specificați sintagma abreviată
        - marcați un termen definit cu dfn
        - **marcați un citat cu tagul q**

- [x] 
    11. Creați următoarele linkuri speciale:
        - un link extern (va fi in continutul paginii, nu in meniu, va face referire la alt site si se va deschide in
          fereastră nouă)
        - un link în footer către începutul paginii, minim două linkuri care se deschid într-un iframe (se poate face ca
          în exemplul de curs, linkuri care deschid videoclipuri relevante de pe youtube în iframe). Atentie nu e vorba
          de src-ul iframe-ului ce de taguri `<a>` care la click se deschid in iframe. Iframe-ul va contine in mod
          default una dintre resursele specificate in linkuri
        - Un link de tip download

- [x] 
    12. Creați în pagină mai multe zone de details și summary. Pot fi întrebări frecvente, pot fi niște oferte pentru
        care afișăm titlul și utilizatorul le deschide pe cele care îl interesează, pot fi secțiuni explicative etc.

- [x] 
    13. În footer se vor adăuga cu ajutorul tagului address informații de contact:
        - telefon fictiv, marcat cu tagul `<a>` si URI Scheme-ul corespunzător
        - adresă fictivă care la click deschide o locatie pe Google Maps (locatia in mod normal ar corespunde cu adresa
          dar voi veti pune drept locatie in maps, Facultatea de matematica si informatica)
        - e-mail fictiv, marcat cu tagul `<a>` si URI Scheme-ul corespunzător în href
        - Link care deschide o aplicatie de comunicare precum skype sau whatsapp pentru chat

- [x] 
    14. În footer se va adăuga informație de copyright, folosind tagul small, simbolul specific de copyright cu codul
        html necesar (forma &cod;) și data creării paginii scrisă în limba română și pusă în tagul time cu atributul
        datetime corespunzător. Pagina trebuie sa fie valida din punct de vedere sintactic. Deci verificati
        cu [validatorul html](https://validator.w3.org/). Validatorul va fi pregătit într-un tab, la prezentare, și
        pagina se va valida pe loc. Se poate da bonus pentru o temă bine făcută sau pentru folosirea mai multor taguri
        decât minimul specificat (dar studentul trebuie să anunțe la prezentare că le-a folosit)
        Evitați pentru moment să adăugați alte taguri fiindcă vor apărea în taskurile următoare.

- [ ] **Bonus** (0.05) Folosirea unei formule scrise în MathML - formula trebuie să aibă sens în contextul site-ului.
