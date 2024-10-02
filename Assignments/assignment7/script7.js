// Assignment 7 Javascript, Utkarsh Kotadiya

const starContainer = document.getElementById('star-container');
const error = document.getElementById('error');
const message = document.getElementById('message');

error.style.display = 'none';

const createStar = (index) => {
    const star = document.createElement('div');
    star.innerHTML = '&#x2605;';
    star.style.cursor = 'pointer';
    star.classList.add('star');

    const starWidth = 15;
    const starHeight = 15;

    const x = Math.random() * ((starContainer.clientWidth - 20) - starWidth);
    const y = Math.random() * ((starContainer.clientHeight - 20) - starHeight);

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    star.addEventListener('click', () => {
        message.innerHTML = `You clicked on star #${index + 1}`;
        message.style.display = 'block';
    });

    return star;
};

const drawStars = () => {
    const starCount = parseInt(document.getElementById('star-count').value, 10);
    
    starContainer.innerHTML = '';
    error.style.display = 'none';
    message.style.display = 'none';

    if (starCount <= 0) {
        error.style.display = 'block';
        return;
    }

    for (let i = 0; i < starCount; i++) {
        const star = createStar(i);
        starContainer.appendChild(star);
    }
};

document.getElementById('draw-button').addEventListener('click', () => {
    drawStars();
});
