const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        profile:{
            type:String,  
        },
        followers:{
            type:Array,
        },
        followings:{
            type:Array,
        },
        password:{
            type:String,
            require:true
        },
    },{timestamps:true});


module.exports = mongoose.model('User',UserSchema);


/*
 bio:{
            type:String,
            max:60,
            default:"",
        },
        profilePictures:{
            type:String,
            default:"AVATAR_URL",
        },
        followers:{
            type:Array,
            default:[],
        },
        followings:{
            type:Array,
            default:[],
        },
        gender:{
            type:String,
            enum:["male", "female","trans","prefernottosay","others"]
        },
        role:{
            type:String,
            enum:["admin", "user"],
            default:"user",
            required:true,
        },
        jwt:{
            type:String,
        }

*/

