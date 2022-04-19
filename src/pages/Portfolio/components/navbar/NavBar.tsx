import React from 'react';
import './NavBar.scss';
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import Brightness4Icon from "@mui/icons-material/Brightness4";

function NavBar() {
    // TODO dodaj jakas cssowa klase, albo usun!
    // const [isBackgroundInvisible, setIsBackgroundInvisible] = useState<boolean>(true);

    // useEffect(() => {
    //     const onScroll = () => setIsBackgroundInvisible(window.scrollY === 0)
    //     window.addEventListener("scroll", onScroll);
    //
    //     return () => window.removeEventListener("scroll", onScroll);
    // }, []);

    return (
        <nav className='navbar'>
            <div className="navbar__container">
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
                    <li><LanguageIcon fontSize="small" /></li>
                    <li><Brightness4Icon fontSize="small" /></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
