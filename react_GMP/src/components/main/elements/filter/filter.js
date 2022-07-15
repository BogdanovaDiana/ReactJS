import "./filter.css"
import {useDispatch, useSelector} from "react-redux";
import {filter} from "../../../../store/slice";
import {useRef} from "react";

export const Filter = () => {
    const genre = useSelector(state => state.genre);
    const items = [{id: 1, name: "ALL"}, {id: 2, name: "DOCUMENTARY"}, {id: 3, name: "COMEDY"}, {id: 4, name: "HORROR"}, {id: 5, name: "CRIME"}];
    let itemsList = items.map((item) =>
        <li className={item.name === genre ? "nav-item active" : "nav-item"} key={item.id}
            onClick={() => handleFilter(item.name)}>
            <a className="nav-link" id={item.name}>{item.name}</a>
        </li>
    );

    const dispatch = useDispatch();
    const handleFilter = (genre) => {
        const params = new URLSearchParams(location.search);
        params.set("genre", genre);
        location.search = params.toString();
        dispatch(filter(genre))
    }

    return (
        <ul className="nav nav-tabs">
            {itemsList}
        </ul>
    )
}
