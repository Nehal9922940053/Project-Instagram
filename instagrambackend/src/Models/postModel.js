const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        user: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        description:{
            type:String,
            max:2300
        },
        imgurl:{
            type:String,
        },
        likes: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        comment: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        timestamps : true
    }
);

module.exports = mongoose.model("Post",postSchema); 