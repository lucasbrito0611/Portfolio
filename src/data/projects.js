import expotecImg from '../assets/projects/expotec.png'
import lamieImg from '../assets/projects/lamie.png'
import powerUpImg from '../assets/projects/powerup.png'
import adocaoImg from '../assets/projects/adocao.png'
import climaImg from '../assets/projects/clima.png'
import psiImg from '../assets/projects/psi.png'
import consultaCareImg from '../assets/projects/consultacare.png'
import filmesImg from '../assets/projects/filmes.png'
import spotifyImg from '../assets/projects/spotify.png'
import calculadoraImg from '../assets/projects/calculadora.png'
import toDoListImg from '../assets/projects/to-do-list.png'

const expotec = {
    image: expotecImg,
    title: 'projects.expotec.title',
    description: 'projects.expotec.description',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress'],
    buttons: {
        site: 'https://expotec.cnat.ifrn.edu.br/',
    }
}

const lamie = {
    image: lamieImg,
    title: 'projects.lamie.title',
    description: 'projects.lamie.description',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress'],
    buttons: {
        site: 'https://lamie.cnat.ifrn.edu.br/',
    }
}

const powerUp = {
    image: powerUpImg,
    title: 'projects.powerUp.title',
    description: 'projects.powerUp.description',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'API Rest'],
    buttons: {
        site: 'https://powerupofficial.vercel.app/',
        github: 'https://github.com/lucasbrito0611/PowerUP-Ecommerce',
    }
}

const adocao = {
    image: adocaoImg,
    title: 'projects.adoption.title',
    description: 'projects.adoption.description',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    buttons: {
        site: 'https://projeto-adocao.vercel.app/',
        github: 'https://github.com/lucasbrito0611/Projeto-Adocao',
    }
}

const clima = {
    image: climaImg,
    title: 'projects.weather.title',
    description: 'projects.weather.description',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API Rest'],
    buttons: {
        site: 'https://clima-openweather.vercel.app/',
        github: 'https://github.com/lucasbrito0611/Projeto-Clima',
    }
}

const psi = {
    image: psiImg,
    title: 'projects.psi.title',
    description: 'projects.psi.description',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django'],
    buttons: {
        site: 'https://lojapsi.vercel.app/',
        github: 'https://github.com/lucasbrito0611/PSI',
    }
}

const consultaCare = {
    image: consultaCareImg,
    title: 'projects.consultaCare.title',
    description: 'projects.consultaCare.description',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MariaDB', 'VirtualBox', 'Azure'],
    buttons: {
        github: 'https://github.com/lucasbrito0611/Projeto-ICS',
    }
}

const filmes = {
    image: filmesImg,
    title: 'projects.movies.title',
    description: 'projects.movies.description',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'API Rest'],
    buttons: {
        site: 'https://projeto-filmess.vercel.app/',
        github: 'https://github.com/lucasbrito0611/Filmes',
    }
}

const spotify = {
    image: spotifyImg,
    title: 'projects.spotify.title',
    description: 'projects.spotify.description',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    buttons: {
        site: 'https://lucasbrito0611.github.io/Spotify/',
        github: 'https://github.com/lucasbrito0611/Spotify',
    }
}

const calculadora = {
    image: calculadoraImg,
    title: 'projects.calculator.title',
    description: 'projects.calculator.description',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    buttons: {
        site: 'https://lucasbrito0611.github.io/Calculadora-IFRN/',
        github: 'https://github.com/lucasbrito0611/Calculadora-IFRN',
    }
}

const toDoList = {
    image: toDoListImg,
    title: 'projects.toDoList.title',
    description: 'projects.toDoList.description',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    buttons: {
        site: 'https://lucasbrito0611.github.io/To-Do-List/',
        github: 'https://github.com/lucasbrito0611/To-Do-List',
    }
}

export const projects = [expotec, lamie, powerUp, adocao, clima, psi, consultaCare, filmes, spotify, calculadora, toDoList]