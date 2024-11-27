document.addEventListener("DOMContentLoaded", function () { 

    const photoGallery = document.getElementById('photo-gallery');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    const closeOverlayButton = document.getElementById('close-overlay');
    
   
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
      .then(response => {
       
        const photos = response.data;
   
        generaPhotoCards(photos);
      })
      .catch(error => console.error('Errore nel caricamento delle foto', 
        error));
//---------------------------------------------------
      
      closeOverlayButton.addEventListener('click', () => {
       
        overlay.classList.remove('show');
        
      });
  
//---------------------------------------------------
    
    const generaPhotoCards = (foto) =>{

      foto.forEach(foto => {
      
          const fotoCard = document.createElement('div');
         
          fotoCard.className = 'col-12 col-md-6 col-lg-4 photo-card';
      
          fotoCard.innerHTML = `
              <div class="card" data-id="${foto.id}">
                  <button class="close-button x-delete">&times;</button>
                  <img src="./img/pin.svg" alt="pin" class="pin-image">
                  <img src="${foto.url}" class="card-img-top" alt="${foto.title}"> 
                  <div class="card-body"> 
                      <h4 class="card-title">${foto.title}</h4> 
                  </div> 
              </div> 
          `;
       
          fotoCard.querySelector('.close-button').addEventListener('click', (e) => {
            e.stopPropagation();
            fotoCard.remove();
          });

          fotoCard.querySelector('.card-img-top').addEventListener('click', () => {
          
            overlayImage.src = foto.url; 
         
            overlay.classList.add('show'); 
            
          });
        
          photoGallery.appendChild(fotoCard);
      });
    }
  });

  

     
  
  