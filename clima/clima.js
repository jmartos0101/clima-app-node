
const axios = require('axios');


const getClima = async(lat,lng) =>{

    let encodeUrl = encodeURI(lat,lng);
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=eef1742f22988cfbffd2d948967bd04a`)
    if (resp.data.cod === '400'){
        throw new Error(`No hay resultados para la latitud ${lat} y longitud ${lng}`)

    }
        let jsonwopen = resp.data;
    
    return {
        temperatura: jsonwopen.main.temp
    }

}

module.exports = {
    getClima
}