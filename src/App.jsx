import { useState } from 'react'
import './App.css'
import {Header} from './Header-app.jsx'
import {ButtonAdd} from './ButtonAdd.jsx'
import {List} from './List-Form'


function App() {
  // state (état, données)
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (nouveauTodo) => {
    const todo = {text: nouveauTodo};
    
    setTodos([...todos,todo]);
    // Dans les crochets, on créée une copie de "todos" gra^ce aux trois petits points. Et, grâce à la virgule, on lui insère "todo". 
    // "todo" qui a été défini au-dessus comme {text:nouveauTodo}
  }

  // comportements




  // affichage
  return (
    <>
    <Header/>
      
    <ButtonAdd ajoutTodo={handleAddTodo}/>
    <List todosMap={todos}/>
   {/*  ajoutTodo et todosMap = props. Ceux-ci sont liée à un élément définis plus tôt dans le même fichier */}
    </>
  )
}

export default App
