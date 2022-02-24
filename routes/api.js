var express = require('express');
var router = express.Router();
var novedadesModel =  require('./../models/novedadesModels');

router.get('/novedades', async function (req, res, next) {
    let novedades = await  novedadesModel.getNovedades();
    res.json(novedades);
});

module.exports = router;