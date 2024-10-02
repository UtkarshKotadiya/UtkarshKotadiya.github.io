// Assignment 8 Javascript, Utkarsh Kotadiya

const images = [
    {
        src: "images/birthday.jpg",
        title: "Birthday Stickman",
        description: "A stickman who's got a birthday."
    },
    {
        src: "images/clown.jpg",
        title: "Clown Stickman",
        description: "A stickman in clown costume."
    },
    {
        src: "images/rain.jpg",
        title: "Rain Stickman",
        description: "A stickman standing in the rain."
    },
    {
        src: "images/read.jpg",
        title: "Reading Stickman",
        description: "A stickman reading a book."
    },
    {
        src: "images/shovel.jpg",
        title: "Shoveling Stickman",
        description: "A stickman standing with shovel."
    },
    {
        src: "images/work.jpg",
        title: "Laptop Stickman",
        description: "A stickman doing work."
    }
];

const loadImages = () => {

    const imageContainer = document.getElementById("image-container");

    images.forEach((image, index) => {

        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imageContainer.appendChild(imgElement);
        imgElement.addEventListener("click", () => description(index));

    });
}

const description = (index) => {
    const descriptionElement = document.getElementById("description");
    descriptionElement.innerHTML = "<strong>" + images[index].title + "</strong>" + "<br>" + images[index].description;
}

window.onload = loadImages();
