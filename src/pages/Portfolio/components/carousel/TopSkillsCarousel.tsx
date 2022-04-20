import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './TopSkillsCarousel.scss'

function TopSkillsCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='top-skills-carousel__container'>
            {/*<h2>Top skills</h2>*/}
            <Slider {...settings}>
                <div>
                    <div className='top-skills-carousel__item'>
                        <img src='./svg/java.svg' width='100wv' height='240px' alt='Java'/>
                    </div>
                </div>
                <div>
                    <div className='top-skills-carousel__item'>
                        <img src='./svg/es6.svg' width='100wv' height='240px' alt='JavaScript'/>
                    </div>
                </div>
                <div>
                    <div className='top-skills-carousel__item'>
                        <img src='./svg/react.svg' width='100wv' height='240px' alt='React'/>
                    </div>
                </div>
                <div>
                    <div className='top-skills-carousel__item'>
                        <img src='./svg/spring.svg' width='100wv' height='240px' alt='Spring'/>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default TopSkillsCarousel;
