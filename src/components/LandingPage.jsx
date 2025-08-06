import React from 'react'

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40'>
            {["We Create", "Eye Opening", "Presentations"].map((text, index) => {
                return (
                    <div className='Masker'>
                <h1 className='uppercase text-[6.75vw] px-20 tracking-tighter leading-[5.75vw] font-[Founders Grotesk Condensed] font-medium'>{text}</h1>
            </div>
                )
            })}
        </div>
    </div>
  )
}

export default LandingPage