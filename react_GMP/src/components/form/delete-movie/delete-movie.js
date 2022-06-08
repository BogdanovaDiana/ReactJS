import React from "react";
import "./delete-movie.css";

class DeleteMovie extends React.Component {
    render() {
        return (
           <div className="form-wrapper">
               <span className="close" onClick= {() => this.props.closeModal(false)}>x</span>
               <div className="label">DELETE MOVIE</div>
               <p className="confirm">Are you sure you want to delete this movie?</p>
               <button type="button" className="form-btn submit-btn">CONFIRM</button>
           </div>
        )
    }
}

export default DeleteMovie;