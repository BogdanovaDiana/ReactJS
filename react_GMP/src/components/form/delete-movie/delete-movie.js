import React from "react";
import "./delete-movie.css";

class DeleteMovie extends React.Component {
    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'scroll';
    }

    render() {
        return (
            <div className="form-wrapper">
                <span className="close" onClick={() => this.props.closeModal(false)}>x</span>
                <div className="label">DELETE MOVIE</div>
                <p className="confirm">Are you sure you want to delete this movie?</p>
                    <div className="row form-row">
                        <div className="col-8">
                            <button type="button" className="form-btn no-btn"
                                    onClick={() => this.props.closeModal(false)}>NO
                            </button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="form-btn yes-btn">YES</button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default DeleteMovie;
