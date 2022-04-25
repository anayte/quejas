const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('partials/login');
});

router.get('/login', (req, res) => {
    res.render('partials/login');
});

router.get('/menu', (req, res) => {
    res.render('menu');
});

router.get('/seguimiento', (req, res) => {
    res.render('seguimiento');
});

router.get('/quejar', (req, res) => {
    res.render('quejar');
});

router.get('/verempleados', (req, res) => {
    res.render('veremepleados');
});

/*router.get('/aprobados', (req, res) => {
    res.render('aprobar');
});

router.get('/registrar', (req, res) => {
    res.render('registrar');
});

router.get('/menu', (req, res) => {
    res.render('menu');
});

router.get('/aprobador', (req, res) => {
    res.render('aprobar');
});*/

module.exports = router;