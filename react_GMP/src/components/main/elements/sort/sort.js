import "./sort.css"
import {useDispatch, useSelector} from "react-redux";
import {sortBy} from "../../../../store/slice";

export const Sort = () => {
    const dispatch = useDispatch();
    const sort = useSelector(state => state.sortBy);
    const handleSortBy = (event) => {
        let sortByField = event.target.value;
        const params = new URLSearchParams(location.search);
        params.set("sort", sortByField);
        location.search = params.toString();
        dispatch(sortBy(sortByField));
    }

    return (
        <div className="row">
            <div className="col-4 sort">
                <p>SORT BY</p>
            </div>
            <div className="col-2">
                <select name="cars" id="cars" onChange={handleSortBy} value={sort}>
                    <option value="release_date">RELEASE DATE</option>
                    <option value="vote_average">RATING</option>
                </select>
            </div>
        </div>
    )
}
