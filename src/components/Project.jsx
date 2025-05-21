import { useTranslation } from 'react-i18next';
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Button from '../components/Button.jsx'

function Project({image, title, description, technologies, buttons}) {
    const { t } = useTranslation()

    const siteIcon = <IoIosLink />
    const githubIcon = <FaGithub />

    return (
        <div className='flex dt:flex-row flex-col dt:items-center gap-8 dt:px-5 nt-lg:px-15 px-7 py-7 rounded-[10px] dt:w-[49%] pj:w-[45%] bg-[#081426]'>
            <div className='dt:w-1/2'>
                <img src={image} alt="Imagem do projeto" className='w-full rounded-[10px]'/>
            </div>
            <div className='flex flex-col gap-4 dt:w-1/2'>
                <h4 className='text-light-blue text-[27px] font-fira-code font-semibold'>{t(title)}</h4>
                <div className='flex flex-col  gap-3'>
                    <p className='text-mid-blue text-[16px]'>{t(description)}</p>
                    <div className='flex gap-2 flex-wrap'>
                        {technologies.map((technology, index) => (
                            <div key={index} className='px-2.5 py-1 text-bright-green text-xs bg-dark-green rounded-[60px]'>
                                {technology}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-wrap gap-4 mt-2'>
                    {buttons.site && (
                        <a href={buttons.site} target='_blank'>
                            <Button text="Site" icon={siteIcon} title="Acessar site"/>
                        </a>
                    )}
                    {buttons.github && (
                        <a href={buttons.github} target='_blank'>
                            <Button text="Github" icon={githubIcon} title="Acessar github"/>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Project