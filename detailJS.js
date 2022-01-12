import { getData } from "./data.js";

const data= getData();
const first= document.querySelector (".first-conteiner") 

//left side of details

//name of course
    const name = document.createElement("h1");
    name.innerText = `${data[0].strName}`;
    first.appendChild (name);


//category of course
    const category = document.createElement ("h4");
    category.innerText = `${data[0].strCategory}`;
    first.appendChild (category);


//amount of ingredients and servings
    const ingredients = document.querySelector (".ingredients");
    ingredients.innerText = `${data[0].amountOfIngredients}`;

    const amountOf = document.querySelector (".amountOf")
    amountOf.innerText = `${data[0].amountOfServings}`;

//button - link to instruction
    const instructionBtn = document.querySelector('.instructionBtn');
    const button = document.createElement ('a');
    instructionBtn.appendChild(button);
    button.href = data[0].strInstructions;
    button.target ='balnk';
    button.innerText = 'Tap to instruction';
    button.classList.add ('button');

// right side of details (img)
    const right = document.querySelector (".right");
    const image = document.createElement ("img");
    image.src =  data[0].strImg;
    right.appendChild(image);


// list of ingredients with measure
    for (let x=1; x<11; x++){
        const ul = document.querySelector (".ingListConteiner")
        const li = document.createElement ('li');
        ul.appendChild (li);
        const icon = document.createElement ('i');
        icon.classList.add ("bi");
        icon.classList.add ("bi-check2-circle");
        li.appendChild(icon);
        const span = document.createElement ('span');
        span.innerText = data[0][`strIngredient${x}`] + ': ' + data[0][`strMeasure${x}`];
        li.appendChild(span);
    }


//video instruction
    const video = document.querySelector('.video');
    const videoLink = document.createElement('iframe');
    videoLink.src = data[0].strVideo;
    video.appendChild(videoLink);