import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {addMovie, editMovie, saveCurrentMovieData} from "../../../store/slice";
import "./add-edit-movie.css"

export const AddEditMovie = (props) => {
    const formData = useSelector(state => state.movie);
    const movie = props.isEdit ? formData : {};
    const [title, setTitle] = useState(movie.title ?? '');
    const [date, setDate] = useState(movie.release_date ?? '');
    const [tagline, setTagline] = useState(movie.tagline ?? '');
    const [rating, setRating] = useState(movie.vote_average ?? 0);
    const [genres, setGenres] = useState(movie.genres ?? '');
    const [runtime, setRuntime] = useState(movie.runtime ?? 0);
    const [overview, setOverview] = useState(movie.overview ?? '');

    const formik = useFormik({
        initialValues: {
            title: title,
            vote_average: rating,
            overview: overview,
            runtime: runtime,
            date: date,
            poster_path: tagline,
        },
        isSubmitting: false,
        enableReinitialize: true,
        onSubmit: (values, {setSubmitting}) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        },
        validate: values => {
            const errors = {};
            if (!values.title) {
                errors.title = 'The field is required';
            }
            if (
                !/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12]\d|3[01])$/i.test(date)
            ) {
                errors.date = 'Invalid date format';
            }
            if (isNaN(values.vote_average)) {
                errors.vote_average = 'A number is expected here';
            }
            if (!values.poster_path) {
                errors.poster_path = 'The field is required';
            }
            if (!formik.values.overview) {
                errors.overview = 'The field is required';
            }
            if (!values.genres) {
                errors.genres = 'The field is required';
            }
            if (!values.runtime) {
                errors.runtime = 'The field is required';
            } else if (!Number.isInteger(parseInt(values.runtime))) {
                errors.runtime = 'Runtime must be an integer';
            }
            if (!Number.isInteger(parseInt(values.vote_average))) {
                errors.vote_average = 'Vote average must be an integer';
            }
            return errors;
        }
    });

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
        setTitle(movie.title ?? '');
        setDate(movie.release_date ?? '');
        setTagline(movie.tagline ?? '');
        setRating(movie.vote_average ?? 0);
        setGenres(genre ?? '');
        setRuntime(movie.runtime ?? 0);
        setOverview(movie.overview ?? '');
    }, [formData])

    const dispatch = useDispatch();
    const handleOnSubmit = () => {
        if (movie.id) {
            dispatch(editMovie(
                {
                    id: movie.id,
                    title: title,
                    release_date: date,
                    tagline: tagline,
                    vote_average: rating,
                    genres: [genres],
                    runtime: parseInt(runtime),
                    overview: overview,
                    poster_path: tagline
                }
            ));
        } else {
            dispatch(addMovie(
                {
                    title: title,
                    release_date: date,
                    tagline: tagline,
                    vote_average: rating,
                    genres: [genres],
                    runtime: parseInt(runtime),
                    overview: overview,
                    poster_path: tagline
                }
            ));
        }
        dispatch(saveCurrentMovieData(''))
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={formik.handleSubmit}>
                <span className="close" onClick={() => props.closeModal(false)}>x</span>
                <div className="label">EDIT MOVIE</div>
                <div className="row form-row">
                    <div className="col">
                        <label htmlFor="title" className="col-sm-4 col-form-label">TITLE</label>
                        <input name="title" type="text" id="title" className="form-control" placeholder="Title"
                               onChange={(e) => setTitle(e.target.value)} onBlur={formik.handleBlur}
                               value={formik.values.title}/>
                        <p className="error">
                            {formik.errors.title && formik.touched.title && formik.errors.title}
                        </p>
                    </div>
                    <div className="col">
                        <label htmlFor="date" className="col-sm-6 col-form-label">RELEASE DATE</label>
                        <input id="date" className="form-control form-input" type="date" placeholder="Select date"
                               value={formik.values.date} onChange={(e) => setDate(e.target.value)}/>
                        <p className="error">
                            {formik.errors.date && formik.touched.date && formik.errors.date}
                        </p>
                    </div>
                </div>
                <div className="row form-row">
                    <div className="col">
                        <label htmlFor="poster_path" className="col-sm-4 col-form-label">TAGLINE</label>
                        <input type="text" id="poster_path" className="form-control" placeholder="https://"
                               value={formik.values.poster_path}
                               onChange={(e) => setTagline(e.target.value)}/>
                        <p className="error">
                            {formik.errors.poster_path && formik.touched.poster_path && formik.errors.poster_path}
                        </p>
                    </div>
                    <div className="col">
                        <label htmlFor="vote_average" className="col-sm-6 col-form-label">RATING</label>
                        <input id="vote_average" className="form-control" type="text" placeholder="7.8"
                               value={formik.values.vote_average}
                               onChange={(e) => setRating(e.target.value)}/>
                        <p className="error">
                            {formik.errors.vote_average && formik.touched.vote_average && formik.errors.vote_average}
                        </p>
                    </div>
                </div>
                <div className="row form-row">
                    <div className="col">
                        <label htmlFor="genres" className="col-sm-4 col-form-label">GENRE</label>
                        <select className="form-control form-input" id="genres" placeholder="Select genre"
                                value={formik.values.genres} onChange={(e) => selectGenre(e)}>
                            {itemsList}
                        </select>
                        <p className="error">
                            {formik.errors.genres && formik.touched.genres && formik.errors.genres}
                        </p>
                    </div>
                    <div className="col">
                        <label htmlFor="runtime" className="col-sm-6 col-form-label">RUNTIME</label>
                        <input id="runtime" className="form-control" type="text" placeholder="minutes"
                               value={formik.values.runtime}
                               onChange={(e) => setRuntime(e.target.value)}/>
                        <p className="error">
                            {formik.errors.runtime && formik.touched.runtime && formik.errors.runtime}
                        </p>
                    </div>
                </div>
                <div className="row form-row">
                    <label htmlFor="overview" className="col-sm-4 col-form-label">OVERVIEW</label>
                    <textarea id="overview" rows="3" onChange={(e) => setOverview(e.target.value)}>
                    {formik.values.overview}
                </textarea>
                    <p className="error">
                        {formik.errors.overview && formik.touched.overview && formik.errors.overview}
                    </p>
                </div>
                <div className="row form-row">
                    <div className="col">
                        <button type="button" className="form-btn reset-btn"
                                onClick={() => props.closeModal(false)}>RESET
                        </button>
                    </div>
                    <div className="col">
                        <button type="submit" className="form-btn submit-btn" onClick={() => handleOnSubmit()}
                                disabled={formik.isSubmitting}>SUBMIT
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

AddEditMovie.propTypes = {
    card: PropTypes.object
};
