import React, {useEffect, useState} from 'react';
import './PageNavigator.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function PageNavigator() {
    const [currentPage, setCurrentPage] = useState<number>(0);

    const ids = [
        "landing-page",
        "top-skills",
        "currently-learning",
        "footer"
    ]

    useEffect(() => {
        const onScroll = () => setCurrentPage( window.scrollY * ids.length / document.documentElement.scrollHeight)
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [ids.length]);

    const goDown: () => void = () => {
        // window.scrollBy(0, window.innerHeight);
        const nextPage = currentPage + 1;
        document.getElementById(ids[nextPage])?.scrollIntoView({
            behavior: 'smooth'
        });
        setCurrentPage(nextPage)
    }

    const goUp: () => void = () => {
        const prevPage = currentPage - 1;
        document.getElementById(ids[prevPage])?.scrollIntoView({
            behavior: 'smooth'
        });
        setCurrentPage(prevPage)
    }

    return (
        <div className='page-navigator__button'>
            {currentPage !== 0 && (<KeyboardArrowUpOutlinedIcon className='page-navigator__button--up' onClick={goUp}/>)}
            {currentPage < ids.length - 1 && (<KeyboardArrowDownOutlinedIcon className='page-navigator__button--down' onClick={goDown}/>)}
            {/*<span className='page-navigator__button--label'>Here I am!</span>*/}
        </div>
    );

}

export default PageNavigator;
