import React from 'react'
import CardSwap, { Card } from './CardSwap'

let projects = [
  {
    name: 'Termed',
    stack: 'React',
    description: 'Terminal within the boundaries of Browser',
    cover: 'groot_1.jpg'
  },
  {
    name: 'driveman',
    stack: 'Unity',
    description: 'i made a game too, btw 🙂',
    cover: 'groot_1.jpg'
  },
  {
    name: 'WeatherNow',
    stack: 'Javascript, GSAP',
    description: 'Weather app utilized with open-meteo',
    cover: 'groot_1.jpg'
  },
  {
    name: 'session0',
    stack: 'React',
    description: 'A browser-based window manager inspired by classic desktop operating systems (mainly windows XP), built with vanilla JavaScript. (Under Development)',
    cover: 'groot_1.jpg'
  },
]

function Projects() {
  return (
    <div className='md:overflow-hidden sm:overflow-y-hidden md:overflow-y-hidden lg:overflow-x-hidden md:overflow-x-hidden sm:overflow-x-hidden overflow-x-hidden'>

      <div style={{ height: '600px', position: 'relative' }} className=' -translate-x-1/8 scale-110 text-white'>
        <CardSwap
          cardDistance={30}
          verticalDistance={50}
          delay={3000}
          pauseOnHover={true}
          onCardClick={(e) => console.log('clicked', e)}
        >

          {projects.map((pr, i) => {

            return (
              <Card>
                <div className="relative w-full h-full overflow-hidden p-3">
                  <h3 className='z-0 text-2xl inline'>{pr.name}</h3>
                  <p className={pr.stack.length > 10 ? 'pb-3' : 'inline text-sm ps-1'}>{pr.stack}</p>
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