import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const createGalleryItemMarkup = galleryItems.map(
  ({ preview, original, description }) =>
    `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
).join('');
galleryContainer.insertAdjacentHTML('beforeend', createGalleryItemMarkup);
galleryContainer.addEventListener('click', onGalleryItemClick)

function onGalleryItemClick(e) {
  e.preventDefault();
  
   
    if (e.target.nodeName !== 'IMG') return; 

  const largeImage = e.target.dataset.source; 
  const instance = basicLightbox.create(`
    <img src="${largeImage}" alt="" width="800" height="600">
  `); 
    instance.show();
    
    
    window.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            instance.close();
        }
    })
}