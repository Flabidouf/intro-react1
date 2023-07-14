import AddTodo from "./components/AppTodo.jsx";
import Header from "./components/Header.jsx";
import ListTodos from "./components/ListTodos.jsx";

export default function App() {
  

  return (
     
    <main className="container">
      <Header />

     <AddTodo/>
      
    <ListTodos/>
     
    </main>
    
  )
}


