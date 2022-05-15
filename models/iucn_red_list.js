const fs = require('fs');
const axios = require('axios');
var HTMLParser = require('node-html-parser');



class IUCNRedList {

    constructor() {
        
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
            // console.log("***** resp *******", resp);
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

    async getImageByTaxonId( taxonid ) {
        console.log("getImageByTaxonId");
        const contexto = 'taxonredirect/';
        try {
            // Petición http
            const intance = axios.create({
                baseURL: `https://apiv3.iucnredlist.org/api/v3/${ contexto}${ taxonid}`,
                params: this.paramsIUNCRedList
            });
            // console.log("intance", intance);

            const resp = await intance.get();
    
            //Obtiene link a redireccionar para obtener imagen
            const url_text = await this.getURLText(resp.data);

            //Obtiene body de nueva URL
            const div_img = await this.getBodyHTML(url_text);
            
            // console.log("resp.data.results", resp.data.results);

            return resp.data.results.map( data => ({
                href: url_text,
            }));
            
        } catch (error) {
            return [];
        }
    }

    async getURLText(html_body){
        console.log('getURLText');
        const text_link_start = "<link href='";
        const inicio = html_body.indexOf(text_link_start);
        const text_link_end = "' rel='canonical'>";
        const fin = html_body.indexOf(text_link_end);
        
        console.log("Inicio: ", inicio);
        console.log("Fin: ", fin);
        const link_html = html_body.substring(inicio + text_link_start.length, fin);
        
        console.log("URL HTML:", link_html);

        return (link_html)? link_html.trim():''; 
    }

    async getBodyHTML(url_html = ''){
        url_html = 'https://www.iucnredlist.org/species/3855/2878674';

        axios.get(url_html, {
            baseURL: url_html,
            timeout: 10000
        }).then((resp)=>{       
            console.log("salida = ",resp.data.indexOf('featherlight'));
            const root = HTMLParser.parse(resp.data);
            const clase = root.querySelectorAll('featherlight');
            console.log("clase",clase);

        });
    }
}



module.exports = IUCNRedList;