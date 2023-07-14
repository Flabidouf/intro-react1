

export default function ListTodos({todos, changeTodoStatus}) {


    if (todos === null) {
        console.error('oh no, todos is null');
        todos = []; // Provide a default value of an empty array
      }

    return (
    <>
        <div>
            {/* Liste des todos */}
            <h2>Todos</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input
                        type="checkbox" 
                        id={todo.id} 
                        checked={todo.done} 
                        onChange={ () => {changeTodoStatus(todo.id)}}
                        />
                        {todo.name}
                    </li>
                ))}
            </ul>
            
        </div>
    </>
    )
}