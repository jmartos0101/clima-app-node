const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async (direccion) => {

    try {
    //let coors = await lugar.getLugarLatLng(argv.direccion); NO FUNCIONA POR GOOGLE LIMITE API KEy
    coors = {
        lat: -3,
        lng: -80,
        direccion: "calle las papatas"
    }
  
    let temp = await clima.getClima(coors.lat, coors.lng);
    return `El clima en ${coors.direccion} es de ${ temp.temperatura}`;}
    catch {
        return `No se pudo determinar el clima en ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch( e => console.log(e));