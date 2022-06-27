import "./sort.css"
import {useDispatch} from "react-redux";
import {sortBy} from "../../../../store/slice";

export const Sort = () => {
    const dispatch = useDispatch();
    const handleSortBy = (sort) => {
        let sortByField = sort==="date" ?  "release_date" : "vote_average";
        dispatch(sortBy(sortByField))
    }

    return (
        <div className="row">
            <div className="col-4 sort">
                <p>SORT BY</p>
            </div>
            <div className="col-2">
                <select name="cars" id="cars" onChange={(e) => handleSortBy(e.target.value)}>
                    <option value="date">RELEASE DATE</option>
                    <option value="rating">RATING</option>
                </select>
            </div>
        </div>
    )
}
