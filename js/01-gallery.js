import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
const galleryItemsList = document.querySelector('.gallery');

const markUp = onCreatePicture(galleryItems);
{/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */}
galleryItemsList.insertAdjacentHTML('beforeend', markUp);
function onCreatePicture(items) {
    return items.map(item => {
        return `
       <div class="gallery__item">
  <a class="gallery__link" href="${item.preview}"
  data-lightbox = "lbox">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`}).join('')
}

galleryItemsList.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
		return
	}
    const selectedImage = e.target.getAttribute('data-source')
    const instance = basicLightbox.create(`<img src="${selectedImage}" width="800" height="600">`)
    instance.show()
        galleryItemsList.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			instance.close()
		}
	})
})