require('dotenv').config();

const mongoose = require('mongoose')
// const mongoURI = 'mongodb://localhost:27017/tripsytrips?directConnection=true'
const mongoURI = process.env.MONGODB_URI;

async function connectToMongo(){
    await mongoose.connect(mongoURI).then(()=> console.log("Connected to Database Successfully")).catch(err=>console.log(err));
}


module.exports = connectToMongo