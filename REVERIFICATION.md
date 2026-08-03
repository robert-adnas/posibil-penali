# Reverificarea integrală a profilurilor

Procesul început la 3 august 2026 tratează fiecare profil ca pe un caz editorial separat. Câmpul
`verified_at` existent nu este considerat dovada unei reverificări complete. Progresul real este
înregistrat în `data/reverification/reviews.json`.

## Regula de bază

Un profil este marcat drept reverificat numai după ce au fost controlate toate punctele de mai jos:

1. **Identitatea** — numele, funcția, instituția, localitatea și perioada trebuie să indice aceeași
   persoană în sursa juridică și în sursa de identificare. Potrivirea doar după nume nu este suficientă.
2. **Criteriul de includere** — se stabilește explicit dacă persoana aparține listei politice,
   arhivei extinse sau trebuie exclusă.
3. **Ultimul stadiu juridic** — se caută evoluții ulterioare trimiterii în judecată ori începerii
   urmăririi penale: condamnare, achitare, prescripție, clasare sau dosar încă activ.
4. **Soluția și pedeapsa** — se separă fondul de hotărârea definitivă, pedeapsa rezultantă de
   pedepsele componente și suspendarea de executarea efectivă.
5. **Metadatele publice** — partidul la momentul relevant, funcția, județul și baza geografică.
6. **Sursele** — cel puțin o sursă juridică directă și, când identitatea nu este neechivocă, o a
   doua sursă independentă. Linkurile trebuie să ducă la documentul folosit, nu la pagina principală.
7. **Textul public** — rezumatul nu trebuie să combine persoane sau dosare și trebuie să respecte
   prezumția de nevinovăție pentru orice status nedefinitiv.

## Regimul conservator de publicare

Un profil nereverificat este ascuns editorial atunci când există cel puțin unul dintre următoarele
riscuri: posibilă coincidență de nume, lipsa unei surse oficiale, status juridic încă activ sau o
singură sursă. Hold-ul este reversibil: profilul rămâne în setul editorial complet și continuă să fie
validat, dar este exclus din site, sitemap și exporturile publice. Înregistrarea reverificării prin
`complete` ridică automat hold-ul.

Eliminarea definitivă este rezervată profilurilor confirmate ca duplicate, persoane confundate sau
intrări care nu îndeplinesc criteriul de includere. Incertitudinea singură nu justifică ștergerea
datelor editoriale.

```powershell
npm.cmd run reverify -- apply-safety-holds
npm.cmd run reverify -- hold --id RV-0001 --reason "motiv editorial"
```

Starea publicării este păstrată în `data/reverification/publication.json`. Validarea și auditul intern
folosesc setul complet prin opțiunea `includeUnpublished`; construcția publică folosește implicit doar
profilurile fără hold.

## Ordinea de lucru

Coada implicită prioritizează coincidențele de nume, lipsa surselor oficiale, statusurile active,
persoanele din arhiva extinsă și profilurile cu o singură sursă. Pentru ordinea inițială a setului de
date se folosește `next --order dataset`.

```powershell
npm.cmd run reverify -- status
npm.cmd run reverify -- next
npm.cmd run reverify -- show --id RV-0001
```

După corectarea datelor, verificarea se consemnează astfel:

```powershell
npm.cmd run reverify -- complete --id RV-0001 --decision corrected `
  --identity confirmed --legal-status confirmed --scope political `
  --reviewer "Codex + verificare editorială" `
  --evidence https://www.dna.ro/comunicat.xhtml?id=3383 `
  --evidence https://www.dna.ro/comunicat.xhtml?id=4564 `
  --note "Dosarele și pedepsele erau inversate în rezumat; sursele au fost completate."
```

Valorile acceptate sunt:

- `decision`: `confirmed`, `corrected`, `removed`
- `identity`: `confirmed`, `corrected`, `collision_resolved`
- `legal-status`: `confirmed`, `corrected`, `not_applicable`
- `scope`: `political`, `extended`, `exclude`

La finalul fiecărui lot se rulează:

```powershell
npm.cmd run reverify -- check
npm.cmd run validate
npm.cmd run audit
npm.cmd test
```

`npm.cmd run audit` verifică numai profilurile publicate și trebuie să treacă. Pentru inventarul
complet al riscurilor editoriale ascunse se folosește `npm.cmd run audit -- --editorial`; acel raport
este coada de lucru și poate eșua cât timp reverificarea nu este terminată.

`check` detectează profilurile schimbate după reverificare, intrările eliminate care au reapărut și
profilurile noi care nu sunt încă în registru. Registrul nu permite suprascrierea tăcută a unei
reverificări deja consemnate.
