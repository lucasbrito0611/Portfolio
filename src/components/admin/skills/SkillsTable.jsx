function SkillsTable({ skills, loading, onEdit, onDelete, deletingId }) {
    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="flex items-center gap-3 text-mid-blue font-fira-code text-sm">
                    <svg className="animate-spin w-4 h-4 text-bright-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Carregando skills...
                </div>
            </div>
        );
    }

    if (skills.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-mid-blue/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                <p className="font-fira-code text-mid-blue/50 text-sm">Nenhuma skill cadastrada ainda.</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto rounded-lg border border-mid-blue/10">
            <table className="w-full text-sm font-fira-code">
                <thead>
                    <tr className="border-b border-mid-blue/10 bg-dark-green/30">
                        <th className="text-left px-4 py-3 text-mid-blue/70 font-normal text-xs tracking-wider uppercase">Ícone</th>
                        <th className="text-left px-4 py-3 text-mid-blue/70 font-normal text-xs tracking-wider uppercase">Nome</th>
                        <th className="text-left px-4 py-3 text-mid-blue/70 font-normal text-xs tracking-wider uppercase hidden md:table-cell">Classe CSS</th>
                        <th className="text-left px-4 py-3 text-mid-blue/70 font-normal text-xs tracking-wider uppercase hidden lg:table-cell">Ordem</th>
                        <th className="text-right px-4 py-3 text-mid-blue/70 font-normal text-xs tracking-wider uppercase">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {skills.map((skill, index) => (
                        <tr
                            key={skill.id}
                            className={`
                                border-b border-mid-blue/5 transition-colors duration-150
                                hover:bg-dark-green/20
                                ${index % 2 === 0 ? 'bg-transparent' : 'bg-dark-green/10'}
                            `}
                        >
                            {/* Ícone */}
                            <td className="px-4 py-3">
                                {skill.imageUrl ? (
                                    <img
                                        src={skill.imageUrl}
                                        alt={skill.name}
                                        className="w-7 h-7 object-contain rounded"
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                ) : (
                                    <div className="w-7 h-7 rounded bg-mid-blue/10 flex items-center justify-center">
                                        <span className="text-mid-blue/30 text-xs">—</span>
                                    </div>
                                )}
                            </td>

                            {/* Nome */}
                            <td className="px-4 py-3">
                                <span className="text-light-blue">{skill.name}</span>
                                {skill.description && (
                                    <p className="text-mid-blue/50 text-xs mt-0.5 truncate max-w-[200px]">
                                        {skill.description}
                                    </p>
                                )}
                            </td>

                            {/* Classe CSS */}
                            <td className="px-4 py-3 hidden md:table-cell">
                                <code className="text-mid-green text-xs bg-dark-green/40 px-2 py-0.5 rounded">
                                    {skill.className}
                                </code>
                            </td>

                            {/* Ordem */}
                            <td className="px-4 py-3 hidden lg:table-cell">
                                <span className="text-mid-blue">{skill.order ?? 0}</span>
                            </td>

                            {/* Ações */}
                            <td className="px-4 py-3 text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <button
                                        onClick={() => onEdit(skill)}
                                        className="p-1.5 rounded text-mid-blue hover:text-bright-green hover:bg-bright-green/10 transition-all duration-150 cursor-pointer"
                                        title="Editar"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => onDelete(skill.id)}
                                        disabled={deletingId === skill.id}
                                        className="p-1.5 rounded text-mid-blue hover:text-red-400 hover:bg-red-400/10 transition-all duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                                        title="Excluir"
                                    >
                                        {deletingId === skill.id ? (
                                            <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SkillsTable;
