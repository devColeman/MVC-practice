const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex)

router.get('/blogs', homeController.getBlogs)

router.get('/add', homeController.getAdd)

router.post('/addPost', homeController.addPost)



module.exports = router