import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TudoList() {
  let [todos, setTodos] = useState([{id: uuidv4(), task: "sample task"}]);
  let [newTudo, setNewTudo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), task: newTudo}]
  });
    setNewTudo("");
  }

  let updateTudoValue = (event) => {
    setNewTudo(event.target.value);
  }

  let deleteTudo = (id) => {
    setTodos((prevTodos)=>prevTodos.filter((tudo) => tudo.id !== id));
  }

  let uppercaseOneTudo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((tudo) => {
        if(tudo.id === id){
          return{
            ...tudo,
            task: tudo.task.toUpperCase()
          };
        }else  {
         return tudo;  
        }
    }));
  }

  let upperCaseAllTasks = () => {
    setTodos((prevTodos) =>
      prevTodos.map((tudo) => {
      return{
        ...tudo,
        task: tudo.task.toUpperCase()
      };
    }));
  }

  return (
    <div>      
        <input  placeholder="Add todo taskhere" value={newTudo} onChange={updateTudoValue}/>
        <br></br> <br></br>
        <button onClick={addNewTask}>Add Task</button>
        <br></br>
        <br></br>
          
        <hr></hr>
        <h4>Tudo tasks</h4>
            {
                todos.map((tudo) => (
                 <ul>
                   <li key={tudo.id}>
                    <span>{tudo.task}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => deleteTudo(tudo.id)}>Delete</button> &nbsp;&nbsp;
                    <button onClick={() => uppercaseOneTudo(tudo.id)}>Upper case One</button>
                       
                   </li>
                </ul>
                ))
            }
            <button onClick={upperCaseAllTasks}>Uppercase All Tasks</button>        
    </div>
  );
}