const {response, request} = require('express');
const  wc = require('which-country');

const countryGet = (req = request, res = response) => {
    const {lng, lat} = req.body

    // pass [lng, lat]
    // console.log(wc([37, 55])); // RUS
    // console.log(wc([-100, 40])); // USA
    // console.log(wc([40, -40])); // null, somewhere in Atlantic Ocean

    const country_name = wc([lng, lat]);

    res.status(200).json({
        country_name,
        lng, 
        lat,
    });
};

const countryPut =  (req, res = response) => {
    const id = req.params.id;
    res.status(200).json({
        msg: 'put country API',
        id
    });
};

const countryPost =  (req, res = response) => {

    const body = req.body

    res.status(200).json({
        msg: 'post country API',
        body
    });
};

const countryDelete =  (req, res = response) => {
    const id = req.params.id;
    res.status(200).json({
        msg: 'delete country API',
        id
    });
};

module.exports = {
    countryDelete,
    countryGet,
    countryPost,
    countryPut
}