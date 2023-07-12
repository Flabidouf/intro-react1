

export const List = ({todosMap}) => {
    // todosMap = tableau dans App.jsx

    return (
        <div className="listDiv">
            <h3>Todos</h3>
            <ul className="ulist">
                {todosMap.map((todo, index) => (
                    <li key={index}>
                          <input type="checkbox" />
                        {todo.text}
                    </li>
                ))}           
            </ul>
        </div>
        )
}
// In a return, we always put our content in a div as it's the only way to take them in account.
