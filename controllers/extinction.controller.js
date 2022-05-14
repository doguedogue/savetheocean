const {response, request} = require('express');

const extinctionGet = (req = request, res = response) => {
    const {q='', token=''} = req.query;
    res.status(200).json({
        msg: 'get API',
        q,
        token
    });
};

const extinctionPut =  (req, res = response) => {
    const id = req.params.id;
    res.status(200).json({
        msg: 'put API',
        id
    });
};

const extinctionPost =  (req, res = response) => {

    const body = req.body

    res.status(200).json({
        msg: 'post API',
        body
    });
};

const extinctionDelete =  (req, res = response) => {
    const id = req.params.id;
    res.status(200).json({
        msg: 'delete API',
        id
    });
};

module.exports = {
    extinctionDelete,
    extinctionGet,
    extinctionPost,
    extinctionPut
}