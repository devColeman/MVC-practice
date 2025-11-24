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

                blog.collection.updateOne(
                    { _id: pls },
                    { $inc: { likes: 1 } },
                    console.log("added?")
                )

                // blog.collection.updateOne(
                //     { _id:  k}, 
                //     { $inc: { like: 1}})             
                // we have no idea if this will work we are kinda winging it
                res.redirect('/blogs')
            } catch(err){
            console.log(err)
        }



    }}
