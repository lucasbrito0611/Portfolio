import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import ContactForm from '../../components/ContactForm.jsx'
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "../../animations/animations.jsx";

const Contact = () => {
    const { t } = useTranslation();

    return (
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
    );
}

export default Contact;