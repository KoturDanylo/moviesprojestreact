import {axiosService} from "./axiosService";
import {urls} from "../Constants";

const movieService = {
    getAllMovies:(page=1, with_genres)=>axiosService.get(urls.movie, {params: {page, with_genres}}),
    getGenres: () => axiosService.get(urls.genres),
    details: (id) => axiosService.get(`${urls.details}/${id}`),
}

export {
    movieService
}