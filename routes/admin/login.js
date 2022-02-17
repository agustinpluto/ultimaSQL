var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuarioModels');

router.get('/', function(req, res, next) {
  res.render('admin/login', {
      layout: 'admin/layout'
  });
});

router.get('/logout', function(req, res, next){
  req.session.destroy();
  res.render('admin/login', {
      layout:  'admin/layout'
  });
});

router.post('/', async (req, res, next) => {
  try {

    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUser(usuario, password);

    if (data != undefined) {

      req.session.id_usuario = data.id; // id en base de datos
      req.session.nombre = data.usuario // usuario en base de datos, lo puedo reutilizar
      res.redirect('/admin/novedades');
      
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
  }
)

module.exports = router;
