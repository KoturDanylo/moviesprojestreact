import css from './Header.module.css'
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {NavLink} from "react-router-dom";
import {Switch} from "../Switch";
import {UserInfo} from "../UserInfo";

const Header = () => {
    return (
        <div className={css.Header}>
            <h3 className={css.MovieDB}>The MovieDB</h3>
            <div>
                <NavLink to={'/movies'} onClick={() => reset()}>Films store</NavLink>
                <GenreBadge/>
                <h3>Genres</h3>

            <h3>Search</h3>
            </div>

            <Switch/>
            <UserInfo/>
        </div>
    );
};

export {Header};