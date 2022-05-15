const {Router} = require('express');
const { countryGet, 
    countryPut, 
    countryPost, 
    countryDelete } = require('../controllers/country.controller');

const router = Router();

router.get('/', countryGet);

router.put('/:id', countryPut);

router.post('/', countryPost);

router.delete('/:id', countryDelete);

module.exports = router;
