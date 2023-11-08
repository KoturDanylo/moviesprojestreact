import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <h3 className={css.MovieDB}>The MovieDB</h3>
            <div>
            <h3>Movies</h3>
            <h3>Genres</h3>
            <h3>Search</h3>
            </div>

            <div>Dark Theme</div>
        </div>
    );
};

export {Header};