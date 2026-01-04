//reducers
import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos:[{id:"abc",task:"demo-task", isDone : false}]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo : (state,action)=>{
      const newTodo={
        id:nanoid(),
        task:action.payload,
        isDone:false,
      };
      //[...todos,newTodo] - > indirect mutation only posible in react
      state.todos.push(newTodo); //direct mutation possible with help of redux-toolkit
    },

    deleteTodo: (state,action) =>{
        state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
    },

    markAsDone:(state,action)=>{
       state.todos=state.todos.map((todo)=>{
        if(todo.id===action.payload){
            todo.isDone=true;
        }
       });
    }
  }
})

export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;
export default todoSlice.reducer;

