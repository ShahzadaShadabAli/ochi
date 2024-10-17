import { motion } from 'framer-motion'
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-0.3' className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-52 px-20">
        {["we create", "eye opening", "presentation"].map((p, i) => (
        <div key={i} className="masker font-['founder']">
          <div className="flex items-center w-full">
            {i === 1 && (<motion.div initial={{width: 0}} animate={{width: '9vw'}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className='w-[9vw] rounded-lg h-[6.2vw] mt-[1vw] mr-[1vw] bg-rose-400'></motion.div>)}
            <h1 className={`uppercase ${i === 1 ? '' : 'leading-[1vw]'} text-[10vw]`}>{p}</h1>
          </div>
        </div>
        ))}
      </div>
      <div className="border-t-2 border-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
        <p className="tracking-tight leading-none text-lg text-['neue']">For public and private companies</p>
        <p className="tracking-tight leading-none text-lg text-['neue']">
        From the first pitch to IPO</p>
        <div className="start flex items-center gap-2">
            <div className="px-4 py-2 border-[2px] border-zinc-400 text-sm rounded-full">START THE PROJECT</div>
            <div className="w-10 rotate-[45deg] h-10 border-[2px] flex items-center justify-center border-zinc-400 rounded-full">
              <FaArrowUpLong />
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
