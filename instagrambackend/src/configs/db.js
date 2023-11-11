const mongoose = require('mongoose');

const  URI  = 'MONGOOSEURI'

const connectDB = async () =>{
    try{
        const connect = await mongoose.connect(URI);
        console.log("DB Connected Successfully");
    }
    catch(err){
        console.log("Authentication to DB failed");
        process.exit(1);
    }
}


module.exports = connectDB;