const { json } = require('express/lib/response');
const { Schema, model } = require('mongoose');


const AnimalSchema = Schema ({
    scientificName: {
        type: String,
        required: [true, 'El campo scientificName es obligatorio'],
    },
    redlistCategory: {
        type: String,
        required: [true, 'El campo redlistCategory es obligatorio']
    },
    image: {
        type: String,
        required: [true, 'El campo image es obligatorio']
    },
    gps: {
        lat: {
            type: String,
            required: [true, 'El campo lat es obligatorio']
        },
        lng: {
            type: String,
            required: [true, 'El campo lng es obligatorio']
        }
    }    
});

module.exports = model('Animal', AnimalSchema);