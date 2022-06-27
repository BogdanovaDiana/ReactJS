import "./card.css";
import PropTypes from 'prop-types';
import {MenuButton} from "./elements/menu-btn/menu-button";
import {getMovie} from "../../../../../store/slice";
import {useDispatch} from "react-redux";

export const Card = (props) => {
    const dispatch = useDispatch();

    const handleOnGetDetails = (id) => {
        dispatch(getMovie(id))
    }

    return (
        <div className="col-sm card-wrapper">
            <div className="container">
                <img className="poster" alt="Item image" src={props.card.poster_path} onClick={() => {
                    props.setShowDetails();
                    handleOnGetDetails(props.card.id);
                }}/>
                <MenuButton showEditModal={props.showEditModal} showDeleteModal={props.showDeleteModal} id={props.card.id}/>
            </div>
            <div className="row">
                <div className="col-8">
                    <div className="title">{props.card.title}</div>
                </div>
                <div className="col-4 year-border">
                    <div className="year center">
                        <p>{props.card.release_date}</p>
                    </div>
                </div>
            </div>
            <div className="genre">
                {props.card.genres.toString()}
            </div>
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.object
};

Card.defaultProps = {
    card: {
        id: 1,
        poster_path: "https://tafttoday.com/wp-content/uploads/2019/05/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_-1-568x900.jpg",
        title: "Movie 1",
        genres: ["Drama"],
        release_date: 2019,
    }
};
