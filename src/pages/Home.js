import React, { useEffect, useState, useRef } from 'react';
import TextWrapperLines from '../components/TextWrapperLines';
import { Link } from 'react-router-dom';



const Home = () => {
    //WAKE UP SLEEPING HEROKU SERVERS
    const isMounted = useRef(true);

    useEffect(() => {
        if (isMounted) {
            console.log('WAKING SERVERS UP...');
            fetch('https://murmuring-taiga-44093.herokuapp.com');
            fetch('https://needfulthings.herokuapp.com/');
            fetch('https://offthemill.herokuapp.com/');
            fetch('https://seethistopspots.herokuapp.com/');
            fetch('https://spotsharesk.herokuapp.com/');
        }

        return () => isMounted.current = false;
    }, [isMounted]);



    //NAV
    const [showNav, setShowNav] = useState(false);



    //PAGE ELEMENTS
    const marker = useRef(); //the blicking thing after text
    const textWrapper = useRef();



    //GREETING TEXT
    const greetingText = `Thank you for taking time to look at my site... What can I show you?`;
    const greetingLength = greetingText.length - 1;
    const [greetingCount, setGreetingCount] = useState(0);

    useEffect(() => {
        if (greetingCount === 0) { //this gives marker time to blick a coupleatimes
            setTimeout(() => {
                if (greetingCount >= greetingLength) return;
                setGreetingCount(greetingCount + 1);
            }, 800);
        } else { //this is after marker blicked and app can continue normally
            setTimeout(() => {
                if (greetingCount > greetingLength) {
                    marker.current.style.borderRight = `0`;
                    setTimeout(() => {setShowNav(true);}, 500);
                    return;
                };
                setGreetingCount(greetingCount + 1);
            }, 50);
        }
    }, [greetingLength, greetingCount]);



    //RENDER
    return (
        <div className='home'>
            <section className='text-wrapper' ref={textWrapper}>
                <TextWrapperLines />

                <div className='flash-wrapper'>
                    <div className='flash'></div>
                </div>

                <p>
                    {greetingText.substring(0, greetingCount)} 
                    <span ref={marker} className='marker'>{' '}</span>
                </p>
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

export default Home;
