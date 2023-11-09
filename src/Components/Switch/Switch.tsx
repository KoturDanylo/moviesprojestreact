import React, {useState} from 'react';

import css from "../Header/Header.module.css"

const Switch = () => {
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => {
        setIsToggled(!isToggled);
        if (isToggled){
            document.body.style.color = '#336699'
            document.body.style.background = 'white'
        }else{
            document.body.style.background = '#336699'
            document.body.style.color = 'white'
        }
    }

    return (
        <label className={css.toggle_switch}>
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className={css.switch} />
        </label>
    );
}

export {Switch};