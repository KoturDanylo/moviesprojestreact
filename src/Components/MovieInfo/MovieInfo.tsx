import {StarsRating} from "../Stars";

const MovieInfo = () => {
    return (
        <div className={css.bigger_container}>
            <div className={css.product_card_details}>
                <img src={_url} onError={(e) => {
                    if (e.target.src !== {_url}) {
                        e.target.onerror = null;
                        e.target.src = ImageNotFound;
                    }
                }} alt={title}/>

                <div>
                    <h2>{title}</h2>
                    <div><h4>Overview:</h4><p>{overview}</p></div>
                    <div>Genres: <span className={css.text}>{genresOfOneMovie}</span></div>
                    {clearCountry && <p> Сountry : <span className={css.text}>{clearCountry}</span> </p>}
                    <p>Length <span className={css.text}>{runtime} min</span></p>
                    <p>Released on <span className={css.text}> {release_date} </span></p>
                    {budget !==0 && <p>Budget : <span className={css.text}> {budget}</span></p>}
                    <p>original_language: <span  className={css.text}>{original_language} </span></p>

                </div>

            </div>
            <div className={css.image}><StarsRating vote_average={vote_average}/> <a href={imdbURL}><img src={imdbImage} alt="imdb logo"/></a></div>


        </div>
    );
};

export {MovieInfo};