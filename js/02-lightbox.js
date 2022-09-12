import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
const galleryItemsList = document.querySelector('.gallery');

const markUp = onCreatePicture(galleryItems);


galleryItemsList.insertAdjacentHTML('beforeend', markUp);
function onCreatePicture(items) {
	return galleryItems.map(({ preview, original, description }) => {
        return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title ="${description}"/>
</a>`}).join('')
}

	function onImageClick(e) {
		e.preventDefault();
		if (e.target.nodeName !== 'IMG') {
			return
		}
	}
new SimpleLightbox('.gallery a', { captionDelay: 250 });