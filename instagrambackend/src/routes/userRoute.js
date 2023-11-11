const router =require("express").Router();
const authController =require("../controller/authController");
const userController =require("../controller/userController");


router.post('/signup',authController.signup)
router.post('/login',authController.login)
router.post('/logout',authController.logout)
router.post('/refresh',authController.refresh)
router.get('/searchUser',userController.searchUser)
router.get('/u/:username',userController.getUserByUsername)
router.get('/:id',userController.getUser);
router.get('/following/:username',userController.getFollowings)
router.get('/followers/:username',userController.getFollowers)

