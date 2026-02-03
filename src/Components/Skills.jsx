import React from 'react'

function Skills() {
  return (
    <div className='flex flex-wrap'>
      <div className='text-4xl basis-1/2 tracking-wider ps-10 mt-10'>
        <p className='font-bold tracking-tight'>Interfaces: </p>
        <span >HTML, CSS, Bootstrap, Tailwind, Layout Systems</span>
      </div>
      <div className='text-4xl basis-1/2 tracking-wider ps-10 mt-10'>
        <p className='font-bold tracking-tight'>Motion & Interaction: </p>
        <span >Css Animations, GSAP, ReactBits, FramerMotion</span>
      </div>
      <div className='text-4xl basis-1/2 tracking-wider ps-10 mt-10'>
        <p className='font-bold tracking-tight'>Core Systems: </p>
        <span >React, Express, NodeJS, MongoDB, <span className='line-through'>Postman</span></span>
      </div>
      <div className='text-4xl basis-1/2 tracking-wider ps-10 mt-10'>
        <p className='font-bold tracking-tight'>Low Level Curiosity: </p>
        <span >C, C++, Java, Unity Engine, Unreal Engine, Premiere Pro, Blender, Ricing</span>
      </div>
    </div>
  )
}

export default Skills