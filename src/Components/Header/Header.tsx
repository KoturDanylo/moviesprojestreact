import css from './Header.module.css';
import { GenreBadge } from '../GenreBadge/GenreBadge';
import { NavLink } from 'react-router-dom';
import { Switch } from '../Switch';
import { UserInfo } from '../UserInfo';

const reset = () => {};

const Header = () => {
    return (
        <div className={css.header}>
            <h3 className={css.MovieDB}>The MovieDB</h3>

            <NavLink to={'/movies'} onClick={() => reset()}>
                Films store
            </NavLink>
            <NavLink to={'/genres'} onClick={() => reset()}>
                Genres
            </NavLink>
            <NavLink to={'/genres'} onClick={() => reset()}>
                Search
            </NavLink>

            <Switch />
            <UserInfo />
        </div>
    );
};

export { Header };
