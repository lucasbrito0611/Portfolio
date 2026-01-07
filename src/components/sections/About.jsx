import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";

import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css.png'
import javascript from '../../assets/skills/javascript.png'
import typescript from '../../assets/skills/typescript.png'
import react from '../../assets/skills/react.png'
import next from '../../assets/skills/nextjs.png'
import tailwind from '../../assets/skills/tailwind.png'
import bootstrap from '../../assets/skills/bootstrap.png'
import wordpress from '../../assets/skills/wordpress.png'
import python from '../../assets/skills/python.png'
import django from '../../assets/skills/django.png'
import git from '../../assets/skills/git.png'
import AboutPhoto from '../../assets/foto_sobre.png'

import { slideInFromTop, slideInFromLeft } from "../../animations/animations.jsx"

const About = () => {
    const { t } = useTranslation();

    return (
        <section id='sobre' className='flex flex-col nt-lg:gap-15 gap-7'>
            <motion.h3 className='nt-sm:text-[40px] text-[35px] text-light-blue tb:text-left text-center font-fira-code' variants={slideInFromLeft(1.5, 0.6)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {t('home.about.title')}
            </motion.h3>
            <motion.div className='flex flex-col-reverse nt-sm:flex-row items-center nt-lg:gap-40 gap-15' variants={slideInFromTop(2, 0.8)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className='menu:relative nt-lg:w-[30%] nt-sm:w-2/5 tb:w-1/2 mb:w-[65%] w-[90%]' id='teste'>
                    <img src={AboutPhoto} alt="Photo of the about section" className='w-full aspect-square object-cover' />
                    <div className='menu:block hidden absolute bottom-[-3%] right-[-5%] bg-dark-blue text-bright-green font-poppins p-4 shadow-[5px_5px_5px_#000] z-0'>
                        <p className='text-xl'>{t('home.about.age')}</p>
                    </div>
                </div>
                {/* DESKTOP TEXT */}
                <p className='text-mid-blue leading-8 font-poppins text-[15px] nt-lg:text-lg nt-sm:text-base tb:text-base nt-lg:block hidden w-[60%]'>
                    <Trans
                        i18nKey="home.about.desktop.text_1"
                        components={{ highlight: <span className="text-bright-green" /> }} 
                    />
                    <br />
                    <br />
                    <Trans
                        i18nKey="home.about.desktop.text_2"
                        components={{
                            highlight: <span className="text-bright-green" />,
                            link1: (
                                <a
                                    href="https://csa.cnat.ifrn.edu.br/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                />
                            ),
                            link2: (
                                <a
                                    href="https://www.maxmeio.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                />
                            )
                        }} 
                    />
                </p>
                {/* MOBILE TEXT */}
                <p className='text-mid-blue leading-8 font-poppins text-[15px] nt-lg:text-lg nt-sm:text-base tb:text-base nt-sm:block nt-lg:hidden nt-sm:w-[60%] nt-lg:w-full'>
                    <Trans i18nKey="home.about.mobile.text_1" components={{ highlight: <span className="text-bright-green" /> }} />
                    <br />
                    <br />
                    <Trans
                        i18nKey="home.about.desktop.text_2"
                        components={{
                            highlight: <span className="text-bright-green" />,
                            link1: (
                                <a
                                    href="https://csa.cnat.ifrn.edu.br/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                />
                            ),
                            link2: (
                                <a
                                    href="https://www.maxmeio.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                />
                            )
                        }} 
                    />
                </p>
            </motion.div>
            <motion.div className='flex flex-wrap justify-center nt-lg:gap-10 gap-7 mt-5 group' variants={slideInFromTop(1.5, 0.4)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <img src={html} alt="HTML" className='dt:w-14 nt-lg:w-12 nt-sm:w-12 tb:w-12 w-11 skills' title='HTML' />
                <img src={css} alt="CSS" className='dt:w-16 nt-sm:w-14 tb:w-14 w-13 skills' title='CSS' />
                <img src={javascript} alt="Javascript" className='nt-lg:w-15 nt-sm:w-13 tb:w-15 w-13 skills' title='JavaScript' />
                <img src={typescript} alt="Typescript" className='nt-lg:w-15 nt-sm:w-13 tb:w-15 w-13 skills' title='TypeScript' />
                <img src={react} alt="React" className='nt-lg:w-18 nt-sm:w-15 tb:w-17 w-13 skills' title='React' />
                <img src={next} alt="NextJS" className='nt-lg:w-17 nt-sm:w-15 tb:w-17 w-13 skills' title='NextJS' />
                <img src={tailwind} alt="Tailwind" className='dt:w-19 nt-lg:w-15 nt-sm:w-15 tb:w-15 w-14 skills' title='Tailwind CSS' />
                <img src={bootstrap} alt="Bootstrap" className='nt-lg:w-19 nt-sm:w-16 tb:w-15 w-14 skills' title='Bootstrap' />
                <img src={wordpress} alt="Wordpress" className='nt-lg:w-16 nt-sm:w-13 tb:w-15 w-12 skills' title='Wordpress' />
                <img src={python} alt="Python" className='nt-lg:w-15 nt-sm:w-13 tb:w-15 w-12 skills' title='Python' />
                <img src={django} alt="Django" className='nt-lg:w-12 nt-sm:w-10 tb:w-12 w-10 skills' title='Django' />
                <img src={git} alt="Git" className='dt:w-17 nt-lg:w-15 nt-sm:w-13 tb:w-15 w-12 skills' title='Git' />
            </motion.div>
        </section>
    )
}

export default About;