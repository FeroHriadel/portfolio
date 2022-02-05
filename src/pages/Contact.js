import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';




const Projects = () => {
    //TITLE ANIMATION
    const marker = useRef();
    const titleText = 'Please contact me here:';
    const titleLength = titleText.length - 1;
    const [titleCount, setTitleCount] = useState(0);

    useEffect(() => {
        if (titleCount === 0) {
            setTimeout(() => {
                setTitleCount(titleCount + 1);
            }, 800);
        } else {
            setTimeout(() => {
                if (titleCount > titleLength) {
                    marker.current.style.borderRight = `0`;
                    return;
                }

                setTitleCount(titleCount + 1);
            }, 50);
        }

    }, [titleLength, titleCount]);



 



    //RENDER
    return (
        <div className='projects'> {/*borrows styles from _Projects.scss */}
            <Navbar />
        
            <h1 className='page-title'>{titleText.substring(0, titleCount)} <span className='marker' ref={marker}>{' '}</span> </h1>
            
            <main className='page-content'>
                <section className='project-item'>
                    <ul className='project-details'>
                        <li className='title'>
                            Contact
                        </li>
                        <li className='description'>
                            <span className='hilite'>Phone: </span> +421 911 36 26 46
                        </li>
                        <li className='features' style={{wordBreak: `break-word`}}>
                            <span className='hilite'>Email: </span> ferdinand.hriadel@gmail.com
                        </li>
                    </ul>
                </section>

                <section className='project-item'>
                    <ul className='project-details'>
                        <li className='title'>
                            About Me
                        </li>
                        <li className='description'>
                            <span className='hilite'>What I do: </span> Frontend development. I am a huge SPA fan and I mainly use MERN Stack for my projects. I also like challenging myslef with new technologies.
                        </li>
                        <li className='features'>
                            <span className='hilite'>My tools: </span> Mostly MERN Stack. I have also built things with GraphQL, Apollo, Postgresql. My helpers are Git and Figma.
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    )
};

export default Projects;
