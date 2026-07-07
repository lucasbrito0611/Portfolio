import { useAuth } from '../../context/AuthContext';

const NAV_ITEMS = [
    {
        id: 'skills',
        label: 'Skills',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
        ),
    },
    {
        id: 'projects',
        label: 'Projetos',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
        ),
    },
];

function AdminSidebar({ activeModule, onModuleChange }) {
    const { logout } = useAuth();

    return (
        <aside className="w-56 shrink-0 flex flex-col border-r border-mid-blue/10 bg-dark-green/20">
            {/* Logo / título do painel */}
            <div className="px-6 py-6 border-b border-mid-blue/10">
                <span className="font-fira-code text-bright-green text-xs tracking-widest uppercase opacity-70">
                    Admin Panel
                </span>
            </div>

            {/* Itens de navegação */}
            <nav className="flex-1 px-3 py-4 space-y-1">
                {NAV_ITEMS.map((item) => {
                    const isActive = activeModule === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => onModuleChange(item.id)}
                            className={`
                                w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-left
                                font-fira-code text-sm transition-all duration-200 cursor-pointer
                                ${isActive
                                    ? 'bg-bright-green/10 text-bright-green border border-bright-green/20'
                                    : 'text-mid-blue hover:text-light-blue hover:bg-mid-blue/5 border border-transparent'
                                }
                            `}
                        >
                            <span className={isActive ? 'text-bright-green' : 'text-mid-blue'}>
                                {item.icon}
                            </span>
                            {item.label}
                            {isActive && (
                                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-bright-green" />
                            )}
                        </button>
                    );
                })}
            </nav>

            {/* Rodapé: botão de logout */}
            <div className="px-3 py-4 border-t border-mid-blue/10">
                <button
                    onClick={logout}
                    className="
                        w-full flex items-center gap-3 px-3 py-2.5 rounded-md
                        font-fira-code text-xs text-mid-blue cursor-pointer
                        hover:text-red-400 hover:bg-red-400/5 border border-transparent
                        hover:border-red-400/20 transition-all duration-200
                    "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
                    Sair
                </button>
            </div>
        </aside>
    );
}

export default AdminSidebar;
