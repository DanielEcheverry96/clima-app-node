const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (response.data.status === 'ZERO_RESULTS')
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);

    let location = response.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
};

// Transformar la direccion como una url amigable


module.exports = {
    getLugarLatLng
};