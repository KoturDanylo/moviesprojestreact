import { StarsRating } from '../Stars';
import css from '../Header/Header.module.css';
const basePosterUrl = `https://image.tmdb.org/t/p/original`;

const toMovieInfo = v => v;
const MoviesList = ({ movie: { title, vote_average, release_date, poster_path } }) => {
    return (
        <div className={css.item} onClick={toMovieInfo}>
            <img src={`${basePosterUrl}/${poster_path}`} alt={title} />
            <h3>{title}</h3>
            <StarsRating vote_average={vote_average} />
            <p>{release_date}</p>
        </div>
    );
};

export { MoviesList };
