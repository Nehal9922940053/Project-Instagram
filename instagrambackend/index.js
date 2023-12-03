const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const dotenv = require('dotenv');
const user = require('./src/router/User.js');
const post = require('./src/router/Post.js');
dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connected to Mongo DB Successfully")})
.catch((error)=>{
    console.log(error);
});

app.use(cors());
app.use(express.json());

app.use('/api/user',user);
app.use('/api/post',post);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
