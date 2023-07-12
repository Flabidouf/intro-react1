

export const List = (props) => {

    return (
        <div className="listDiv">
            <h3>Todos</h3>
            <ul className="ulist">
                <li htmlFor="">
                    <input type="checkbox" />
                    Changer l'eau des toilettes
                </li>
                <li>
                    <input type="checkbox" />
                    Sourire aux murs
                </li>
            </ul>
        </div>
        )
}
// In a return, we always put our content in a div as it's the only way to take them in account.
