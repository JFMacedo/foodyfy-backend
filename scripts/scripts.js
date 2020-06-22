const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipe')
for(let recipe of recipes) {
  recipe.addEventListener('click', () => {
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('img').src = recipe.querySelector('img').src
    modalOverlay.querySelector('h2').innerText = recipe.querySelector('h3').innerText
    modalOverlay.querySelector('p').innerText = recipe.querySelector('p').innerText
  })
}

document.querySelector('.close-modal')
  .addEventListener('click', () => {
    modalOverlay.classList.remove('active')
    setTimeout(() => {
      modalOverlay.querySelector('img').src = ''
      modalOverlay.querySelector('h2').innerText = ''
      modalOverlay.querySelector('p').innerText = ''
    }, 400)
  })