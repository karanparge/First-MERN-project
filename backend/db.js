const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://karanparge:T0L6Pd2RPOc8OtbD@cluster0.xzyed2b.mongodb.net/todos")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
})

const todo=mongoose.model("todos",todoSchema)

module.exports={
    todo
}
