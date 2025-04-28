const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const postsModel = require('./models/postSchema')

const pass = 'D9jhRDKuKabOjKzo'
const URI = 'mongodb+srv://saishiva191:D9jhRDKuKabOjKzo@cluster0.xdj0kvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()

mongoose.connect(URI ,
).then(() => {console.log('Connected to DB');})
.catch((error) => {console.log(error);})

app.use(express.json())
app.use(cors())

app.get('/posts' ,  async (req , res) => {
    const posts =  await postsModel.find()
    res.send(posts)
})

app.post('/posts' , async (req , res) => {
    const post  = req.body
    const postInfo = new postsModel(post)
    await postInfo.save()
    res.send('When the user stores the infor in DB' , postInfo )
})

app.put('/posts/:id' , async (req , res) => {
    
    
})

app.delete('/posts/:id' , async (req , res) => {
    try{
        const postId = req.params.id
        const deletedPost = await postsModel.findByIdAndDelete(postId)

        if(!deletedPost){
            res.send('Did not find')
        }
        res.send('Deleted')
    }
    catch(error) {
        console.log(error);
    }
})

app.listen(4000 , () => {
    console.log('Server is running on 4000');
})