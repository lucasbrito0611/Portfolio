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
    title: 'Expotec 2024',
    description: 'Projeto desenvolvido para a Exposição Científica, Tecnológica e Cultural do IFRN.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress'],
    buttons: {
        site: 'https://expotec.cnat.ifrn.edu.br/',
    }
}

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
    image: powerUpImg,
    title: 'PowerUP',
    description: 'Projeto acadêmico integrador. E-commerce de suplementos, feito no IFRN.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'API Rest'],
    buttons: {
        site: 'https://powerupofficial.vercel.app/',
        github: 'https://github.com/lucasbrito0611/PowerUP-Ecommerce',
    }
}

const adocao = {
    image: adocaoImg,
    title: 'Adoção',
    description: 'Projeto acadêmico feito na disciplina de Design Web no IFRN.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    buttons: {
        site: 'https://projeto-adocao.vercel.app/',
        github: 'https://github.com/lucasbrito0611/Projeto-Adocao',
    }
}

const clima = {
    image: climaImg,
    title: 'Clima',
    description: 'Projeto pessoal feito para treinar o consumo de API. Uso da API OpenWeather.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API Rest'],
    buttons: {
        site: 'https://clima-openweather.vercel.app/',
        github: 'https://github.com/lucasbrito0611/Projeto-Clima',
    }
}

const psi = {
    image: psiImg,
    title: 'Loja - PSI',
    description: 'Projeto acadêmico para a disciplina de Programação de Sistemas para Internet no IFRN.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django'],
    buttons: {
        site: 'https://lojapsi.vercel.app/',
        github: 'https://github.com/lucasbrito0611/PSI',
    }
}

const consultaCare = {
    image: consultaCareImg,
    title: 'Consulta Care',
    description: 'Projeto acadêmico para a disciplina de Instalação e Configuração de Servidores no IFRN.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MariaDB', 'VirtualBox', 'Azure'],
    buttons: {
        github: 'https://github.com/lucasbrito0611/Projeto-ICS',
    }
}

const filmes = {
    image: filmesImg,
    title: 'Filmes',
    description: 'Projeto pessoal feito a partir do youtube do Hora de Codar, a fim de praticar React. Usa a API do TMDB.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'API Rest'],
    buttons: {
        site: 'https://projeto-filmess.vercel.app/',
        github: 'https://github.com/lucasbrito0611/Filmes',
    }
}

const spotify = {
    image: spotifyImg,
    title: 'Spotify - Clone',
    description: 'Projeto pessoal de um clone do spotify feito a partir do youtube da Hashtag Treinamentos, a fim de praticar JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    buttons: {
        site: 'https://lucasbrito0611.github.io/Spotify/',
        github: 'https://github.com/lucasbrito0611/Spotify',
    }
}

const calculadora = {
    image: calculadoraImg,
    title: 'Calculadora - IFRN',
    description: 'Projeto pessoal de uma calculadora, a fim de calcular as notas no IFRN. Similar ao app IF Calc.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    buttons: {
        site: 'https://lucasbrito0611.github.io/Calculadora-IFRN/',
        github: 'https://github.com/lucasbrito0611/Calculadora-IFRN',
    }
}

const toDoList = {
    image: toDoListImg,
    title: 'To-Do List',
    description: 'Projeto pessoal de uma lista para armazenar tarefas. Feito com o intuito de praticar Javascript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    buttons: {
        site: 'https://lucasbrito0611.github.io/To-Do-List/',
        github: 'https://github.com/lucasbrito0611/To-Do-List',
    }
}

export const projects = [expotec, lamie, powerUp, adocao, clima, psi, consultaCare, filmes, spotify, calculadora, toDoList]