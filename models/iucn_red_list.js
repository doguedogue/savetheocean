const fs = require('fs');

const axios = require('axios');


class IUCNRedList {
    
    historial = [];
    dbPath = './db/database.json';

    constructor() {
        //this.leerDB();
    }

    get paramsIUNCRedList() {
        return {
            'token': process.env.IUNC_RED_LIST_TOKEN
        }
    }

    async getRegions(  ) {
        console.log("getRegions");
        const contexto = 'region/list';
        try {
            // Petición http
            const intance = axios.create({
                baseURL: `https://apiv3.iucnredlist.org/api/v3/${ contexto}`,
                params: this.paramsIUNCRedList
            });
            // console.log("intance", intance);

            const resp = await intance.get();
            console.log("***** resp *******", resp);
            console.log("resp.data.results", resp.data.results);

            return resp.data.results.map( data => ({
                name: data.name,
                identifier: data.identifier,
            }));
            
        } catch (error) {
            return [];
        }
    }

    async getCountries(  ) {
        console.log("getCountries");
        const contexto = 'country/list';
        try {
            // Petición http
            const intance = axios.create({
                baseURL: `https://apiv3.iucnredlist.org/api/v3/${ contexto}`,
                params: this.paramsIUNCRedList
            });
            // console.log("intance", intance);

            const resp = await intance.get();
            console.log("resp.data.count", resp.data.count);
            // console.log("resp.data.results", resp.data.results);

            return resp.data.results.map( data => ({
                isocode: data.isocode,
                country: data.country,
            }));
            
        } catch (error) {
            return [];
        }
    }

    async getSpeciesByCountry( country = 'MX' ) {
        console.log("getSpeciesByCountry");
        const contexto = 'country/getspecies/';
        try {
            // Petición http
            const intance = axios.create({
                baseURL: `https://apiv3.iucnredlist.org/api/v3/${ contexto}${ country}`,
                params: this.paramsIUNCRedList
            });
            // console.log("intance", intance);

            const resp = await intance.get();
            // console.log("***** resp *******", resp);
            console.log("resp.data.count", resp.data.count);

            return resp.data.result.map( data => ({
                taxonid: data.taxonid,
                scientific_name: data.scientific_name,
                category:  data.category,
            }));
            
        } catch (error) {
            return [];
        }
    }


    agregarHistorial( lugar = '' ) {

        if( this.historial.includes( lugar.toLocaleLowerCase() ) ){
            return;
        }
        this.historial = this.historial.splice(0,5);

        this.historial.unshift( lugar.toLocaleLowerCase() );

        // Grabar en DB
        this.guardarDB();
    }

    guardarDB() {

        const payload = {
            historial: this.historial
        };

        fs.writeFileSync( this.dbPath, JSON.stringify( payload ) );

    }

    leerDB() {

        if( !fs.existsSync( this.dbPath ) ) return;
        
        const info = fs.readFileSync( this.dbPath, { encoding: 'utf-8' });
        const data = JSON.parse( info );

        this.historial = data.historial;


    }

}



module.exports = IUCNRedList;