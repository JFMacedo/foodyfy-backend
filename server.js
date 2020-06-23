const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));

nunjucks.configure('views', {
  express: server,
  noCache: true
});

server.get('/', (req, res) => {
  res.render('index.njk', { active: '' });
});

server.get('/about', (req, res) => {
  res.render('about.njk', { active: 'about' });
})

server.get('/recipes', (req, res) => {
  res.render('recipes.njk', { active: 'recipes' });
})

server.listen(3000);