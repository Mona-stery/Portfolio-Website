import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"

const App = () => {

  return (
    <div className='overf
    low-x-hidden text-x-hideen text-neutral-300 anti-aliased selection:bg-cyan-900 selection:text-cyan-100'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className='container mx-auto px-8'>
        <Navbar /> 
        <Hero /> 
        <AboutMe />
        <Technologies />
        <Experience />
        <Projects />
        <Contacts />
      </div>
      
    </div>
  )
}

export default App
