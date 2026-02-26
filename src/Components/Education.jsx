import React from 'react'

function Education() {
  return (
    <div id='contact' className={'md:overflow-hidden sm:overflow-y-hidden md:overflow-y-hidden lg:overflow-x-hidden md:overflow-x-hidden sm:overflow-x-hidden overflow-x-hidden duration-300 '}>
      <h2 className={'text-7xl md:w-2/3 w-full sm:w-9/10 duration-300 mx-auto ps-1 md:px-5 mt-20 bricolage font-bold'}>Education</h2>
      <div className='flex md:w-2/3 w-full sm:w-9/10 duration-300 ps-1 md:ps-5 mt-2.5 mx-auto flex-col flex-wrap gap-0.5'>

        <div class=" mt-5 pt-5 flex-row flex-wrap flex">
          
          <div className='p-1.5  text-2xl md:basis-1/2 basis-full'>
            <div class="bg-zinc-100 rounded-2xl md:px-7 md:py-5 px-5 py-3">
              <p class="text-lg font-medium">2023-24</p>
              <h2 className='text-3xl font-semibold pe-5 '>SSC Board</h2>
              <h4 class="text-xl font-medium">90.89%</h4>
              <p class="">Gajera Vidhyabhavan, Utran</p>
            </div>
          </div>
          
          <div className='p-1.5  text-2xl md:basis-1/2 basis-full'>
            <div class="bg-zinc-100 rounded-2xl md:px-7 md:py-5 px-5 py-3">
              <p class="text-lg font-medium">2024-25</p>
              <h2 className='text-3xl font-semibold pe-5 '>FullStack Development</h2>
              <h4 class="text-xl font-medium">Ongoing</h4>
              <p class="">Red & White Multimedia Institute</p>
            </div>
          </div>
          
          <div className='p-1.5  text-2xl basis-full'>
            <div class="bg-zinc-100 rounded-2xl md:px-7 md:py-5 px-5 py-3">
              <p class="text-lg font-medium">2024-Present</p>
              <h2 className='text-3xl font-semibold pe-5 '>Diploma in Computer Engineering</h2>
              <h4 class="text-xl font-medium">Second Year</h4>
              <p class="">Vidhyadeep University, Kim</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education