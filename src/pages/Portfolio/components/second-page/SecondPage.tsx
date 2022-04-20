import React from 'react';
import './SecondPage.scss';
import TopSkillsCarousel from "../carousel/TopSkillsCarousel";

function SecondPage() {

    return (
        <section className='second-page__container' id='top-skills'>
            {/*<p>© Copyright 2022. All rights reversed.</p>*/}
            <TopSkillsCarousel />
        </section>
    );
}

export default SecondPage;
