const express = require('express');
const language = express.Router();
const languageService = require('../services/language');

language.route('/')
  .get((req, res) => {
    languageService.findAll()
      .then(languages => {
        res.send(languages);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  })

module.exports = language;