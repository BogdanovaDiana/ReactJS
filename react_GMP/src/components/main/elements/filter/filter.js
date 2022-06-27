import "./filter.css"
import {useDispatch} from "react-redux";
import {filter, sortBy} from "../../../../store/slice";

export const Filter = () => {
    const items = [{id: 1, name: "ALL"}, {id: 2, name: "DOCUMENTARY"}, {id: 3, name: "COMEDY"}, {id: 4, name: "HORROR"}, {id: 5, name: "CRIME"}];

    let itemsList = items.map((item) =>
        <li className="nav-item" key={item.id} onClick={() => handleFilter(item.name)}>
            <a className="nav-link" href="#">{item.name}</a>
        </li>
    );

    const dispatch = useDispatch();
    const handleFilter = (genre) => {
        dispatch(filter(genre))
    }

    return (
        <ul className="nav nav-tabs">
            {itemsList}
        </ul>
    )
}
