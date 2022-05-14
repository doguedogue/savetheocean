const {Router} = require('express');
const { extinctionGet, extinctionPut, extinctionPost, extinctionDelete } = require('../controllers/extinction.controller');

const router = Router();

router.get('/', extinctionGet);

router.put('/', extinctionPut);

router.post('/', extinctionPost);

router.delete('/', extinctionDelete);

module.exports = router;
