const express = require('express');
const connectDB = require('./src/configs/db');
const cors = require('cors');
const PORT = 5000;
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
