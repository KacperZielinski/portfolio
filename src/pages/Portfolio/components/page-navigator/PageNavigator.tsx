import React, {useEffect, useState} from 'react';
import './PageNavigator.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function getOffset(el: HTMLElement | null) {
    if (el === null) {
        return 0;
    }
    return el.getBoundingClientRect().top  + window.scrollY;
}

const ids = [
    "landing-page",
    "top-skills",
    "currently-learning",
    "footer"
]

interface PageOffset {
    id: string;
    offset: number;
}

function PageNavigator() {
    const [currentScrollY, setCurrentScrollY] = useState<number>(0);
    const [offsetArray, setOffsetArray] = useState<PageOffset[]>([]);

    useEffect(() => {
        const arr: PageOffset[] = [];
        ids.forEach(id => arr.push({
            id: id,
            offset: getOffset(document.getElementById(id))
        }))
        console.log(arr);
        setOffsetArray(arr)
    }, [])

    useEffect(() => {
        const onScroll = () => {
            setCurrentScrollY(window.scrollY);
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const goDown: () => void = () => {
        const nextPage = offsetArray.findIndex(pageOffset => pageOffset.offset > currentScrollY);
        document.getElementById(ids[nextPage])?.scrollIntoView({
            behavior: 'smooth'
        });
        setCurrentScrollY(window.scrollY);
    }

    const goUp: () => void = () => {
        const prevPage = offsetArray.slice().reverse().findIndex(pageOffset => pageOffset.offset < currentScrollY);
        document.getElementById(ids[ids.length - (1+prevPage)])?.scrollIntoView({
            behavior: 'smooth'
        });
        setCurrentScrollY(window.scrollY);
    }

    return (
        <div className='page-navigator__button'>
            {currentScrollY > 0 && (<KeyboardArrowUpOutlinedIcon className='page-navigator__button--up' onClick={goUp}/>)}
            {(offsetArray.length && currentScrollY <= offsetArray[(offsetArray.length)-1].offset)
                && (<KeyboardArrowDownOutlinedIcon className='page-navigator__button--down' onClick={goDown}/>)}
            {/*<span className='page-navigator__button--label'>Here I am!</span>*/}
        </div>
    );

}

export default PageNavigator;
