import React from 'react'

function Contact() {
  return (
    <div id='contact' className={'md:overflow-hidden sm:overflow-y-hidden md:overflow-y-hidden lg:overflow-x-hidden md:overflow-x-hidden sm:overflow-x-hidden overflow-x-hidden duration-300 py-20'}>
      <h2 className={'text-7xl  md:w-2/3  sm:w-9/10 duration-300 mx-auto px-5 mt-20 bricolage font-bold'}>Contact Me</h2>
      <div className='flex  md:w-2/3  sm:w-9/10 duration-300 ps-5 mt-2.5 mx-auto flex-col flex-wrap gap-0.5'>
        {/* <h4 className={'text-2xl '}>React me out on: </h4> */}
        <div className='text-2xl flex flex-row flex-wrap items-end ps-5 duration-300'>

          <div className='flex flex-row items-end md:basis-1/2 basis-full'>
            <h5 className='text-3xl font-semibold bricolage'>Resume</h5>: <a href='/khushpatel-resume.pdf' download target='_blank' style={{ textDecoration: 'underline wavy 1px #3f3f46' }} className='jet ps-3 wrap-anywhere'>Download</a>
          </div>
          <div className='flex flex-row items-end md:basis-1/2 basis-full'>
            <h5 className='text-3xl font-semibold bricolage'>Github</h5>: <a href='https://github.com/khushpatel00' target='_blank' style={{ textDecoration: 'underline wavy 1px #3f3f46' }} className='jet ps-3 wrap-anywhere'>khushpatel00</a>
          </div>
          <div className='flex flex-row items-end md:basis-1/2 basis-full'>
            <h5 className='text-3xl font-semibold bricolage'>LinkedIn</h5>: <a href='https://linkedin.com/in/khushpatel00' target='_blank' style={{ textDecoration: 'underline wavy 1px #3f3f46' }} className='jet ps-3 wrap-anywhere'>khushpatel00</a>
          </div>
          <div className='flex flex-row items-end md:basis-1/2 basis-full'>
            <h5 className='text-3xl font-semibold bricolage'>Mail</h5>: <a href='mailto:patelxkhush@gmail.com' target='_blank' style={{ textDecoration: 'underline wavy 1px #3f3f46' }} className='jet ps-3 wrap-anywhere'>patelxkhush@gmail.com</a>
          </div>
          <div className='flex flex-row items-end md:basis-1/2 basis-full'>
            <h5 className='text-3xl font-semibold bricolage'>Instagram</h5>: <a href='https://instagram.com/iduunnowhy' target='_blank' style={{ textDecoration: 'underline wavy 1px #3f3f46' }} className='jet ps-3 wrap-anywhere'>iduunnowhy</a>
          </div>
          <div className='flex flex-row items-end md:basis-1/2 basis-full'>
            <h5 className='text-3xl font-semibold bricolage'>Discord</h5>: <a target='_blank' className='jet ps-3 wrap-anywhere'>@realnigg_.</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact