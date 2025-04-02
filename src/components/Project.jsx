import Button from '../components/Button.jsx'
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

function Project({image, title, description, technologies, buttons}) {
    const siteIcon = <IoIosLink />
    const githubIcon = <FaGithub />

    return (
        <div className='flex items-center gap-8 px-4 py-6 rounded-[10px] w-[49%] bg-[#081426]'>
            <div className='w-1/2'>
                <img src={image} alt="Imagem do projeto" className='w-full rounded-[10px]'/>
            </div>
            <div className='flex flex-col gap-6 w-1/2'>
                <h4 className='text-light-blue text-3xl font-fira-code font-semibold'>{title}</h4>
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
                <div className='flex gap-4'>
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