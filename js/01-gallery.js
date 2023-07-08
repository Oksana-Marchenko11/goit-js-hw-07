import { galleryItems } from './gallery-items.js';
// Change code below this line
const makeNewList = galleryItems.map((item) =>
  `<li class="gallery__item">
      <a class="gallery__link" href= ${item.original}>
        <img class="gallery__image" src=${item.preview} data-source=${item.original} alt=${item.description}>
      </a>
    </li>`
).join("");

const List = document.querySelector(".gallery");

List.innerHTML = makeNewList;

List.addEventListener('click', showModal);

function showModal(e) {
  e.preventDefault();

  if (!e.target.dataset.source) return;
  const instance = basicLightbox.create(`
    <img src= '${e.target.dataset.source}'>`, {
    onShow: (instance) => {
      // instance.element().querySelector('a').onclick = instance.close
      //  document.addEventListener("keydown", (event) => {
      document.onkeydown = function (event) {
        console.log(event);
        if (event.key === "Escape") instance.close();
      };
    }
  });
  instance.show()
};

