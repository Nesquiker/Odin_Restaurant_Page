
export default function buildHome() {
    const container = document.querySelector("#content_entry");
    const title_container = document.createElement("div");
    title_container.classList.add("content_text_group");
    const welcome = document.createElement("h2");
    welcome.textContent = "Welcome to Moscow's' finest seafood restaurant:";
    const restaurant_name = document.createElement("h1");
    restaurant_name.textContent = "Lastolje";
    const title_picture = document.createElement("img");
    title_picture.alt = "Fishing boat";
    title_picture.src = "./content/boat.jpg";
    const about_container = document.createElement("div");
    about_container.classList.add("content_text_group");
    const about_title = document.createElement("h2");
    about_title.textContent = "About Us";
    const about_text = document.createElement("p");
    about_text.textContent = "The Lastolje is a restaurant dedicated to unveiling the incredible culinary secrets locked" +
        "away in the world under water. Lastolje started as a humble fishing outfit and now serves as one of Moscows most" +
        "excellent seafood restaurants. Eat with us and experience seafood at its best.";
    const about_picture  = document.createElement("img");
    about_picture.alt = "Man with raw seafood";
    about_picture.src = "./content/fresh_fish.jpg";
    const hours_container = document.createElement("div");
    hours_container.classList.add("content_text_group");
    hours_container.classList.add("hours");
    const hours_title = document.createElement("h2");
    const hours_list = document.createElement("ul");
    const days = [
        "Sunday: 10am to 11pm",
        "Monday: 2pm to 9pm",
        "Tuesday: 10am to 11pm",
        "Wednesday: 10am to 11pm",
        "Thursday: 10am to 11pm",
        "Friday: 10 am to 11pm",
        "Saturday: 10am to 11pm",
        "Holidays: Call us for times and reservations!"
    ];
    for (let day of days) {
        const li_div = document.createElement("li");
        li_div.textContent = day;
        hours_list.appendChild(li_div);
    }
    title_container.appendChild(welcome);
    title_container.appendChild(restaurant_name);
    about_container.appendChild(about_title);
    about_container.appendChild(about_text);
    hours_container.appendChild(hours_title);
    hours_container.appendChild(hours_list);
    container.appendChild(title_container);
    container.appendChild(title_picture);
    container.appendChild(about_container);
    container.appendChild(about_picture);
    container.appendChild(hours_container);
    container.replaceChildren(title_container, title_picture, about_container, about_picture, hours_container);
}