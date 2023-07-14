import { useRef} from "react";


export default function AddTodo({addNewTodo}) {
  // addNewTodo est un props, on le met dans des brackets.
const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTodo(inputRef.current.value);
    inputRef.current.value = "";
  }
   
    
    return(
      <form action="#" method="POST" onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" name="newTodo" placeholder="create a new todo" />
        <button type="submit" >Create</button>
      </form>
    )
}