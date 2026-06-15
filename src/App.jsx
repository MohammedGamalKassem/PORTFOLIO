import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Certifications from './components/Certifications';
import SoftSkills from './components/SoftSkills';
import Experiences from './components/Experience';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function Page(){
  return(
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-red-600 selection:text-yellow-400'>
    <div className='fixed top-0 -z-10 h-full w-full'>
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-black">
      {/* Grid pattern for aerospace/technical look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      {/* Red glow effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      {/* Blue accent */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      {/* Yellow accent */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
    </div>
    <div className="container mx-auto px-8">
    <NavBar/>
    <Hero/>
    <About/>
    <Technologies/>
    <Experiences/>
    <Projects/>
    <Certifications/>
    <SoftSkills/>
    <Contact/>
    <Footer/>
    </div>
    </div>
  )
}
const App = () => {
  const basename = import.meta.env.BASE_URL ?? '/';
  return ( 
    <Router basename={basename}>
  <Routes>
    <Route path='/' element={<Page/>}/>
    <Route path='/project/:id' element={<ProjectDetail/>}/>
  </Routes>
  </Router> );
}
 
export default App;