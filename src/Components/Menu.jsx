import { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import {Link} from 'react-router-dom'

function Menu() {
    // useGSAP(() => {
    //     const tl = gsap.timeline();
    //     const stairs = document.querySelectorAll('.stair');
    //     tl.set('.stairsParent',{ display: 'flex' })
    //     tl.from(stairs, {
    //         y: '-100%',
    //         stagger: 0.1,
    //         duration: 1,
    //         ease: 'power2.out'
    //     })
    //     tl.to(stairs, {
    //         y: '100%',
    //         stagger: 0.1,
    //         duration: 1,
    //         ease: 'power3.in',
    //     })
    //     tl.set('.stairsParent',{ display: 'none' })

    //     openMenu = () => {
    //         tl.set('.stairsParent',{ display: 'flex' })
    //         tl.from(stairs, {
    //         y: '-100%',
    //         stagger: 0.1,
    //         duration: 1,
    //         ease: 'power2.out'
    //     })}

    // });

    const stairRef = useRef([]);
    const iconRef = useRef(null);
    const tl = gsap.timeline();
    


    let isClosed = true;
    const handleClick = () => {
        // console.log('clicked', stairRef.current);
        if(isClosed){
            tl.set('.stairsParent',{ display: 'flex' })
            tl.from(stairRef.current, {
                y: '-100%',
                stagger: 0.1,
                duration: 1,
                ease: 'power2.out'
            })
            // iconRef.current.src='close.svg';
            iconRef.current.children[0].className = 'duration-300 m-0 p-0 translate-y-1/2 w-8 h-px rotate-45 bg-white'
            iconRef.current.children[1].className = 'duration-300 m-0 p-0 -translate-y-1/2 w-8 h-px -rotate-45 bg-white'
            gsap.fromTo('.content', {
                y: '-20',
                delay: 0.5,
                opacity: 0
            }, {
                y: 0,
                delay: 0.5,
                opacity: 1
            })
            isClosed = false;
        } else{
            tl.set('.stairsParent',{ display: 'flex' })
            tl.to(stairRef.current, {
                y: '100%',
                stagger: 0.1,
                duration: 1,
                ease: 'power2.out'
            })
            // iconRef.current.src='close.svg';
            iconRef.current.children[0].className = 'duration-300 w-8 h-px my-1 bg-white'
            iconRef.current.children[1].className = 'duration-300 w-8 h-px my-1 bg-white'
            tl.to(stairRef.current, {
                y: '0',
                duration: 0,
            })
            isClosed = true
            tl.set('.stairsParent', {display: 'none'});
            gsap.to('.content', {
                y: 20,
                opacity: 0,
            })
            
        }
    };
    useEffect(()=>{
        // if(window.location.href.split('/').pop() == 'lab'){
            isClosed = false;
            handleClick();
        // }
    })
    return (
        <>
            <div className='fixed duration-300 z-20 flex flex-col items-center justify-center top-0 right-0 bg-black w-1/8 h-10 px-20 cursor-pointer' id="menuButton" ref={iconRef} onClick={handleClick}>                
                    <div className='duration-300 w-8 h-px my-1 bg-white'></div>
                    <div className='duration-300 w-8 h-px my-1 bg-white'></div>
            </div>
            <div className='absolute top-0 left-0 z-15'>
                <div className="stairsParent relative h-screen w-screen hidden bg-transparent">
                    {[1, 2, 3, 4, 5].map((val, index) => (
                        <div key={index} ref={(el) => (stairRef.current[index] = el)} className="stair w-1/5 h-full bg-black"></div>
                    ))}
                    <div className='flex flex-col z-20 content absolute top-1/2 left-1/2 -translate-1/2'>
                        <Link to='/Portfolio' className='text-4xl text-bold poppins'>Home</Link>
                        <Link to='/lab' className='text-4xl text-bold poppins'>Lab</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Menu