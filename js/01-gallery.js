import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
                class="gallery__image"
                src=${preview}
                data-source=${original}
                alt=${description}
                />
            </a>
    </div>`
)
    .join('');

const showImageHandller = event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
    const url = event.target.getAttribute('data-source');
    const instance = basicLightbox.create(
        `<img src=${url} width="200" height="150">`
    );

    const pressEscapeHandller = event => {
        if (event.code !== 'Escape') return;
        instance.close(() => document.removeEventListener('keydown', pressEscapeHandller));
    };

    instance.show(() => document.addEventListener('keydown', pressEscapeHandller));
};

gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener('click', showImageHandller);
