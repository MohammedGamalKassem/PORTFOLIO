import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return ( 
        <>
        <footer className='py-10 border-t border-neutral-800'>
            <motion.div 
                whileInView={{opacity:1,y:0}} 
                initial={{y:20,opacity:0}} 
                transition={{duration:0.5}}
                className='text-center'
            >
                <div className='flex items-center justify-center gap-2 mb-3'>
                    <span className='text-lg'>🥷</span>
                    <p className='text-sm text-neutral-400'>
                        Designed & Developed by{' '}
                        <a 
                            href='https://www.ninjadevs.app/' 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='text-purple-500 font-bold hover:text-purple-400 transition-colors duration-300 hover:underline'
                        >
                            NinjaDevs
                        </a>
                    </p>
                </div>
                <p className='text-xs text-neutral-500'>
                    © {new Date().getFullYear()} Mohammed Gamal. All rights reserved.
                </p>
            </motion.div>
        </footer>
        </>
     );
}
 
export default Footer;
