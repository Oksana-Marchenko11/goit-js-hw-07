import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeList = galleryItems.map((item) =>
  `<li class="gallery__item">
      <a class="gallery__link" href= ${item.original}>
        <img class="gallery__image" src=${item.preview} alt=${item.description}>
      </a>
    </li>`
).join("");

const listNew = document.querySelector(".gallery");
listNew.innerHTML = makeList;


let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });



