import { useState } from 'react';
import { Hero } from './components/Hero';
import { Companies } from './components/Companies';
import { Guide } from './components/Guide';
import { Properties } from './components/Properties';
import { Footer } from './components/Footer';
import { GetStarted } from './components/GetStarted';

function App() {
    return (
        <>
            <Hero />

            <Properties />
            <GetStarted />
            <Footer />
        </>
    );
}

export default App;
