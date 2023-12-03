// const router =require("express").Router();
// const authController =require("../controller/authController");
// const userController =require("../controller/userController");


// router.post('/signup',authController.signup)
// router.post('/login',authController.login)
// router.post('/logout',authController.logout)
// router.post('/refresh',authController.refresh)
// router.get('/searchUser',userController.searchUser)
// router.get('/u/:username',userController.getUserByUsername)
// router.get('/:id',userController.getUser);
// router.get('/following/:username',userController.getFollowings)
// router.get('/followers/:username',userController.getFollowers)



const router = require('express').Router();
const User = require('../Models/userModel');
const verifyToken = require('./verifyToken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
router.post('/new/user', async(req, res) => {
    try{
        const {email, password, username, profile} = req.body;
       
       
        
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(200).json("login with correct password");
        }else{
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        // console.log(hash);
        user = await User.create({email: email, password: hash, username: username,profile: profile}) ;
        const accessToken = jwt.sign({
        id:user._id,
        username:user.username,
    },process.env.JWT_SECRET)

        res.status(200).json(user,accessToken);
    }
    
} catch (error) {
        return res.status(400).json("internal server error")
    }

})



//get
router.get('/login', async(req, res) => {
    try{    
        let user = await User.findOne({email: req.body.email});
        if(user){
           const comparepassword = await bcrypt.compare(req.body.password,user.password);
           if(!comparepassword){
           return res.status(400).json("Password incorrect");
           }

           const accessToken =jwt.sign({
            id:user._id,
            username:user.username
           }, process.env.JWT_SECRET);
        
           const {password, ...others} = user._doc;
           return res.status(200).json({others, accessToken})
     
    }
    
} catch (error) {
        return res.status(400).json("internal server error")
    }

})




// user router
router.put('/:id/follow', verifyToken,async(req, res) => {
    try{
    if(req.params.id !== req.body.user){
        const user =await User.findById(req.params.id);
        const otheruser =await User.findById(req.body.user);

        if(!user.followers.includes(req.body.user)){
            await user.updateOne({$push:{followings:req.body.user}})
            await otheruser.updateOne({$push:{folowers:req.params.id}})
            return res.status(200).json("User has follow ");
        }else{
            await user.updateOne({$pull:{followings:req.body.user}})
            await otheruser.updateOne({$pull:{folowers:req.params.id}})
        }    return res.status(200).json("User has follow ");
    }
}catch(error){
    return res.status(500).json("Server error");
}
})


router.get('/flw/:id', verifyToken,async(req, res) => {
    try { 
    const user = await User.findById(req.params.id);
    const followersPost = await Promise.all(
        user.followings.map((item)=>{
            return Post.find({user:item})
        })
    )
    
    const userPost = await Post.find({user:user._id});
    const filterProduct = userPost.concat(...followersPost);

    filterProduct.forEach((post) => {
        const postAge = new Date - new Date(post.createdAt);
        const ageWeight = 1 - postAge/(1000*60*60*24); // weight decrease as post getting older
        const likeWeight = post.likes.length/100;
        const commentWeight = post.comments.length/100;
        post.weight=ageWeight + likeWeight + commentWeight;

    })

    filterProduct.sort((a,b) =>b.weight - a.weight);
    
   return res.status(200).json(filterProduct);

 } catch (error) {
    return res.status(500).json("Server Error");
    }
})




router.get('/all/user/:id', verifyToken,async(req, res) => {
    try{
    const allUser =await User.find();
    const user = await User.findById(req.params.id);
    const followings = await Promise.all(
        user.followings.map((item) =>{
            return item;
        })
    )
        let userTOFollow =allUser.filter((val) =>{
            return !followinguser.find((item)=>{
                return val._id.toString() === item;

            })
        })

        let filterUser =await Promise.all(
            userTOFollow.map((item) =>{
                const {email, followers,followings,password, ...others} =item._doc;
                return others;
            })
        )
            console.log(filterUser);
        return res.status(200).json(filterUser);

    } catch(error){
        res.status(500).json("Internal Server Error");
    }
})



router.put('/update/password/:id', verifyToken,async(req, res) => {
    try {
        
   
    const user = await User.findById(req.params.id);
    if(!user){
        return res.status(400).json("user not found");
    }

    const isPasswordMatch = await bcrypt.compare(req.body.oldpassword, user.password);
    if(!isPasswordMatch){
        return res.status(400).json("old Password dose not match");
    }

    if(req.body.newPassword !== req.body.confirmPassword){
        return res.status(400).json("Password dose not match");

    }

    const salt =await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.newPassword, salt);
    await user.save();
    return res.status(200).json("Your password is updated");

    } catch (error) {
        
   return  res.status(500).json(" Server Error");
    }
})



router.get('/get/search/user', verifyToken,async(req, res) => {
    try {
        const keyword = req.query.search
        ? {
            $or:[
                {username:{$regex:req.query.search ,$options:"i"}},
                {email:{$regex:req.query.search , $options:"i"}},
            ],
        } 
        : {};

        const users = await User.find(keyword).find({_id:{$ne:req.user.id}})
        return res.status(200).json(users);
    } catch (error) {
        return  res.status(500).json(" Server Error"); 
    }

})


//Explore Post
router.get('/explore', verifyToken,async(req, res) => {
    try {

    const userPost = await Post.find();

    userPost.forEach((post) => {
        const postAge = new Date - new Date(post.createdAt);
        const ageWeight = 1 - postAge/(1000*60*60*24); // weight decrease as post getting older
        const likeWeight = post.likes.length/100;
        const commentWeight = post.comments.length/100;
        post.weight=ageWeight + likeWeight + commentWeight;

    })

    userPost.sort((a,b) =>b.weight - a.weight);
    
   return res.status(200).json(filterProduct);

 } catch (error) {
        return res.status(500).json("Server Error");


}

})







module.exports = router;


