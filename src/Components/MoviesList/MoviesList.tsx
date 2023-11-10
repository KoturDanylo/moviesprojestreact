import { StarsRating } from '../Stars';
import css from '../Header/Header.module.css';

const toMovieInfo = v => v;
const MoviesList = ({ movie: { title, vote_average, release_date, _url } }) => {
    return (
        <div className={css.item} onClick={toMovieInfo}>
            <img src={_url} alt={title} />
            <h3>{title}</h3>
            <StarsRating vote_average={vote_average} />
            <p>{release_date}</p>
        </div>
    );
};

export { MoviesList };
