const request = require('request')
const geocode = (address, callback) =>{
const geoCodeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ 
                   address +
                   '.json?access_token=pk.eyJ1Ijoicm9zaGFuc2luZ2hhIiwiYSI6ImNrOWpuaWVnZTA5d2szZ3A4ajVoeGI2NG8ifQ.8y1ghqjMEU85dQquPxPp5A&limit=1'
    request({ url:geoCodeURL, json:true },(error,response)=>{
    //console.log(error)
    if(error)
    {
        callback('Unable to connect to Internet!', undefined)
    }
    else if(response.body.features.length===0)
    {
        callback('Unable to find Location! Try another search.', undefined)
    }
    else
    {
        callback (undefined,{
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
    })
}
    
})
}

module.exports=geocode