const modalOverlay = document.querySelector('.modal-overlay');
const recipes = document.querySelectorAll('.recipe');
const informations = document.querySelectorAll('.information');

for(let recipe of recipes) {
  recipe.addEventListener('click', () => {
    window.location.href = `/recipes/${recipe.id}`
  });
}

for(let information of informations) {
  const span = information.querySelector('span');
  span.addEventListener('click', () => {
    information.classList.toggle('hide');
    if(span.innerText == 'ESCONDER') {
      span.innerText = 'MOSTRAR'
    } else {
      span.innerText = 'ESCONDER'
    }
  });
}