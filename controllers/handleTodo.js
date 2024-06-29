import todoModel from "../model/todo.js";

export const handleTodo=async(req,res)=>{
    try {
       await todoModel.create({
        ...req.body
       })
      return  res.send("todo create")
       
    } catch (error) {
        console.log(error );
    }
}
