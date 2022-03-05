
const request = require('request')


const geocode =(address,callback)=>{
    const geocodeUrl ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoibm91cjE2OTgiLCJhIjoiY2t5MWJjYnFsMDlzZjMwbGc4YnI1anM5eSJ9.VOhARe_5Td9HyyV93NUXkw'
    request({url:geocodeUrl,json:true},(error,response)=>{
    
        if(error){
            callback('error is occured',undefined)
        }
        else if(response.body.message){
            callback(response.body.message,undefined)
        }
        else if (response.body.features.length==0){
        callback('this country name is not found',undefined);
    }
    
    else {
        callback(undefined,{
            latitude:response.body.features[0].center[1],
            longtitude:response.body.features[0].center[0],
        })
     }
    
    })
        
    
    }
   
    module.exports = geocode