const request = require('request')
const forecast = (latitude,longitude,callback) => {
   const forecastUrl ='http://api.weatherstack.com/current?access_key=a41a009cc69cbf44aafd6fd7c79adb8b&query='+ latitude +','+ longitude
   request(
       { url:forecastUrl,json:true },(error,response)=>{
        if(error)
        {
            callback('Unable to connect to Weather Service!', undefined)
        }
        else if(response.body.error)
        {
            callback('Unable to find Location! Try another search.', undefined)
        }
        else
        {
            callback(undefined,
                    response.body.current.weather_descriptions[0]+". It is currently "+response.body.current.temperature+" degrees out. It Feels like "+response.body.current.feelslike+" degress out.")
            
        }
           
    })
}

module.exports=forecast

