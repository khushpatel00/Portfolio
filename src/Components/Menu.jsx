import { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import switchPage from '../Logic/PageSwitch'
import FlowingMenu from './FlowingMenu'

function Menu({noButton = false}) {
    const stairRef = useRef([]);
    const stairRefWhite = useRef([]);
    const iconRef = useRef(null);
    const contentRef = useRef(null);
    // const tl = gsap.timeline();



    const demoItems = [
        {
            link: '/Portfolio',
            text: 'Home',
            image: 'https://picsum.photos/600/400?random=1'
        },
        {
            link: '/',
            text: 'Terminal',
            image: 'https://picsum.photos/600/400?random=2'
        },
        {
            link: '#',
            text: 'Lab (dropped)',
            image: 'https://picsum.photos/600/400?random=3'
        }
    ];



    // let isClosed = true;
    const isClosedRef = useRef(true);
    useEffect(() => {
        isClosedRef.current = switchPage(false, iconRef, stairRef, stairRefWhite);

        // Listen for cli commands from the terminal (see computeResult)
        const onPortfolio = () => {
            handleClick();
        };
        window.addEventListener('cli:portfolio', onPortfolio);
        return () => window.removeEventListener('cli:portfolio', onPortfolio);
    }, []);
    const handleClick = () => {
        isClosedRef.current = switchPage(isClosedRef.current, iconRef, stairRef, stairRefWhite);
    }




    return (
        <>
            <a href='#' className='fixed duration-300 z-20 flex flex-col items-center justify-center top-0 right-0 bg-black w-1/8 h-10 px-20 cursor-pointer' id="menuButton" ref={iconRef} onClick={handleClick} style={{display: noButton == true && 'none'}}> 
                <div className='duration-300 w-8 h-px my-1 bg-white'></div>
                <div className='duration-300 w-8 h-px my-1 bg-white'></div>
            </a>
            <div className='absolute top-0 left-0 z-15'>
                <div className="stairsParent relative h-screen w-screen flex bg-transparent">
                    {[1, 2, 3, 4, 5].map((val, index) => (
                        <div key={index} className='w-1/5 relative h-full'>
                            <div ref={(el) => (stairRefWhite.current[index] = el)} className="absolute top-0 left-0 stair w-full h-full bg-white"></div>
                            <div ref={(el) => (stairRef.current[index] = el)} className="absolute top-0 left-0 stair w-full h-full bg-black"></div>
                        </div>
                    ))}
                    <div className='flex flex-col z-20 content absolute top-1/2 w-full -translate-y-1/2' ref={contentRef}>
                        {/*<Link to='/Portfolio' className='text-4xl text-bold poppins'>Home</Link>*/}
                        {/*<p className='text-3xl text-bold text-zinc-600 cursor-not-allowed poppins'>Lab (dropped)</p>*/}
                        {/*<Link to='/' className='text-4xl text-bold poppins'>Terminal</Link>*/}
                        <div style={{ height: '300px', position: 'relative' }}>
                            <FlowingMenu items={demoItems}
                                         speed={15}
                                         textColor="#ffffff"
                                         bgColor="#000000"
                                         marqueeBgColor="#ffffff"
                                         marqueeTextColor="#060010"
                                         borderColor="#ffffff"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Menu