import { useState } from 'react'
import './App.css'
import {Header} from './Header-app.jsx'
import {ButtonAdd} from './ButtonAdd.jsx'
import {List} from './List-Form'


function App() {
  // state (état, données)
  const [count, setCount] = useState(0)


  // comportements
  const handleClick = () => {
    alert("handleclick")
  }


  // affichage
  return (
    <>
    <Header/>
      
    <ButtonAdd/>
    <List/>
    </>
  )
}

export default App
