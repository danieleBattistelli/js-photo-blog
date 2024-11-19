
    let photoGallery =document.getElementById('photo-gallery');
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
      .then(response => {
        const photos = response.data;
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
        });
      })
      .catch(error => console.error('Error fetching photos:', error));
  
  