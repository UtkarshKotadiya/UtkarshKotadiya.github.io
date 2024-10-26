// Project Javascript, Utkarsh Kotadiya

// Menu Bar
const toggleNav = () => {
    document.getElementById("home-nav").classList.toggle("hidden");
};

window.onload = () => {
    document.getElementById("menu-toggle").onclick = toggleNav;
};



// JSON Parsing, products page

const getProducts = async() => {
    try {
        return (await fetch("products.json")).json();
    } catch(error) {
        console.log(error);
    }
}

const showProducts = async () => {
    const products = await getProducts();

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



// Contact form functions

const sendEmail = async (json) => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: json
        });
        return response;
    } catch (error) {
        console.log(error);
        return null;
    }
};

document.getElementById("contact-form").onsubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const formMessages = document.getElementById("form-messages");

    formMessages.textContent = "Sending...";
    formMessages.classList.remove("success", "error", "hidden");

    const response = await sendEmail(json);

    if (response && response.status === 200) {
        formMessages.textContent = "Thank you for reaching out! We will get back to you soon.";
        formMessages.classList.add("success");
        formMessages.classList.remove("error");
        form.reset();
    } else {
        formMessages.textContent = "There was a problem sending your message. Please try again.";
        formMessages.classList.add("error");
        formMessages.classList.remove("success");
    }

    formMessages.classList.remove("hidden");
};
