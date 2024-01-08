const request = require("postman-request");

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidGlhZ29ocGYiLCJhIjoiY2xtMXo0bmdoM3B1NDNldGhtbjFsOGs2YiJ9._FFy2azuAdspu816NddvMQ&limit=1`

    request(url, {json: true}, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Mapbox')
        } else if (body.features.length === 0) {
            callback('Location Not found')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode