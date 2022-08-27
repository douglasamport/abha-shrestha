import { createAndClass } from "./helper";
import copy from "../content/copy.json";
import imageObject from "../content/gallery/images.js";

function cusinepage() {
  let container = createAndClass("div", ["hidden"], "cusinepageWrapper");
  let center = createAndClass("div", "center-container", "centerWrapper");
  // let textContainer = createAndClass(
  //   "div",
  //   ["text-container"],
  //   "cusinetextWrapper"
  // );

  // const urls = [img_1];
  //Create Gallery
  let galleryContainer = createAndClass("div", "gallery-container", "gallery");
  // add the images to the gallery
  Object.keys(imageObject).forEach((key) => {
    let link = createAndClass("a", "gallery-link");
    let img = createAndClass("img", "gallery-image");
    link.href = "";
    img.src = imageObject[key];
    img.setAttribute("crossorigin", "anonymous");
    console.log(img);
    galleryContainer.appendChild(img);
  });

  // textContainer.appendChild(galleryContainer);
  center.appendChild(galleryContainer);
  container.appendChild(center);

  return container;
}

export { cusinepage };
