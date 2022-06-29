import React from "react";
import "./menu.css"
import {useDispatch} from "react-redux";
import {getMovie, getMovies} from "../../../../../../../store/slice";

export const Menu = (props) => {
    const dispatch = useDispatch();
    const handleEditClick = (id) => {
        dispatch(getMovie(id));
        props.showEditModal(true);
        props.closeMenu(false);
   }

    const handleDeleteClick = () => {
        props.showDeleteModal(true);
        props.closeMenu(false);
    }

    return (
        <React.Fragment>
            <div className="menu">
                <nav className="navbar bg-dark">
                    <li>
                        <span className="close" onClick={() => props.closeMenu(false)}>x</span>
                        <a className="nav-link" onClick={() => handleEditClick(props.id)}>Edit</a>
                    </li>
                    <li>
                        <a className="nav-link" onClick={() => handleDeleteClick()}>Delete</a>
                    </li>
                </nav>
            </div>
        </React.Fragment>
    )
}
