import React from "react";

export const Search = () => {
    return (
        <React.Fragment>
            <div className="label">FIND YOUR MOVIE</div>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control find-input" placeholder="What do you want to watch?"/>
                </div>
                <div className="col">
                    <button type="button" className="search-btn">SEARCH</button>
                </div>
            </div>
        </React.Fragment>
    )
}
