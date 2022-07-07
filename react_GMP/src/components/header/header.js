import {Logo} from "../logo/logo";
import {Search} from "./elements/search/search";
import '../../App.css'
import './header.css'
import React, {useState} from "react";
import {MovieDetails} from "../form/movie-details/movie-details";
import {AddEditMovie} from "../form/add-edit-movie/add-edit-movie";

export const Header = (props) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <React.Fragment>
            {props.showDetails && <MovieDetails showDetails={props.setShowDetails} cardId={props.cardId}/>}
            {!props.showDetails &&
                <div className="header-wrapper">
                    <div className="row">
                        <div className="col-9">
                            <div className="logo">
                                <Logo/>
                            </div>
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-secondary add-btn" onClick={() => setOpenModal(true)}>+ ADD MOVIE
                            </button>
                        </div>
                    </div>
                    {openModal && <AddEditMovie closeModal={setOpenModal} isEdit={false}/>}
                    <Search/>
                </div>
            }
        </React.Fragment>
    )
}
