const {  mongoose } = require('mongoose')

const postSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    } , 
    age : {
        type : String,
        required : true
    } , 
    team : {
        type : String,
        required : true
    } , 
    desc : {
        type : String,
        required : true
    } , 
})

module.exports = mongoose.model('posts' , postSchema)