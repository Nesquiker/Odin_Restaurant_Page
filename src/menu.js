

export default function buildMenu() {
    const container = document.querySelector("#content_entry");

    /* MENU TITLE */
    const title_container = document.createElement("div");
    title_container.classList.add("content_text_group");
    const welcome = document.createElement("h2");
    welcome.textContent = "We guarantee it is all great";
    const menu_title = document.createElement("h1");
    menu_title.textContent = "Menu";
    const title_picture = document.createElement("img");
    title_picture.alt = "Platter of seafood";
    title_picture.src = "./content/platter.jpg";

    /* APPETIZERS */
    const section_title_container = document.createElement("div");
    section_title_container.classList.add("content_text_group");
    const appetizers = document.createElement("h1");
    appetizers.textContent = "Appetizers";
    appetizers.id = "sub_2";
    const appetizer_1 = document.createElement("div");
    appetizer_1.classList.add("content_text_group");
    const app_title_1 = document.createElement("h2");
    app_title_1.textContent = "Baltic Oysters - 8$";
    const app_desc_1 = document.createElement("p");
    app_desc_1.textContent = "Oysters direct from the Baltic sea. Served in a delicate butter, tarragon, and paprika sauce." +
        " Comes with 8 oysters.";
    const app_1_image = document.createElement("img");
    app_1_image.alt = "Picture of Oysters";
    app_1_image.src = "./content/mussels.jpg";
    const appetizer_2 = document.createElement("div");
    appetizer_2.classList.add("content_text_group");
    const app_title_2 = document.createElement("h2");
    app_title_2.textContent = "Shrimp Cocktail - 10$";
    const app_desc_2 = document.createElement("p");
    app_desc_2.textContent = "Shrimp cocktail served in our proprietary sauce. Served with lemon, onion, and cucumber." +
        " The shrimp come with the head on.";
    const app_2_image = document.createElement("img");
    app_2_image.alt = "Picture of shrimp cocktail";
    app_2_image.src = "./content/shrimp.jpg";

    /* MAIN COURSES */
    const main_title_container = document.createElement("div");
    main_title_container.classList.add("content_text_group");
    const main_course_title = document.createElement("h1");
    main_course_title.textContent = "Main Courses";
    main_course_title.id = "sub_1";
    const main_1 = document.createElement("div");
    main_1.classList.add("content_text_group");
    const main_title_1 = document.createElement("h2");
    main_title_1.textContent = "Seafood Soup - 12$";
    const main_desc_1 = document.createElement("p");
    main_desc_1.textContent = "Shrimp, Mussels, and clams all in a hearty soup. Seasoned with our trademark curry." +
        " Served with bread.";
    const main_1_image = document.createElement("img");
    main_1_image.alt = "Picture of Seafood soup";
    main_1_image.src = "./content/seafood_soup.jpg";

    /* COURSE 2 */
    const main_2 = document.createElement("div");
    main_2.classList.add("content_text_group");
    const main_title_2 = document.createElement("h2");
    main_title_2.textContent = "Tuna Steak - 29$";
    const main_desc_2 = document.createElement("p");
    main_desc_2.textContent = "Seared Tuna steaks on a bed of garden vegetables and red potatoes. Tuna is fresh caught " +
        " Served with our home made aoli.";
    const main_2_image = document.createElement("img");
    main_2_image.alt = "Picture of Tuna steaks";
    main_2_image.src = "./content/tuna_dish.jpg";

    /* COURSE 2 */
    const main_3 = document.createElement("div");
    main_3.classList.add("content_text_group");
    const main_title_3 = document.createElement("h2");
    main_title_3.textContent = "Shrimp and Rice - 21$";
    const main_desc_3 = document.createElement("p");
    main_desc_3.textContent = "Fresh caught shrimp battered and served on a bed of rice mixed with herbs and vegetables" +
        " grown locally.";
    const main_3_image = document.createElement("img");
    main_3_image.alt = "Picture of shrimp in rice";
    main_3_image.src = "./content/Shrimp_and_rice.jpg";

    /* ADD TO CONTENT */
    title_container.appendChild(welcome);
    title_container.appendChild(menu_title);
    section_title_container.appendChild(appetizers);
    appetizer_1.appendChild(app_title_1);
    appetizer_1.appendChild(app_desc_1);
    appetizer_2.appendChild(app_title_2);
    appetizer_2.appendChild(app_desc_2);
    main_title_container.appendChild(main_course_title);
    main_1.appendChild(main_title_1);
    main_1.appendChild(main_desc_1);
    main_2.appendChild(main_title_2);
    main_2.appendChild(main_desc_2);
    main_3.appendChild(main_title_3);
    main_3.appendChild(main_desc_3);


    container.replaceChildren(
        title_container,
        title_picture,
        section_title_container,
        appetizer_1,
        app_1_image,
        appetizer_2,
        app_2_image,
        main_title_container,
        main_1,
        main_1_image,
        main_2,
        main_2_image,
        main_3,
        main_3_image
    );
}