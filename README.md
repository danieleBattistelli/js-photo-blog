### Esercizio

Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)


Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6

Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
**Bonus**
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata.

Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.

Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il `display: none` .
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
Ci sono diversi modi di farlo, prova a sperimentare :faccia_leggermente_sorridente:

Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare
Buon Lavoro

Inserire una X nella card per rimuoverla




### dati
endpoint  di JSON Placeholder ;

#### Esecuzione Logica

Step 1:Dichiaro e assegno le variabiliche puntano agli elementi DOM che voglio manipolare:

photoGallery: il contenitore dove inseriremo le foto.
overlay: il div che funge da overlay.
overlayImage: l'elemento immagine all'interno dell'overlay.
closeOverlayButton: il bottone per chiudere l'overlay.

Step 2:Effettuo una richiesta Axios per ottenere le foto:
Utilizziamo Axios per effettuare una richiesta GET all'API 
jsonplaceholder per ottenere le prime 6 foto. Il risultato 
della richiesta è un array di oggetti photo, che memorizziamo 
nella variabile photos

Step 3: Genero le card delle foto:
per ogni foto , creo un div e assegno classi di Bootstrap per rendere 
il layout responsivo:
col-12 per dispositivi mobili (1 colonna),
col-md-6 per tablet (2 colonne),
col-lg-4 per desktop (3 colonne).
Aggiungiamo HTML all'interno di photoCard, includendo l'immagine e il titolo della foto. 
Aggiungiamo un attributo data-id con l'ID della foto.

Step 4:  Aggiungo un event listener al bottone di chiusura che rimuove 
la card dal DOM quando viene cliccato. dove  e.stopPropagation(); 
è usato per evitare che il click sul bottone apra l'overlay.        

Step 5: Aggiungo l'evento click per aprire l'overlay:
Aggiungiamo un event listener all'immagine della card che:
Cambia la src dell'immagine nell'overlay a quella della foto cliccata.
Aggiunge la classe show all'overlay per renderlo visibile.

Step 6: Aggiungere le card alla galleria:
Aggiungo ogni photoCard creata al contenitore photoGallery.

Step 7: Gestisco  la chiusura dell'overlay:
Aggiungo un event listener al bottone di chiusura che rimuove la classe show dall'overlay, nascondendolo.

### Output

Visualizzo le photocard nella pagina dove e' possibile ingrandire l'immagine cliccando su una singola photocard, eliminarne una o 
guardare un,animazione al passaggio del mouse su di essa.