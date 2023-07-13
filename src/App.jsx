import { useState, useEffect } from 'react'
import './App.css'
import {Header} from './Header-app.jsx'
import {ButtonAdd} from './ButtonAdd.jsx'
import {List} from './List-Form'

const LSKEY = "MyTodoApp";

function App() {

  const storedItems = JSON.parse(localStorage.getItem(LSKEY + ".todos"));

  // state (état, données)

  const [todos, setTodos] = useState(storedItems || []);


    // comportements

  const handleAddTodo = (nouveauTodo) => {
    const todo = {text: nouveauTodo};
    // ça fait quoi ? Pq pas le mettre dans la fonction qui transforme en string l'entrée ?
    setTodos([...todos,todo]);
    // Dans les crochets, on créée une copie de "todos" grâce aux trois petits points. Et, grâce à la virgule, on lui insère "todo". 
    // "todo" qui a été défini au-dessus comme {text:nouveauTodo}
  }
  
  const handleDeleteTodo = index => {
    setTodos( prevTodos => prevTodos.filter((_, i) => i !== index ))
    // L'underscore('_') est utilisé comme placeholder pour les éléments individuels de l'array qui ne sont pas nécessaire dans pour le filter.
    // "i" représente l'index de chaque élément dans l'array.
  }

  // console.log("data", data)
  // 'data' permet de nommer ce que l'on montrera. data est la const data plus haut.

useEffect (() => {
  localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));

}, [todos]);
// localStorage s'attend à recevoir du JSON. C'est pourquoi on utilise .stringify pour transformer la valeur (todo) en JSON.
// Permet de sauvegarder les entrées du form dans localStorage. 
// On peut voir les données sauvegardées dans l'onglet Application de l'inspecteur web.


  // affichage

  return (
    <>
    <Header/>
      
    <ButtonAdd parameterButtonAdd={handleAddTodo}/>
    <List todos={todos} onDeleteTodo={handleDeleteTodo}/>
   {/*  parameterButtonAdd et todosMap = props. Ceux-ci sont liée à un élément définis plus tôt dans le même fichier */}
    </>
  )
}

export default App
