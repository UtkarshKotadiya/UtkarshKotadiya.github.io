
//"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"


const getCocktails = async() => {
    try {
        return (await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")).json();
    } catch(error) {
        console.log(error);
    }
}

const showMargs = async() => {

    const margs = await getCocktails();

    margs.drinks.forEach((margarita) => {
       
        const section = document.createElement("section");
        document.getElementById("cocktails").append(section);

        const heading = document.createElement("h2");
        heading.innerHTML = margarita.strDrink;
        section.append(heading);

        const img = document.createElement("img");
        img.src = margs.strDrinkThumb;
        section.append(img);
    
    });

}

showMargs();