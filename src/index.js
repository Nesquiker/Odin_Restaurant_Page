import buildFrame from "../src/frame.js"
import buildHome from "../src/home.js"
import buildMenu from "../src/menu.js"
import buildContact from "../src/contact.js"
import "../styles/style.css"


function alert() {
    console.log("Alert!");
}

export default function constructTab(e) {
    const current_button = document.querySelector(".selected");
    if (current_button === e.target) {
        return;
    }
    current_button.classList.remove("selected");
    e.target.classList.add("selected");
    if (e.target.textContent === "Home") {
        buildHome();
    } else if (e.target.textContent === "Menu") {
        buildMenu();
    } else if (e.target.textContent === "Contact") {
        buildContact();
    }
}

function main() {
    buildFrame();
    buildHome();
    alert();
}

main();