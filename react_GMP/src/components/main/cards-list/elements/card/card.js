import "./card.css";
import PropTypes from 'prop-types';

export const Card = (props) => {
    return (
        <div className="col-sm card-wrapper">
            <img className="poster" alt="Item image" src={props.card.path} />
            <div className="row">
                <div className="col-10">
                    <div className="title">{props.card.title}</div>
                </div>
                <div className="col year-border">
                    <div className="year center">
                        <p>{props.card.releaseDate}</p>
                    </div>
                </div>
            </div>
            <div className="genre">
                {props.card.genre}
            </div>
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.object
};

Card.defaultProps = {
    card:  {
        id: 1,
        path: "https://tafttoday.com/wp-content/uploads/2019/05/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_-1-568x900.jpg",
        title: "Movie 1",
        genre: "Drama",
        releaseDate: 2019
    }
};
