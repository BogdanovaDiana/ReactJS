import React from "react";
import {Logo} from "../../logo/logo";
import PropTypes from "prop-types";
import "./movie-details.css";
import {useSelector} from "react-redux";

export const MovieDetails = (props) => {
    const movie = useSelector(state => state.movie);
    const searchParams = useSelector(state => state.currentLocation);
    const handleClick = () => {
        props.showDetails();
        location.search = searchParams;
    }
    return (
        <div className="details-wrapper">
            <div className="row">
                <div className="col-10">
                    <div className="logo">
                        <Logo/>
                    </div>
                </div>
                <div className="col search-icon center" onClick={handleClick}>
                    <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18.5" cy="10.5" r="9.5" stroke="#F65261" stroke-width="2"/>
                        <path d="M10.5 19.5L1.5 28.5" stroke="#F65261" stroke-width="2" stroke-linecap="square"/>
                    </svg>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <img className="poster-details" alt="Item image" src={movie.poster_path}/>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-8">
                            <div className="title">{movie.title}</div>
                        </div>
                        <div className="col-2">
                            <div className="rating">{movie.vote_average}</div>
                        </div>
                    </div>
                    <br/>
                    <p className="genre">{movie.genres}</p>
                    <br/>
                    <div className="row">
                        <div className="col-4 date">
                            {movie.release_date}
                        </div>
                        <div className="col-6 date">
                            {movie.runtime}
                        </div>
                    </div>
                    <br/>
                    <p className="overview">{movie.overview}</p>
                </div>
            </div>
        </div>
    )
}

MovieDetails.propTypes = {
    card: PropTypes.object
};
