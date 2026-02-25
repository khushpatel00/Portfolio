import Menu from '../Components/Menu'
import Landing from '../Components/Landing'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Achievements from '../Components/Achievements'
import Skills from '../Components/Skills'
import Education from '../Components/Education'
import Contact from '../Components/Contact'
import Playground from '../Components/Playground'
import LocomotiveScroll from 'locomotive-scroll';



function Home() {
    const scroll = new LocomotiveScroll();
    return (
        <>
            <Menu />
            <div data-scroll data-scroll-speed="-0.2" data-scroll-section>
                <Landing />
            </div>
            <div data-scroll data-scroll-speed="0.1" className='bg-white'>
                <About />
                <Skills />
            </div>
            <div data-scroll data-scroll-speed="-0.2" className='mt-28'>
                <Projects />
                <Playground />
                <Achievements />
                {/* <Education /> */}
            </div>
            <div data-scroll data-scroll-speed='0.2' className='my-20'>
                <Contact />
            </div>

            <div data-scroll data-scroll-speed='0.1' className={'mx-auto bg-amber-100 rounded-t-2xl w-4/5 py-5 px-1 mt-20 text-center text-2xl'} >This Portfolio is Under Development, Feel Free to raise an issue on <a href='https://github.com/khushpatel00/portfolio' target='_blank' style={{ textDecoration: 'underline wavy 1px #3f3f46' }}>Github</a>, if you find any bug, or feel something off</div>
        </>
    )
}

export default Home