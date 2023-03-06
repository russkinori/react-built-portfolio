import React from 'react';
import selfie from './Images/selfie.png';
import "./styles/Home.css";

function Home() {
    return (
        <div className='row'>
            <div className='home col-12'>
                <p className='works col-6'>Design || Build || Develop</p>
                <p className='statement col-6'>A Frontend web Developer helping people turn their ideas into amazing webpages.</p>
            </div>
            <div className='selfie'>
                <section><h1>Hi, I'm Russel Richard.</h1></section>
                <section><img src={selfie} alt="My selfie" /></section>
            </div>
            <div className='row'>

            </div>
        </div>
    );
}

export default Home;
