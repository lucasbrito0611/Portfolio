import { useAuth } from '../context/AuthContext';

function AdminPage() {
    const { logout } = useAuth();

    return (
        <main className="min-h-screen flex flex-col bg-dark-blue px-7 py-12 dt:px-60 nt-lg:px-40 nt-sm:px-30 tb:px-15">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h1 className="font-fira-code text-bright-green text-2xl font-semibold">
                        Painel Administrativo
                    </h1>
                    <p className="font-fira-code text-mid-blue text-sm mt-1">
                        Bem-vindo de volta.
                    </p>
                </div>
                <button
                    onClick={logout}
                    className="font-fira-code text-bright-green text-xs px-5 py-2 rounded-md border border-bright-green/40 bg-transparent hover:bg-bright-green/10 transition-colors duration-300 cursor-pointer"
                >
                    Sair
                </button>
            </div>

            {/* Placeholder para o conteúdo do painel */}
            <div className="rounded-lg p-8 flex items-center justify-center min-h-[300px] border border-mid-blue/10 bg-dark-green/40">
                <p className="font-fira-code text-mid-blue text-sm">
                    Conteúdo do painel em construção...
                </p>
            </div>
        </main>
    );
}

export default AdminPage;