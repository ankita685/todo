const mongoose = require("mongoose");

//mongodb+srv://ankitachoudhary73748:Unihc26@cluster0.jl1ch8w.mongodb.net/

mongoose.connect("mongodb+srv://ankitachoudhary73748:Unihc26@cluster0.jl1ch8w.mongodb.net/todos")
const todoSchema =mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo =mongoose.model('todos',todoSchema);

module.exports ={
    todo
}