const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex)

router.post('/', (req, res) => {
    
    const receivedData = req.body;
    console.log('Received data:', receivedData);
    // this works we just need to change it to send the id or some thing else
    // as the route then redirect the page after that we 
    // need to add this to the controllers object
})

router.get('/blogs', homeController.getBlogs)

router.get('/add', homeController.getAdd)

router.post('/addPost', homeController.addPost)



module.exports = router