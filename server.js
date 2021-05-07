const express = require('express');
const router = express.Router();

const Energy = require('./energy');

router.get('/', async (req, res) => {
  try {
    const energies = await Energy.find();
    res.json(energies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;