import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

function createGalleryItems(images) {
  return images.map(image => 
    `<li class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
      </a>
    </li>`
  ).join("");
}

function onGalleryClick(event) {
  event.preventDefault();
  if (event.currentTarget.nodeName !== "IMG") return;
  modalImage.open();
}

const galleryRef = document.querySelector('.gallery');
const galleryItemMarkup = createGalleryItems(galleryItems);
galleryRef.innerHTML = galleryItemMarkup;

const modalImage = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

galleryRef.addEventListener('click', onGalleryClick);
