import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
const Experiences = () => {
    return ( 
        <>
    <div className="border-b border-neutral-800/50 pb-24">
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{y:-100,opacity:0}} transition={{duration:1.5}} className="my-20 text-center text-5xl font-orbitron font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience,index)=>{
                return(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}} transition={{duration:1}} className="w-full lg:w-1/4">
                    <p className='mb-2 text-sm text-yellow-400 font-rajdhani font-semibold'>{experience.year}</p>
                    </motion.div >
                    <motion.div whileInView={{opacity:1,x:0}} initial={{x:100,opacity:0}} transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
                    <h6 className='font-orbitron font-bold text-xl mb-2'>{experience.role} - <span className='text-base text-blue-400 font-rajdhani'>{experience.company}</span></h6>
                    <p className='mb-4 text-neutral-300 font-rajdhani leading-relaxed'>{experience.description}</p>
                    <div>
                    {experience.technologies.map((tech,index)=>{
                        return(
                            <span key={index} className='mr-2 mt-4 rounded-lg bg-gradient-to-r from-red-900/40 to-blue-900/40 border border-red-600/50 px-3 py-1 text-xs font-medium text-yellow-300 font-rajdhani hover:from-red-900/60 hover:to-blue-900/60 transition-all inline-block'>{tech}</span>
                        )
                    })}
                    </div>
                    </motion.div>
                </div>
                )
            })}
        </div>
        </div>
    </>
     );
}
 
export default Experiences;