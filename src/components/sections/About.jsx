import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";

import AboutPhoto from '../../assets/foto_sobre.png'

import Skills from "../Skills";
import { slideInFromTop, slideInFromLeft } from "../../animations/animations.jsx";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre" className="flex flex-col nt-lg:gap-15 gap-7">
      <motion.h3
        className="nt-sm:text-[40px] text-[35px] text-light-blue tb:text-left text-center font-fira-code"
        variants={slideInFromLeft(1.5, 0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {t("home.about.title")}
      </motion.h3>
      <motion.div
        className="flex flex-col-reverse nt-sm:flex-row items-center nt-lg:gap-40 gap-15"
        variants={slideInFromTop(2, 0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div
          className="menu:relative nt-lg:w-[30%] nt-sm:w-2/5 tb:w-1/2 mb:w-[65%] w-[90%]"
          id="teste"
        >
          <img
            src={AboutPhoto}
            alt="Photo of the about section"
            className="w-full aspect-square object-cover"
          />
          <div className="menu:block hidden absolute bottom-[-3%] right-[-5%] bg-dark-blue text-bright-green font-poppins p-4 shadow-[5px_5px_5px_#000] z-0">
            <p className="text-xl">{t("home.about.age")}</p>
          </div>
        </div>
        {/* DESKTOP TEXT */}
        <p className="text-mid-blue leading-8 font-poppins text-[15px] nt-lg:text-lg nt-sm:text-base tb:text-base nt-lg:block hidden w-[60%]">
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
              ),
            }}
          />
        </p>
        {/* MOBILE TEXT */}
        <p className="text-mid-blue leading-8 font-poppins text-[15px] nt-lg:text-lg nt-sm:text-base tb:text-base nt-sm:block nt-lg:hidden nt-sm:w-[60%] nt-lg:w-full">
          <Trans
            i18nKey="home.about.mobile.text_1"
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
              ),
            }}
          />
        </p>
      </motion.div>

      <Skills />
    </section>
  );
};

export default About;
