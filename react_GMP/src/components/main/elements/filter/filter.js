import "./filter.css"

export default function Filter() {
    const items = [{id: 1, name: "ALL"}, {id: 2, name: "DOCUMENTARY"}, {id: 3, name: "COMEDY"}, {id: 4, name: "HORROR"}, {id: 5, name: "CRIME"}];

    let itemsList = items.map((item) =>
        <li className="nav-item"
            key={item.id + Math.random()}>
            <a className="nav-link" href="#">{item.name}</a>
        </li>
    );

    return (
        <ul className="nav nav-tabs">
            {itemsList}
        </ul>
    )
}
