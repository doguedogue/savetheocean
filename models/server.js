const express = require('express')

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //MW
        this.middleware();

        //Rutas
        this.routes();
    }

    middleware(){
        this.app.use ( express.static('public'));
    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.send('Get Method')
        })
    }

    listen(){        
        this.app.listen(this.port, () => {
            console.log('Server up and running port=',this.port);
        })
    }

}

module.exports = Server;