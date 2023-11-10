import { MoviesList } from '../MoviesList';

import css from '../Header/Header.module.css';

const currentPage = 0;
const total_pages = 0;
const prevPage = v => v;
const nextPage = v => v;

const MoviesListCard = ({ movies }) => {
    return (
        <div>
            <div className={css.buttons}>
                <button disabled={currentPage <= 1} onClick={prevPage}>
                    Previous
                </button>
                <p>Now you are at the page {currentPage}</p>
                <button disabled={currentPage >= total_pages} onClick={nextPage}>
                    Next
                </button>
            </div>
            <div className={css.product_card}>
                {movies && movies.map(movie => <MoviesList key={movie.id} movie={movie} />)}
            </div>
            <div className={css.buttons}>
                <button disabled={currentPage <= 1} onClick={prevPage}>
                    Previous
                </button>
                <p>Now you are at the page {currentPage}</p>
                <button disabled={currentPage >= total_pages} onClick={nextPage}>
                    Next
                </button>
            </div>
        </div>
    );
};

export { MoviesListCard };
