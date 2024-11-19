### Esercizio

**Milestone 1**
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
**Milestone 2**
Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
**Milestone 3**
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
**Bonus**
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata

### dati
endpoint  di JSON Placeholder ;

#### Esecuzione Logica
Definisco variabile per modificare l'HTML 

Uso axios per fare la chiamata get all'endpoint. Che in questo caso , tramite query string ?_limit=6 , viene limitato a 6 elementi.

Uso then per interagire con la risposta della chiamata.

Salvo la risposta in una variabile e per pogni elemento 
(tramite un foreach) creo un div inserendoclasse formata da colonne variabili per ottenre una pagina responsive e infine vado ad inserire i dati nell ' html.

Aggiungo le modifiche all'HTML tramite appenchild

Infine gestisco eventuali errori tramite catch per segnalarlo nel console log

### Output

Visualizzo le photocard nella pagina. 