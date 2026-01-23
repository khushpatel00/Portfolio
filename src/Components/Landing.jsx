import React from 'react'
import Threads from './Threads';

function Landing() {
  return (
    <div className='overflow-x-hidden'>

      <div className='absolute top-0 left-0 -z-10'>
        <div className='w-screen h-screen overflow-hidden' style={{ position: 'relative' }}>
          <Threads
            amplitude={1}
            distance={0}
          />
        </div>
      </div>
            
      <div className='w-screen h-screen flex flex-col gap-5 items-center  justify-center'>
        <h1 className='text-6xl jet text-center'>khushpatel</h1>
        <h2 className='text-2xl text-center px-5'>Frontend Engineer building motion-first interfaces & interactive systems.</h2>
        <p className='jet'>Web · Animation · Game Dev Crossover</p>
      </div>

    </div>
  )
}

export default Landing