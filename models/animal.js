const { Schema, model } = require('mongoose');


const AnimalSchema = Schema ({
    animal: {
        type: String,
        required: [true, 'El animal es obligatorio'],
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    categoria: {
        type: String,
        required: [true, 'La categoria es obligatoria'],
        enum: ["DD", "LC", "NT", "VU", "EN", "CR", "EW", "EX", "LR/lc", "LR/nt", "LR/cd"]
    },
    longitud: {
        type: String,
        required: [true, 'El longitud es obligatorio']
    },
    latitud: {
        type: String,
        required: [true, 'La latitud es obligatoria']
    },
    url_imagen: {
        type: String,
        required: [true, 'La url de la imagen es obligatoria']
    },id_IUCN: {
        type: String,
        required: [true, 'El id_IUCN es obligatorio']
    }
});

module.exports = model('Animal', AnimalSchema);