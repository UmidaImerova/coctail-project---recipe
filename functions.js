import { getData } from "./data.js";
const data= getData();

//preloader

const loader = document.querySelector('.loader');
window.addEventListener("load",()=>{
    setTimeout(()=>{
        loader.classList.add ('loaded');
        loader.classList.remove('loader');
        
    }, 1000);
})

//main content


const content = document.querySelector ('.content');
function showRecipe (array){
    for (let i = 0; i< data.length; i++){
        const conteiner= document.createElement('div');
        conteiner.classList.add ('interncontainer');
        content.appendChild(conteiner);
    
    
        const img = document.createElement ('img');
        img.src = `${data[i].strImg}`;
        conteiner.appendChild (img);
        img.classList.add ('image');
    
        const name = document.createElement ('h5');
        name.innerHTML = `${data[i].strName}`;
        conteiner.appendChild (name);
        name.classList.add ('name')

    }
    
}

showRecipe(data)

// clear function

 const clearContent = () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  };

//search by name (filter)

const filtered = (searchedName) => {
    const filteredResipe = [];
    for (let el of data) {
      let nameOfRecipe = el.strName.toLowerCase();
      if (nameOfRecipe.includes(searchedName.toLowerCase())) {
        filteredResipe.push(el);
      }
    }
    return filteredResipe;
  };

const input = document.querySelector ('input');
const searchBar = document.querySelector(".search-bar");

    function showFiltered (event){
    if (event.key){
        const filterArray = filtered (input.value);
        if (filterArray.length>0){
            console.log (filterArray);
            clearContent();
            showRecipe(filterArray);
        }else {
            clearContent();
            const msg = document.createElement("h2");
            msg.innerHTML = "No recipe found";
            msg.classList.add ("errorMsg");
            searchBar.appendChild(msg);
            setTimeout(() => {
              msg.innerHTML = "";
            }, 1000);
          }
        } /* else if (input.value === "") {
          clearContent();
          showRecipe(data);
        } */
    }

input.addEventListener("keyup", showFiltered);

//modal window



//random
const randomBtn = document.querySelector (".random-btn");
randomBtn.addEventListener ('click', function(){
    let randomIndex = Math.floor(Math.random()*data.length);
    let randomRecipe = data[randomIndex];

  /*   localStorage.setItem(randomRecipe, JSON.stringify(randomRecipe));
    randomRecipe = JSON.parse(localStorage.getItem("randomRecipe")); */

  console.log(randomRecipe)
    
    //document.location.href = "./detail.html"
})





