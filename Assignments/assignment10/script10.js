// Assignment 10 Javascript, Utkarsh Kotadiya

const getIce = async() => {
    try {
        return (await fetch("https://portiaportia.github.io/json/ice-creams.json")).json();
    } catch(error) {
        console.log(error);
    }
}

const showIce = async() => {

    const iceCream = await getIce();

    iceCream.forEach((flavor) => {
       
        const section = document.createElement("section");
        document.getElementById("main-div").append(section);

        const img = document.createElement("img");
        img.src = "https://portiaportia.github.io/json/images/ice-creams/" + flavor.image;
        section.append(img);

        const overlay = document.createElement("div");
        overlay.classList.add("flavor-overlay");
        overlay.innerHTML = flavor.name;
        section.append(overlay);
    
    });

}

showIce();
