import AddTodo from "./components/AddTodo.jsx";
import Header from "./components/Header.jsx";
import ListTodos from "./components/ListTodos.jsx";
import { v4 as uuidv4} from "uuid";
import {useEffect, useState} from "react";

const LSKEY = "myTodoApp"


export default function App() {
  
  /* const handleClick = (e) => {
    const newTodos = [...todos];
    newTodos.push("This is a new todo");
    setTodos(newTodos); */

    const initTodos = [
      {
          id: "0",
          name: "Apprendre React",
          done: false
      },
      {
          id: "1",
          name: "Faire la vaisselle",
          done: true
      },
      {
          id: "2",
          name: "Faire un jogging",
          done:false
      },
  ];
  
  const [todos, setTodos] = useState(initTodos);
  const [firstLoad, setFirstLoad] = useState(true);
  
  const changeTodoStatus = (id) => {
    const newTodos = todos.map((todo) => {
        if (todo.id === id) {
            todo.done = !todo.done;
        }
        return todo;
    });
    setTodos(newTodos); 
}
// e = event

const addNewTodo = (newTodoName) => {
  const newTodo = {
    id: uuidv4(),
    // Doit être une chaîne de caractère.
    name: newTodoName,
    done: false
  };
  const newTodos = todos ? [...todos] : [];
  newTodos.push(newTodo);
  setTodos(newTodos);
}



useEffect(() => {
  const initialTodos = JSON.parse(window.localStorage.getItem(LSKEY + ".todos"))
  setTodos(initialTodos);
}, [])

useEffect(() => {
  if (!firstLoad) {
    // Si ce n'est pas le premier chargement de la page, do something.
  window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  } else {
    setFirstLoad(false);
  }
}, [todos, firstLoad]);



  return (
     
    <main className="container">
      <Header/>

      <AddTodo addNewTodo={addNewTodo}/>
      
      <ListTodos todos={todos} changeTodoStatus={changeTodoStatus}/>
     
    </main>
    
  )
}

