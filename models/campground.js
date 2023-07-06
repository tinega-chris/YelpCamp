const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
    title:String,
    image:String,
    price:Number,
    description:String,
    location:String
});
module.exports = mongoose.model('campground',campgroundSchema);
/*const seedDB = async () =>{
    await campgroundSchemma.deleteMany({});
    const c = new Campground({title:'purple field'})
    await c .save();
}*/
