import {Logo} from "../logo/logo";
import {Search} from "./elements/search/search";
import '../../App.css'
import './header.css'
import React, {useState} from "react";
import {AddMovie} from "../form/add-movie/add-movie";
import {MovieDetails} from "../form/movie-details/movie-details";

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
                    {openModal && <AddMovie closeModal={setOpenModal}/>}
                    <Search/>
                </div>
            }
        </React.Fragment>
    )
}
