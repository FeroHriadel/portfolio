import React, { useEffect, useState, useRef } from 'react';
import TextWrapperLines from '../components/TextWrapperLines';
import { Link } from 'react-router-dom';



const Technologies = () => {
    //NAV
    const [showNav, setShowNav] = useState(false);



    //PAGE ELEMENTS
    const marker = useRef(); //the blicking thing after text
    const marker2 = useRef();
    const marker3 = useRef();
    const textWrapper = useRef();



    //LINE 1 ANIMATION
    const line1 = `FRONT: JS, React, Webpack, CSS, SASS, Bootstrap`;
    const line1Length = line1.length - 1;
    const [line1Count, setLine1Count] = useState(0);
    const [line1Done, setLine1Done] = useState(false);

    useEffect(() => {
        if (line1Count === 0) { //this gives marker time to blick a coupleatimes
            setTimeout(() => {
                if (line1Count >= line1Length) return;
                setLine1Count(line1Count + 1);
            }, 800);
        } else { //this is after marker blicked and app can continue normally
            setTimeout(() => {
                if (line1Count > line1Length) {
                    marker.current.style.borderRight = `0`;
                    setLine1Done(true);
                    return;
                };
                setLine1Count(line1Count + 1);
            }, 50);
        }
    }, [line1Length, line1Count]);



    //LINE 2 ANIMATION
    const line2 = `BACK: Node, Express, MongoDB, Postgresql`;
    const line2Length = line2.length - 1;
    const [line2Count, setLine2Count] = useState(0);
    const [line2Done, setLine2Done] = useState(false);

    useEffect(() => {
        if (line1Done) {
            setTimeout(() => {
                if (line2Count > line2Length) {
                    marker2.current.style.borderRight = `0`;
                    setLine2Done(true);
                    return;
                };
                setLine2Count(line2Count + 1);
            }, 50);
        }
    }, [line1Done, line2Length, line2Count]);



    //LINE 3 ANIMATION
    const line3 = `AND: GraphQL, Apollo, Git, Figma`;
    const line3Length = line3.length - 1;
    const [line3Count, setLine3Count] = useState(0);
    const [line3Done, setLine3Done] = useState(false);

    useEffect(() => {
        if (line2Done) {
            setTimeout(() => {
                if (line3Count > line3Length) {
                    marker3.current.style.borderRight = `0`;
                    setLine3Done(true);
                    setShowNav(true);
                    return;
                };
                setLine3Count(line3Count + 1);
            }, 50);
        }
    }, [line2Done, line3Length, line3Count]);



    //GLITCH ANIMATION
    useEffect(() => {
        if (line3Done) {
            // let shadows1 = document.querySelectorAll('.shadow-1');
            // shadows1.forEach(s1 => s1.style.animation = `shadowAppear 3s forwards, noise-2 3s 6s linear infinite alternate-reverse`);
            
            // let shadows2 = document.querySelectorAll('.shadow-2');
            // shadows2.forEach(s2 => s2.style.animation = `shadowAppear 3s 3s forwards, noise-3 3s 6s linear infinite`);

            textWrapper.current.style.animation = `glitch-2 10s infinite`;
            let paragraphs = document.querySelectorAll('.paragraph');
            paragraphs.forEach(p => p.style.animation = `noise-1 10s linear infinite alternate-reverse`)
        }
    }, [line3Done])



    //RENDER
    return (
        <div className='technologies-page'>
            <section className='text-wrapper' ref={textWrapper}>
                <TextWrapperLines />

                <div className='flash-wrapper'>
                    <div className='flash'></div>
                </div>

                <p className='paragraph'>
                    {line1.substring(0, line1Count)} 
                    <span ref={marker} className='marker'>{' '}</span>
                    {/*<span className='shadow-1'>{line1}</span>
                    <span className='shadow-2'>{line1}</span>*/}
                </p>

                {
                    line1Done
                    &&
                    <React.Fragment>
                        <br />
                        <p className='paragraph'>
                            {line2.substring(0, line2Count)} 
                            <span ref={marker2} className='marker-2'>{' '}</span>
                            {/*<span className='shadow-1'>{line2}</span>
                            <span className='shadow-2'>{line2}</span>*/}
                        </p>
                    </React.Fragment>
                }

                {
                    line2Done
                    &&
                    <React.Fragment>
                        <br />
                        <p className='paragraph'>
                            {line3.substring(0, line3Count)} 
                            <span ref={marker3} className='marker-3'>{' '}</span>
                            {/*<span className='shadow-1'>{line3}</span>
                            <span className='shadow-2'>{line3}</span>*/}
                        </p>
                    </React.Fragment>
                }


            </section>

            {
                showNav
                &&
                <ul className='menu'>
                    <Link to='/mywork' style={{textDecoration: '0'}}><li>My Work</li></Link>
                    <Link to='/mytools' style={{textDecoration: '0'}}><li>My Tools</li></Link>
                    <li onClick={() => window.open('https://github.com/FeroHriadel')}>Github</li>
                    <Link to='/contact' style={{textDecoration: '0'}}><li>Contact</li></Link>
                </ul>
            }
        </div>
    )
};

export default Technologies;
