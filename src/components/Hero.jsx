import React from 'react';
import { HERO_CONTENT } from '../constants';
//import Abdallah from '../assets/Abdallah.jpeg';
import { animate, motion } from 'framer-motion';
const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{x:0,opacity:1,transition:{duration:0.5,delay:delay}}
})
const Hero = () => {
    return ( 
        <>
        <div className="border-b border-neutral-800/50 pb-4 lg:mg-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 className='pb-16 tracking-tight text-6xl lg:mt-16 lg:text-8xl font-orbitron font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent' 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    >Mohammed G. Kassem</motion.h1>
                    <motion.span  
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-blue-400 via-yellow-300 to-red-400 bg-clip-text text-4xl text-transparent tracking-tight font-orbitron font-semibold">
                         Aerospace Engineering Student </motion.span>
                    <motion.p  variants={container(1)}
                    initial="hidden"
                    animate="visible" className='my-2 max-w-xl py-6 font-rajdhani text-neutral-300 text-lg tracking-tight'>
                        {HERO_CONTENT}
                        </motion.p>
                </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                {/* <motion.img
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:1.2}}
                src={Abdallah} alt='Abdallah' className='w-2/3'></motion.img> */}
                </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Hero;