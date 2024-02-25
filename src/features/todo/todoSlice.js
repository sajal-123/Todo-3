import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"Hello world"}]
}

export const toolSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload                // payload is an object
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload);
        },updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id===action.payload? {...todo,text:action.payload}:todo)
        }
    }
})

export const {addTodo,removeTodo,updateTodo}=toolSlice.actions;

export default toolSlice.reducer;