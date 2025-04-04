import logo from '../assets/logo.png'

function Footer() {
    return (
        <footer className="px-7 pt-1 pb-7 dt:px-60 nt-lg:px-40 nt-sm:px-30 tb:px-15 bg-dark-blue text-light-blue text-base shadow-footer">
            <div className='flex mb-lg:flex-row items-center flex-col justify-between'>
                <img src={logo} alt="Logo" className='w-[60px]'/>
                <nav className="flex items-center gap-40">
                    <ul className="flex gap-10 text-base">
                        <li className="cursor-pointer hover:text-bright-green transition duration-400" onClick={() => document.getElementById("sobre")?.scrollIntoView()}>Sobre</li>
                        <li className="cursor-pointer hover:text-bright-green transition duration-400" onClick={() => document.getElementById("projetos")?.scrollIntoView()}>Projetos</li>
                        <li className="cursor-pointer hover:text-bright-green transition duration-400" onClick={() => document.getElementById("contato")?.scrollIntoView()}>Contato</li>
                    </ul>
                </nav>
            </div>
            <hr className='border-t-1 border-mid-blue mb-8 mb-lg:mt-0 mt-9'/>
            <p className='text-center text-base'>&copy; Desenvolvido por Lucas Brito, 2025</p>
        </footer>
    )
}

export default Footer