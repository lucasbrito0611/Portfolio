import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Button from '../components/Button.jsx'

import { motion } from "framer-motion"
import { slideInFromLeft } from "../animations/animations.jsx"


function ContactForm() {
    const { t } = useTranslation();
    const form = useRef()
    const [status, setStatus] = useState("")

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const sendEmail = (e) => {
      e.preventDefault()

      emailjs.sendForm(
          serviceID, 
          templateID,
          form.current,
          publicKey
        )
        .then(
          (result) => {
            setStatus("E-mail enviado com sucesso!")
            form.current.reset()
          },
          (error) => {
            setStatus("Erro ao enviar o e-mail. Tente novamente.")
          }
        )
    }
    if (status != "") {
      alert(status)
      setStatus('')
    }

    return (
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-12 nt-lg:w-1/2 nt-sm:w-[45%] w-full'>
            <motion.div className='flex flex-col gap-4' variants={slideInFromLeft(1, 0.6)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label htmlFor="name" className='text-light-blue nt-sm:text-[22px] text-xl font-fira-code'>E-mail:</label>
                <input type="text" name='name' id="name" placeholder={t("contactForm.email_placeholder")} required className='pb-3 pl-3 outline-none text-mid-blue text-lg border-b-[1px] border-bright-green'/>
            </motion.div>
            <motion.div className='flex flex-col gap-2' variants={slideInFromLeft(1, 0.8)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label htmlFor="subject" className='text-light-blue nt-sm:text-[22px] text-xl font-fira-code'>{t("contactForm.subject_title")}</label>
                <input type="text" name='subject' id="subject" placeholder={t("contactForm.subject_placeholder")} required className='pb-3 pl-3 outline-none text-mid-blue text-lg border-b-[1px] border-bright-green'/>
            </motion.div>
            <motion.div className='flex flex-col gap-2' variants={slideInFromLeft(1, 1)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label htmlFor="message" className='text-light-blue nt-sm:text-[22px] text-xl font-fira-code'>{t("contactForm.message_title")}</label>
                <textarea name="message" id="message" placeholder={t("contactForm.message_placeholder")} required className='pb-10 pl-3 outline-none text-mid-blue text-lg border-b-[1px] border-bright-green'></textarea>
            </motion.div>
            <motion.div variants={slideInFromLeft(1, 1.2)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Button text={t("contactForm.btn_text")} title="Enviar formulário"/>
            </motion.div>
        </form>
    )
}

export default ContactForm;