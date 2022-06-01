import Filter from "./elements/filter/filter";
import Sort from "./elements/sort/sort";
import Count from "./elements/count/count";
import CardsList from "./cards-list/cards-list";

export default function Main() {
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
            <CardsList/>
        </div>
    )
}
