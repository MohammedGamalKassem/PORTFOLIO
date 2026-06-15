import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
const NavBar = () => {
    return ( 
        <>
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center logo">
               <Link to="/"> <h3 className='text-2xl font-bold'> Mohammed G. Kassem </h3> </Link> 
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
               <a href='https://www.linkedin.com/in/mohammed-gk' target="_blank" rel="noopener noreferrer"> <FaLinkedin/> </a>
               <a href='https://github.com/MohammedGK' target="_blank" rel="noopener noreferrer"> <FaGithub/></a>
               {/* <a href='https://www.instagram.com/'> <FaInstagram/></a> */}
               {/* <a href='https://www.facebook.com/'> <FaFacebook/></a> */}
            </div>
        </nav>
        </>
     );
}
 
export default NavBar;