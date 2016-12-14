const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./db/knex');
const path = require('path')

require('dotenv').config();

const app = express();
// app.use(express.static(path.join(__dirname, '')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var cors = require('cors');

app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('listening on port 3000');
});

app.get('/city', function(req, res, next) {
  knex('city')
  .select()
  .then(function(cities){
    res.json(cities);
  });
});

app.get('/city/:id', function(req, res, next) {
  knex('city').where('id', req.params.id)
  .first().then(function(city) {
    res.json(city);
  });
});

app.post('/city', function(req, res, next) {
  knex('city').insert(
    {
      name: req.body.name,
      country: req.body.country,
      population: req.body.population,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      year_founded: req.body.year_founded},'*')
      .then(function(city){
      res.json(city);
    });
});

app.put('/city/:id', function(req, res, next){
  knex('city').where('id', req.params.id).update({
    id: req.body.id,
    name: req.body.name,
    country: req.body.country,
    population: req.body.population,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    year_founded: req.body.year_founded
  }).then(function(city){
    res.json(city);
  });
});

app.delete('/city/:id', function(req, res, next){
  knex('city').where('id', req.params.id).delete().then(function(city){
    res.json("It's gone forever!");
  });
});
