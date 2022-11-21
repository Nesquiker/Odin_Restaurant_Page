import constructTab from "./index";
import "../styles/style.css"

export default function buildFrame() {
    const container = document.querySelector("#content");
    const header = buildHeader();
    const body = buildBody();
    const footer = buildFooter();
    container.appendChild(header);
    container.appendChild(body);
    container.appendChild(footer);
}

function buildHeader() {
    const button_container = document.createElement("div");
    button_container.classList.add("button_container");
    const home_button = document.createElement("button");
    home_button.id = "home";
    home_button.textContent = "Home";
    home_button.classList.add("selected");
    home_button.addEventListener("click", constructTab);
    const menu_button = document.createElement("button");
    menu_button.id = "menu";
    menu_button.textContent = "Menu";
    menu_button.addEventListener("click", constructTab);
    const contact_button = document.createElement("button");
    contact_button.id = "contact";
    contact_button.textContent = "Contact";
    contact_button.addEventListener("click", constructTab);
    button_container.appendChild(home_button);
    button_container.appendChild(menu_button);
    button_container.appendChild(contact_button);
    return button_container;
}

function buildBody() {
    const body_container = document.createElement("div");
    body_container.classList.add("body_container");
    const content_entry = document.createElement("div");
    content_entry.id = "content_entry";
    body_container.appendChild(content_entry);
    return body_container;
}

function buildFooter() {
    const footer_container = document.createElement("div");
    footer_container.classList.add("footer_container");
    const content_sources = document.createElement("div");
    content_sources.classList.add("foot_notes");
    content_sources.textContent = "Background Image: tirachard     Fonts: Billy Argel Fonts";
    const creator_source = document.createElement("div");
    creator_source.classList.add("foot_notes");
    creator_source.textContent = "Created by: Sean Reid";
    footer_container.appendChild(content_sources);
    footer_container.appendChild(creator_source);
    return footer_container;


}