const Todo=require("../models/todoModel");


exports.createTodo=async(req,res)=>{
    try{

        const {title,description} = req.body;

        const todo=await Todo.create({title,description});

        res.status(200).json({
            success:true,
            message:"Todo created successfully",
            todo
        })

    }catch(e){
        res.statue(500).json({
            success:false,
            message:"Error occured while creatingTodo",
            error:e.message
        })
    }
}


exports.deleteTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        const todo=await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"Todo deleted successfully",
            todo
        })

    }catch(e){
        res.status(500).json({
            success:false,
            message:"Error occured while deletingTodo",
            error:e.message
        })
    }
}


exports.updateTodo=async(req,res)=>{
    try{
        const {id}=req.params;
    const {title,description}=req.body;

    const todo=await Todo.findByIdAndUpdate(id,{title,description,updatedAt:Date.now()});
    res.status(200).json({
        success:true,
        message:"Todo updated successfully",
        todo
    })
    }catch(e){
        res.status(500).json({
            success:false,
            message:"Error occured while updatingTodo",
            error:e.message
        })
    }

}

exports.getTodos=async(req,res)=>{
    try{
        const todo=await Todo.find({});
        res.status(200).json({
            success:true,
            message:"Todo fetched successfully",
            todo
        })
    }catch(e){
        res.status(500).json({
            success:false,
            message:"Error occured while fetchingTodo",
            error:e.message
        })
    }
}