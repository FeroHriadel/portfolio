import React from 'react';
import { Routes, Route } from "react-router-dom";

import Background from './Background';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Technologies from '../pages/Technologies';
import Contact from '../pages/Contact';
import '../styles/index.scss';


const App = () => {
    return (
        <React.Fragment>
            <Background />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/mywork' element={<Projects />} />
                <Route path='/mytools' element={<Technologies />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </React.Fragment>
    );
};

export default App;

