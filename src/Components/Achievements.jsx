import React from 'react'

function Achievements() {
  let achievementsList = [
    {
      title: 'C MINI',
      locate: 'Techwar, RNW (2024)',
      desc: 'Won in-house C Mini Competetion',
      image: 'techwar-winning(2024).png'
    },
    {
      title: 'C MINI',
      locate: 'Techwar, RNW (2024)',
      desc: 'Participated in-house C MINI Competetion',
      image: 'techwar-2024-c-mini-participation.png'
    },
    {
      title: 'C Tsunami',
      locate: 'Techwar, RNW (2026)',
      desc: 'Won in-house C Tsunami Competetion',
      image: 'techwar-ctsunami(2026).jpg'
    },
    {
      title: 'Webhacks',
      locate: 'Techwar, RNW (2026)',
      desc: 'Participated in-house Webhacks Competetion',
      image: 'techwar-webhacks(2026).jpg'
    },
    {
      title: 'TechSprint 2.0 Hackathon',
      locate: 'Hackathon, PPSU (2026)',
      desc: `Participated GDC's 36Hrs Hackathon at PPSU`,
      image: 'techsprint-participation.jpg'
    },
  ]
  return (
    <div>
      <div className='md:overflow-hidden sm:overflow-y-hidden md:overflow-y-hidden lg:overflow-x-hidden md:overflow-x-hidden sm:overflow-x-hidden overflow-x-hidden'>
        <h2 className={'text-7xl w-2/3 mx-auto px-5 mt-20 bricolage font-bold'}>achievements</h2>
        <div className='ps-10 pt-5 flex w-2/3 mx-auto flex-row flex-wrap'>
          {achievementsList.map((ac, i) => {
            return (
              <div className={` p-1.5 min-h-[300px] max-h-fit ${i % 3 ? 'basis-2/5' : 'basis-3/5'} ${i == 4 && 'basis-full'}`}>
                <div key={i} className={`bg-zinc-100 rounded-2xl justify-around flex flex-col p-5 py-3 w-full h-full`}>
                  <div>
                    <h3 className='text-4xl jet text-wrap'>{ac.title}</h3>
                    <p className='text-2xl text-wrap'>{ac.locate}</p>
                    <p className='text-3xl text-wrap'>{ac.desc}</p>
                  </div>
                  <img src={'/images/' + ac.image} alt={ac.locate} className='rounded-xl max-h-full w-auto' />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Achievements