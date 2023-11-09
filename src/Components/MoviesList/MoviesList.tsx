import {StarsRating} from "../Stars";
import {ImageNotFound} from "../../Constants";

const MoviesList = () => {
    return (
        <div className={css.item} onClick={toMovieInfo}>
            <img src={_url} onError={(e) => {
                if (e.target.src !== {_url}) {
                    e.target.onerror = null;
                    e.target.src = ImageNotFound;
                }
            }} alt={title}/>
            <h3>{title}</h3>
            <StarsRating vote_average={vote_average}/>
            <p>{release_date}</p>

        </div>
    );
};

export {MoviesList};