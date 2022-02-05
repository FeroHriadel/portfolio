import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';




const Projects = () => {
    //TITLE ANIMATION
    const marker = useRef();
    const titleText = 'My Work';
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
        <div className='projects'>
            <Navbar />
        
            <h1 className='page-title'>{titleText.substring(0, titleCount)} <span className='marker' ref={marker}>{' '}</span> </h1>
            
            <main className='page-content'>
                <section className='project-item' onClick={() => window.open('https://www.offthemill.app')}>
                    <ul className='project-details'>
                        <li className='title'>
                            Off the Mill
                            <p className='hilite' style={{fontSize: `0.75rem`}}>
                                Please sign in as admin: email: emaletester0@gmail.com, password: 123456
                            </p>
                        </li>
                        <li className='description'>
                            <span className='hilite'>Description: </span> A reusable webshop template 
                        </li>
                        <li className='features'>
                            <span className='hilite'>Features: </span> New arrivals, product search, rating, categories and tags, online payment, PDF invoice, admin product-and-order management panel, JWT auth, Google signin
                        </li>
                        <li className='technologies'>
                            <span className='hilite'>Build with: </span> React, Node/Express, Postgresql, <span className='hilite'>using: </span> Sendgrid emails, Cloudinary media storage, Stripe, Bootstrap, React-pdf and Redux
                        </li>
                        <li className='button'>
                            <button>Go to site</button>
                        </li>
                    </ul>
                </section>

                <section className='project-item' onClick={() => window.open('https://www.salase.info')}>
                    <ul className='project-details'>
                        <li className='title'>
                            Salase
                            <p className='hilite' style={{fontSize: `0.75rem`}}>
                                Please sign in as admin: email: emaletester0@gmail.com, password: 123456
                            </p>
                        </li>
                        <li className='description'>
                            <span className='hilite'>Description: </span> A hiking app. Photos, maps, and tips about the best places to bivy 
                        </li>
                        <li className='features'>
                            <span className='hilite'>Features: </span> maps, file upload, JWT auth, Google signin, admin panel, infinite scroll, animations, emails, item search and filter
                        </li>
                        <li className='technologies'>
                            <span className='hilite'>Build with: </span> Next, Node/Express, MongoDB, <span className='hilite'>using: </span> Leaflet map, Sendgrid emails, Cloudinary media storage 
                        </li>
                        <li className='button'>
                            <button>Go to site</button>
                        </li>
                    </ul>
                </section>
            </main>



            <h2 className='page-title' style={{marginBottom: `4rem`, marginTop: `0rem`}}>Sandbox Projects</h2>
            
            <aside className='page-content'>
                <section className='project-item' onClick={() => window.open('https://www.spotshare.app')}>
                    <ul className='project-details'>
                        <li className='title'>
                            SpotShare
                            <p className='hilite' style={{fontSize: `0.75rem`}}>
                                Please sign in as admin: email: emaletester0@gmail.com, password: 123456
                            </p>
                        </li>
                        <li className='description'>
                            <span className='hilite'>Description: </span> A GraphQL and Apollo app 
                        </li>
                        <li className='features'>
                            <span className='hilite'>Features: </span> CSS animation-step, CSS shape-outside
                        </li>
                        <li className='technologies'>
                            <span className='hilite'>Build with: </span> React, Apollo, Node/Express/GraphQL 
                        </li>
                        <li className='button'>
                            <button>View Sandbox Project</button>
                        </li>
                    </ul>
                </section>

                <section className='project-item' onClick={() => window.open('https://www.seethis.website')}>
                    <ul className='project-details'>
                        <li className='title'>
                            SeeThis
                            <p className='hilite' style={{fontSize: `0.75rem`}}>
                                Please sign in as admin: email: emaletester0@gmail.com, password: 123456
                            </p>
                        </li>
                        <li className='description'>
                            <span className='hilite'>Description: </span> An app with an integrated text editor
                        </li>
                        <li className='features'>
                            <span className='hilite'>Features: </span> React-quill, Dark & White Mode, SVGs
                        </li>
                        <li className='technologies'>
                            <span className='hilite'>Build with: </span> Next, Firebase auth, React Context
                        </li>
                        <li className='button'>
                            <button>View Sandbox Project</button>
                        </li>
                    </ul>
                </section>

                <section className='project-item' onClick={() => window.open('http://www.needfulthings.website')}>
                    <ul className='project-details'>
                        <li className='title'>
                            Needful Things
                            <p className='hilite' style={{fontSize: `0.75rem`}}>
                                Please sign in as admin: email: emaletester0@gmail.com, password: 123456
                            </p>
                        </li>
                        <li className='description'>
                            <span className='hilite'>Description: </span> A simple webstore with PayPal payments 
                        </li>
                        <li className='features'>
                            <span className='hilite'>Features: </span> PayPal, GoogleMaps
                        </li>
                        <li className='technologies'>
                            <span className='hilite'>Build with: </span> React, Node/Express 
                        </li>
                        <li className='button'>
                            <button>View Sandbox Project</button>
                        </li>
                    </ul>
                </section>
            </aside>
        </div>
    )
};

export default Projects;
