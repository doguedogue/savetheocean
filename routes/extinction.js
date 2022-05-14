const {Router} = require('express');
const { extinctionGet, extinctionPut, extinctionPost, extinctionDelete } = require('../controllers/extinction.controller');

const router = Router();

router.get('/', extinctionGet);

router.put('/:id', extinctionPut);

router.post('/', extinctionPost);

router.delete('/:id', extinctionDelete);

module.exports = router;
