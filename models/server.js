const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../db/config');
const { netInfo } = require('../helpers/net');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.extinctionPath = '/api/extinction';
        this.countryPath = '/api/country';

        //net
        this.readNet();

        //Conectar a base de datos
        this.conectarBD();

        //MW
        this.middleware();

        //Rutas
        this.routes();
    }

    async readNet(){
        await netInfo();
    }

    async conectarBD(){
        await dbConnection();
    }

    middleware(){
        //CORS
        this.app.use(cors());

        //Read body
        this.app.use(express.json());

        this.app.use ( express.static('public'));
    }

    routes(){
        this.app.use(this.extinctionPath, require('../routes/extinction'));

        this.app.use(this.countryPath, require('../routes/country'));
    }

    listen(){        
        this.app.listen(this.port, () => {
            console.log('Server up and running port=',this.port);
        })
    }

}

module.exports = Server;