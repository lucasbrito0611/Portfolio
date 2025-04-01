import Button from '../components/Button'
import { IoMdDownload } from "react-icons/io";
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

function Home() {
    const downloadIcon = <IoMdDownload />

    const handleDownload = () => {
      const link = document.createElement("a")
      link.href = "../../public/Curriculo.pdf"
      link.download = "Curriculo.pdf"
      link.click()
    }
    
    return (
      <main className="flex flex-col gap-25 px-7 py-15 min-h-screen bg-dark-blue dt:px-60 nt-lg:px-40 nt-sm:px-30 tb:px-15" id="main-home">
        <motion.section className='flex justify-between items-center' initial={{ opacity: 0, y: -50 }}  whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}  transition={{ duration: 1.2 }}>
          <div className='dt:w-1/2 nt-sm:w-[55%] w-full'>
            <p className='font-fira-code text-bright-green'>Olá, meu nome é</p>
            <h1 className='font-poppins text-light-blue my-2 text-5xl dt:text-9xl nt-lg:text-8xl nt-sm:text-[80px] tb:text-8xl mb:text-6xl'>Lucas Brito</h1>
            <h4 className='font-poppins text-mid-blue text-base nt-lg:text-2xl nt-sm:text-xl tb:text-2xl mb:text-lg'>&lt;/Desenvolvedor Full Stack&gt;</h4>
            <p className='font-poppins text-mid-blue my-9 text-[15px] nt-lg:text-lg nt-sm:text-base tb:text-base'>
              Eu desenvolvo aplicações web completas, atuando tanto no front-end com HTML, CSS, JS e React, quanto no back-end com Python e Django.
            </p>
            <Button text="Currículo" icon={downloadIcon} title="Baixar Currículo" onClick={handleDownload}/>
          </div>
          <div className='w-2/5 nt-lg:w-7/20 nt-sm:w-2/5 nt-sm:block hidden'>
            <img src={DevVector} alt="Dev vector"/>
          </div>
        </motion.section>
        <motion.section id='sobre' className='flex flex-col items-center gap-10' initial={{ opacity: 0, y: -50 }}  whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}  transition={{ duration: 1.2 }}>
          <h3 className='nt-sm:text-[40px] text-[35px] text-light-blue font-fira-code'>Sobre Mim</h3>
          <div className='flex flex-col-reverse nt-sm:flex-row items-center nt-lg:gap-40 gap-15'>
            <div className='menu:relative nt-lg:w-[30%] nt-sm:w-2/5 tb:w-1/2 mb:w-3/4' id='teste'>
              <img src={AboutPhoto} alt="Photo of the about section" className='w-full'/>
              <div className='menu:block hidden absolute bottom-[-3%] right-[-5%] bg-dark-blue text-bright-green font-poppins p-4 shadow-[5px_5px_5px_#000] z-0'>
                <p className='text-xl'>18 anos</p>
              </div>
            </div>
            {/* DESKTOP TEXT */}
            <p className='text-mid-blue leading-8 font-poppins text-[15px] nt-lg:text-lg nt-sm:text-base tb:text-base nt-lg:block hidden w-[60%]'>
              Atualmente estou no 4º e último ano do curso <span className='text-bright-green'>Técnico de Nível Médio em Informática para Internet, no IFRN - Natal Central.</span> Ao longo do curso, fui desenvolvendo minhas habilidades e aprimorando meus conhecimentos. Hoje, tenho experiência no desenvolvimento web, atuando tanto no <span className='text-bright-green'>front-end</span> quanto no <span className='text-bright-green'>back-end</span>. No 3º ano aprendi sobre <span className='text-bright-green'>Banco de Dados</span> e no 4º ano temos um projeto completo a ser feito com <span className='text-bright-green'>React</span>, que tenho certeza que irá aprimorar meus conhecimentos nesse framework tão utilizado hoje em dia.
              <br />
              <br />
              Meu primeiro — e, por enquanto, único — contato com o mercado de trabalho foi como <span className='text-bright-green'>bolsista no Centro de Soluções Aplicadas (CSA),</span> uma empresa conectada ao IFRN. Durante o trabalho, aprendi a usar diversas ferramentas do <span className='text-bright-green'>Wordpress</span> e tive a <span className='text-bright-green'>experiência de lidar com um cliente</span> pela primeira vez.
            </p>
            {/* MOBILE TEXT */}
            <p className='text-mid-blue leading-8 font-poppins text-[15px] nt-lg:text-lg nt-sm:text-base tb:text-base nt-sm:block nt-lg:hidden nt-sm:w-[60%] nt-lg:w-full'>
              Estou no 4º ano do curso <span className='text-bright-green'>Técnico de Nível Médio em Informática para Internet, no IFRN - Natal Central.</span> Tenho experiência no desenvolvimento web, atuando no <span className='text-bright-green'>front-end</span> e <span className='text-bright-green'>back-end</span>. No 3º ano aprendi sobre <span className='text-bright-green'>Banco de Dados</span> e no 4º ano estamos desenvolvendo um projeto completo com <span className='text-bright-green'>React</span>, que irá aprimorar meus conhecimentos nesse framework tão utilizado.
              <br />
              <br />
              Meu primeiro contato com o mercado de trabalho foi como <span className='text-bright-green'>bolsista no Centro de Soluções Aplicadas (CSA),</span> onde trabalhei com <span className='text-bright-green'>Wordpress</span> e tive a <span className='text-bright-green'>experiência de lidar com um cliente</span> pela primeira vez.
            </p>
          </div>
          <motion.div className='flex flex-wrap justify-center nt-lg:gap-13 nt-sm:gap-7 gap-10 mt-10 group' initial={{ opacity: 0, y: -50 }}  whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}  transition={{ duration: 1.2 }}>
            <img src={html} alt="HTML" className='dt:w-15 nt-lg:w-12 nt-sm:w-10 tb:w-12 w-11 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='HTML'/>
            <img src={css} alt="CSS" className='dt:w-17 nt-lg:w-14 nt-sm:w-11 tb:w-14 w-13 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='CSS'/>
            <img src={tailwind} alt="Tailwind" className='dt:w-23 nt-lg:w-15 nt-sm:w-13 tb:w-15 w-14 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='Tailwind CSS'/>
            <img src={javascript} alt="Javascript" className='dt:w-18 nt-lg:w-14 nt-sm:w-10 tb:w-14 w-12 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='JavaScript'/>
            <img src={react} alt="React" className='dt:w-21 nt-lg:w-17 nt-sm:w-13 tb:w-17 w-13 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='React'/>
            <img src={wordpress} alt="Wordpress" className='dt:w-19 nt-lg:w-15 nt-sm:w-12 tb:w-15 w-12 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='Wordpress'/>
            <img src={python} alt="Python" className='dt:w-19 nt-lg:w-15 nt-sm:w-11 tb:w-15 w-12 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='Python'/>
            <img src={django} alt="Django" className='dt:w-15 nt-lg:w-12 nt-sm:w-10 tb:w-12 w-10 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='Django'/>
            <img src={github} alt="Github" className='dt:w-19 nt-lg:w-15 nt-sm:w-12 tb:w-15 w-12 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='Github'/>
            <img src={vercel} alt="Vercel" className='dt:w-60 nt-lg:w-33 nt-sm:w-31 tb:w-45 w-31 h-auto transition-all duration-300 group-hover:opacity-50 hover:opacity-100 hover:scale-110' title='Vercel'/>
          </motion.div>

        </motion.section>
      </main>
    )
}

export default Home