import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Menu() {
    useGSAP(() => {
        const tl = gsap.timeline();
        const stairs = document.querySelectorAll('.stair');
        tl.set('.stairsParent',{ display: 'flex' })
        tl.from(stairs, {
            y: '-100%',
            stagger: 0.1,
            duration: 1,
            ease: 'power2.out'
        })
        tl.to(stairs, {
            y: '100%',
            stagger: 0.1,
            duration: 1,
            ease: 'power3.in',
        })
        tl.set('.stairsParent',{ display: 'none' })
    })

    return (
        <div>
            <div className='fixed top-0 right-0 bg-black px-20 cursor-pointer'>
                <img src="/menu.svg" className='max-w-[3vw] ' alt="" />
            </div>

            <div className='absolute top-0 left-0'>
                <div className="stairsParent relative h-screen w-screen hidden bg-transparent">
                    {[1, 2, 3, 4, 5].map((val, index) => (
                        <div key={index} className="stair w-1/5 h-full bg-black"></div>
                    ))}
                    <div className='absolute top-0 right-0 bg-black px-20 cursor-pointer'>
                        <img src="/menu.svg" className='max-w-[3vw] ' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu