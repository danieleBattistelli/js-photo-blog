

//----------------------------------------------------------------------------------------------
//Step 1:Dichiaro e assegno le variabiliche puntano agli elementi DOM che voglio manipolare:
// photoGallery: il contenitore dove inseriremo le foto.
// overlay: il div che funge da overlay.
// overlayImage: l'elemento immagine all'interno dell'overlay.
// closeOverlayButton: il bottone per chiudere l'overlay.
//---------------------------------------------------------------------------------------------

const photoGallery = document.getElementById('photo-gallery');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');
const closeOverlayButton = document.getElementById('close-overlay')
  //console.log(overlay,overlayImage,photoGallery,closeOverlayButton)

//--------------------------------------------------------------------------------------------  
//Step 2:Effettuo una richiesta Axios per ottenere le foto:
// Utilizziamo Axios per effettuare una richiesta GET all'API jsonplaceholder per ottenere 
//le prime 6 foto. Il risultato della richiesta è un array di oggetti photo, che memorizziamo 
//nella variabile photos.
//---------------------------------------------------------------------------------------------

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6') 
.then(response => { 
  const photos = response.data

//----------------------------------------------------------------------------------------------
//Step 3: Genero le card delle foto:
//per ogni foto , creo un div e assegno classi di Bootstrap per rendere il layout responsivo:
// col-12 per dispositivi mobili (1 colonna),
// col-md-6 per tablet (2 colonne),
// col-lg-4 per desktop (3 colonne).
//Aggiungiamo HTML all'interno di photoCard, includendo l'immagine e il titolo della foto. 
//Aggiungiamo un attributo data-id con l'ID della foto.
//----------------------------------------------------------------------------------------------

    photos.forEach(photo => {
      const photoCard = document.createElement('div');
      photoCard.className = 'col-12 col-md-6 col-lg-4 photo-card';
      photoCard.innerHTML = `
             <div class="card" data-id="${photo.id}">
             <button class="close-button">&times;</button>
             <img src="./img/pin.svg" alt="pin" class="pin-image">
             <img src="${photo.url}" class="card-img-top" alt="${photo.title}"> 
             <div class="card-body"> 
             <h4 class="card-title">${photo.title}</h4> 
             </div> 
             </div> 
             `;
//-------------------------------------------------------------------------------------------------
//Step 4:  Aggiungo un event listener al bottone di chiusura che rimuove la card dal DOM quando 
//viene cliccato. e.stopPropagation(); è usato per evitare che il click sul bottone apra l'overlay.            
//-------------------------------------------------------------------------------------------------
  photoCard.querySelector('.close-button').addEventListener('click', (e) =>
   { e.stopPropagation(); 
   photoCard.remove();
   });


//-------------------------------------------------------------------------------------------------
//Step 5: Aggiungo l'evento click per aprire l'overlay:
//Aggiungiamo un event listener all'immagine della card che:
//Cambia la src dell'immagine nell'overlay a quella della foto cliccata.
//Aggiunge la classe show all'overlay per renderlo visibile.
//-------------------------------------------------------------------------------------------------

      photoCard.querySelector('.card-img-top').addEventListener('click', () => {
        overlayImage.src = photo.url; // Imposta l'immagine dell'overlay 
        overlay.classList.add('show'); // Mostra l'overlay 
        document.querySelectorAll('.pin-image').forEach(pin => pin.classList.add('hide-pin'));
      });

//-----------------------------------------------------------------------------------------------------
//Step 6: Aggiungere le card alla galleria:
//Aggiungiamo ogni photoCard creata al contenitore photoGallery.
//-----------------------------------------------------------------------------------------------------

      photoGallery.appendChild(photoCard);
      //console.log(photoCard)
    });
  })
  .catch(error => console.error('errore nel caricamento delle foto', error));

//--------------------------------------------------------------------------------------------------
//Step 7: Gestisco  la chiusura dell'overlay
//Aggiungo un event listener al bottone di chiusura che rimuove la classe show dall'overlay, 
//nascondendolo.
//---------------------------------------------------------------------------------------------------------

closeOverlayButton.addEventListener('click', () => {
  overlay.classList.remove('show');
  document.querySelectorAll('.pin-image').forEach(pin => pin.classList.remove('hide-pin'));
});