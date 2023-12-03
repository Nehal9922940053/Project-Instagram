const router = require('express').Router();
const Post = require('../Models/postModel');
const verifyToken = require('./verifyToken');

router.post('/new/post', verifyToken,async(req, res) => {

    try{


    const {title, image} = req.body;
    const post =await Post.create({
            title: title,
            image: image,
            user: req.user.id
    })
    console.log(post);
    res.status(200).json(post);
    } catch(error){
        res.status(500).json("Internal Server Error");
    }
})


router.post('/all/post/by/user', verifyToken,async(req, res) => {
    try{
        // console.log( req.user.id);
    const post =await Post.findById({user:req.user.id});
    if(!post){
    res.status(200).json("You don't have any posts");
    }
    return res.status(200).json(post);

    } catch(error){
        res.status(500).json("Internal Server Error");
    }
})



router.put('/:id/like', verifyToken,async(req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.user.id)){
            await post.updateOne({$push:{likes:req.user.id}})
        }else{
            await post.updateOne({$pull:{likes:req.user.id}})
        }
        return res.status(200).json("Like");
    } catch (error) {
        
    }

});


router.put('/comment/post', verifyToken,async(req, res) => {
    try {
        const {comment, postid, profile} =req.body;
        const comments ={
            user:req.user.id,
            username:req.user.username,
            profile,
            comment
        }

        const post = await Post.findById(postid);
        if(!post){
            return res.status(400).json("Post not found");
        }
         post.comments.push(comments);
        await post.save();
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json("Server error");
    }

})




module.exports = router;