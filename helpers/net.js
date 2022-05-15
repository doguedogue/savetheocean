const http = require('http');

const netInfo = async ()=>{
    http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
        resp.on('data', function(ip) {
            console.log("NET:ADD00-" + ip + "-00");
        });
    });
}

module.exports = {
    netInfo
}


