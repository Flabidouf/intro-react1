export default function ListTodos() {
    return (

    <>
        <div>
            {/* Liste des todos */}
            <h2>Todos</h2>
            <ul>
                <li>
                <input type="checkbox" />
                    Apprendre React
                </li>
                <li>
                <input type="checkbox" />
                    Faire la vaisselle
                </li>
                <li>
                <input type="checkbox" />
                    Faire un jogging
                </li>
            </ul>
        </div>
    </>
    )
}