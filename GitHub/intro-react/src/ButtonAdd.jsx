import {useState} from 'react';
// Quand on utilise un useState, il faut l'importer là où on l'utilise.

export function ButtonAdd() {

 const [nouveauTodo, setNouveauTodo] = useState("");


  // comportement
const handleSubmit = (event) => {
  event.preventDefault();
  // Empèche le rechargement de la page après l'envoi des données (click).
}
const handleChange = (event) => {
  setNouveauTodo(event.target.value)
  // Reprend la valeur de l'input sur lequel il est appelé. Ici l'input (au travers du onChange)
  
}

// affichage
return(

  <div >
    <form action="submit" className="card" onSubmit={handleSubmit}>
      <input
        value={nouveauTodo}
        type="text" 
        placeholder="Que faire ?"
        onChange={handleChange}
      />
      {/* Value permet de définir la variable liée à l'input */}
      <button>Ajouter un objectif</button>
    </form>
   
  </div>
  )
}


// Prochaine étape : faire le form et le lier au bouton. 
// Puis faire en sorte que le bouton ajoute un p dans la todo list.
