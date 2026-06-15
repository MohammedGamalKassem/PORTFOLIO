import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
    return ( 
    <>
    <div className="border-b border-neutral-800/50 pb-24">
        <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{y:-50,opacity:0}}
            transition={{duration:0.7}}
            className='my-20 text-center text-5xl font-orbitron font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent'
        >
            About Me
        </motion.h1>

        <div className="max-w-6xl mx-auto">
            <motion.div         
                whileInView={{y:0,opacity:1}}
                initial={{y:50,opacity:0}}
                transition={{duration:0.7}} 
                className='w-full mb-12'
            >
                <div className="flex justify-center">
                    <div className="bg-gradient-to-br from-red-900/20 to-blue-900/10 border-2 border-red-600/40 rounded-xl p-8 backdrop-blur-sm hover:border-yellow-500/60 transition-all">
                        {ABOUT_TEXT.split('\n\n').map((para, i) => (
                            <p key={i} className={`text-neutral-300 leading-relaxed text-lg max-w-4xl font-rajdhani ${i > 0 ? 'mt-5' : ''}`}>
                                {para}
                            </p>
                        ))}
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                    whileInView={{y:0,opacity:1}}
                    initial={{y:50,opacity:0}}
                    transition={{duration:0.5, delay:0.1}}
                    className="bg-gradient-to-br from-red-900/30 to-transparent border-2 border-red-600/50 rounded-lg p-6 backdrop-blur-sm hover:border-yellow-400/70 transition-all"
                >
                    <h3 className="text-yellow-400 text-sm font-rajdhani font-semibold mb-2 uppercase tracking-wider">Name</h3>
                    <p className="text-white text-xl font-orbitron font-semibold">Mohammed G. Kassem</p>
                </motion.div>

                <motion.div
                    whileInView={{y:0,opacity:1}}
                    initial={{y:50,opacity:0}}
                    transition={{duration:0.5, delay:0.2}}
                    className="bg-gradient-to-br from-blue-900/30 to-transparent border-2 border-blue-600/50 rounded-lg p-6 backdrop-blur-sm hover:border-yellow-400/70 transition-all"
                >
                    <h3 className="text-yellow-400 text-sm font-rajdhani font-semibold mb-2 uppercase tracking-wider">Education</h3>
                    <p className="text-white text-xl font-orbitron font-semibold">Cairo University</p>
                </motion.div>

                <motion.div
                    whileInView={{y:0,opacity:1}}
                    initial={{y:50,opacity:0}}
                    transition={{duration:0.5, delay:0.3}}
                    className="bg-gradient-to-br from-red-900/30 to-blue-900/20 border-2 border-red-600/50 rounded-lg p-6 backdrop-blur-sm hover:border-yellow-400/70 transition-all"
                >
                    <h3 className="text-yellow-400 text-sm font-rajdhani font-semibold mb-2 uppercase tracking-wider">Location</h3>
                    <p className="text-white text-xl font-orbitron font-semibold">Cairo, Egypt</p>
                </motion.div>

                <motion.div
                    whileInView={{y:0,opacity:1}}
                    initial={{y:50,opacity:0}}
                    transition={{duration:0.5, delay:0.4}}
                    className="bg-gradient-to-br from-blue-900/30 to-transparent border-2 border-blue-600/50 rounded-lg p-6 backdrop-blur-sm hover:border-yellow-400/70 transition-all"
                >
                    <h3 className="text-yellow-400 text-sm font-rajdhani font-semibold mb-2 uppercase tracking-wider">Email</h3>
                    <p className="text-white text-base font-orbitron font-semibold break-all">mohammedgamal0092@gmail.com</p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-8">
                <motion.div
                    whileInView={{scale:1,opacity:1}}
                    initial={{scale:0.8,opacity:0}}
                    transition={{duration:0.5, delay:0.5}}
                    className="relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative bg-gradient-to-br from-red-900/30 to-transparent border-2 border-red-600/50 rounded-lg py-12 px-8 text-center backdrop-blur-sm hover:border-yellow-400/70 transition-all">
                        <h2 className="text-7xl font-orbitron font-bold text-yellow-400 mb-4">6</h2>
                        <p className="text-neutral-300 text-xl font-rajdhani font-semibold">Projects Completed</p>
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{scale:1,opacity:1}}
                    initial={{scale:0.8,opacity:0}}
                    transition={{duration:0.5, delay:0.6}}
                    className="relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative bg-gradient-to-br from-blue-900/30 to-transparent border-2 border-blue-600/50 rounded-lg py-12 px-8 text-center backdrop-blur-sm hover:border-yellow-400/70 transition-all">
                        <h2 className="text-7xl font-orbitron font-bold text-yellow-400 mb-4">8+</h2>
                        <p className="text-neutral-300 text-xl font-rajdhani font-semibold">Tools & Technologies</p>
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{scale:1,opacity:1}}
                    initial={{scale:0.8,opacity:0}}
                    transition={{duration:0.5, delay:0.7}}
                    className="relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative bg-gradient-to-br from-red-900/30 to-blue-900/20 border-2 border-red-600/50 rounded-lg py-12 px-8 text-center backdrop-blur-sm hover:border-yellow-400/70 transition-all">
                        <h2 className="text-7xl font-orbitron font-bold text-yellow-400 mb-4">3rd</h2>
                        <p className="text-neutral-300 text-xl font-rajdhani font-semibold">National Finish — DBF</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
    </> );
}
 
export default About;
