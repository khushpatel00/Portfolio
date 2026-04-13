import React from 'react'
import CardSwap, { Card } from './CardSwap'

let projects = [
  {
    name: 'Termed',
    stack: 'React',
    description: 'Terminal within the boundaries of Browser',
    cover: 'termed_preview.png'
  },
  {
    name: 'driveman',
    stack: 'Unity',
    description: 'i made a game too, btw 🙂',
    cover: 'driveman_demo.mp4'
  },
  {
    name: 'WeatherNow',
    stack: 'Javascript, GSAP',
    description: 'Weather app utilized with open-meteo',
    cover: 'weathernow_preview.png'
  },
  {
    name: 'session0',
    stack: 'React',
    description: "A browser-based window Manager, ie. linux's ricing on browser level",
    cover: 'session0_preview.png'
  },
]

function Projects() {
  return (
    <div className='md:overflow-hidden sm:overflow-y-hidden md:overflow-y-hidden lg:overflow-x-hidden md:overflow-x-hidden sm:overflow-x-hidden overflow-x-hidden'>
      <h2 className={'text-7xl w-full md:w-2/3 sm:w-9/10 duration-300 mx-auto px-5 mt-20 bricolage font-bold'}>projects</h2>
      <div className='flex w-full md:w-2/3 sm:w-9/10 duration-300 mx-auto flex-row flex-wrap'>
        {projects.map((pr, i) => {
          return (
            <div key={i} className='basis-full xl:basis-1/2 p-3 duration-300'>
              <div className='bg-emerald-50 rounded-2xl text-zinc-900 px-5 py-3 duration-300'>
                <div className={'flex items-end justify-between flex-wrap'}>
                  <h3 className='text-3xl jet pe-2'>{pr.name}</h3>
                  <p className={"text-lg"}>{pr.stack}</p>
                  <a href={"https://github.com/khushpatel00/" + pr.name} target='_blank' className={'text-xl ps-1'} style={{ textDecoration: 'underline wavy 1px #3f3f46' }}>Github</a>
                </div>
                {pr.name === 'driveman' ? <video src={'/' + pr.cover} autoPlay muted loop className={'rounded-xl my-2'} > </video> :
                  <img src={'/images/' + pr.cover} alt="" className={'rounded-xl my-2'} />
                }
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