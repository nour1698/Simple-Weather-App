const request = require('request')


const forecast = (latitude,longtitude,callback)=>{

    const url ='http://api.weatherstack.com/current?access_key=230e566b2e68ee189e29e507eaa47202&query='+latitude+','+longtitude
    request({url,json:true},(error,response)=>{
        if(error){
                  callback("error is occured",undefined)
        }
        
            else if (response.body.error){
        callback(response.body.error.type, undefined);
    }
    else{
                callback( undefined, 'In ' + response.body.location.country
         + ' It is now ' + response.body.current.temperature)
    }
})



}

module.exports=
    forecast
