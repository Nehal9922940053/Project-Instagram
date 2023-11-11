const bcrypt = require('bcrypt');
const User = require('../Models/userModel');

//updateuser:
//first checks the user making req is owner or a admin
//if so then it will proceed to update Users password and then
//update user doc in db.return success along with update user

const updateUser = async (req, res) => {
    if (req.user._id === req.param.id || req.user.role === "admin") {
        if (req.body.password) {
            try {
                const saltRounds = await bcrypt.genSalt(10);
                req.body.password = bcrypt.hash(req.body.password,salt)
            }
            catch (err) {
            req.status(500).send({
                status:"failure",
                message:`Error message: ${err}`
            })
        }
    }
    try{
        const user = await User.findOneAndUpdate(
                {_id:req.param.id},
                {$set:req.body},
                {new:true}
            )
            const{jwtToken,password, ...other} = user._doc;
            if(!user){
                return res.status(400).send({
                    status:"failure",
                    message:"You cant update this account",
                })
            }
            res.status(200).send({
                status:"success",
                message:"Account has been updated Successfully"
            })
        }
        catch(err){
            res.status(500).send({
                status:"failure",
                message:"Something went wrong"
            })
        }
    }else{
        return res.status(400).send({
            status:"failure",
            message:"You cant update this account"
        })
    }
}


//get user functions retrieve user info based on provided id
const getUser =async(req,res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({id:id});
        if(!user){
            throw new Error("User donot exist");
        } 
        const {jwtToken, password,__v,role, ...other} =user._doc;
        res.status(200).send({
            status:"success",
            message:"User info",
            user:otherinfo,
        });      
    } catch (err) {
        res.status(500).send({
            status:"failure",
            message:err.message
        })
    }
}





const getUserByUsername =async (req, res) => {
    try{
        const username = await req.params.username;
        const user = await User.findOne({username:username});
        if(!user){
            throw new Error('User do not exist');

        }
        const {jwtToken, password, __V, role, ...other}=user._doc;
        res.status(200).send({
            status:"success",
            message:"user info",
            user:otherInfo,
        })
    }catch(err){
        res.status(500).send({
            status:"failure",
            message:err.message,
        })
    }
}

const getFollowings = async (req, res) => {
    try{
        const username = req.params.username;
        const userfollowings = await User.findOne({username:username});
        if(!userfollowings){
            throw new Error('User donot exist');
        }
        const followings =await Promise.all(
            userfollowings.followings.map((following) => {
                return User.findById(following,{
                    username:true,
                    profilePicture:true,
                })
            })
            )
        res.status(200).send({
            status:"success",
            message:"user info",
            followings:followings,
        })

    }catch(err){
        res.status(500).send({
            status:"failure",
            message:err.message,
        })
    }
}

const getFollowers =async(req,res)=>{
    try{
        const username = req.params.username;
        const userfollowings = await User.findOne({username:username});
        if(!userfollowers){
            throw new Error('User donot exist');
        }
        const followers =await Promise.all(
            userfollowers.followers.map((follower) => {
                return User.findById(following,{
                    username:true,
                    profilePicture:true,
                })
            })
            )
            res.status(200).send({
                status:"success",
                message:"user info",
                data:{followings:followers,
                }
            })
    }catch(err){
        res.status(500).send({
            status:"failure",
            message:err.message,
        })
    }
}

const followUser =async(req,res)=>{
    try {
        const currentUser = await User.findById({_id:req.user._id})
        if(currentUser.username !== req.params.username){
        const usertofollow =await User.findOne({
            username:req.params.username,
        })
        if(!usertofollow){
            throw new Error("invalid Username")
        }
        if(!currentUser.followings.includes(usertofollow._id)){
            await currentUser.updateOne({
                $push:{followings:usertofollow._id},
    
            })
            await usertofollow.updateOne({
                $push:{followers:currentUser._id},
            })
            res.status(200).send({
                status:"success",
                message:"user followed",
            })
        }else{
        res.status(400).send({
            status:"success",
            message:" you have already followed this user",
        })
    }
}else{
    throw new Error("You can't follow yourself");
}
}
catch(err){
        res.status(500).send({
            status:"failure",
            message:err.message,
        })
    }
}



const unfollowUser =async(req,res)=>{
    try {
        const currentUser = await User.findById({_id:req.user._id})
        if(currentUser.username !== req.params.username){
        const usertounfollow =await User.findOne({
            username:req.params.username,
        })
        if(!usertounfollow){
            throw new Error("invalid Username/ user do not exist")
        }
        if(!currentUser.followings.includes(usertounfollow._id)){
            await currentUser.updateOne({
                $push:{followings:usertounfollow._id},
    
            })
            await usertounfollow.updateOne({
                $push:{followers:currentUser._id},
            })
            res.status(200).send({
                status:"success",
                message:"user unfollowed",
            })
        }else{
        res.status(400).send({
            status:"success",
            message:" you do not follow  this user",
        })
    }
}else{
    throw new Error("You can't unfollow yourself");
}
    } catch (err) {
        res.status(500).send({
            status:"failure",
            message:err.message,
        })
    }
}

const searchUsers =async(req,res)=>{
    try{
        const limit =  parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        const user = await User.findOne({
            username:{
                $regex:search,
                $options:"i"
            },
        })
        .select("_id username profilePicture")
        .limit(limit);
        const totalUsers = users.length;
        res.status(200).send({
            status:"success",
            totalUsers:"totalUsers",
            limit:limit,
            users:users
        })
    }
    catch(err){
        res.status(500).send({
            status:"failure",
            message:err.message,
        })
    }
}



//delete a user
const deleteUser =async(req,res) => { 
    
    try {
        const {User} = await User.findById({_id:req.user._id});
       User.deleteOne({_id:req.user._id })
       res.status(200).send({
        status:"success",
        message:"User Account deleted successfully",
    })

    } catch (err) {
        res.status(500).send({
            status:"failure",
            message:err.message
        })
    }
}


module.exports = {
    updateUser,
    getUser,
    getUserByUsername,
    getFollowings,
    followUser,
    unfollowUser,
    searchUsers,
    deleteUser,
}