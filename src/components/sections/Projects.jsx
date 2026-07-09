import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import Project from '../../components/Project.jsx';
import { getAllProjects } from '../../services/projects.service.js';
import { slideInFromBottom, slideInFromLeft } from "../../animations/animations.jsx"

const Projects = () => {
    const { t, i18n } = useTranslation();

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllProjects()
            .then((data) => setProjects(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    // Agrupa os projetos em linhas de 2 (ou 1 em mobile)
    const itemsPerRow = window.innerWidth >= 600 ? 2 : 1;
    const groupedProjects = [];
    for (let i = 0; i < projects.length; i += itemsPerRow) {
        groupedProjects.push(projects.slice(i, i + itemsPerRow));
    }

    // Determina qual campo de título/descrição usar com base no idioma ativo
    const lang = i18n.language?.startsWith('en') ? 'en' : 'pt';

    return (
        <section id='projetos' className='flex flex-col gap-15'>
            <motion.h3
                className='nt-sm:text-[40px] text-[35px] tb:text-left text-center text-light-blue font-fira-code'
                variants={slideInFromLeft(1, 0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {t('home.projects.title')}
            </motion.h3>

            {loading && (
                <div className="flex items-center justify-center py-10">
                    <div className="flex items-center gap-3 text-mid-blue font-fira-code text-sm">
                        <svg className="animate-spin w-4 h-4 text-bright-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Carregando projetos...
                    </div>
                </div>
            )}

            {error && (
                <p className="text-red-400 font-fira-code text-sm text-center">
                    Erro ao carregar projetos: {error}
                </p>
            )}

            {!loading && !error && (
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
                                    key={project.id}
                                    image={project.imageUrl}
                                    title={lang === 'en' ? project.title_en : project.title_pt}
                                    description={lang === 'en' ? project.description_en : project.description_pt}
                                    technologies={project.technologies}
                                    buttons={{
                                        site: project.siteUrl ?? null,
                                        github: project.githubUrl ?? null,
                                        githubBackend: project.githubUrlBackend ?? null,
                                    }}
                                />
                            ))}
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Projects;