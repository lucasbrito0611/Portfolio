import Button from '../components/Button.jsx'
import Project from '../components/Project.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { projects } from '../data/projects.js'

import { IoMdDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useTranslation, Trans } from "react-i18next";

import DevVector from '../assets/vetor-dev.png'
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import tailwind from '../assets/skills/tailwind.png'
import javascript from '../assets/skills/javascript.png'
import react from '../assets/skills/react.png'
import wordpress from '../assets/skills/wordpress.png'
import python from '../assets/skills/python.png'
import django from '../assets/skills/django.png'
import vercel from '../assets/skills/vercel.png'
import github from '../assets/skills/github.png'
import AboutPhoto from '../assets/foto_sobre.png'

import { motion } from "framer-motion"
import { container, splitText, slideInFromTop, slideInFromBottom, slideInFromLeft, slideInFromRight } from "../animations/animations.jsx"

function Home() {
    const { t } = useTranslation()
    const downloadIcon = <IoMdDownload />

    const itemsPerRow = window.innerWidth >= 600 ? 2 : 1
    const groupedProjects = []

    for (let i = 0; i < projects.length; i += itemsPerRow) {
      groupedProjects.push(projects.slice(i, i + itemsPerRow))
    }
    
    return (
      <main className="flex flex-col gap-25 px-7 py-15 min-h-screen bg-dark-blue dt:px-60 nt-lg:px-40 nt-sm:px-30 tb:px-15" id="main-home">
        <section className='flex justify-between items-center'>
          <div className='dt:w-1/2 nt-sm:w-[55%] w-full'>
            <motion.p className='font-fira-code text-bright-green flex gap-[2px] whitespace-pre' variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {splitText(t("home.hero.greeting"))}
            </motion.p>
            <motion.h1 className='font-poppins text-light-blue my-2 text-5xl dt:text-9xl nt-lg:text-8xl nt-sm:text-[80px] tb:text-8xl mb:text-6xl flex gap-[2px] whitespace-pre' variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {splitText(t("home.hero.name", { name: "Lucas Brito" }))}
            </motion.h1>
            <motion.h4 className='font-poppins text-mid-blue text-base nt-lg:text-2xl nt-sm:text-xl tb:text-2xl mb:text-lg' variants={slideInFromLeft(1, 0.4)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              &lt;{t("home.hero.position")}&gt;
            </motion.h4>
            <motion.p className='font-poppins text-mid-blue my-9 text-[15px] nt-lg:text-lg nt-sm:text-base tb:text-base' variants={slideInFromLeft(1, 0.8)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {t("home.hero.description")}
            </motion.p>
            <motion.div variants={slideInFromBottom(1, 1)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <a href="https://drive.google.com/file/d/1TK4XYHg8rBmQERMHZreaefKoPb7i11aP/view?usp=sharing" target='_blank'>
                <Button text={t('home.hero.cv_text')} icon={downloadIcon} title={t('home.hero.cv_title')}/>
              </a>
            </motion.div>
          </div>
          <motion.div className='w-2/5 nt-lg:w-7/20 nt-sm:w-2/5 nt-sm:block hidden' variants={slideInFromBottom(1, 0.8)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src={DevVector} alt="Dev vector"/>
          </motion.div>
        </section>
        <section id='sobre' className='flex flex-col nt-lg:gap-15 gap-7'>
          <motion.h3 className='nt-sm:text-[40px] text-[35px] text-light-blue tb:text-left text-center font-fira-code' variants={slideInFromLeft(1.5, 0.6)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {t('home.about.title')}
          </motion.h3>
          <motion.div className='flex flex-col-reverse nt-sm:flex-row items-center nt-lg:gap-40 gap-15' variants={slideInFromTop(2, 0.8)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className='menu:relative nt-lg:w-[30%] nt-sm:w-2/5 tb:w-1/2 mb:w-[65%] w-[90%]' id='teste'>
              <img src={AboutPhoto} alt="Photo of the about section" className='w-full'/>
              <div className='menu:block hidden absolute bottom-[-3%] right-[-5%] bg-dark-blue text-bright-green font-poppins p-4 shadow-[5px_5px_5px_#000] z-0'>
                <p className='text-xl'>{t('home.about.age')}</p>
              </div>
            </div>
            {/* DESKTOP TEXT */}
            <p className='text-mid-blue leading-8 font-poppins text-[15px] nt-lg:text-lg nt-sm:text-base tb:text-base nt-lg:block hidden w-[60%]'>
              <Trans i18nKey="home.about.desktop.text_1" components={{ highlight: <span className="text-bright-green" /> }} />
              <br />
              <br />
              <Trans i18nKey="home.about.desktop.text_2" components={{ highlight: <span className="text-bright-green" /> }} />
            </p>
            {/* MOBILE TEXT */}
            <p className='text-mid-blue leading-8 font-poppins text-[15px] nt-lg:text-lg nt-sm:text-base tb:text-base nt-sm:block nt-lg:hidden nt-sm:w-[60%] nt-lg:w-full'>
              <Trans i18nKey="home.about.mobile.text_1" components={{ highlight: <span className="text-bright-green" /> }} />
              <br />
              <br />
              <Trans i18nKey="home.about.mobile.text_2" components={{ highlight: <span className="text-bright-green" /> }} />
            </p>
          </motion.div>
          <motion.div className='flex flex-wrap justify-center nt-lg:gap-13 nt-sm:gap-7 gap-10 mt-5 group' variants={slideInFromTop(1.5, 0.4)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src={html} alt="HTML" className='dt:w-14 nt-lg:w-12 nt-sm:w-10 tb:w-12 w-11 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='HTML'/>
            <img src={css} alt="CSS" className='dt:w-16 nt-lg:w-14 nt-sm:w-11 tb:w-14 w-13 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='CSS'/>
            <img src={tailwind} alt="Tailwind" className='dt:w-19 nt-lg:w-15 nt-sm:w-13 tb:w-15 w-14 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='Tailwind CSS'/>
            <img src={javascript} alt="Javascript" className='nt-lg:w-14 nt-sm:w-10 tb:w-14 w-12 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='JavaScript'/>
            <img src={react} alt="React" className='nt-lg:w-17 nt-sm:w-13 tb:w-17 w-13 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='React'/>
            <img src={wordpress} alt="Wordpress" className='nt-lg:w-15 nt-sm:w-12 tb:w-15 w-12 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='Wordpress'/>
            <img src={python} alt="Python" className='nt-lg:w-15 nt-sm:w-11 tb:w-15 w-12 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='Python'/>
            <img src={django} alt="Django" className='nt-lg:w-12 nt-sm:w-10 tb:w-12 w-10 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='Django'/>
            <img src={github} alt="Github" className='dt:w-16 nt-lg:w-15 nt-sm:w-12 tb:w-15 w-12 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='Github'/>
            <img src={vercel} alt="Vercel" className='dt:w-50 nt-lg:w-33 nt-sm:w-31 tb:w-45 w-31 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='Vercel'/>
          </motion.div>
        </section>
        <section id='projetos' className='flex flex-col gap-15'>
          <motion.h3 className='nt-sm:text-[40px] text-[35px] tb:text-left text-center text-light-blue font-fira-code' variants={slideInFromLeft(1, 0.4)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Meus Projetos
          </motion.h3>
          <div className='flex flex-col gap-y-12'>
            {groupedProjects.map((row, index) => (
            <motion.div
              key={index}
              variants={slideInFromBottom(1, 0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-between flex-wrap"
            >
              {row.map((project) => (
                <Project 
                  key={project.title}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  buttons={project.buttons}
                />
              ))}
            </motion.div>
            ))}
          </div>
        </section>
        <section id='contato' className='flex flex-col gap-15'>
          <motion.h3 className='nt-sm:text-[40px] text-[35px] tb:text-left text-center text-light-blue font-fira-code' variants={slideInFromLeft(1, 0.4)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {t('home.contact.title')}
          </motion.h3>
          <div className='flex nt-sm:flex-row flex-col items-center nt-lg:gap-60 nt-sm:gap-22 gap-15 '>
            <ContactForm />
            <motion.div className="relative dt:w-[30%] nt-lg:w-[38%] nt-sm:w-[43%] tb:w-[55%] mb-lg:w-[85%] w-full mb:h-auto h-85 aspect-square border-[1px] border-bright-green" variants={slideInFromTop(1, 0.4)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="flex flex-col tb:gap-13 gap-7 absolute left-[-3%] top-[-3%] nt-lg:p-10 p-7 w-full h-full aspect-square bg-dark-green">
                <motion.h5 className="font-fira-code text-light-blue text-center dt:text-2xl nt-lg:text-[22px] nt-sm:text-[19px] tb:text-[22px] text-lg" variants={slideInFromTop(1, 0.5)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {t('home.contact.card_title')}
                </motion.h5>
                <div className='flex flex-col tb:gap-8 gap-6'>
                  <motion.a href='https://github.com/lucasbrito0611' target='_blank' className='flex items-center gap-4 text-light-blue cursor-pointer' variants={slideInFromRight(1, 0.6)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="text-light-blue nt-lg:text-[30px] nt-sm:text-[26px] tb:text-[30px] text-[28px]">
                      <FaGithub />
                    </div>
                    <p className='nt-lg:text-xl nt-sm:text-lg tb:text-xl'>lucasbrito0611</p>
                  </motion.a>
                  <motion.a href='https://www.linkedin.com/in/lucasbrito06/' target='_blank' className='flex items-center gap-4 text-light-blue cursor-pointer' variants={slideInFromRight(1, 0.8)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="text-light-blue nt-lg:text-[30px] nt-sm:text-[26px] tb:text-[30px] text-[28px]">
                      <FaLinkedin />
                    </div>
                    <p className='nt-lg:text-xl nt-sm:text-lg tb:text-xl'>lucasbrito06</p>
                  </motion.a>
                  <motion.a href='https://instagram.com/lucasbritops' target='_blank' className='flex items-center gap-4 text-light-blue cursor-pointer' variants={slideInFromRight(1, 1)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="text-light-blue nt-lg:text-[30px] nt-sm:text-[26px] tb:text-[30px]  text-[28px]">
                      <FaInstagram />
                    </div>
                    <p className='nt-lg:text-xl nt-sm:text-lg tb:text-xl'>lucasbritops</p>
                  </motion.a>
                  <motion.div className='flex items-center gap-4 text-light-blue' variants={slideInFromRight(1, 1.2)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="text-light-blue nt-lg:text-[30px] nt-sm:text-[26px] tb:text-[30px] text-[28px]">
                      <MdOutlineEmail />
                    </div>
                    <p className='nt-lg:text-xl nt-sm:text-lg tb:text-xl'>lucasbps2006@gmail.com</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    )
}

export default Home