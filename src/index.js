const URL = 'http://localhost:3000/toys'

let addToy = false;



document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

    getToy()
});

function getToy(){
  //get request to get toy
    fetch(URL)
      .then(res => res.json()) //parsing through the fetch informnation-URL
      .then((toyArray) => {
        toyArray.forEach(toy => renderToy(toy))
      })
  }

function renderToy(toy){
   let toyBox = document.getElementById('toy-collection')

   let card = document.createElement('div')
      card.classList.add('card')
   
   let h2 = document.createElement('h2') 
      h2.innerText = toy.name

   let img = document.createElement('img')
      img.classList.add('toy-avatar')
      img.src = toy.image


   let p = document.createElement('p')
      p.innerText = toy.likes

   let button = document.createElement('button')
      button.classList.add('like-btn')
      button.innerText = "Like"

      card.append(h2, img, p, button)
      toyBox.appendChild(card)
      // toyBox.append(card, h2, img, p, button)
      console.log(toyBox)
}

// Add Toy Info to the Card
// Each card should have the following child elements:

// h2 tag with the toy's name
// img tag with the src of the toy's image attribute and the class name "toy-avatar"
// p tag with how many likes that toy has
// button tag with a class "like-btn"