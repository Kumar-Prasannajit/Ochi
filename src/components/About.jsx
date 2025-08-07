import React from 'react'

function About() {
  return (
    <div className='w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl pb-20'>
        <h1 className='text-black p-20 text-[3vw] leading-[4vw] tracking-tight font-["Neue Montreal"]'>
            Ochi is a strategic presentation agency for forward-thinking
             businesses that need to raise funds, sell products, explain
              complex ideas, and hire great people.
        </h1>
        <div className='border-t-1 border-[#95a26c] mb-5 flex justify-between'>
            <h2 className='text-black font-["Neue Montreal"] text-[1vw] p-20'>What you can expect:</h2>
            <h2 className='text-black font-["Neue Montreal"] text-[1vw] leading-[1vw] tracking-tight w-[20vw] py-20'>
                We partner with the companies and startups who make the world go round —
                 they drive the net-zero economy, revolutionize crypto treasury management, bui
                 ld photonic chips, and open Michelin-starred restaurants.
            </h2>
            <h2 className='text-black font-["Neue Montreal"] text-[1vw] p-20 w-[10vw] flex flex-col'>
                <a href="#">Instagram</a><a href="#">Behance</a><a href="#">Facebook</a><a href="#">LinkdIn</a>
            </h2>
        </div>
        <div className='w-full border-t-[1px] mt-20 border-[#95a26c] flex gap-5 p-20'>
            <div className='w-1/2'>
                <h1 className='text-black text-[3vw]'>Our Approach:</h1>
                <button className='px-6 py-4 rounded-full bg-zinc-900 uppercase flex gap-10 items-center'>Read More
                    <div className='w-2.5 h-2.5 rounded-full bg-zinc-100'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] bg-[#b1c658] rounded-3xl'></div>
        </div>
    </div>
  )
}

export default About