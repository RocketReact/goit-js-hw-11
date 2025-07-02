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

formSubmit.addEventListener("submit", async function (e) {
  e.preventDefault();
  inputValue = formSubmit.elements["search-text"].value;
  if (inputValue === "") {
  }

  const images = await getImages();

  createGallery(images);
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
    const imagesArr = await getImagesByQuery(inputValue);

    if (imagesArr.length === 0) {
      iziToast.warning({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        color: "red",
        ...iziToastDefaults,
      });
      return [];
    }
    iziToast.success({
      message: `Success! We find ${imagesArr.length} images!`,
      color: "green",
      ...iziToastDefaults,
    });
    return imagesArr;
  } catch (error) {
    iziToast.error({
      message: `Oops, something went wrong! ${error}`,
      color: "red",
      ...iziToastDefaults,
    });
  }
}
