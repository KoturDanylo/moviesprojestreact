import React from 'react';

import { GenreBadge } from '../../Components/GenreBadge/';
import { MoviesListCard } from '../../Components/MoviesListCard';

const movies = [];

const MoviesListPage = () => {
    return (
        <div>
            <GenreBadge />
            <MoviesListCard movies={movies} />
        </div>
    );
};

export { MoviesListPage };
