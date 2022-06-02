import "./sort.css"

export const Sort = () => {
    return (
        <div className="row">
            <div className="col-4 sort">
                <p>SORT BY</p>
            </div>
            <div className="col-2">
                <select name="cars" id="cars">
                    <option value="year">RELEASE DATE</option>
                    <option value="name">NAME</option>
                </select>
            </div>
        </div>
    )
}
