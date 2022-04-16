import React from 'react';
import './NavBar.scss';
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import HikingIcon from "@mui/icons-material/Hiking";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import Brightness4Icon from "@mui/icons-material/Brightness4";

function NavBar() {

    return (
        <nav className='navbar'>
            <div className="navbar__container">
                <ul className='navbar__left'>
                    <li><InsertLinkIcon /></li>
                </ul>
                <ul className='navbar__right'>
                    <li><a href='https://www.linkedin.com/in/kacper-zielinski/' target='_blank' rel="noreferrer"><LinkedInIcon fontSize="small" /></a></li>
                    <li><GitHubIcon fontSize="small" /></li>
                    <li><LanguageIcon fontSize="small" /></li>
                    <li><Brightness4Icon fontSize="small" /></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
