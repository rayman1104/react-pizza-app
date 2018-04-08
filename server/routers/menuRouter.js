const express = require('express');

const menu = require('../models/menuData');

const router = express.Router();
router.get('/menu', (req, res) =>
  res.json(menu)
);

module.exports = router;
