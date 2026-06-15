import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
    return ( 
        <>
    <div className="border-b border-neutral-800/50 pb-24">
        <motion.h2 
            whileInView={{opacity:1,y:0}} 
            initial={{y:-100,opacity:0}} 
            transition={{duration:1.5}} 
            className="my-20 text-center text-5xl font-orbitron font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {CERTIFICATIONS.map((cert, index) => {
                return(
                <motion.div 
                    key={index} 
                    whileInView={{opacity:1,y:0}} 
                    initial={{y:50,opacity:0}} 
                    transition={{duration:0.5, delay: index * 0.1}}
                    className='bg-gradient-to-br from-red-900/20 to-blue-900/10 rounded-lg p-6 border-2 border-red-600/40 hover:border-yellow-400/70 transition-all duration-300 backdrop-blur-sm'
                >
                    <div className="flex items-start gap-4">
                        <FaCertificate className='text-3xl text-yellow-400 mt-1 flex-shrink-0' />
                        <div className="flex-grow">
                            <h3 className='font-orbitron font-semibold text-lg mb-2 text-white'>
                                {cert.title}
                            </h3>
                            <p className='text-sm text-blue-400 mb-1 font-rajdhani font-semibold'>
                                {cert.issuer}
                            </p>
                            <div className="flex justify-between items-center mt-3">
                                <span className={`text-xs px-3 py-1 rounded-full font-rajdhani font-semibold ${
                                    cert.status === 'Completed' || cert.status === 'Proficient'
                                    ? 'bg-green-900/50 text-green-300 border border-green-500/50' 
                                    : 'bg-yellow-900/50 text-yellow-300 border border-yellow-500/50'
                                }`}>
                                    {cert.status}
                                </span>
                                <span className='text-xs text-neutral-400 font-rajdhani'>{cert.year}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
                )
            })}
        </div>
    </div>
    </>
     );
}
 
export default Certifications;
