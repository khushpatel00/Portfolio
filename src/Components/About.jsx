import React from 'react'

function About({ className }) {
  return (
    <>
      <div className={'flex justify-center flex-wrap pt-10 duration-300 ' + className}>
        <div className='text-2xl lg:w-2/3 w-full md:w-2/3 duration-300 xl:w-1/2 w-full sm:w-9/10 text-wrap flex flex-wrap items-end'>
          <span className='text-9xl bricolage font-semibold pe-3 '>Im khush</span>
          <span className='text-xl font-medium -translate-y-1/2 duration-300'>a so called, <span className='bricolage'>webdev</span></span>
        </div>
      </div>
    </>
  )
}

export default About