const express = require('express');
const router=express.Router()
// Any Issue Please contact = 9588413799

const authorController = require('../controller.js/authorController')
const Blogcontroller=require('../controller.js/blogcontroller')
const Authmidd=require('../Middleware/auth-2')
const authmiddleware=require('../Middleware/auth')


router.post('/authors',authorController.createAuthor)
router.post('/blogs', Authmidd.authmid  ,Blogcontroller.createblog)
router.get('/blogs' , Authmidd.authmid ,Blogcontroller.getblogs)
router.put('/blogs/:blogid',authmiddleware.authmiddleware ,Blogcontroller.blogsUpdate)
router.delete("/blogs/:blogid" ,authmiddleware.authmiddleware ,Blogcontroller.deleted)
router.delete('/blogs',authmiddleware.filter, Blogcontroller.deleteblog)
router.post("/login",authorController.login)

module.exports = router;
// adding this comment for no reason