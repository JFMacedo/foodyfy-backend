const express = require('express');
const nunjucks = require('nunjucks');
const recipes = require('./data');

const server = express();

server.use(express.static('public'));

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});

server.get('/', (req, res) => {
  res.render('index.njk', { active: '', recipes: recipes });
});

server.get('/about', (req, res) => {
  res.render('about.njk', { active: 'about' });
})

server.get('/recipes', (req, res) => {
  res.render('recipes.njk', { active: 'recipes', recipes: recipes });
});

server.get("/recipes/:index", function (req, res) {
  const recipeIndex = req.params.index;

  const recipe = recipes.find((recipe) => {
    return recipe.id == recipeIndex
  });

  if(!recipe) {
    return res.render('not-found.njk')
  }

  return res.render('recipe.njk', { recipe });
})

server.use(function(req, res) {
  res.status(404).render("not-found.njk");
});

server.listen(3000);