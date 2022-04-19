import React, {useEffect, useState} from 'react';
import './PortfolioApp.scss';
import NavBar from "./components/navbar/NavBar";
import FirstPage from "./components/first-page/FirstPage";
import Footer from "./components/footer/Footer";
import SecondPage from "./components/second-page/SecondPage";
import ThirdPage from "./components/third-page/ThirdPage";
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';

function PortfolioApp() {
    const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true);

    // useEffect(() => {
    //     const onScroll = () => setIsButtonVisible(window.scrollY === 0)
    //     window.addEventListener("scroll", onScroll);
    //
    //     return () => window.removeEventListener("scroll", onScroll);
    // }, []);

    const goToSecondPage: () => void = () => {
        window.scrollBy(0, window.innerHeight);
    }

    return (
        <>
            <NavBar />
            {/* React Smooth */}
            {isButtonVisible && (
                <div className='first-page__button'>
                    <ArrowDropDownCircleRoundedIcon className='first-page__button--image' onClick={goToSecondPage}/>
                    {/*<span className='first-page__button--label'>Here I am!</span>*/}
                </div>
            )}
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <Footer />
        </>
    );
}

export default PortfolioApp;
