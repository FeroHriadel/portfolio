import React, { useRef, useEffect } from 'react';



const Background = () => {
    //GRAB BG IMG
    const image = useRef();



    //CREATE CIRCLES
    function randomNumber(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const createCircle = () => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        const inner1 = document.createElement('div');
        inner1.classList.add('inner-circle-1');
        const inner2 = document.createElement('div');
        inner2.classList.add('inner-circle-2');
        const inner3 = document.createElement('div');
        inner3.classList.add('inner-circle-3');

        circle.appendChild(inner1);
        circle.appendChild(inner2);
        circle.appendChild(inner3);

        circle.style.top = (image.current.offsetHeight / 2) + randomNumber(-300, 300) + 'px';
        circle.style.left = (image.current.offsetWidth / 2) + randomNumber(-image.current.offsetWidth, image.current.offsetWidth) + 'px';

        image.current.appendChild(circle);
        setTimeout(() => {circle.remove()}, 2100);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            createCircle()
        }, 50);

        return () => clearInterval(interval);
    }, [])



    //RENDER
    return (
        <div className='background'>
            <div className='view'>
                <div className='image' ref={image}>
                    {/*
                        <div className='circle'>
                            <div className='inner-circle-1 />
                            <div className='inner-circle-2 />
                            <div className='inner-circle-3 />
                        </div>
                    */}
                </div>
            </div>

            <div className='fog' />
        </div>
    );
};

export default Background;



/*
import React, { useRef } from 'react';

const Background = () => {
    const view = useRef();

    function randomNumber(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    const createCircle = () => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        const inner1 = document.createElement('div');
        inner1.classList.add('inner-circle-1');
        const inner2 = document.createElement('div');
        inner2.classList.add('inner-circle-2');
        const inner3 = document.createElement('div');
        inner3.classList.add('inner-circle-3');

        circle.appendChild(inner1);
        circle.appendChild(inner2);
        circle.appendChild(inner3);

        circle.style.top = (view.current.offsetHeight / 2) + randomNumber(-300, 300) + 'px';
        circle.style.left = (view.current.offsetWidth / 2) + randomNumber(-view.current.offsetWidth/4, view.current.offsetWidth/4) + 'px';

        view.current.appendChild(circle);
        setTimeout(() => {circle.remove()}, 2100);
    }

    setInterval(() => {
        setTimeout(() => {
            createCircle();
        }, randomNumber(100, 5000))
    }, 2500);



    return (
                <div className='background'>
                    <div className='view' ref={view}>
                        
                    </div>
                </div>
            );
        };
        
        export default Background;        
*/
