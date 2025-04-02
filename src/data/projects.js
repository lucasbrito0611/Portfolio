import lamieImg from '../assets/projects/lamie.png'
import powerpUpImg from '../assets/projects/powerup.png'

const lamie = {
    image: lamieImg,
    title: 'Lamie',
    description: 'Projeto desenvolvido para o Laboratório de Manutenção de Instalações Elétricas do IFRN - CNAT.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress'],
    buttons: {
        site: 'https://lamie.cnat.ifrn.edu.br/',
    }
}

const powerUp = {
    image: powerpUpImg,
    title: 'PowerUP',
    description: 'Projeto acadêmico de um e-commerce de suplementos, feito no IFRN.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'Vercel'],
    buttons: {
        site: 'https://powerupofficial.vercel.app/',
        github: 'https://github.com/lucasbrito0611/PowerUP-Ecommerce',
    }
}

export const projects = [lamie, powerUp]