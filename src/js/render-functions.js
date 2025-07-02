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
       <p> <strong> Likes </strong> <br> ${image.likes} </p>
       <p> <strong> Views </strong> <br> ${image.views} </p>
       <p> <strong> Comments </strong> <br> ${image.comments} </p>
       <p> <strong> Downloads </strong> <br> ${image.downloads} </p>
       </div>

    </li> `;
  });
  gallery.insertAdjacentHTML("beforeend", markup);

  lightbox.refresh();
}

function clearGallery() {}

function showLoader() {}

function hideLoader() {}

export { createGallery, clearGallery, showLoader, hideLoader };
