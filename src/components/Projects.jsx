import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
    return ( 
        <>
        <div className="border-b border-neutral-900 pb-24">
        <motion.h2 
            whileInView={{opacity:1,y:0}} 
            initial={{y:-100,opacity:0}} 
            transition={{duration:0.5}} 
            className='my-20 text-center text-4xl bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent font-bold'
        >
            Engineering Projects
        </motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
                <motion.div 
                    key={project.id} 
                    whileInView={{opacity:1,y:0}} 
                    initial={{y:50,opacity:0}} 
                    transition={{duration:0.6, delay: index * 0.1}}
                    className='mb-12 group'
                >
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                        
                        <div className='relative flex flex-wrap lg:justify-center bg-neutral-900/50 backdrop-blur-sm border-2 border-red-900/30 group-hover:border-red-600/50 rounded-lg p-6 transition-all duration-300'>
                            {/* Project Image */}
                            <motion.div 
                                whileInView={{opacity:1,x:0}} 
                                initial={{x:-100,opacity:0}} 
                                transition={{duration:1}} 
                                className='w-full lg:w-1/4 mb-6 lg:mb-0'
                            >
                                <Link to={`/project/${project.id}`}>
                                    <div className="relative overflow-hidden rounded-lg border-2 border-red-700/50 group-hover:border-yellow-500/70 transition-all duration-300">
                                        <img 
                                            src={project.coverImage} 
                                            alt={project.title} 
                                            className='w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500'
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/400x300/1a1a1a/ef4444?text=Project';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                            <span className="text-yellow-400 font-semibold">View Details</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div> 
                            
                            {/* Project Info */}
                            <motion.div 
                                whileInView={{opacity:1,x:0}} 
                                initial={{x:100,opacity:0}} 
                                transition={{duration:1}} 
                                className="w-full max-w-xl lg:w-3/4 lg:pl-8"
                            >
                                <div className="border-l-4 border-red-600 pl-4 mb-1">
                                    <h6 className='text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors'>{project.title}</h6>
                                    <p className="text-xs text-red-400 font-semibold uppercase tracking-widest mt-1">{project.role}</p>
                                </div>
                                
                                <p className='my-3 text-neutral-300 leading-relaxed line-clamp-3'>{project.description}</p>
                                
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex} 
                                            className='rounded-lg bg-gradient-to-r from-red-900/40 to-blue-900/40 border border-red-600/50 text-yellow-300 font-medium px-3 py-1 text-xs hover:from-red-900/60 hover:to-blue-900/60 transition-all'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <Link 
                                    to={`/project/${project.id}`}
                                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group/link"
                                >
                                    <span>View Full Project</span>
                                    <FaArrowRight className="transform group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
        </div>
        </>
     );
}
 
export default Projects;
