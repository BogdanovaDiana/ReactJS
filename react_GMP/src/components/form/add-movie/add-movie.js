import React from "react";
import "./add-movie.css"
import {useEffect} from "react";

export const AddMovie = (props) => {
    const items = [{id: 1, name: "Action"}, {id: 2, name: "Drama"}, {id: 3, name: "Action & Adventure"},
        {id: 4, name: "Biography"}, {id: 5, name: "Oscar winning Movie"}];
    let itemsList = items.map((item) =>
        <option>
            {item.name}
        </option>
    );

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'scroll';
    }, []);

    return (
        <div className="form-wrapper">
            <span className="close" onClick={() => props.closeModal(false)}>x</span>
            <div className="label">ADD MOVIE</div>
            <div className="row form-row">
                <div className="col">
                    <label htmlFor="inputTitle" className="col-sm-4 col-form-label">TITLE</label>
                    <input type="text" id="inputTitle" className="form-control" placeholder="Title"/>
                </div>
                <div className="col">
                    <label htmlFor="inputDate" className="col-sm-6 col-form-label">RELEASE DATE</label>
                    <input id="inputDate" className="form-control form-input" type="date"
                           placeholder="Select date"/>
                </div>
            </div>
            <div className="row form-row">
                <div className="col">
                    <label htmlFor="movieUrl" className="col-sm-4 col-form-label">MOVIE URL</label>
                    <input type="text" id="movieUrl" className="form-control" placeholder="https://"/>
                </div>
                <div className="col">
                    <label htmlFor="inputRating" className="col-sm-6 col-form-label">RATING</label>
                    <input id="inputRating" className="form-control" type="text" placeholder="7.8"/>
                </div>
            </div>
            <div className="row form-row">
                <div className="col">
                    <label htmlFor="inputGenre" className="col-sm-4 col-form-label">GENRE</label>
                    <select className="form-control form-input" id="inputGenre" placeholder="Select genre">
                        {itemsList}
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="inputRuntime" className="col-sm-6 col-form-label">RUNTIME</label>
                    <input id="inputRuntime" className="form-control" type="text" placeholder="minutes"/>
                </div>
            </div>
            <div className="row form-row">
                <label htmlFor="inputOverview" className="col-sm-4 col-form-label">OVERVIEW</label>
                <textarea id="inputOverview" rows="3" placeholder="Movie description"></textarea>
            </div>
            <div className="row form-row">
                <div className="col">
                    <button type="button" className="form-btn reset-btn" onClick={() => props.closeModal(false)}>RESET
                    </button>
                </div>
                <div className="col">
                    <button type="button" className="form-btn submit-btn">SUBMIT</button>
                </div>
            </div>
        </div>
    )
}