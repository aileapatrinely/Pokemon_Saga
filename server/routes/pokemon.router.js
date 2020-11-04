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
