import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import '../Styles/main.css';
import Img2 from "../Img/img4.png";
import Img5 from "../Img/img5.png";
import Img6 from "../Img/img6.png";
import { Image } from '@chakra-ui/react'
import {motion} from 'framer-motion'


export default function Grid1() {
  return (
    <div>
        <div className='row1'>
            <div className='column1'>
            <motion.h1 
             intitial={{
                width:0
            }}
            animate={{
                width:"35vw"
            }}
            transition={{
                duration:1.6,
                ease:"easeInOut",
                delay:0.5,
                stiffness: 190
            }}
            
            className='text1'>Implant
            
            
            </motion.h1>


            <motion.h1 

            intitial={{
                width:0
            }}
            animate={{
                width:"40vw"
            }}
            transition={{
                duration:1.1,
                ease:"easeInOut",
                delay:0.2,
            }}
            
            className='text2'>Dentistry
            
            </motion.h1>
            </div>
            <div className='column2'>
            <Image className='Img1' src={Img2}  />
                
            </div>
            <div className='column3'>
            <Image className='Img5' src={Img5}  />
                
            </div>

            <div className='column4'>
            <Image className='Img5' src={Img6}  />

            </div>
            <div className='column5'>
                <h1 className='text3'>Dental</h1>
                <h1 className='text4'>Restoration</h1>
                <h1 className='text5'>Services</h1>
                
            </div>
        </div>
      

      
    </div>
  )
}
