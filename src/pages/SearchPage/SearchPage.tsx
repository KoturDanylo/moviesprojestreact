import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MoviesList } from '../../Components/MoviesList/MoviesList';
import css from '../../Components/Header/Header.module.css';
import { movieService } from '../../Services';

const SearchPage = () => {
    const [search, setSearch] = useState<string>('');
    const [movies, setMovies] = useState<any>([]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        const searchMovies = async () => {
            const res = await movieService.searchMovies(search);

            setMovies(res.data.results);
        };

        searchMovies();
    }, [search]);

    return (
        <div>
            <div>
                <input
                    className={css.search_input}
                    onChange={onChange}
                    type="text"
                    placeholder="Search"
                />
            </div>

            <div>
                <div className={css.product_card}>
                    {movies && movies.map(movie => <MoviesList key={movie.id} movie={movie} />)}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
