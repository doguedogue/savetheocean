const mongoose = require('mongoose');


const dbConnection = async ()=>{

    try {
        await mongoose.connect( process.env.MONGODB_CON);
        console.log('Base de datos online');

    }catch(error){
        console.log('Error DB', error);
        throw new Error('Error al conectar a la bd');
    }


}

module.exports = {
    dbConnection
}