import React, { useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';

import { movieService } from '../../Services';
import css from '../../Components/Header/Header.module.css';
import { MoviesList } from '../../Components/MoviesList';
const MoviesListPage = () => {
    const [movies, setMovies] = React.useState<any>([]);
    const [total_pages, setTotalPages] = React.useState<number>(0);
    const [query, setQuery] = useSearchParams();
    const { genre } = useParams();

    const [currentPage, setCurrentPage] = React.useState<number>(Number(query.get('page') || 0));

    const nextPage = () => {
        const nextPage = +query.get('page') + 1;
        setQuery({ page: `${nextPage}` });
        setCurrentPage(nextPage);
    };
    const prevPage = () => {
        const prevPage = +query.get('page') - 1;
        setQuery({ page: `${prevPage}` });
        setCurrentPage(prevPage);
    };

    const fetchMovies = async () => {
        const movies = await movieService.getAllMovies(
            Number(query.get('page') || 1),
            genre || false
        );
        setMovies(movies.data.results);
        console.log('movies: ', movies);
        setTotalPages(movies.data?.total_pages);
    };
    useEffect(() => {
        fetchMovies();
    }, []);
    useEffect(() => {
        fetchMovies();
    }, [query]);
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
export { MoviesListPage };