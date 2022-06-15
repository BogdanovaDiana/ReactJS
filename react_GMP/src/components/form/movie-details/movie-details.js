import React from "react";
import {Logo} from "../../logo/logo";
import PropTypes from "prop-types";
import "./movie-details.css";

export const MovieDetails = (props) => {
    return (
        <div className="details-wrapper">
            <div className="row">
                <div className="col-10">
                    <div className="logo">
                        <Logo/>
                    </div>
                </div>
                <div className="col search-icon center" onClick={() => props.showDetails()}>
                    <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18.5" cy="10.5" r="9.5" stroke="#F65261" stroke-width="2"/>
                        <path d="M10.5 19.5L1.5 28.5" stroke="#F65261" stroke-width="2" stroke-linecap="square"/>
                    </svg>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <img className="poster-details" alt="Item image" src={props.card.path}/>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-8">
                            <div className="label">{props.card.title}</div>
                        </div>
                        <div className="col-2">
                            <div className="rating">{props.card.rating}</div>
                        </div>
                    </div>
                    <br/>
                    <p className="genre">{props.card.genre}</p>
                    <br/>
                    <div className="row">
                        <div className="col-4 date">
                            {props.card.date}
                        </div>
                        <div className="col-6 date">
                            {props.card.runtime}
                        </div>
                    </div>
                    <br/>
                    <p className="overview">{props.card.overview}</p>
                </div>
            </div>
        </div>
    )
}

MovieDetails.propTypes = {
    card: PropTypes.object
};

MovieDetails.defaultProps = {
    card: {
        id: 1,
        title: "Pulp Fiction",
        path: "https://tafttoday.com/wp-content/uploads/2019/05/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_-1-568x900.jpg",
        date: "1994",
        url: "https://myMovie.com",
        genre: "Action & Adventure",
        rating: "9.8",
        runtime: "2h 30min",
        overview: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra"
    }
};
