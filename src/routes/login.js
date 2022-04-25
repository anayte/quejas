const express = require("express");
const router = express.Router();
//const { MongoClient } = require("mongodb");

router.post('/login', async (req, res) => 
{
    res.render('/partials/login');
    console.log('Ingreso a sitio');
});

module.exports = router;