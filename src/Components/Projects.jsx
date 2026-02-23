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
      <div className='flex w-2/3 mx-auto flex-row flex-wrap'>
        {projects.map((pr, i) => {
          return (
            <div key={i} className='basis-full xl:basis-1/2 p-3'>
              <div className='bg-emerald-50 rounded-2xl text-zinc-900 px-5 py-3'>
                <div className={'flex items-end justify-between flex-wrap'}>
                  <h3 className='text-3xl jet pe-2'>{pr.name}</h3>
                  <p className={"text-lg"}>{pr.stack}</p>
                  <a href={"https://github.com/khushpatel00/"+pr.name} className={'text-xl ps-1'} style={{textDecorationStyle: 'wavy', textDecorationColor: 'black', textDecorationThickness: '1px'}}>Github</a>
                </div>
                <img src={'/images/' + pr.cover} alt="" className={'rounded-xl my-2'}/>
                <p className={"text-xl text-zinc-700 pt-1"}>{pr.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects