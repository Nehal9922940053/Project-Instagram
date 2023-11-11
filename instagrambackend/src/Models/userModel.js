const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            require:true,
            min:3,
            max:16,
            unique:true,
        },
        email:{
            type:String,
            require:true,
            min:4,
            max:50,
            unique:true,
        },
        password:{
            type:String,
            require:true,
            min:6,
        },
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
    }
)

module.exports = mongoose.model('User',UserSchema);