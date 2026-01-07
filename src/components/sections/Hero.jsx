import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { IoMdDownload } from "react-icons/io";
import DevVector from '../../assets/vetor-dev.png'

import Button from '../../components/Button'
import { container, splitText, slideInFromBottom, slideInFromLeft } from "../../animations/animations"


const Hero = () => {
    const { t } = useTranslation();
    const downloadIcon = <IoMdDownload />;

	return (
        <section className='flex justify-between items-center'>
            <div className='dt:w-1/2 nt-sm:w-[55%] w-full'>
                <motion.p className='font-fira-code text-bright-green flex gap-[2px] whitespace-pre' variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {splitText(t("home.hero.greeting"))}
                </motion.p>
                <motion.h1 className='font-poppins text-light-blue my-2 text-5xl dt:text-9xl nt-lg:text-8xl nt-sm:text-[80px] tb:text-8xl mb:text-6xl flex gap-[2px] whitespace-pre' variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {splitText(t("home.hero.name", { name: "Lucas Brito" }))}
                </motion.h1>
                <motion.h4 className='font-poppins text-mid-blue text-base nt-lg:text-2xl nt-sm:text-xl tb:text-2xl mb:text-lg' variants={slideInFromLeft(1, 0.4)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    &lt;/{t("home.hero.position")}&gt;
                </motion.h4>
                <motion.p className='font-poppins text-mid-blue my-9 text-[15px] nt-lg:text-lg nt-sm:text-base tb:text-base' variants={slideInFromLeft(1, 0.8)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {t("home.hero.description")}
                </motion.p>
                <motion.div variants={slideInFromBottom(1, 1)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <a href="https://drive.google.com/file/d/15tFoiZ-JDQuQJbuQZJoTwkq-YHsa1kdp/view?usp=sharing" target='_blank'>
                        <Button text={t('home.hero.cv_text')} icon={downloadIcon} title={t('home.hero.cv_title')} />
                    </a>
                </motion.div>
            </div>
            <motion.div className='w-2/5 nt-lg:w-7/20 nt-sm:w-2/5 nt-sm:block hidden' variants={slideInFromBottom(1, 0.8)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <img src={DevVector} alt="Dev vector" />
            </motion.div>
        </section>
    )
}

export default Hero;