import React from 'react';
import './FirstPage.scss';

function FirstPage() {

    return (
        <section className='first-page__container'>
            <h1 className='first-page__header--left'>Looking for a</h1>
            <img src='./svg/java.svg' alt='Java' />
            <h1 className='first-page__header--right'>developer?</h1>
        </section>
    );
}

export default FirstPage;
