import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from "@material-ui/icons/Forum";
import logo from './tinder-logo.png';
import IconButton from "@material-ui/core/IconButton";

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" />
            </IconButton>
            <img
                className="header__logo"
                src={logo}
                alt=""
            />
            <IconButton>
                <ForumIcon className="header__icon" />
            </IconButton>

        </div>
    )
}

export default Header