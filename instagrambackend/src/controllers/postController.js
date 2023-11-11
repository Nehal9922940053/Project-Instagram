const Post = require('../Models/postModel');
const User = require('../Models/userModel');
const Comment = require('../Models/comments');

const createPost = async (req, res) => {
    req.body.user = req.user._id;
    const newPost =new Post(req.description);
    try {
        await newPost.save();
        res.status(200).sendd({
            status:'success',
            message: "Ppost has been created successfully"
        })
    } catch (err) {
        res.status(500).send({
            status:"failure",
            message: err.message,
        })
        
    }
}



const updatePost =async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(req.user._id === post.user.toString()){
            await Post.updateOne({$set:req.description})
            res.status(200).send({
                status: 'success',
                message:"Post updated successfully"
            })
        }else{
            res.status(401).send({
                status: 'failure',
                message:"You are not authorised to update  this post"
            })
        }
    }
    catch(err){
        res.status(500).send({
            status: 'failure',
            message:err.message,
        })
    }
}

const deletePost = async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(req.user._id === post.user.toString() || req.user.role === "admin"){
            await Comment.deleteMany({user:req.user_id})
            await Post.findByIdAndDelete(req.params.id)
            res.status(200).send({
                status: 'success',
                message:"Post updated successfully"
            })
        }else{
            res.status(401).send({
                status: 'failure',
                message:"You are not authorised to delete  this post"
            })
        }
    } catch (err) {
        res.status(500).send({
            status: 'failure',
            message:err.message,
        })
    }
}


const getTimeline =async (req,res)=>{
    try {
        const userid =req.user._id;
        const page = parseInt(req.query.page) -1 || 0;
        const limit = parseInt(req.query.limit) || 1;
        const user = await User.findById(userid).select("followings");
        const myArticle = await Post.find({user:userid})
        .skip(page+limit)
        .limit(limit)
        .sort({createdAt:"desc"})
        .populate("user","username profilePicture");
    const followingPosts = await Promise.all(
        user.followingPosts((followingId)=>{
            return Post.find({
                user:followingId,
                createdAt:{
                    $gte: new Date(new Date().getTime() - 864000000).toISOString(),
                }
        })
        .skip(page+limit)
        .limit(limit)
        .sort({createdAt:"desc"})
        .populate("user","username profilePicture");
    })
    )
    arr =myPosts.concat(...followingPosts)
    res.status(200).send({
        status: "success",
        Posts: arr,
        limit: arr.length,
    })
    }
    
    catch (err) {
        res.status(500).send({
            status: "failure",
           message:err.message
        })
    }
}


//retrieving a specific post

const getPost = async (req, res) => {
    try {
        const post = await post.findOne({_id: req.params.id}).populate(
            "comment",
        )
        res.status(200).json(post)
    } catch (err) {
        res.status(500).send({
            status: "failure",
            message:err.message,
        })
    }
}


const getPostUser = async (req, res) => {
    try {
        const user = await User.findOne({username: req.params.username});
        const posts = await Post.find|({user: user._id});
        res.status(200).json(posts)

    } catch (err) {
        res.status(500).send({
            status: "failure",
            message:err.message,
        })
    }
}


const likeUnlike = async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.include(req.user._id)) {
            await post.updateOne({$push :{likes:req.user._id}})
            res.status(200).send({
                status: 'success',
                message:"The Post is liked",
        });
        }else{
            await post.updateOne({$pull :{likes: req.user._id}});
            res.status(200).send({
                status: 'success',
                message:"The Post is disliked",
        });
        
        }

    } catch (err) {
        res.status(500).send({
            status: "failure",
            message:err.message,
        })
    }
}

module.exports={
    createPost,
    updatePost,
    deletePost,
    getTimeline,
    getPost,
    getPostUser,
    likeUnlike

}