import React from 'react'
import BottomBox from './BottomBox'
import {motion} from 'framer-motion'


const containerVariants = {
    animate:{
        transition:{
            delayChildren:1.8,
            staggerChildren: 0.4,
        }
    }
}

export default function Bottomgrid() {
  return (

    <motion.div 
    initial="initial"
    animate="animate"
    variants={containerVariants}
    
    
    className='grid grid-cols-3 gap-4 absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-screen-lg mx-auto z-30 h-[6vh]'>
      
        <BottomBox>
            Advanced Dentistry
        </BottomBox>

        <BottomBox>
            Friendly Staff
        </BottomBox>

        <BottomBox>
            High Quality Equipment 
        </BottomBox>
    </motion.div>
  )
}
