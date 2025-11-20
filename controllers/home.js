const blog = require('../model/blog')


module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    }, 
    getAdd: (req,res)=>{
        res.render('addPost.ejs')
    },
    addPost: async (req,res)=>{
       try{
            await blog.create({title: req.body.title, content: req.body.content, author: req.body.author })
            res.redirect('/blogs')
        }catch(err){
            console.log(err)
        }
    }, 
    getBlogs: async (req,res)=>{
        try{
            const blogThing = await blog.find()
            res.render('blogList.ejs', {blogItems: blogThing })
        }catch(err){
            console.log(err)
        }
    }
}