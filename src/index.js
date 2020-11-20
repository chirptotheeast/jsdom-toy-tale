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

    document.querySelector('form').addEventListener('submit', (event) => {
      createAToy(event)
  
    })



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
      console.log(card)
   
   let h2 = document.createElement('h2') 
      h2.innerText = toy.name

   let img = document.createElement('img')
      img.classList.add('toy-avatar')
      img.src = toy.image


   let newLikes = document.createElement('p')
      let tlikes = toy.likes
     if (tlikes === undefined){
       tlikes = 0
     }
      // p.innerText = 0 + " likes"

      newLikes.innerText= tlikes + " likes"
      // if (toy.likes === undefined){
      //   return toy.likes = 0
      // }

   let button = document.createElement('button')
      button.classList.add('like-btn')
      button.innerText = "Like"

     button.addEventListener("click", (event) => {
        // console.log(event.target)
          // if (event.target){
          //   tlikes += 1
          // }

            let likeTracker = document.querySelector("newLikes")
           
            num = parseInt(newLikes.innerText)
            num += 1
            newLikes.innerText = num + " likes"
     } )

      card.append(h2, img, newLikes, button)
      toyBox.appendChild(card)
      // toyBox.append(card, h2, img, p, button)
     document.querySelector('form').reset()
}

  


  function createAToy(event){
    event.preventDefault() // means when we click submit it's going to do something 

    let data = {
      name: event.target.name.value,
      image: event.target.image.value
    }
    
      let reqObj = {}

        reqObj.method = "POST"
        reqObj.headers ={"Content-Type": "application/json"}
        reqObj.body = JSON.stringify(data)

      fetch(URL, reqObj)
        .then(res => res.json())
        .then(data => renderToy(data))

  }

  // function addLikes(event){
  //   event.preventDefault()

  // }
