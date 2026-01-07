import Hero from '../components/sections/Hero.jsx';
import About from '../components/sections/About.jsx';
import Projects from '../components/sections/Projects.jsx';
import Contact from '../components/sections/Contact.jsx';

function Home() {

    return (
        <main className="flex flex-col gap-25 px-7 py-15 min-h-screen bg-dark-blue dt:px-60 nt-lg:px-40 nt-sm:px-30 tb:px-15" id="main-home">
            <Hero />
            <About />
            <Projects />
            <Contact />
        </main>
    )
}
export default Home