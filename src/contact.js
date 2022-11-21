

export default function buildContact() {
    const container = document.querySelector("#content_entry");
    const contact_title_container = document.createElement("div");
    contact_title_container.classList.add("content_text_group");
    const welcome = document.createElement("h2");
    welcome.textContent = "Need a reservation? Just want to chat?";
    const contact_us = document.createElement("h1");
    contact_us.textContent = "Contact Us";
    const title_picture = document.createElement("img");
    title_picture.alt = "Crabs touching claws";
    title_picture.src = "../content/crabs_touching.jpg";
    const about_container = document.createElement("div");
    about_container.classList.add("content_text_group");
    const about_title = document.createElement("h2");
    about_title.textContent = "Contact Information";
    const hours_container = document.createElement("div");
    hours_container.classList.add("content_text_group");
    hours_container.classList.add("hours");
    const hours_list = document.createElement("ul");
    const days = [
        "Call us at: 1-505-445-3456",
        "E-mail: thelastolje@olje.com",
        "Mail: 456 Moscow Lane",
    ];
    for (let day of days) {
        const li_div = document.createElement("li");
        li_div.textContent = day;
        hours_list.appendChild(li_div);
    }
    contact_title_container.appendChild(welcome);
    contact_title_container.appendChild(contact_us);
    hours_container.appendChild(about_title);
    hours_container.appendChild(hours_list)
    container.replaceChildren(
        contact_title_container,
        title_picture,
        hours_container
    )
}