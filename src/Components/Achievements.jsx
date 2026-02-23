import React from 'react'

function Achievements() {
  let achievementsList = [
    {
      title: 'C MINI',
      locate: 'Techwar, RNW (2024)',
      desc: 'Participated in-house C MINI Competetion',
      image: 'techwar-2024-c-mini-participation.jpg'
    },
    {
      title: 'C MINI',
      locate: 'Techwar, RNW (2024)',
      desc: 'Won in-house C Mini Competetion',
      image: 'techwar-2024-c-mini-winning.jpg'
    },
    {
      title: 'TechSprint 2.0 Hackathon',
      locate: 'Hackathon, PPSU (2026)',
      desc: 'Won in-house C Mini Competetion',
      image: 'techsprint-participation.jpg'
    },
    {
      title: 'C Tsunami',
      locate: 'Hackathon, PPSU (2026)',
      desc: 'Won in-house C Mini Competetion',
      image: 'techsprint-participation.jpg'
    }
  ]
  return (
    <div>
      <div className='md:overflow-hidden sm:overflow-y-hidden md:overflow-y-hidden lg:overflow-x-hidden md:overflow-x-hidden sm:overflow-x-hidden overflow-x-hidden'>
        <h2 className={'text-7xl w-2/3 mx-auto px-5 mt-20 bricolage font-bold'}>achievements</h2>
        <div className='ps-10 pt-5 flex w-2/3 mx-auto flex-row flex-wrap gap-0.5'>
          {achievementsList.map((ac, i) => {

            return (
              <div key={i} className={'bg-zinc-100 rounded-2xl p-5 py-3'}>
                <h3 className='text-4xl jet'>{ac.title}</h3>
                <p className='text-2xl'>{ac.locate}</p>
                <p className='text-3xl'>{ac.desc}</p>
                <img src={'/images/' + ac.image} className='text-3xl' />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Achievements