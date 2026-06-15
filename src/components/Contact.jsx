import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
const Contact = () => {
    return ( 
        <>
        <div className='border-b border-neutral-800/50 pb-24'>
            <motion.h2 whileInView={{opacity:1,y:0}} initial={{y:-100,opacity:0}} transition={{duration:0.5}}  className='my-20 text-center text-5xl font-orbitron font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent'>Get in Touch</motion.h2>
            <div className='text-center tracking-tight font-rajdhani'> 
              <motion.p whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}} transition={{duration:1}} className='my-4 text-neutral-300 text-lg'>{CONTACT.address}</motion.p> 
              <motion.p whileInView={{opacity:1,x:0}} initial={{x:100,opacity:0}} transition={{duration:1}} className='my-4 text-neutral-300 text-lg'>{CONTACT.phoneNo}</motion.p> 
              <a href='mailto:mohammedgamal0092@gmail.com' className='border-b-2 border-yellow-400 text-blue-400 hover:text-yellow-400 transition-colors text-lg font-semibold'>{CONTACT.email}</a> 
            </div>
        </div>
        </>
     );
}
 
export default Contact;