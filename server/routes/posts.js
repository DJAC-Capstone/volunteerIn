const router = require('express').Router();
const { Posts , User} = require('../db');
const fs=require('fs');
const path=require('path');
const Jimp = require('jimp');
// load post

router.get('/', async (req, res, next) => {
  try {
    const posts = await Posts.findAll();
    res.send(posts);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const post = await Posts.findByPk(req.params.id,  { include: [User] });
    if (!post) {
      const error = new Error('POST NOT FOUND');
      error.status = 404;
      throw error;
    }
    res.status(200).send(post);
  } catch (err) {
    next(err);
  }
});
//create post
router.post('/create', async (req, res, next) => {
    try {
      console.log("helllloooo");
      console.log(req.body);
      const {imagePreviewUrl,comment, userId,file} = req.body
      const newPost = await Posts.create(
        {
          imagePreviewUrl,
          comment,
          userId,
          file
          
        });
         //fs.writeFileSync(path.join(__dirname, '..', '/public', imagePreviewUrl),req.body.file);
         //fs.readFileSync(path.join(__dirname, '..', 'gs://volunteerin-a529f.appspot.com/images', imagePreviewUrl));
        
      res.status(201).send(newPost);
    } catch (err) {
      next(err);
    }
  });
  // router.post(('/create/:filePath'),async(req,res,next)=>{
  //   try{
  //     console.log(req)
  //     const file=req.body;
  //     const filePath= req.params.filePath;
  //     Jimp.read(file,(err,input)=>{
     
  //       if(err) throw err;
  //       input.sepia()
      
  //     input.getBuffer(Jimp.AUTO,(err,file)=>{
  //       if(err) throw err
  //       fs.writeFileSync(path.join(__dirname, '..', '/public', filePath),file);
       
  //       res.status(201).send(filePath)
  //     })
  //   })
  //     fs.writeFileSync(path.join(__dirname, '..', '/public', filePath),file);
       
  //     res.status(201).send(filePath)

      

  //   }catch(err){
  //     next(err)
  //   }
  // })
  
  module.exports = router;