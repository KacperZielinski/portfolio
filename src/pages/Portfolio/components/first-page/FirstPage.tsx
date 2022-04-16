import React, {useEffect, useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './FirstPage.scss';

function FirstPage() {
    const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true);

    useEffect(() => {
        const onScroll = () => setIsButtonVisible(window.scrollY === 0)
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const goToSecondPage: () => void = () => {
        console.log(window.innerHeight);
        window.scrollBy(0, window.innerHeight);
    }

    return (
        <section className='first-page__container'>
            <h1 className='first-page__header--left'>Looking for a</h1>
            <img src='./svg/java.svg' alt='Java' />
            <h1 className='first-page__header--right'>developer?</h1>
            {/* React Smooth */}
            {isButtonVisible && (
                <div className='first-page__button'>
                    <KeyboardArrowDownIcon className='first-page__button--image' onClick={goToSecondPage}/>
                    {/*<span className='first-page__button--label'>Here I am!</span>*/}
                </div>
            )}
        </section>
    );
}

export default FirstPage;
