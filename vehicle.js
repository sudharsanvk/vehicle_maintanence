const mongoose = require("mongoose")
const schema = mongoose.Schema;

const vehicleSchema = schema({
    bus_no:Number,
    brand:String,
    model:String,
    eng_type:String,
    service_date:[Date]
})

const vehicle = mongoose.model('vehicles',vehicleSchema)
module.exports = vehicle