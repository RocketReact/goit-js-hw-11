import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import getImagesByQuery from "pixabay-api.js";

function createGallery(images) {
  const lightbox = new SimpleLightbox(".gallery a", {
    caption: true,
    captionDelay: 250,
  });
  lightbox.refresh();
}

function clearGallery() {}

function showLoader() {}

function hideLoader() {}

export { createGallery, clearGallery, showLoader, hideLoader, inputValue };
