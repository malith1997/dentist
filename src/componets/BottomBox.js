import React from 'react'
import {motion} from 'framer-motion'

const BoxVariants = {
    initial:{
        y:100
    },
    animate:{
        y:0
    }
}

const BottomBox =(props) => {
  return (
    <div>
    <motion.div 
    
    variants={BoxVariants}

    className='bg-gray-500 p-3 uppercase text-gray-100 text-center text-base rounded-t-md rounded-b-md flex justify-center item-center'>
     {props.children} 
    </motion.div>
    </div>
  )
}

export default BottomBox;
