
//definisco variabile per modificare HTML
let photoGallery = document.getElementById('photo-gallery');
//console.log(photoGallery)

//uso axios per fare la chiamata get all'endpoint
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    //uso then per interagire con la risposta della chiamata 
    .then((resp) => {
        const photos = resp.data;
        //console.table(photos)
        photos.forEach(photo => {
            const photoCard = document.createElement('div');
            photoCard.className = 'col-12 col-md-6 col-lg-4 photo-card';
            photoCard.innerHTML = `
             <div class="card" id="card">
             
               <img src="${photo.url}" class="card-img-top" alt="${photo.title}">
               <div class="card-body">
                <h4 class="card-title">${photo.title}</h4>
               </div>
             </div>
          `;
            photoGallery.appendChild(photoCard);
            console.log(photoCard)
        });

    })
     .catch(error=> console.error ('errore nel caricamento delle foto' , error));
