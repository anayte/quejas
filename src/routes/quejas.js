const express = require("express");
const router = express.Router();
//const { MongoClient } = require("mongodb");

router.post('/quejas', async (req, res) => 
{
    res.redirect('/quejas');
    console.log('Ingreso a sitio');
});

module.exports = router;