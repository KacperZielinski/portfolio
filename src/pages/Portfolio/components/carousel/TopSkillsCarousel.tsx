import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
            <h2>Top skills</h2>
            <Slider {...settings}>
                <div>
                    <img src='./svg/java.svg' width='240px' height='240px' alt='Java' />
                </div>
                <div>
                    <img src='./svg/react.svg' width='240px' height='240px' alt='React' />
                </div>
                <div>
                    <img src='./svg/spring.svg' width='240px' height='240px' alt='Spring' />
                </div>
            </Slider>
        </div>
    );
}

export default TopSkillsCarousel;
