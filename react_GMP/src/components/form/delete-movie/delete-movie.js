import React from "react";
import "./delete-movie.css";
import {deleteMovie, saveCurrentMovieData} from "../../../store/slice";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const DeleteMovie = (props) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'scroll';
    }, []);

    const dispatch = useDispatch();
    const handleOnDelete = () => {
        dispatch(deleteMovie());
        props.closeModal(false);
        dispatch((saveCurrentMovieData('')))
    }

    return (
        <div className="form-wrapper">
            <span className="close" onClick={() => props.closeModal(false)}>x</span>
            <div className="label">DELETE MOVIE</div>
            <p className="confirm">Are you sure you want to delete this movie?</p>
            <div className="row form-row">
                <div className="col-8">
                    <button type="button" className="form-btn no-btn"
                            onClick={() => this.props.closeModal(false)}>NO
                    </button>
                </div>
                <div className="col-4">
                    <button type="button" className="form-btn yes-btn" onClick={() => handleOnDelete()}>YES
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteMovie;
