// Project Javascript, Utkarsh Kotadiya

// Menu Bar
const toggleNav = () => {
    document.getElementById("home-nav").classList.toggle("hidden");
};

window.onload = () => {
    document.getElementById("menu-toggle").onclick = toggleNav;
};

// JSON Parsing

const getProducts = async() => {
    try {
        return (await fetch("products.json")).json();
    } catch(error) {
        console.log(error);
    }
}

const showProducts = async () => {
    const products = await getProducts();

    // Rings
    products.rings.forEach((item) => {
        const section = document.createElement("section");
        document.getElementById("ring-products").append(section);

        const img = document.createElement("img");
        img.src = item.img_name;
        section.appendChild(img);

        const description = document.createElement("h5");
        description.textContent = item.description;
        section.appendChild(description);

        const price = document.createElement("h5");
        price.textContent = `$${item.price}`;
        section.appendChild(price);

        const details = document.createElement("div");
        details.textContent = item.details.join(", ");
        section.appendChild(details);
    });

    // Necklaces
    products.necklaces.forEach((item) => {
        const section = document.createElement("section");
        document.getElementById("necklace-products").append(section);

        const img = document.createElement("img");
        img.src = item.img_name;
        section.appendChild(img);

        const description = document.createElement("h5");
        description.textContent = item.description;
        section.appendChild(description);

        const price = document.createElement("h5");
        price.textContent = `$${item.price}`;
        section.appendChild(price);

        const details = document.createElement("div");
        details.textContent = item.details.join(", ");
        section.appendChild(details);
    });

    // Bracelets
    products.bracelets.forEach((item) => {
        const section = document.createElement("section");
        document.getElementById("bracelet-products").append(section);

        const img = document.createElement("img");
        img.src = item.img_name;
        section.appendChild(img);

        const description = document.createElement("h5");
        description.textContent = item.description;
        section.appendChild(description);

        const price = document.createElement("h5");
        price.textContent = `$${item.price}`;
        section.appendChild(price);

        const details = document.createElement("div");
        details.textContent = item.details.join(", ");
        section.appendChild(details);
    });

    // Watches
    products.watches.forEach((item) => {
        const section = document.createElement("section");
        document.getElementById("watch-products").append(section);

        const img = document.createElement("img");
        img.src = item.img_name;
        section.appendChild(img);

        const description = document.createElement("h5");
        description.textContent = item.description;
        section.appendChild(description);

        const price = document.createElement("h5");
        price.textContent = `$${item.price}`;
        section.appendChild(price);

        const details = document.createElement("div");
        details.textContent = item.details.join(", ");
        section.appendChild(details);
    });
};

showProducts();
