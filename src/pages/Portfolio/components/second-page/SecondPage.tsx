import React from 'react';
import './SecondPage.scss';

function SecondPage() {

    return (
        <section className='second-page__container' id='top-skills'>
            <div className='second-page__introduction'>
                <div className='second-page__photo'>zphoto</div>
                <div className='second-page__description'>
                    <ul>
                        <li>I'm Kacper. I can help your business grow!</li>
                        <li>I've got {new Date().getFullYear() - new Date("01-05-2018").getFullYear()}+ of commercial experience.</li>
                        <li>I've been working in logistics and banking industry.</li>
                    </ul>
                </div>
            </div>
            <div>Backend: Java, Spring, Spring Boot, Hibernate</div>
            <div>Frontend: JavaScript (ES6), React, Redux, Angular 2+</div>
            <div>DevOps: Linux, Cloud (AWS)</div>
            <div>Misc: Security, Scrum</div>
        </section>
    );
}

export default SecondPage;
