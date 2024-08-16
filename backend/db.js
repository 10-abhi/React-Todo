const mongoose = require('mongoose');

const { strictObject } = require('zod');

 mongoose.connect("PutconnectionStringHere")
  
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