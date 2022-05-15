const {response, request} = require('express');

const Animal = require('../models/animal');


const extinctionGet = async (req = request, res = response) => {
    console.log('Get Animals');
    const animals = await Animal.find();
    res.status(200).json({
        result: animals
    });
};

const extinctionPut =  async (req, res = response) => {
    console.log('Put Animals');
    const id = req.params.id;
    const {_id, ...body} = req.body;

    //Validar que exista el ID
    try {
        const existeAnimal = await Animal.findById( id );
        // console.log("Salida", existeAnimal);
    } catch(error){
        console.log('Error', error);
        res.status(400).json({
            msg: `Id ${ id} no encontrado` 
        });
    }
    const animal = await Animal.findByIdAndUpdate( id, body );

    res.status(200).json({
        result: body
    });
};

const extinctionPost =  async (req = request, res = response) => {
    console.log('Post Animals');
    const body = req.body;
    const animal = new Animal(body);
    await animal.save();

    res.status(200).json({
        animal
    });
};

const extinctionDelete =  async (req, res = response) => {
    console.log('Delete Animals');
    const id = req.params.id;

    //Validar que exista el ID
    try {
        const existeAnimal = await Animal.findById( id );
        // console.log("Salida", existeAnimal);
    } catch(error){
        console.log('Error', error);
        res.status(400).json({
            msg: `Id ${ id} no encontrado` 
        });
    }
    const animal = await Animal.findByIdAndDelete( id);

    res.status(200).json({
        msg: `Registro con id ${ id } borrado correctamente`
    });
};

module.exports = {
    extinctionDelete,
    extinctionGet,
    extinctionPost,
    extinctionPut
}