import { useState, useRef, useEffect } from 'react';
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import Button from '../components/Button.jsx'

function Project({image, title, description, technologies, buttons}) {

    const siteIcon = <IoIosLink />
    const githubIcon = <FaGithub />

    // Controla visibilidade do dropdown de GitHub
    const [githubOpen, setGithubOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Fecha o dropdown ao clicar fora
    useEffect(() => {
        if (!githubOpen) return;
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setGithubOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [githubOpen]);

    // true quando o projeto tem dois repositórios separados
    const hasTwoRepos = Boolean(buttons.github && buttons.githubBackend);

    return (
        <div className='flex dt:flex-row flex-col dt:items-center gap-8 dt:px-5 nt-lg:px-15 px-7 py-7 rounded-[10px] dt:w-[49%] pj:w-[45%] bg-[#081426]'>
            <div className='dt:w-1/2'>
                <img src={image} alt="Imagem do projeto" className='w-full aspect-[390/250] object-cover rounded-[10px]'/>
            </div>
            <div className='flex flex-col gap-4 dt:w-1/2'>
                <h4 className='text-light-blue text-[27px] font-fira-code font-semibold'>{title}</h4>
                <div className='flex flex-col  gap-3'>
                    <p className='text-mid-blue text-[16px]'>{description}</p>
                    <div className='flex gap-2 flex-wrap'>
                        {technologies.map((technology, index) => (
                            <div key={index} className='px-2.5 py-1 text-bright-green text-xs bg-dark-green rounded-[60px]'>
                                {technology}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-wrap gap-4 mt-2'>
                    {/* Botão de site */}
                    {buttons.site && (
                        <a href={buttons.site} target='_blank' rel='noopener noreferrer'>
                            <Button text="Site" icon={siteIcon} title="Acessar site"/>
                        </a>
                    )}

                    {/* GitHub com dropdown (dois repos) ou link direto (um repo) */}
                    {hasTwoRepos ? (
                        // Dropdown: projeto tem frontend + backend separados
                        <div className='relative' ref={dropdownRef}>
                            <button
                                onClick={() => setGithubOpen((prev) => !prev)}
                                title="Ver repositórios no GitHub"
                                aria-expanded={githubOpen}
                            >
                                <Button text="GitHub" icon={githubIcon} />
                            </button>

                            {githubOpen && (
                                <div className='absolute left-0 top-full mt-2 z-20 flex flex-col min-w-[160px] rounded-lg border border-mid-blue/20 bg-[#0a1a2e] shadow-xl shadow-black/40 overflow-hidden'>
                                    <a
                                        href={buttons.github}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        onClick={() => setGithubOpen(false)}
                                        className='flex items-center gap-2.5 px-4 py-3 font-fira-code text-xs text-mid-blue hover:text-bright-green hover:bg-dark-green/40 transition-colors duration-150'
                                    >
                                        <FaGithub className='text-sm flex-shrink-0' />
                                        Frontend
                                    </a>
                                    <div className='h-px bg-mid-blue/10' />
                                    <a
                                        href={buttons.githubBackend}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        onClick={() => setGithubOpen(false)}
                                        className='flex items-center gap-2.5 px-4 py-3 font-fira-code text-xs text-mid-blue hover:text-bright-green hover:bg-dark-green/40 transition-colors duration-150'
                                    >
                                        <FaGithub className='text-sm flex-shrink-0' />
                                        Backend
                                    </a>
                                </div>
                            )}
                        </div>
                    ) : (
                        // Link direto: projeto tem apenas um repositório
                        buttons.github && (
                            <a href={buttons.github} target='_blank' rel='noopener noreferrer'>
                                <Button text="Github" icon={githubIcon} title="Acessar github"/>
                            </a>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Project