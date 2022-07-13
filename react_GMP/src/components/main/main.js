import {Filter} from "./elements/filter/filter";
import {Sort} from "./elements/sort/sort";
import {Count} from "./elements/count/count";
import {CardsList} from "./cards-list/cards-list";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {sortBy} from "../../store/slice";

export const Main = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const sort = params.get('sort');
        dispatch(sortBy(sort))
    }, [])

    return (
        <div className="main-wrapper">
            <div className="row">
                <div className="col-8">
                    <Filter/>
                </div>
                <div className="col">
                    <Sort/>
                </div>
            </div>
            <Count count={39}/>
            <CardsList setShowDetails={props.showDetails} setCardId={props.updateCardId}/>
        </div>
    )
}
