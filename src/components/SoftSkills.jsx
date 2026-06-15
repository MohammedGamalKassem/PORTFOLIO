import React from 'react';
import { SOFT_SKILLS } from '../constants';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const SoftSkills = () => {
    return ( 
        <>
    <div className="border-b border-neutral-800/50 pb-24">
        <motion.h2 
            whileInView={{opacity:1,y:0}} 
            initial={{y:-100,opacity:0}} 
            transition={{duration:1.5}} 
            className="my-20 text-center text-5xl font-orbitron font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
            Soft Skills
        </motion.h2>
        <motion.div 
            whileInView={{opacity:1,y:0}} 
            initial={{y:50,opacity:0}} 
            transition={{duration:1}}
            className="flex flex-wrap justify-center gap-4 px-4 max-w-4xl mx-auto"
        >
            {SOFT_SKILLS.map((skill, index) => {
                return(
                <motion.div 
                    key={index}
                    whileInView={{opacity:1,scale:1}} 
                    initial={{scale:0.8,opacity:0}} 
                    transition={{duration:0.3, delay: index * 0.05}}
                    whileHover={{ scale: 1.05 }}
                    className='flex items-center gap-2 bg-gradient-to-r from-red-900/30 to-blue-900/20 rounded-full px-5 py-3 border-2 border-red-600/50 hover:border-yellow-400/70 transition-all duration-300 backdrop-blur-sm'
                >
                    <FaCheckCircle className='text-yellow-400 text-lg' />
                    <span className='text-sm font-semibold text-neutral-200 font-rajdhani'>
                        {skill}
                    </span>
                </motion.div>
                )
            })}
        </motion.div>
    </div>
    </>
     );
}
 
export default SoftSkills;
