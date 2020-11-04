const express = require('express');
const { query } = require('../modules/pool');
const router = express.Router();
const pool = require('../modules/pool');

//GET ALL POKEMON
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM 'pokemon';`;
  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log('Error in pokemon GET', err);
      res.sendStatus(500);
    });
});

//GET POKEMON WITH TYPES
router.get('/poketypes', (req, res) => {
  const queryText = `SELECT "pokemon".id, "pokemon".name, "pokemon".description, "pokemon".images, ARRAY_AGG("type".description) as types FROM "pokemon"
        JOIN pokemon_type ON "pokemon".id="pokemon_type".pokemon_id
        JOIN type ON "pokemon_type".type_id="type".id
        GROUP BY "pokemon".id ORDER BY "pokemon".id;`;

  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log('Error in poketypes GET', err);
      res.sendStatus(500);
    });
});

module.exports = router;
