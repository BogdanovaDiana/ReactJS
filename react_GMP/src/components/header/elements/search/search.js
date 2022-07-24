import React, {useEffect, useRef} from "react";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {searchMovies} from "../../../../store/slice";

export const Search = () => {
    const query = useParams();
    const searchQuery = query.searchQuery ?? '';
    const searchString = useRef(searchQuery);

    useEffect(() => {
        searchString.current.value = searchQuery;
    }, [])

    const dispatch = useDispatch();
    const handleSearch = () => {
        const value = searchString.current.value;
        dispatch(searchMovies(value));
        location.pathname = `/search/${value}`;
    }
    const handleChange = (e) => {
        if(e.key === 'Enter'){
            handleSearch();
        }
    }

    return (
        <React.Fragment>
            <div className="label">FIND YOUR MOVIE</div>
            <div className="row">
                <div className="col">
                    <input type="text" ref={searchString} className="form-control find-input" placeholder="What do you want to watch?" onKeyDown={handleChange} value={searchString.current.value}/>
                </div>
                <div className="col">
                    <button type="button" className="search-btn" onClick={handleSearch}>SEARCH</button>
                </div>
            </div>
        </React.Fragment>
    )
}
