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
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    }
}