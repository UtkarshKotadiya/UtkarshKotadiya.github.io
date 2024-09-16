// Assignment 5 Javascript

const countButton = document.getElementById('box-1');

var count = 0;

countButton.onclick = () => {
    count = count + 1;
    document.getElementById('counter-num').innerHTML = count;
}

document.getElementById("box-2").onclick = () => {
    location.reload();
}

const slider = document.getElementById('slider');
const box = document.getElementById('slide-box');
const container = document.getElementById('box-3');

slider.oninput = () => {
    const containerWidth = container.offsetWidth;
    const sliderValue = slider.value;
    
    const boxPosition = (sliderValue / 100) * (containerWidth - box.offsetWidth);
    box.style.left = boxPosition + '10px';  
};
