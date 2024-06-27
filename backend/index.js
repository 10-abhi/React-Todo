//Write basic express boiler-plate code 
//with express.json() middleware
const express = require('express')
const app = express();
const { createTodo , updateTodo } = require("./types");
const { parse } = require('marked');
const {todo} = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo" , async function(req,res){
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if(!parsePayload.success){
    res.status(404).json({
        msg: "You sent the wrong inputs"
    })
    return ;
  }
 //put in mongodb if everthing goes well
  await todo.create({
        title : createPayload.title,
        description : createPayload.description,
    })
    res.json({
      msg:"Todo is created"
    })
})
app.get("/todos" , async function(req,res){
   const todos = await todo.find({});
   res.json({
    todos
   })
})
app.put("/completed" , async  function (req ,res){
   const updatePayload = req.body;
   const parsePayload = updateTodo.safeParse(updatePayload);
   if(!parsePayload.success){
     res.status(404).json({
        Msg : "Error tackled while updation.."
     })
     return;
   }
   await todo.update({
    _id : req.body.id
   } , {
    completed : true
   })
    res.json({
      msg : "Todo marked as completed"
    })
})
app.listen(3000);