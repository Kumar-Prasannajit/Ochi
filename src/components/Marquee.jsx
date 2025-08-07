import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    
    <div className='w-full py-20 rounded-3xl bg-[#004d43]'>
        <div className='text border-t-2 border-b-2 border-zinc-100 flex gap-8 overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition ={{ease: "linear", repeat: Infinity, duration: 7}} className='text-[20vw] leading-none font-[Impact] font-extralight uppercase -mb-[1vw] -mt-[1vw]'>we are ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition ={{ease: "linear", repeat: Infinity, duration: 7}} className='text-[20vw] leading-none font-[Impact] font-extralight uppercase -mb-[1vw] -mt-[1vw]'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee