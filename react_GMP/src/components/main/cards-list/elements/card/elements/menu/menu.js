import React from "react";
import "./menu.css"

export const Menu = (props) => {
    const handleEditClick = () => {
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
                        <a className="nav-link" onClick={() => handleEditClick()}>Edit</a>
                    </li>
                    <li>
                        <a className="nav-link" onClick={() => handleDeleteClick()}>Delete</a>
                    </li>
                </nav>
            </div>
        </React.Fragment>
    )
}