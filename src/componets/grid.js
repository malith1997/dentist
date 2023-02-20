import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import '../Styles/main.css';
import Img2 from "../Img/img4.png";
import Img5 from "../Img/img5.png";
import Img6 from "../Img/img6.png";
import { Image,Button } from '@chakra-ui/react'
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


            <motion.div 
            intitial={{
                width:0
            }}
            animate={{
                width:"20vw"
            }}
            transition={{
                duration:1.1,
                ease:"easeInOut",
                delay:0.2,
            }}
            
            className='column6'>

                <h1 className='subt4'>Caring </h1>
                <h1 className='subt5'>Dental</h1>
                <h1 className='subt6'>Implants</h1>

               
                
            
                
            </motion.div> 


            <motion.div 
            intitial={{
                width:0
            }}
            animate={{
                width:"20vw"
            }}
            transition={{
                duration:1.1,
                ease:"easeInOut",
                delay:0.2,
            }}
            
            className='column7'>

                <h1 className='subt1'>The Process</h1>
                <h1 className='subt2'>Of installing</h1>
                <h1 className='subt3'>Implants</h1>
            
                
            </motion.div>  
















            <div className='column3'>
            <Image className='Img5' src={Img5}  />
                
            </div>

            <div className='column4'>
            <Image className='Img5' src={Img6}  />

            </div>
            <div className='column5'>
                <motion.h1 
                intitial={{
                    width:0
                }}
                animate={{
                    width:"20vw"
                }}
                transition={{
                    duration:1.1,
                    ease:"easeInOut",
                    delay:0.2,
                }}
                
                
                className='text3'>Dental</motion.h1>
                
                <motion.h1 
                intitial={{
                    width:0
                }}
                animate={{
                    width:"23vw"
                }}
                transition={{
                    duration:1.1,
                    ease:"easeInOut",
                    delay:0.5,
                }}
                className='text4'>Restoration</motion.h1>
                
                
                <motion.h1 
                intitial={{
                    width:0
                }}
                animate={{
                    width:"20.6vw"
                }}
                transition={{
                    duration:1.1,
                    ease:"easeInOut",
                    delay:0.3,
                }}
                className='text5'>Services</motion.h1>

                
                <Button className='button1'>
                Book Online
                </Button>
                
            </div>


        </div>
      

      
    </div>
  )
}
