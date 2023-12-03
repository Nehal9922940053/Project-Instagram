// const mongoose = require('mongoose');

// const  URI  = 'mongodb://localhost:27017/Instagram-app';

// const connectDB = async () =>{
//     try{
//         const connect = await mongoose.connect(URI);
//         console.log("DB Connected Successfully");
//     }
//     catch(err){
//         console.log("Authentication to DB failed");
//         process.exit(1);
//     }
// }


// module.exports = connectDB;


// Importing the Mongoose library
// const mongoose = require('mongoose');

// // MongoDB connection URI
// const URI = 'mongodb://127.0.0.1:27017/Instagram-app';

// // Async function to connect to the MongoDB database
// const connectDB = async () => {
//     try {
//         // Attempt to connect to the MongoDB database using the provided URI
//         const connect = await mongoose.connect(URI);
       
//         // If the connection is successful, log a success message
//         console.log("DB Connected Successfully");
//     } 
//     // catch (err) {
//     //     // If there is an error during the connection attempt, log an error message and exit the process with code 1
//     //     console.log("Authentication to DB failed");
//     //     process.exit(1);
//         catch (err) {
//             console.error("Error connecting to DB:", err);
//             process.exit(1);
//         }
//   //  }
// }

// // Exporting the connectDB function to be used in other parts of your application
// module.exports = connectDB;