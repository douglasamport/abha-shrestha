import { createAndClass } from "./helper";
import copy from "../content/copy.json";

function aboutpage() {
  let container = createAndClass("div", ["hidden"], "aboutpageWrapper");
  let center = createAndClass("div", "center-container");
  let textContainer = createAndClass(
    "div",
    ["text-container"],
    "abouttextWrapper"
  );

  let header = createAndClass("h1", ["about-heading", "outfit200"]);
  header.textContent = copy.aboutpageHeader;

  let link = createAndClass("a");
  link.href = "https://www.instagram.com/photosbyabha/?hl=en";
  let description = createAndClass("p", ["copy", "outfit200"]);
  description.textContent = copy.aboutpageCopy;
  link.appendChild(description);

  const formMsg = createAndClass("p", ["copy", "outfit200", "form-msg"]);
  formMsg.textContent = "Send me a message.";
  //form
  let form = createAndClass("form", "form");
  form.setAttribute(
    "action",
    "https://formsubmit.co/abhashresthaphotography@gmail.com"
  );
  form.setAttribute("method", "POST");

  const name = createAndClass("input", "form-field");
  name.setAttribute("type", "text");
  name.setAttribute("name", "name");
  name.setAttribute("placeholder", "name");

  name.setAttribute("required", "");

  const email = createAndClass("input", "form-field");
  email.setAttribute("type", "email");
  email.setAttribute("name", "email");
  email.setAttribute("placeholder", "e-mail");

  email.setAttribute("required", "");

  const textArea = createAndClass("textArea", ["form-field"]);
  textArea.setAttribute("type", "text");
  textArea.setAttribute("name", "message");
  textArea.setAttribute("placeholder", "message");
  textArea.setAttribute("required", "");

  const button = createAndClass("button", ["form-button"]);
  button.setAttribute("type", "submit");
  button.textContent = "submit";

  form.appendChild(name);
  form.appendChild(email);
  form.appendChild(textArea);

  form.appendChild(button);

  //append elements to page
  textContainer.appendChild(header);
  textContainer.appendChild(link);
  textContainer.appendChild(formMsg);
  center.appendChild(textContainer);
  center.appendChild(form);
  container.appendChild(center);

  return container;
}

export { aboutpage };
