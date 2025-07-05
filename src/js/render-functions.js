import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionDelay: 250,
});
const gallery = document.querySelector(".gallery");

function createGallery(images) {
  let markup = "";

  images.forEach((image) => {
    markup += `<li> 
      <a href= ${image.largeImageURL}>
       <img src=${image.webformatURL} alt="${image.tags}">
       </a>
       <div class="under-image-info">
       <p> <span> Likes </span> <br> ${image.likes} </p>
       <p> <span> Views </span> <br> ${image.views} </p>
       <p> <span> Comments </span> <br> ${image.comments} </p>
       <p> <span> Downloads </span> <br> ${image.downloads} </p>
       </div>

    </li> `;
  });
  gallery.insertAdjacentHTML("beforeend", markup);

  lightbox.refresh();
}

function clearGallery() {
  const gallery = document.querySelector(".gallery"); // или ваш селектор
  if (gallery) {
    gallery.innerHTML = "";
  }
}

function showLoader() {}

function hideLoader() {}

export { createGallery, clearGallery, showLoader, hideLoader };
