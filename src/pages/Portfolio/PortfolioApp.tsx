import React  from 'react';
import './PortfolioApp.scss';
import NavBar from "./components/navbar/NavBar";
import FirstPage from "./components/first-page/FirstPage";
import Footer from "./components/footer/Footer";
import SecondPage from "./components/second-page/SecondPage";
import ThirdPage from "./components/third-page/ThirdPage";
import PageNavigator from "./components/page-navigator/PageNavigator";

function PortfolioApp() {

    return (
        <>
            <PageNavigator />
            <NavBar />
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <Footer />
        </>
    );
}

export default PortfolioApp;
