const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
    title:String,
    price:String,
    description:String,
    location:String
});
module.exports = mongoose.model('campground',campgroundSchema);
/*const seedDB = async () =>{
    await campgroundSchema.deleteMany({});
    const c = new Campground({title:'purple field'})
    await c .save();
}*/