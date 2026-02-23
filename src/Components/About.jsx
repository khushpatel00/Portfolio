import React from 'react'

function About({ className }) {
  return (
    <>
      <div className={'flex justify-center flex-wrap pt-10 ' + className}>
        <div className='text-2xl w-1/2 text-wrap flex flex-wrap items-end'>
          <span className='text-9xl bricolage font-semibold pe-3'>Im khush</span>
          <span className='text-xl font-medium -translate-y-1/2'>a so called, <span className='bricolage'>webdev</span></span>
        </div>
      </div>
    </>
  )
}

export default About