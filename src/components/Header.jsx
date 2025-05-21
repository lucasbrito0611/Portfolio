import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/logo.png";
import i18n from "../i18n";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLang(lng);
    };

    return (
        <header className="flex justify-between items-center sticky top-0 w-full px-7 py-1.5 shadow-header font-fira-code bg-dark-blue text-light-blue z-50 dt:px-60 nt-lg:px-40 nt-sm:px-30 tb:px-15">
            <h1>
                <Link to="/">
                    <img src={logo} alt="Logo do projeto" className="w-11" />
                </Link>
            </h1>
            <nav className="hidden tb:flex items-center gap-40">
                <ul className="flex gap-10 text-sm">
                    <li className="cursor-pointer hover:text-bright-green transition duration-400" onClick={() => document.getElementById("sobre")?.scrollIntoView()}>
                        {t("header.about")}
                    </li>
                    <li className="cursor-pointer hover:text-bright-green transition duration-400" onClick={() => document.getElementById("projetos")?.scrollIntoView()}>
                        {t("header.projects")}
                    </li>
                    <li className="cursor-pointer hover:text-bright-green transition duration-400" onClick={() => document.getElementById("contato")?.scrollIntoView()}>
                        {t("header.contact")}
                    </li>
                </ul>
                <div className="flex gap-5">
                    <button onClick={() => changeLanguage("pt")} className={`cursor-pointer border-b-2 pb-1 ${currentLang === "pt" ? "border-bright-green" : "border-transparent"}`}>
                        <img src="/flags/br.png" alt="Portuguese" title="Portuguese" className="w-7 h-auto" />
                    </button>
                    <button onClick={() => changeLanguage("en")} className={`cursor-pointer border-b-2 pb-1 ${currentLang === "en" ? "border-bright-green" : "border-transparent"}`}>
                        <img src="/flags/us.png" alt="English" title="English" className="w-7 h-auto" />
                    </button>
                </div>
            </nav>
            <div className="tb:hidden z-50">
                <button onClick={() => setMenuOpen(true)} className="cursor-pointer hover:text-white transition duration-400">
                    <FaBars size={40} />
                </button>
            </div>
            <AnimatePresence>
                {menuOpen && (
                    <>
                    <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" onClick={() => setMenuOpen(false)}></div>

                    <motion.nav
                        className="flex flex-col items-start fixed top-0 right-0 w-1/2 h-full bg-black pl-15 pt-20 z-50"
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                    >
                        <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 cursor-pointer">
                            <IoMdClose size={40} className="text-light-blue hover:text-white" />
                        </button>
                        <ul className="flex flex-col items-start gap-10 text-sm mt-10">
                            <li className="cursor-pointer hover:text-bright-green transition duration-400" onClick={() => { setMenuOpen(false); document.getElementById("sobre")?.scrollIntoView(); }}>
                                {t("header.about")}
                            </li>
                            <li className="cursor-pointer hover:text-bright-green transition duration-400" onClick={() => { setMenuOpen(false); document.getElementById("projetos")?.scrollIntoView(); }}>
                                {t("header.projects")}
                            </li>
                            <li className="cursor-pointer hover:text-bright-green transition duration-400" onClick={() => { setMenuOpen(false); document.getElementById("contato")?.scrollIntoView(); }}>
                                {t("header.contact")}
                            </li>
                        </ul>
                        <div className="flex gap-5 mt-10">
                            <button onClick={() => changeLanguage("pt")} className={`cursor-pointer border-b-2 pb-1 ${currentLang === "pt" ? "border-bright-green" : "border-transparent"}`}>
                                <img src="/flags/br.png" alt="Portuguese" title="Portuguese" className="w-6 h-auto" />
                            </button>
                            <button onClick={() => changeLanguage("en")} className={`cursor-pointer border-b-2 pb-1 ${currentLang === "en" ? "border-bright-green" : "border-transparent"}`}>
                                <img src="/flags/us.png" alt="English" title="English" className="w-6 h-auto" />
                            </button>
                        </div>
                    </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;