import "./filter.css"
import {useDispatch, useSelector} from "react-redux";
import {filter, getMovies, sortBy} from "../../../../store/slice";
import {Link} from "react-router-dom";

export const Filter = () => {
    const genre = useSelector(state => state.genre);
    const items = [{id: 1, name: "ALL"}, {id: 2, name: "DOCUMENTARY"}, {id: 3, name: "COMEDY"}, {id: 4, name: "HORROR"}, {id: 5, name: "CRIME"}];
    let itemsList = items.map((item) =>
        <li className="nav-item" key={item.id} onClick={() => handleFilter(item.name)} value={genre}>
            <Link to={`${location.pathname}?genre=${item.name}`}>
                <a className="nav-link" id={item.name} href="#">{item.name}</a>
            </Link>
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
