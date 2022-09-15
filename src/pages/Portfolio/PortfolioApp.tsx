import React, { useState }  from 'react';
import './PortfolioApp.scss';
import NavBar from "./components/navbar/NavBar";
import FirstPage from "./components/first-page/FirstPage";
import Footer from "./components/footer/Footer";
import SecondPage from "./components/second-page/SecondPage";
import ThirdPage from "./components/third-page/ThirdPage";
import PageNavigator from "./components/page-navigator/PageNavigator";

const PortfolioApp: React.FC = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    const toggleTheme: () => void = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <div data-theme={theme}>
            <NavBar toggleTheme={toggleTheme}/>
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <Footer />
            <PageNavigator />
        </div>
    );
}

export default PortfolioApp;
