import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import Project from '../../components/Project.jsx';
import { projects } from '../../data/projects.js'
import { slideInFromBottom, slideInFromLeft } from "../../animations/animations.jsx"

const Projects = () => {
    const { t } = useTranslation();

    const itemsPerRow = window.innerWidth >= 600 ? 2 : 1
    const groupedProjects = []

    for (let i = 0; i < projects.length; i += itemsPerRow) {
        groupedProjects.push(projects.slice(i, i + itemsPerRow))
    }

    return (
        <section id='projetos' className='flex flex-col gap-15'>
            <motion.h3 className='nt-sm:text-[40px] text-[35px] tb:text-left text-center text-light-blue font-fira-code' variants={slideInFromLeft(1, 0.4)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {t('home.projects.title')}
            </motion.h3>
            <div className='flex flex-col gap-y-12'>
                {groupedProjects.map((row, index) => (
                    <motion.div
                        key={index}
                        variants={slideInFromBottom(1, 0.3)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex justify-between gap-y-10 flex-wrap"
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
    )
}

export default Projects;