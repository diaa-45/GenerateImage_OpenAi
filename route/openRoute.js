const express=require("express");
const router=express.Router();
const generateImage=require("../controller/openController")


router.post('/generateimage', generateImage);
module.exports=router;