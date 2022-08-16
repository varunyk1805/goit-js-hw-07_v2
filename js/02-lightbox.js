import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
)
    .join('');

const settingsSimpleLightbox = event => {
    event.preventDefault();
    gallery.removeEventListener('click', settingsSimpleLightbox);

    new SimpleLightbox('.gallery__link',
        {
            captionsData: 'alt',
            captionDelay: 250
        }
    );
};

gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener('click', settingsSimpleLightbox);
