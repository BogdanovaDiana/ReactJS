import {Card} from "./elements/card/card";
import {AddEditMovie} from "../../form/add-edit-movie/add-edit-movie";
import React, {useEffect} from "react";
import {useState} from "react";
import DeleteMovie from "../../form/delete-movie/delete-movie";
import {filter, getMovie, getMovies, searchMovies, showDetails, sortBy} from "../../../store/slice";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

export const CardsList = (props) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const dispatch = useDispatch();
    const cards = useSelector(state => state.list);
    const sort = useSelector(state => state.sortBy);
    const genre = useSelector(state => state.genre);
    const id = useSelector(state => state.currentMovieId);
    const searchString = useSelector(state => state.searchString);
    const searchQuery = useParams();
    const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

    useEffect(() => {
        dispatch(getMovies());
    }, [sort, genre, id, searchString]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const genreParam = params.get('genre');
        const genre = genreParam && genres.includes(genreParam) ? genreParam : 'ALL';
        const sort = params.get('genre') ?? '';
        const movieId = params.get('movie');
        dispatch(searchMovies(searchQuery.searchQuery));
        dispatch(filter(genre));
        dispatch(sortBy(sort));
        if(movieId) {
            dispatch(showDetails());
            dispatch(getMovie(movieId))
        }
    }, []);

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
