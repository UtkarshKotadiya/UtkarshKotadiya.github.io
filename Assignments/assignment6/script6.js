// Assignment 6 Javascript, Utkarsh Kotadiya

const toggleNav = () => {
    document.getElementById("link-list").classList.toggle("hidden");
};

window.onload = () => {
    document.getElementById("menu-toggle").onclick = toggleNav;
};


const showExercise = (exercise) => {
    if (exercise === "color-slider") {
        document.getElementById("color-slider").style.display = 'block';
        document.getElementById("pic-choose").style.display = 'none';
    } else if (exercise === "pic-choose") {
        document.getElementById("color-slider").style.display = 'none';
        document.getElementById("pic-choose").style.display = 'block';
    }
};

document.getElementById("ex-1").addEventListener("click", () => {
    showExercise("color-slider");
});
document.getElementById("ex-2").addEventListener("click", () => {
    showExercise("pic-choose");
});
showExercise("color-slider");


const showImage = (event) => {
    const button = event.target;
    let size;

    if (button.textContent === "Small") {
        size = 100;
    } else if (button.textContent === "Medium") {
        size = 300;
    } else if (button.textContent === "Large") {
        size = 500;
    }

    const imageUrl = `https://picsum.photos/${size}`;
    document.getElementById('image-container').innerHTML = `<img src="${imageUrl}" />`;
}

document.querySelectorAll('.size-btn').forEach(button => {
    button.addEventListener('click', showImage);
})


const updateColor = () => {
    const redValue = document.getElementById('Slider').value;
    document.querySelector('.color-slider-container').style.backgroundColor = `rgb(${redValue}, 0, 0)`;
    const message = document.getElementById('message');

    if (redValue < 51) {
      message.innerHTML = "CALM";
    } else if (redValue < 102) {
      message.innerHTML = "IRRITATED";
    } else if (redValue < 154) {
      message.innerHTML = "FRUSTRATED";
    } else if (redValue < 206) {
      message.innerHTML = "ANGERY";
    } else if (redValue < 255) {
      message.innerHTML = "VERY ANGRY!"
    }
};

document.getElementById('Slider').addEventListener('input', updateColor);
updateColor();
