const { ObjectId } = require('mongodb')
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
            await blog.create({title: req.body.title, content: req.body.content, author: req.body.author, likes: 0, })
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
    },
    addLike: async (req, res)=>{
        try{
                const docID = req.body;
                console.log(docID.postID)
                let pls = docID.postID
                const result = await blog.collection.updateOne(
                    { title: pls },
                    { $inc: { likes: 1 } }
                );
                // this gets the document by title :)
                res.redirect('/blogs')
            } catch(err){
                console.error("❌ Database error during update:", error)
        }



    }}
