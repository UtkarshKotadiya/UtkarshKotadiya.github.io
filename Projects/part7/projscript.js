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

















document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const formMessages = document.getElementById("form-messages");

    form.addEventListener("submit", async function (e) {
        e.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            // Example POST request using fetch to your email handling endpoint
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Show success message
                formMessages.textContent = "Your message has been sent successfully!";
                formMessages.classList.remove("error");
                formMessages.classList.add("success");
                formMessages.classList.remove("hidden");
                form.reset(); // Clear the form
            } else {
                // Show error message
                throw new Error("Failed to send message.");
            }
        } catch (error) {
            formMessages.textContent = "There was a problem sending your message. Please try again.";
            formMessages.classList.remove("success");
            formMessages.classList.add("error");
            formMessages.classList.remove("hidden");
        }
    });
});