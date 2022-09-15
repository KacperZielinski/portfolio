import React, {useEffect, useState} from 'react';
import './NavBar.scss';
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Brightness4Icon from "@mui/icons-material/Brightness4";

interface NavBarProps {
    toggleTheme: () => void;
}

const NavBar: React.FC<NavBarProps> = ({toggleTheme}) => {
    // TODO dodaj jakas cssowa klase, albo usun!
    const [hasDefaultBackground, setHasDefaultBackground] = useState<boolean>(true);

    useEffect(() => {
        const onScroll = () => setHasDefaultBackground(window.scrollY === 0)
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className='navbar'>
            <div className={`navbar__container ${hasDefaultBackground ? "" : "background-default"}`}>
                <ul className='navbar__left'>
                    <li><InsertLinkIcon /></li>
                </ul>
                <ul className='navbar__right'>
                    <li>
                        <a href='https://www.linkedin.com/in/kacper-zielinski/' target='_blank' rel="noreferrer">
                            <LinkedInIcon fontSize="small" />
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/KacperZielinski' target='_blank' rel="noreferrer">
                            <GitHubIcon fontSize="small" />
                        </a>
                    </li>
                    <li><Brightness4Icon fontSize="small" onClick={() => toggleTheme()} /></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
