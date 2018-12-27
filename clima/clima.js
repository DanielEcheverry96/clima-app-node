const axios = require('axios');

const getClima = async(lat, lng) => {

    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=3fd78cce1fee37962235f39e4084b108`);

    return response.data.main.temp;
};

module.exports = {
    getClima
}