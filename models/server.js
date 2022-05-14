const express = require('express')
const cors = require('cors')

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.extinctionPath = '/api/extinction';

        //MW
        this.middleware();

        //Rutas
        this.routes();
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
    }

    listen(){        
        this.app.listen(this.port, () => {
            console.log('Server up and running port=',this.port);
        })
    }

}

module.exports = Server;