const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.list);
router.post('/add', usersCtrl.guardar);
router.get('/delete/:id', usersCtrl.eliminar);
router.get('/update/:id', usersCtrl.editar);
router.post('/update/:id', usersCtrl.actualizar);

module.exports = router;