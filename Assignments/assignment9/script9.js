// Assignment 9 Javascript, Utkarsh Kotadiya

class Bird {
    constructor(name, image, species, habitat, diet, description) {
        this.name = name;
        this.image = image;
        this.species = species;
        this.habitat = habitat;
        this.diet = diet;
        this.description = description;
    }

    getSection() {
        const birdBox = document.createElement('div');
        birdBox.className = 'bird-box';
        birdBox.onclick = () => showModal(this.name);

        const birdImg = document.createElement('img');
        birdImg.src = 'images/' + this.image;

        const birdTitle = document.createElement('h3');
        birdTitle.textContent = this.name;

        birdBox.appendChild(birdImg);
        birdBox.appendChild(birdTitle);

        return birdBox;
    }

    getExpandedSection() {
        const container = document.createElement('div');
        container.className = 'modal-container';

        const newImg = document.createElement('img');
        newImg.src = 'images/' + this.image;
        newImg.alt = this.name;
        newImg.style.width = '100%';

        const newTitle = document.createElement('h3');
        newTitle.textContent = this.name;

        const speciesInfo = document.createElement('p');
        speciesInfo.innerHTML = '<strong>Species:</strong> ' + this.species;

        const habitatInfo = document.createElement('p');
        habitatInfo.innerHTML = '<strong>Habitat:</strong> ' + this.habitat;

        const dietInfo = document.createElement('p');
        dietInfo.innerHTML = '<strong>Diet:</strong> ' + this.diet;

        const descriptionInfo = document.createElement('p');
        descriptionInfo.textContent = this.description;

        container.appendChild(newImg);
        container.appendChild(newTitle);
        container.appendChild(speciesInfo);
        container.appendChild(habitatInfo);
        container.appendChild(dietInfo);
        container.appendChild(descriptionInfo);

        return container;
    }
}

const birds = [
    new Bird('Northern Cardinal', 'cardinal.jpg', 'Cardinalis cardinalis', 'Woodlands', 'Seeds, grains, fruits', 'A vibrant red bird commonly found in North America.'),
    new Bird('Bald Eagle', 'eagle.jpg', 'Haliaeetus leucocephalus', 'Mountains, rivers', 'Fish, small creatures', 'The national bird of the United States, known for its strength and majesty.'),
    new Bird('American Goldfinch', 'goldfinch.jpg', 'Spinus tristis', 'Meadows', 'Seeds, grass, flowers', 'A small yellow bird often seen in gardens and open fields.'),
    new Bird('Blue Jay', 'bluejay.jpg', 'Cyanocitta cristata', 'Forests', 'Nuts, seeds, insects', 'Known for its bright blue feathers and intelligent behavior.'),
    new Bird('Hummingbird', 'hummingbird.jpg', 'Archilochus colubris', 'Gardens, woodlands', 'Nectar, small insects', 'A tiny, colorful bird known for its rapid wing beats and ability to hover.'),
    new Bird('Peregrine Falcon', 'falcon.jpg', 'Falco peregrinus', 'Cliffs, open areas', 'Birds, small mammals', 'A fierce bird, known for its incredible speed in dives.')
];

const birdContainer = document.getElementById('birdContainer');

for (var i = 0; i < birds.length; i++) {
    birdContainer.appendChild(birds[i].getSection());
}

const showModal = (birdName) => {

    for (var i = 0; i < birds.length; i++) {
        if (birds[i].name === birdName) {
            var selectedBird = birds[i];

            document.getElementById('modalTitle').innerText = selectedBird.name;

            var modalContent = document.getElementById('modalContent');
            modalContent.innerHTML = '';
            modalContent.appendChild(selectedBird.getExpandedSection());

            document.getElementById('birdModal').style.display = 'block';
            break;
        }
    }
};
