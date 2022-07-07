import {Card} from "./elements/card/card";
import {AddEditMovie} from "../../form/add-edit-movie/add-edit-movie";
import React, {useEffect} from "react";
import {useState} from "react";
import DeleteMovie from "../../form/delete-movie/delete-movie";
import {getMovies} from "../../../store/slice";
import {useDispatch, useSelector} from "react-redux";

export const CardsList = (props) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const dispatch = useDispatch();
    const cards = useSelector(state => state.list);
    const sortBy = useSelector(state => state.sortBy);
    const genre = useSelector(state => state.genre);
    const id = useSelector(state => state.currentMovieId);

    useEffect(() => {
        dispatch(getMovies());
    }, [sortBy, genre, id]);

    let cardsList = cards.map((card) =>
        <Card
            key={card.id}
            card={card}
            showEditModal={setShowEditModal}
            showDeleteModal={setShowDeleteModal}
            setShowDetails={props.setShowDetails}
            setCardId={props.setCardId}
        />
    );
    
    return (
        <div className="main-wrapper">
            {showEditModal && <AddEditMovie closeModal={setShowEditModal} isEdit={true}/>}
            {showDeleteModal && <DeleteMovie closeModal={setShowDeleteModal}/>}
            <div className="row">
                {cardsList}
            </div>
        </div>
    )
}
