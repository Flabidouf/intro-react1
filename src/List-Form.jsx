

export const List = ({todos, onDeleteTodo}) => {
    // todosMap = tableau dans App.jsx

 const handleCheckbox = event => {
    console.log(event.target.checked);
} 

const handleDelete = index => {
    onDeleteTodo && onDeleteTodo(index);
}

if (todos === null) {
    console.error("oh no, todos is null");
}

  
    return (
        <div className="listDiv">
            <h3>Todos</h3>
            <ul className="ulist">
                {todos.map((todo, index) => (
                    <li key={index}>
                          <input type="checkbox" onChange={handleCheckbox} />
                        {todo.text}
                        <button className="button" onClick={ () => handleDelete(index) }>Delete</button>
                    </li>
                ))}           
            </ul>
        </div>
        )
}
// In a return, we always put our content in a div as it's the only way to take them into account.
