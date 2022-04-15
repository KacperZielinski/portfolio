import React from 'react';
import './PortfolioApp.scss';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import HikingIcon from '@mui/icons-material/Hiking';
import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

function PortfolioApp() {
    return (
        <>
            <nav className='navbar'>
                <ul className='navbar__left'>
                    <li><InsertLinkIcon /></li>
                </ul>
                <ul className='navbar__right'>
                    <li><HikingIcon fontSize="small" aria-label='Contact'/></li>
                    <li><LinkedInIcon fontSize="small" /></li>
                    <li><GitHubIcon fontSize="small" /></li>
                    <li><LanguageIcon fontSize="small" /></li>
                    <li><LanguageIcon fontSize="small" /></li>
                    <li><Brightness4Icon fontSize="small" /></li>
                </ul>
            </nav>
            <main>
                <article>
                    <h1>Hi, I'm Kacper teskts z lewewj</h1>
                    <p>A tu po prawej photo</p>
                    <section>
                        <h3>Top skills</h3>
                        <p>Java</p>
                        <p>Spring</p>
                        <p>React</p>
                    </section>
                    <section>
                        <h3>Currently learning</h3>
                        <p>Cloud</p>
                        <p>DDD</p>
                        <p>React</p>
                    </section>
                </article>
            </main>

            <footer>
                <p>© Copyright 2022. All rights reversed.</p>
            </footer>
        </>
    );
}

export default PortfolioApp;
