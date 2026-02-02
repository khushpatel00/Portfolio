import { gsap } from 'gsap';
function switchPage(isClosed, iconRef, stairRef, tl, showData = true, contentRef = null) {
    // console.log('clicked', stairRef.current); 
    // console.log('is closed: ', isClosed)
    if (showData == false) {
        // console.log('hiding links')
        gsap.set(contentRef.current, { display: 'none' })
    } else {
        gsap.set('.content', { display: 'flex' })
    }
    if (isClosed) { // opening menu
        tl.set('.stairsParent', { display: 'flex' })
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
    } else { // closing menu
        tl.set('.stairsParent', { display: 'flex' })
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
        tl.set('.stairsParent', { display: 'none' });
        tl.fromTo(iconRef.current, {
             opacity: 0
        },{
            opacity: 1
        })
        gsap.to('.content', {
            y: 20,
            opacity: 0,
        })
        // console.log('after animation isclosed: ', isClosed)
    }
    return isClosed;
};

export default switchPage;