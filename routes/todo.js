const express=require("express");
const router=express.Router();


const {createTodo}=require("../controllers/todo");
const {deleteTodo}=require("../controllers/todo");
const {updateTodo}=require("../controllers/todo");
const {getTodos}=require("../controllers/todo");

router.post("/createTodo",createTodo);
router.delete("/deleteTodo/:id",deleteTodo)
router.put("/updateTodo/:id",updateTodo);
router.get("/getTodos",getTodos);


module.exports=router;