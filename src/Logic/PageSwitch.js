import { gsap } from 'gsap';
function switchPage(isClosed, iconRef, stairRef, stairRefWhite) {
    // console.log('clicked', stairRef.current); 
    // console.log('is closed: ', isClosed)
    const tl = gsap.timeline();
    let menuIsClosed = isClosed;
    if (isClosed) { // opening menu
        console.log(tl)
        tl.set('.stairsParent', { display: 'flex' })
        
        tl.fromTo(stairRef.current, {
            y: '-100%',
        }, {
            stagger: 0.1,
            duration: 1,
            // delay: 0.3,
            ease: 'power2.inOut',
            y: 0
        }, 'sync')

        tl.fromTo('.content', {
            y: '-20',
            opacity: 0
        }, {
            y: 0,
            delay: 0.5, 
            opacity: 1
        }, 'sync')
        tl.fromTo(stairRefWhite.current, {
            y: '-100%',
        }, {
            y: 0,
            stagger: 0.1,
            duration: 1,
            ease: 'power2.out'
        },'sync')
        // iconRef.current.src='close.svg';
        iconRef.current.children[0].className = 'duration-300 m-0 p-0 translate-y-1/2 w-8 h-px rotate-45 bg-white'
        iconRef.current.children[1].className = 'duration-300 m-0 p-0 -translate-y-1/2 w-8 h-px -rotate-45 bg-white'
        // tl.clear()
        menuIsClosed = false;
        console.log('timeline ended')
    } else { // closing menu
        tl.set('.stairsParent', { display: 'flex' })
        // document.querySelector("body").style.overflow = 'hidden'
        tl.set('body', {overflow: 'hidden'}) // stop scroll
        tl.to(stairRef.current, {
            y: '100%',
            stagger: 0.1,
            duration: 1,
            // opacity: 0.5,
            ease: 'power2.out'
        }, 'run-together')
        tl.to(stairRefWhite.current, {
            y: '100%',
            stagger: 0.12,
            duration: 1,
            delay: 0.15,
            ease: 'power2.out'
        }, 'run-together')
        tl.to('.content', {
            y: 20,
            opacity: 0,
            delay: 0.35,
            duration: 0.1,
        }, 'run-together')
        // iconRef.current.src='close.svg';
        iconRef.current.children[0].className = 'duration-300 w-8 h-px my-1 bg-white'
        iconRef.current.children[1].className = 'duration-300 w-8 h-px my-1 bg-white'
        tl.set('.stairsParent', { display: 'none'});
        tl.to(stairRef.current, {
            y: '0',
            duration: 0,
            // opacity: 1,
        })
        tl.set('body', {overflow: 'auto'}) // start scroll
        tl.to(stairRefWhite.current, {
            y: '0',
            duration: 0,
        })
        tl.fromTo(iconRef.current, {
            opacity: 0
        },{
            opacity: 1
        })
        menuIsClosed = true
        // console.log('after animation isclosed: ', isClosed)
        // setTimeout(tl.clear(), 5000)
        console.log('timeline ended')
    } 
    return menuIsClosed;
};

export default switchPage;