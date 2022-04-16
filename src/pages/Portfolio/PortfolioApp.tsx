import React from 'react';
import './PortfolioApp.scss';
import NavBar from "./components/navbar/NavBar";
import FirstPage from "./components/first-page/FirstPage";
import Footer from "./components/footer/Footer";
import SecondPage from "./components/second-page/SecondPage";

// import Brightness7Icon from '@mui/icons-material/Brightness7';

function PortfolioApp() {
    return (
        <>
            <NavBar />
            <FirstPage />
            {/*<section className='top-skills-carousel'>*/}
            {/*    <TopSkillsCarousel />*/}
            {/*</section>*/}
            <SecondPage />
            <section>
                <h3>Currently learning</h3>
                <p>Cloud</p>
                <p>DDD</p>
                <p>React</p>
                <p>Cloud</p>
                <p>DDD</p>
                <p>React</p>
                <p>Cloud</p>
                <p>DDD</p>
                <p>React</p>
                <p>Cloud</p>
                <p>DDD</p>
                <p>React</p>
                <p>Cloud</p>
                <p>DDD</p>
                <p>React</p>
                <p>Cloud</p>
                <p>DDD</p>
                <p>React</p>
            </section>
            <p>Wyszukiwarka technologii</p>
            <p>Email me</p>
            <Footer />
        </>
    );
}

export default PortfolioApp;
