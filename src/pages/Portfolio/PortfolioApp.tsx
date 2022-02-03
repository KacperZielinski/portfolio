import React from 'react';
import './PortfolioApp.scss';

function PortfolioApp() {
    return (
        <>
            <nav>
                <ul>
                    <li>Logo</li>
                </ul>
                <ul>
                    <li>Contact</li>
                    <li>Linkedin</li>
                    <li>Github</li>
                    <li>Button pl</li>
                    <li>Button en</li>
                    <li>dark/light switch</li>
                </ul>
            </nav>
            <main>
                <article>
                    <h1>Hi, I'm Kacper</h1>
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
