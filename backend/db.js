const mongoose = require('mongoose');

const { strictObject } = require('zod');

 mongoose.connect("mongodb+srv://abhigdscnew:abhi8193681936@cluster0.v3kjunr.mongodb.net/")

// will not do like this in professional project , will put this in .env file and you will not push this in github
const todoSchema = mongoose.Schema({
    title : String ,
    description : String ,
    completed : Boolean
})
const todo = mongoose.model('todos' , todoSchema)
module.exports = {
    todo
}


















/*Moongoose schema for Todo
  -> {title : string ,
    description : string ,
    completed : boolean 
}
*/