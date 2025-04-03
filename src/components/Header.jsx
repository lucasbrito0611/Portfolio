import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion"


import logo from '../assets/logo.png'

function Header() {
    const [isMobile, setIsMobile] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const reSize = () => {
            setIsMobile(window.innerWidth <= 425)
        }

        reSize()
        window.addEventListener("resize", reSize)

        return () => {
            window.removeEventListener("resize", reSize);
        }
    }, [])

    return (
        <header className="flex justify-between items-center sticky w-full px-7 py-1.5 shadow-header font-fira-code bg-dark-blue text-light-blue dt:px-60 nt-lg:px-40 nt-sm:px-30 tb:px-15">
            <h1>
                <Link to="/">
                    <img src={logo} alt="Logo do projeto" className="w-11"/>
                </Link>
            </h1>

            {isMobile ? (
                <>
                    <AnimatePresence>
                        {menuOpen && (
                            <>
                                <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" onClick={() => setMenuOpen(false)}></div>

                                <motion.nav className="flex flex-col items-start fixed top-0 right-0 w-1/2 h-full bg-black pl-15 pt-20 z-50"
                                initial={{ x: "100%" }} 
                                animate={{ x: menuOpen ? "0%" : "100%" }}
                                exit={{ x: "100%" }} 
                                transition={{ duration: 0.5 }}
                                >
                                    <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 cursor-pointer">
                                        <IoMdClose size={40} className="text-light-blue hover:text-white" />
                                    </button>
                                    <ul className="flex flex-col items-start gap-10 text-sm">
                                        <li className="cursor-pointer hover:text-bright-green transition duration-400" onClick={() => document.getElementById("sobre")?.scrollIntoView()}>Sobre</li>
                                        <li className="cursor-pointer hover:text-bright-green transition duration-400" onClick={() => document.getElementById("projetos")?.scrollIntoView()}>Projetos</li>
                                        <li className="cursor-pointer hover:text-bright-green transition duration-400" onClick={() => document.getElementById("contato")?.scrollIntoView()}>Contato</li>
                                    </ul>
                                </motion.nav>
                            </>
                        )}
                    </AnimatePresence>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer hover:text-white transition duration-400 z-20">
                        <FaBars size={40} />
                    </button>
                </>
            ) : (
                <nav className="flex items-center gap-40">
                    <ul className="flex gap-10 text-sm">
                        <li className="cursor-pointer hover:text-bright-green transition duration-400" onClick={() => document.getElementById("sobre")?.scrollIntoView()}>Sobre</li>
                        <li className="cursor-pointer hover:text-bright-green transition duration-400" onClick={() => document.getElementById("projetos")?.scrollIntoView()}>Projetos</li>
                        <li className="cursor-pointer hover:text-bright-green transition duration-400" onClick={() => document.getElementById("contato")?.scrollIntoView()}>Contato</li>
                    </ul>
                </nav>
            )}

        </header>
    )
}

export default Header