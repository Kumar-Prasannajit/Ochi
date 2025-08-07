import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40 px-20'>
            {["We Create", "Eye Opening", "Presentations"].map((text, index) => {
                return (
                    <div className='Masker'>
                        <div className='w-fit flex items-end overflow-hidden'>
                            {index === 1 && (
                                <div className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top[1.2vw] relative bg-green-500'></div>
                                )}
                            <h1 className='uppercase text-[6vw] leading-[6vw] font-["Impact"] font-extralight'>
                                {text}
                            </h1>
                        </div>
                    </div>     
                )
            })}
        </div>
        <div className='border-t-[1px] mt-22 border-zinc-800 flex justify-between items-center py-5 px-20'>
            {["For the public and private companies", "From the first pitch to IPO"].map((text, index) => (
                <p className='text-md font-light'>{text}</p>
            )) }
            <div className='start flex items-center gap-2'>
                <div className='px-5 py-2 text-md font-light border-zinc-500 border-[1px] uppercase rounded-full'>
                    Start The Project
                </div>
                <div className='w-10 h-10 rounded-full border-zinc-500 border-[1px] flex items-center justify-center'>
                    <GoArrowUpRight />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default LandingPage