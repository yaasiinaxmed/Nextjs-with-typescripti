import Image from 'next/image'
import React from 'react'
import Game from './Game'

function Hero() {
  return (
    <div className='w-full h-[110vh] flex flex-col md:flex-row items-center justify-around'>
        {/* hero image */}
        <figure className='flex items-center justify-center mt-[6rem] md:mt-0'>
        <Image 
                src='/HeroImage.png' 
                alt="LOTTOBIT" 
                width={600} 
                height={400}
                className="w-[70%] md:w-auto"
            />
        </figure>
        {/* Section Game player */}
        <Game/>
    </div>
  )
}

export default Hero