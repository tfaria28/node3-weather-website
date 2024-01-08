const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=0e6a6632b6eef0768294ef463b5f8ffb&query=${latitude},${longitude}`

    request(url, {json: true}, (error, response, body) => {
        const {weather_descriptions, temperature, feelslike, humidity} = body.current
        if (error) {
            callback('Unable to connect WeatherStack')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, `${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out. Humidity at ${humidity}.`)
        }
    })
}

module.exports = forecast