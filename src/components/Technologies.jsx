import React from 'react';
import { SiPython } from 'react-icons/si';
import { SiArduino } from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { TbMathFunction } from "react-icons/tb";
import { GiGears } from "react-icons/gi";
import { motion } from 'framer-motion';
const iconAni=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse",
        }
    }
})
const Technologies = () => {
    return ( 
        <>
    <div className="border-b border-neutral-800/50 pb-24">
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{y:-100,opacity:0}} transition={{duration:1.5}} className='my-20 text-center text-5xl font-orbitron font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent'> Technologies </motion.h2>
        <motion.div whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
        
            <motion.div variants={iconAni(3)} initial="intial" animate="animate"   whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}} className="rounded-2xl border-4 border-red-600/50 hover:border-yellow-400/70 transition-all p-4 bg-gradient-to-br from-red-900/20 to-transparent"><TbMathFunction className='text-7xl text-yellow-400' /></motion.div>
            <motion.div variants={iconAni(5)} initial="intial" animate="animate"   whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}} className="rounded-2xl border-4 border-blue-600/50 hover:border-yellow-400/70 transition-all p-4 bg-gradient-to-br from-blue-900/20 to-transparent"><GiGears className='text-7xl text-yellow-400' /></motion.div>
            <motion.div variants={iconAni(2)} initial="intial" animate="animate"   whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}} className="rounded-2xl border-4 border-red-600/50 hover:border-yellow-400/70 transition-all p-4 bg-gradient-to-br from-red-900/20 to-blue-900/10"><SiPython className='text-7xl text-blue-400' /></motion.div>
            <motion.div variants={iconAni(6)} initial="intial" animate="animate"   whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}} className="rounded-2xl border-4 border-blue-600/50 hover:border-yellow-400/70 transition-all p-4 bg-gradient-to-br from-blue-900/20 to-transparent"><FaJava className='text-7xl text-red-500' /></motion.div>
            <motion.div variants={iconAni(4)} initial="intial" animate="animate"   whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}} className="rounded-2xl border-4 border-red-600/50 hover:border-yellow-400/70 transition-all p-4 bg-gradient-to-br from-red-900/20 to-transparent"><SiArduino className='text-7xl text-blue-400' /></motion.div>
        </motion.div>
    </div>
    </>
     );
}
 
export default Technologies