require ('dotenv').config();

const Server = require('./models/server');
const IUCNRedList = require('./models/iucn_red_list');

const server = new Server();
server.listen();

//Prueba de APIs IUCN Red List
const main = async() => {

    const busquedas = new IUCNRedList();

    let data = null;

    // Obtener Imagen
    // data = await busquedas.getImageByTaxonId( '3855' );
    // console.log('**** Salida ****'); 
    // console.log('data: ', data);

    // Buscar Regiones
    // data = await busquedas.getRegions( );
    // console.log('**** Salida ****'); 
    // data.map( data => {
    //     console.log('Name: ', data.name, ' identifier: ', data.identifier);
    // });

    // Buscar Countries
    data = await busquedas.getCountries();
    console.log('**** Salida ****'); 
    if (data.length > 5){
        for(let i=0; i<5;i++)
        console.log('isocode: ', data[i].isocode
        , ' country: ', data[i].country);
    }


    // // Buscar Species By Country
    // data = await busquedas.getSpeciesByCountry('MX');
    // console.log('**** Salida ****'); 
    // if (data.length > 5){
    //     for(let i=0; i<5;i++)
    //     console.log('taxonid: ', data[i].taxonid
    //     , ' scientific_name: ', data[i].scientific_name
    //     , ' category: ', data[i].category);
    // }

}



main();