import {Card} from "./elements/card/card";

export const CardsList = () => {
    const cards = [
        {
            id: 1,
            path: "https://tafttoday.com/wp-content/uploads/2019/05/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_-1-568x900.jpg",
            title: "Pulp Fiction",
            genre: "Action & Adventure",
            releaseDate: 2004
        },
        {
            id: 2,
            path: "https://tafttoday.com/wp-content/uploads/2019/05/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_-1-568x900.jpg",
            title: "Bohemian Rhapsody",
            genre: "Drama, Biography, Music",
            releaseDate: 2003
        },
        {
            id: 3,
            path: "https://tafttoday.com/wp-content/uploads/2019/05/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_-1-568x900.jpg",
            title: "Kill Bill: Vol 2",
            genre: "Oscar winning Movie",
            releaseDate: 1994
        },
        {
            id: 4,
            path: "https://tafttoday.com/wp-content/uploads/2019/05/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_-1-568x900.jpg",
            title: "Avengers: War of Inf",
            genre: "Action & Adventure",
            releaseDate: 2004
        },
        {
            id: 5,
            path: "https://tafttoday.com/wp-content/uploads/2019/05/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_-1-568x900.jpg",
            title: "Inception",
            genre: "Action & Adventure",
            releaseDate: 2003
        },
        {
            id: 6,
            path: "https://tafttoday.com/wp-content/uploads/2019/05/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_-1-568x900.jpg",
            title: "Reservoir dogs",
            genre: "Oscar winning Movie",
            releaseDate: 1994
        }
    ];

    let cardsList = cards.map((card) =>
        <Card
            key={card.id}
            card={card}
        />
    );

    return (
        <div className="main-wrapper">
            <div className="row">
                {cardsList}
            </div>
        </div>
    )
}
