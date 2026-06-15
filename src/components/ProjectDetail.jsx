import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = PROJECTS.find(p => p.id === id);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [showVideo, setShowVideo] = useState(false);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl mb-4">Project Not Found</h2>
                    <Link to="/" className="text-blue-400 hover:text-blue-300">Return Home</Link>
                </div>
            </div>
        );
    }

    const allImages = project.images || [project.coverImage];
    const hasVideo = project.videos && project.videos.length > 0;

    const prevImage = () => setActiveImageIndex(i => (i - 1 + allImages.length) % allImages.length);
    const nextImage = () => setActiveImageIndex(i => (i + 1) % allImages.length);

    return (
        <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-red-600 selection:text-yellow-400'>
            {/* Background */}
            <div className='fixed top-0 -z-10 h-full w-full'>
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-black">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>
            </div>

            <div className="container mx-auto px-8 py-10">
                {/* Back Button */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500/10"
                    >
                        <FaArrowLeft /> Back to Portfolio
                    </Link>
                </motion.div>

                {/* Project Header */}
                <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-10">
                    <div className="border-l-4 border-red-600 pl-6 mb-2">
                        <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-2">{project.category} · {project.role}</p>
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent mb-3">
                            {project.title}
                        </h1>
                        <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-yellow-400"></div>
                    </div>
                </motion.div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Left / Main Column */}
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-2 space-y-8">

                        {/* Image Gallery */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-neutral-950 rounded-lg overflow-hidden border-2 border-red-900/50">
                                <img 
                                    src={allImages[activeImageIndex]} 
                                    alt={`${project.title} – image ${activeImageIndex + 1}`}
                                    className="w-full h-80 md:h-[420px] object-contain bg-neutral-950"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/800x400/1a1a1a/ef4444?text=Image+Not+Found'; }}
                                />
                                {allImages.length > 1 && (
                                    <>
                                        <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all border border-white/20 hover:border-yellow-400/50">
                                            <FaChevronLeft />
                                        </button>
                                        <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all border border-white/20 hover:border-yellow-400/50">
                                            <FaChevronRight />
                                        </button>
                                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                            {allImages.map((_, i) => (
                                                <button key={i} onClick={() => setActiveImageIndex(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeImageIndex ? 'bg-yellow-400 scale-125' : 'bg-white/40 hover:bg-white/70'}`} />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Thumbnail Strip */}
                        {allImages.length > 1 && (
                            <div className="flex gap-2 overflow-x-auto pb-2">
                                {allImages.map((img, i) => (
                                    <button key={i} onClick={() => setActiveImageIndex(i)} className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-all ${i === activeImageIndex ? 'border-yellow-400 opacity-100' : 'border-neutral-700 opacity-50 hover:opacity-80'}`}>
                                        <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Video Player */}
                        {hasVideo && (
                            <div className="bg-neutral-900/50 backdrop-blur-sm border border-red-900/30 rounded-lg p-5">
                                <h2 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center gap-2">
                                    <div className="w-1 h-5 bg-red-600"></div>
                                    Project Video
                                </h2>
                                {showVideo ? (
                                    <video controls autoPlay className="w-full rounded-lg border border-neutral-700" src={project.videos[0]}>
                                        Your browser does not support HTML5 video.
                                    </video>
                                ) : (
                                    <div className="relative cursor-pointer group/vid" onClick={() => setShowVideo(true)}>
                                        <img 
                                            src={allImages[0]} 
                                            alt="Video thumbnail" 
                                            className="w-full h-56 object-cover rounded-lg opacity-60"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-red-600 hover:bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl shadow-red-900/60 transition-all group-hover/vid:scale-110">
                                                <FaPlay className="ml-1" size={22} />
                                            </div>
                                        </div>
                                        <p className="text-center text-neutral-400 text-sm mt-2">Click to play video</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Description */}
                        <div className="bg-neutral-900/50 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center gap-2">
                                <div className="w-1 h-5 bg-red-600"></div>
                                Project Overview
                            </h2>
                            <p className="text-neutral-300 leading-relaxed">{project.description}</p>
                        </div>

                        {/* Highlights */}
                        {project.highlights && project.highlights.length > 0 && (
                            <div className="bg-neutral-900/50 backdrop-blur-sm border border-yellow-900/30 rounded-lg p-6">
                                <h2 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center gap-2">
                                    <div className="w-1 h-5 bg-yellow-500"></div>
                                    Key Contributions
                                </h2>
                                <ul className="space-y-3">
                                    {project.highlights.map((point, i) => (
                                        <motion.li 
                                            key={i} 
                                            initial={{ opacity: 0, x: -20 }} 
                                            animate={{ opacity: 1, x: 0 }} 
                                            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                                            className="flex gap-3 text-neutral-300 leading-relaxed"
                                        >
                                            <span className="text-red-500 mt-1 flex-shrink-0">▸</span>
                                            <span>{point}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Technologies */}
                        <div className="bg-neutral-900/50 backdrop-blur-sm border border-blue-900/30 rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
                                <div className="w-1 h-5 bg-blue-600"></div>
                                Technologies & Tools
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.5 + i * 0.07 }}
                                        className="px-4 py-2 bg-gradient-to-r from-red-900/30 to-blue-900/30 border border-red-600/50 rounded-lg text-yellow-300 font-medium hover:from-red-900/50 hover:to-blue-900/50 transition-all hover:scale-105"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="space-y-6">
                        {/* Quick Info */}
                        <div className="bg-neutral-900/50 backdrop-blur-sm border border-yellow-900/30 rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-4 text-yellow-400 flex items-center gap-2">
                                <div className="w-1 h-5 bg-yellow-500"></div>
                                Quick Info
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-start gap-2 pb-2 border-b border-neutral-700">
                                    <span className="text-neutral-400 flex-shrink-0">Category</span>
                                    <span className="text-red-400 font-semibold text-right">{project.category}</span>
                                </div>
                                <div className="flex justify-between items-start gap-2 pb-2 border-b border-neutral-700">
                                    <span className="text-neutral-400 flex-shrink-0">Role</span>
                                    <span className="text-blue-400 font-semibold text-right">{project.role}</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                                    <span className="text-neutral-400">Tools</span>
                                    <span className="text-yellow-400 font-semibold">{project.technologies.length}</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                                    <span className="text-neutral-400">Images</span>
                                    <span className="text-yellow-400 font-semibold">{allImages.length}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-neutral-400">Status</span>
                                    <span className="text-green-400 font-semibold">Completed</span>
                                </div>
                            </div>
                        </div>

                        {/* Other Projects */}
                        <div className="bg-neutral-900/50 backdrop-blur-sm border border-blue-900/30 rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-4 text-blue-400">Other Projects</h3>
                            <div className="space-y-2">
                                {PROJECTS.filter(p => p.id !== project.id).map((p) => (
                                    <Link
                                        key={p.id}
                                        to={`/project/${p.id}`}
                                        className="flex items-center gap-3 p-3 bg-neutral-800/50 hover:bg-neutral-700/50 rounded border border-neutral-700 hover:border-red-600/50 transition-all group/other"
                                    >
                                        <img src={p.coverImage} alt={p.title} className="w-12 h-10 object-cover rounded flex-shrink-0 opacity-70 group-hover/other:opacity-100 transition-opacity" />
                                        <p className="text-xs text-neutral-300 group-hover/other:text-yellow-400 transition-colors line-clamp-2 leading-tight">
                                            {p.title}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
