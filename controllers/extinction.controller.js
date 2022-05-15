const {response, request} = require('express');

const extinctionGet = (req = request, res = response) => {
    const {q='', token=''} = req.query;
    res.status(200).json({
        msg: 'get extintion API',
        q,
        token
    });
};

const extinctionPut =  (req, res = response) => {
    const id = req.params.id;
    res.status(200).json({
        msg: 'put extintion API',
        id
    });
};

const extinctionPost =  (req, res = response) => {

    const body = req.body

    res.status(200).json({
        msg: 'post extintion API',
        body
    });
};

const extinctionDelete =  (req, res = response) => {
    const id = req.params.id;
    res.status(200).json({
        msg: 'delete extintion API',
        id
    });
};

module.exports = {
    extinctionDelete,
    extinctionGet,
    extinctionPost,
    extinctionPut
}