import { useState, useEffect } from "react";
import Button from '../components/Button'
import { IoMdDownload } from "react-icons/io";
import DevVector from '../assets/vetor-dev.png'

function Home() {
    const downloadIcon = <IoMdDownload />

    const handleDownload = () => {
      const link = document.createElement("a")
      link.href = "../../public/Curriculo.pdf"
      link.download = "Curriculo.pdf"
      link.click()
    }
    
    return (
      <main className="px-7 py-15 min-h-screen bg-dark-blue dt:px-60 nt-lg:px-40 nt-sm:px-30 tb:px-15">
        <section className='flex justify-between items-center'>
          <div className='dt:w-1/2 nt-sm:w-[55%] w-full'>
            <p className='font-fira-code text-bright-green'>Olá, meu nome é</p>
            <h1 className='font-poppins text-light-blue my-2 text-5xl dt:text-9xl nt-lg:text-8xl nt-sm:text-[80px] tb:text-8xl mb:text-6xl'>Lucas Brito</h1>
            <h4 className='font-poppins text-mid-blue text-base nt-lg:text-2xl nt-sm:text-xl tb:text-2xl mb:text-lg'>&lt;/Desenvolvedor Full Stack&gt;</h4>
            <p className='font-poppins text-mid-blue my-9 text-[15px] nt-lg:text-lg nt-sm:text-base tb:text-base'>
              Eu desenvolvo aplicações web completas, atuando tanto no front-end com HTML, CSS, JS e React, quanto no back-end com Python e Django.
            </p>
            <Button text="Currículo" icon={downloadIcon} onClick={handleDownload}/>
          </div>
          <div className='w-2/5 nt-lg:w-7/20 nt-sm:w-2/5 nt-sm:block hidden'>
            <img src={DevVector} alt="Vetor do Dev"/>
          </div>
        </section>
      </main>
    )
}

export default Home