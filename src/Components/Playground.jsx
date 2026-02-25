import React from 'react'

function Playground() {
    return (
        <div className={'md:overflow-hidden sm:overflow-y-hidden md:overflow-y-hidden lg:overflow-x-hidden md:overflow-x-hidden sm:overflow-x-hidden overflow-x-hidden'}>
            <h2 className={'text-7xl md:w-2/3 duration-300 w-9/10 mx-auto px-5 mt-20 bricolage font-bold'}>
                my Little Playground
            </h2>

            <div className='flex md:w-2/3 duration-300 w-9/10 mx-auto flex-col flex-wrap py-5 p-10'>
                <h3 className='text-4xl font-bold bricolage'> 
                    my Little Contribution
                </h3>
                <p className='ps-5 pt-2 text-2xl'>am activily maintaining <a href='https://github.com/T-Dynamos/materialyoucolor-python' className='bg-zinc-100 px-1.5 py-0.5 jet rounded-lg text-black font-medium text-xl underline-offset-3' target='_blank' style={{ textDecoration: 'underline wavy 1px #3f3f46' }}>python-materialyoucolor3</a> as a <a href='https://aur.archlinux.org/packages/python-materialyoucolor3' className='' target='_blank' style={{ textDecoration: 'underline wavy 1px #3f3f46' }}>AUR</a> package</p>
            </div>

            <div className='flex md:w-2/3 duration-300 w-9/10 mx-auto flex-row flex-wrap'>

                <div className='flex px-3 md:px-10 duration-300 items-start justify-start align-top flex-wrap flex-row basis-full md:basis-1/3'>
                    <h3 className={'text-4xl bricolage font-medium basis-full'}>Languages:</h3>
                    <div className={'flex flex-col flex-wrap ps-3 text-2xl basis-full'}>
                        <p>JavaScript</p>
                        <p>C / C++</p>
                        <p>C# (Unity)</p>
                        <p>Java (beginner)</p>
                        <p>Python (beginner)</p>
                    </div>
                </div>


                <div className='flex px-3 md:px-10 duration-300 items-start justify-start align-top flex-wrap flex-row basis-full md:basis-1/3'>
                    <h3 className={'text-4xl bricolage font-medium basis-full'}>Tools:</h3>
                    <div className={'flex flex-col flex-wrap ps-3 text-2xl basis-full'}>
                        <p>GSAP</p>
                        <p>Framer Motion</p>
                        <p>Locomotive scroll (beginner)</p>
                        <p>Tailwind</p>
                        <p>Postman</p>
                        <p>Replit</p>
                    </div>
                </div>
                <div className='flex px-3 md:px-10 duration-300 items-start justify-start align-top flex-wrap flex-row basis-full md:basis-1/3'>
                    <h3 className={'text-4xl bricolage font-medium basis-full'}>Core:</h3>
                    <div className={'flex flex-col flex-wrap ps-3 text-2xl basis-full'}>
                        <p>React</p>
                        <p>NodeJS</p>
                        <p>NextJS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playground