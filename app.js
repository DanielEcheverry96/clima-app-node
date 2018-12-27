const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${ coors.direccion } es de ${ temp }`;
    } catch (e) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }


};

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));



// lugar.getLugarLatLng(argv.direccion)
//     .then(res => {
//         console.log(`Direccion: ${ res.direccion }`);
//         console.log(`Latitud: ${ res.lat }`);
//         console.log(`Longitud: ${ res.lng }`);
//     })
//     .catch(e => console.log('Error ', e));

// clima.getClima(5.070275, -75.5138166)
//     .then(temp => {
//         console.log(`La temperatura es: ${ temp }`);
//     })
//     .catch(e => console.log('Error', e));