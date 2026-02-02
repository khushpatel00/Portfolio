import { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { Link } from 'react-router-dom'
import switchPage from '../Logic/PageSwitch'

function Menu({noButton = false}) {
    const stairRef = useRef([]);
    const iconRef = useRef(null);
    const contentRef = useRef(null);
    const tl = gsap.timeline();
    




    // let isClosed = true;
    const isClosedRef = useRef(true);
    useEffect(() => {
        isClosedRef.current = switchPage(false, iconRef, stairRef, tl);

        // Listen for cli commands from the terminal (see computeResult)
        const onPortfolio = () => {
            handleClick();
        };
        window.addEventListener('cli:portfolio', onPortfolio);
        return () => window.removeEventListener('cli:portfolio', onPortfolio);

    }, []);
    const handleClick = () => {
        isClosedRef.current = switchPage(isClosedRef.current, iconRef, stairRef, tl);
    }




    return (
        <>
            <div className='fixed duration-300 z-20 flex flex-col items-center justify-center top-0 right-0 bg-black w-1/8 h-10 px-20 cursor-pointer' id="menuButton" ref={iconRef} onClick={handleClick} style={{display: noButton == true && 'none'}}>
                <div className='duration-300 w-8 h-px my-1 bg-white'></div>
                <div className='duration-300 w-8 h-px my-1 bg-white'></div>
            </div>
            <div className='absolute top-0 left-0 z-15'>
                <div className="stairsParent relative h-screen w-screen hidden bg-transparent">
                    {[1, 2, 3, 4, 5].map((val, index) => (
                        <div key={index} ref={(el) => (stairRef.current[index] = el)} className="stair w-1/5 h-full bg-black"></div>
                    ))}
                    <div className='flex flex-col z-20 content absolute top-1/2 left-1/2 -translate-1/2' ref={contentRef}>
                        <Link to='/Portfolio' className='text-4xl text-bold poppins'>Home</Link>
                        <Link to='/lab' className='text-4xl text-bold poppins'>Lab</Link>
                        <Link to='/' className='text-4xl text-bold poppins'>Terminal</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Menu