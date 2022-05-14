const {response} = require('express');

const extinctionGet = (req, res = response) => {
    res.status(200).json({
        msg: 'get API'
    });
};

const extinctionPut =  (req, res = response) => {
    res.status(200).json({
        msg: 'put API'
    });
};

const extinctionPost =  (req, res = response) => {
    res.status(200).json({
        msg: 'post API'
    });
};

const extinctionDelete =  (req, res = response) => {
    res.status(200).json({
        msg: 'delete API'
    });
};

module.exports = {
    extinctionDelete,
    extinctionGet,
    extinctionPost,
    extinctionPut
}