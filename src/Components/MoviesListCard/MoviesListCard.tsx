import {MoviesList} from "../MoviesList";

const MoviesListCard = () => {
    return (
        <div>
            <div className={css.buttons}>
                <button disabled={currentPage <= 1} onClick={prevPage}>Previous</button>
                <p>Now you are at the page {currentPage}</p>
                <button disabled={currentPage >= total_pages} onClick={nextPage}>Next</button>
            </div>
            <div className={css.product_card}>{movies && movies.map(movie => <MoviesList key={movie.id} movie={movie}/>)}</div>
            <div className={css.buttons}>
                <button disabled={currentPage <= 1} onClick={prevPage}>Previous</button>
                <p>Now you are at the page {currentPage}</p>
                <button disabled={currentPage >= total_pages} onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export {MoviesListCard};
