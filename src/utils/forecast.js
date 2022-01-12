const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5640e63337a0b66b5fec216957bb0093&query=' + latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently"+ response.body.current.temperature + " degress out. The high today is  "+ body.daily.data[0].temperatureHigh +" with a low of "+ body.daily.data[0].temperatureLow + ". " )
        }
    })
}

module.exports = forecast