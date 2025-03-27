import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import logo from '../assets/logo.png'

function Header() {
    const [isMobile, setIsMobile] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const reSize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        reSize()
        window.addEventListener("resize", reSize)

        return () => {
            window.removeEventListener("resize", reSize);
        }
    }, [])

    return (
        <header className="flex justify-between items-center fixed w-full nt-lg:px-60 nt-sm:px-30 tb:px-15 px-7 py-1.5 font-fira-code bg-dark-blue text-light-blue shadow-header">
            <h1>
                <Link to="/">
                    <img src={logo} alt="Logo do projeto" className="w-11"/>
                </Link>
            </h1>

            {isMobile ? (
                <>
                    {menuOpen && (
                        <>
                            <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10" onClick={() => setMenuOpen(false)}></div>

                            <nav className="flex flex-col items-start fixed top-0 left-0 w-4/5 h-full bg-black pl-15 pt-20 z-30">
                                <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 cursor-pointer">
                                    <IoMdClose size={40} className="text-light-blue hover:text-white" />
                                </button>
                                <ul className="flex flex-col items-start gap-10 text-sm">
                                    <li className="cursor-pointer hover:text-white transition duration-400">Sobre</li>
                                    <li className="cursor-pointer hover:text-white transition duration-400">Habilidades</li>
                                    <li className="cursor-pointer hover:text-white transition duration-400">Projetos</li>
                                    <li className="cursor-pointer hover:text-white transition duration-400">Contato</li>
                                </ul>
                            </nav>
                        </>
                    )}

                    <button onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer hover:text-white transition duration-400 z-20">
                        <FaBars size={40} />
                    </button>
                </>
            ) : (
                <nav className="flex items-center gap-40">
                    <ul className="flex gap-10 text-sm">
                        <li className="cursor-pointer hover:text-white transition duration-400">Sobre</li>
                        <li className="cursor-pointer hover:text-white transition duration-400">Habilidades</li>
                        <li className="cursor-pointer hover:text-white transition duration-400">Projetos</li>
                        <li className="cursor-pointer hover:text-white transition duration-400">Contato</li>
                    </ul>
                </nav>
            )}

        </header>
    )
}

export default Header