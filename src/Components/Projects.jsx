import React from 'react'
import CardSwap, { Card } from './CardSwap'

let projects = [
  {
    name: 'Termed',
    stack: 'Javascript',
    description: 'Terminal within the boundaries of Browser',
    cover: 'groot_1.jpg'
  }
]

function Projects() {
  return (
    <div className='sm:overflow-x-hidden md:overflow-hidden  sm:overflow-y-hidden md:overflow-y-hidden'>

      <div style={{ height: '600px', position: 'relative' }} className=' -translate-x-1/8 scale-110'>
        <CardSwap
          cardDistance={85}
          verticalDistance={110}
          delay={3500}
          pauseOnHover={false}
          onCardClick={(e) => console.log('clicked', e)}
        >

          {projects.map((pr, i) => {

            return (
              <Card>
                <div className="relative w-full h-full overflow-hidden p-3">
                  <h3 className='z-0 text-2xl inline'>{pr.name}</h3>
                  <p className='z-0 inline ps-1'>{pr.stack}</p>
                  <p className='z-0 text-lg'>{pr.description}</p>
                  <img src={'/images/' + pr.cover} className='w-full h-full object-cover absolute top-0 left-0 -z-10' alt="" srcset="" />
                </div>
              </Card>
            )
          })}

        </CardSwap>
      </div>
    </div>
  )
}

export default Projects