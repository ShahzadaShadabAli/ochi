import React from 'react'
import {motion} from "framer-motion"

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.2" className='w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-[#004d43]'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden uppercase whitespace-nowrap">
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[20vw] leading-none font-["founder"] pr-20 mb-10'>We are ochi</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[20vw] leading-none font-["founder"] pr-20 mb-10'>We are ochi</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[20vw] leading-none font-["founder"] pr-20 mb-10'>We are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
