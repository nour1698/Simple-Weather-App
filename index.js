

const geocode = require('./tools/geocode')
const forecast = require('./tools/forecast')



const location = process.argv[2]
geocode(location,(error,data)=>{
    console.log('Error ',error)
    console.log('Data ',data)
    forecast(data.latitude,data.longtitude,(error,data)=>{
        console.log('Error ',error)
        console.log('Data ',data)
        } )
    })