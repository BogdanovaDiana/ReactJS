import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

export const EditMovie = (props) => {
    let movie = useSelector(state => state.movie);
    const [title, setTitle] = useState(movie.title);
    const [date, setDate] = useState(movie.release_date);
    const [tagline, setTagline] = useState(movie.tagline);
    const [rating, setRating] = useState(movie.vote_average);
    const [genres, setGenres] = useState(movie.genres);
    const [runtime, setRuntime] = useState(movie.runtime);
    const [overview, setOverview] = useState(movie.overview);

    const items = [{id: 1, name: "Action"}, {id: 2, name: "Drama"}, {id: 3, name: "Action & Adventure"},
        {id: 4, name: "Biography"}, {id: 5, name: "Oscar winning Movie"}];
    let itemsList = items.map((item) =>
        <option>
            {item.name}
        </option>
    );

    const selectGenre = (event) => {
        const index = event.nativeEvent.target.selectedIndex;
        setGenres(event.nativeEvent.target[index].text);
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'scroll';
    }, []);

    useEffect(() => {
        const genre = movie.genres ? movie.genres[0] : '';
        setTitle(movie.title);
        setDate(movie.release_date);
        setTagline(movie.tagline);
        setRating(movie.vote_average);
        setGenres(genre);
        setRuntime(movie.runtime);
        setOverview(movie.overview);
    }, [movie])

    return (
        <div className="form-wrapper">
            <span className="close" onClick= {() => props.closeModal(false)}>x</span>
            <div className="label">EDIT MOVIE</div>
            <div className="row form-row">
                <div className="col">
                    <label htmlFor="inputTitle" className="col-sm-4 col-form-label">TITLE</label>
                    <input type="text" id="inputTitle" className="form-control" placeholder="Title" value={title}
                           onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="col">
                    <label htmlFor="inputDate" className="col-sm-6 col-form-label">RELEASE DATE</label>
                    <input id="inputDate" className="form-control form-input" type="date" placeholder="Select date"
                           value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>
            </div>
            <div className="row form-row">
                <div className="col">
                    <label htmlFor="movieUrl" className="col-sm-4 col-form-label">TAGLINE</label>
                    <input type="text" id="movieUrl" className="form-control" placeholder="https://" value={tagline}
                           onChange={(e) => setTagline(e.target.value)}/>
                </div>
                <div className="col">
                    <label htmlFor="inputRating" className="col-sm-6 col-form-label">RATING</label>
                    <input id="inputRating" className="form-control" type="text" placeholder="7.8" value={rating}
                           onChange={(e) => setRating(e.target.value)}/>
                </div>
            </div>
            <div className="row form-row">
                <div className="col">
                    <label htmlFor="inputGenre" className="col-sm-4 col-form-label">GENRE</label>
                    <select className="form-control form-input" id="inputGenre" placeholder="Select genre"
                            value={genres} onChange={(e) => selectGenre(e)}>
                        {itemsList}
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="inputRuntime" className="col-sm-6 col-form-label">RUNTIME</label>
                    <input id="inputRuntime" className="form-control" type="text" placeholder="minutes" value={runtime}
                           onChange={(e) => setRuntime(e.target.value)}/>
                </div>
            </div>
            <div className="row form-row">
                <label htmlFor="inputOverview" className="col-sm-4 col-form-label">OVERVIEW</label>
                <textarea id="inputOverview" rows="3" onChange={(e) => setOverview(e.target.value)}>
                    {overview}
                </textarea>
            </div>
            <div className="row form-row">
                <div className="col">
                    <button type="button" className="form-btn reset-btn" onClick= {() => props.closeModal(false)}>RESET
                    </button>
                </div>
                <div className="col">
                    <button type="button" className="form-btn submit-btn">SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

EditMovie.propTypes = {
    card: PropTypes.object
};
