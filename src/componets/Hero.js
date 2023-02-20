import React from 'react'
import {motion} from 'framer-motion'
import { Image } from '@chakra-ui/react'
import Img1 from "../Img/img1.png";
import Img2 from "../Img/img2.png";
import Img3 from "../Img/img3.png";


export default function Hero() {
  return (
    <div className='grid grid-cols-3 mx-auto max-w-screen-lg w-full'>
        <div className='z-10 text-left col-span-1 flex gap-3 relative flex-col pt-[20vh]'>
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5}}
          
          className='w-full'>
            <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-purple-100 text-5xl uppercase tracking-wide'>Smile</h1>
            <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-purple-100 text-7xl '>Makeover</h1>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <button className='py-2 border boder-white text-white w-[15vw] px-4 text-md tracking-widest uppercase mt-3'>Call us</button>
          </motion.div>
        </div>






        <div className='relative z-40'>
          {/* <img src="/img1.png" className='h-[70vh] w-full -left-[-10vw] -rotate-12 absolute  object-cover z-10' />
          <img src="/img/img2.png" className='h-[70vh] w-full -left-[-25vw] absolute  object-cover z-10'  />
          <img src="/img3.png" className='h-[70vh] w-full -left-[-15vw] -rotate-12 absolute  object-cover z-10' /> */}


          <Image className='h-[70vh] w-full -left-[-10vw] -top-[-3vw] -rotate-10 absolute  object-cover z-10' src={Img1}  />
          <Image className='h-[70vh] w-full -left-[-32vw] -top-[-3vw] -rotate-10 absolute  object-cover z-10' src={Img2}  />
          <Image className='h-[60vh] w-full -left-[-22vw] -top-[-5vw] -rotate-10 absolute  object-cover z-10' src={Img3}  />



       </div>
    </div>
  )
}
