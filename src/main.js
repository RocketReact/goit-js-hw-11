import getImagesByQuery from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";
import iziToast from "izitoast";

const formSubmit = document.getElementById("form");

let inputValue = "";

formSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  inputValue = formSubmit.elements["search-text"].value;
  if (inputValue === "") {
  }

  createGallery();
});

async function getImages() {
  const iziToastDefaults = {
    position: "top-right",
    timeout: 4000,
    close: true,
    progressBar: true,
    icon: "fas fa-check",
    closeOnClick: false,
    pauseOnHover: true,
  };
  try {
    const images = await getImagesByQuery(inputValue);

    if (images.length === 0) {
      iziToast.warning({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        color: "red",
        ...iziToastDefaults,
      });
      return [];
    }
    iziToast.success({
      message: "",
      color: "green",
      ...iziToastDefaults,
    });
    return images;
  } catch (error) {
    iziToast.error({
      message: "",
      color: "red",
      ...iziToastDefaults,
    });
  }
}
