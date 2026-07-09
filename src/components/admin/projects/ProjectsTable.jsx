import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';


function SortableRow({ project, index, isReorderMode, onEdit, onDelete, deletingId }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: project.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 50 : undefined,
        position: isDragging ? 'relative' : undefined,
        opacity: isDragging ? 0.85 : 1,
    };

    return (
        <tr
            ref={setNodeRef}
            style={style}
            className={`
                border-b border-mid-blue/5 transition-colors duration-150
                hover:bg-dark-green/20
                ${index % 2 === 0 ? 'bg-transparent' : 'bg-dark-green/10'}
                ${isDragging ? 'shadow-lg shadow-black/30 bg-dark-green/40 !opacity-90' : ''}
            `}
        >
            {/* ID */}
            <td className="px-4 py-3 hidden lg:table-cell">
                <span className="text-mid-blue/30 text-xs font-fira-code" title={project.id}>
                    {project.id.slice(0, 8)}...
                </span>
            </td>

            {/* Imagem de capa */}
            <td className="px-4 py-3">
                {project.imageUrl ? (
                    <img
                        src={project.imageUrl}
                        alt={project.title_pt}
                        className="w-30 aspect-[420/270] object-cover rounded border border-mid-blue/10"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                ) : (
                    <div className="w-12 h-8 rounded bg-mid-blue/10 flex items-center justify-center">
                        <span className="text-mid-blue/30 text-xs">—</span>
                    </div>
                )}
            </td>

            {/* Título (bilíngue) */}
            <td className="px-4 py-3">
                <span className="text-light-blue">{project.title_pt}</span>
                {project.title_en && project.title_en !== project.title_pt && (
                    <p className="text-mid-blue/50 text-xs mt-0.5">{project.title_en}</p>
                )}
                {/* Links externos */}
                <div className="flex items-center gap-2 mt-1">
                    {project.siteUrl && (
                        <a
                            href={project.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-mid-blue/40 hover:text-bright-green transition-colors"
                            title="Ver site"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-mid-blue/40 hover:text-bright-green transition-colors"
                            title="Ver GitHub (Frontend)"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    )}
                    {project.githubUrlBackend && (
                        <a
                            href={project.githubUrlBackend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-mid-blue/40 hover:text-bright-green transition-colors"
                            title="Ver GitHub (Backend)"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    )}
                </div>
            </td>

            {/* Tecnologias como badges */}
            <td className="px-4 py-3 hidden lg:table-cell">
                <div className="flex flex-wrap gap-1 max-w-[250px]">
                    {(project.technologies ?? []).slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2 py-0.5 rounded-full bg-mid-green/10 text-mid-green border border-mid-green/20"
                        >
                            {tech}
                        </span>
                    ))}
                    {(project.technologies ?? []).length > 4 && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-mid-blue/10 text-mid-blue/50">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>
            </td>

            {/* Ordem / Alça de drag */}
            <td className="px-4 py-3 hidden md:table-cell">
                {isReorderMode ? (
                    <button
                        {...attributes}
                        {...listeners}
                        className="text-mid-blue/40 hover:text-bright-green transition-colors cursor-grab active:cursor-grabbing p-0.5"
                        title="Arrastar para reordenar"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="9" cy="5" r="1.5" />
                            <circle cx="9" cy="12" r="1.5" />
                            <circle cx="9" cy="19" r="1.5" />
                            <circle cx="15" cy="5" r="1.5" />
                            <circle cx="15" cy="12" r="1.5" />
                            <circle cx="15" cy="19" r="1.5" />
                        </svg>
                    </button>
                ) : (
                    <span className="text-mid-blue">{project.order ?? 0}</span>
                )}
            </td>

            {/* Ações — desabilitadas no modo de reordenação */}
            <td className="px-4 py-3 text-right">
                <div className="flex items-center justify-end gap-2">
                    <button
                        onClick={() => onEdit(project)}
                        disabled={isReorderMode}
                        className="p-1.5 rounded text-mid-blue hover:text-bright-green hover:bg-bright-green/10 transition-all duration-150 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                        title="Editar"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
                        </svg>
                    </button>
                    <button
                        onClick={() => onDelete(project.id)}
                        disabled={isReorderMode || deletingId === project.id}
                        className="p-1.5 rounded text-mid-blue hover:text-red-400 hover:bg-red-400/10 transition-all duration-150 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                        title="Excluir"
                    >
                        {deletingId === project.id ? (
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
    );
}

function ProjectsTable({ projects, loading, onEdit, onDelete, deletingId, isReorderMode, onReorder }) {
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: { distance: 8 },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const oldIndex = projects.findIndex((p) => p.id === active.id);
        const newIndex = projects.findIndex((p) => p.id === over.id);
        const newOrder = arrayMove(projects, oldIndex, newIndex);
        onReorder(newOrder.map((p) => p.id));
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="flex items-center gap-3 text-mid-blue font-fira-code text-sm">
                    <svg className="animate-spin w-4 h-4 text-bright-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Carregando projetos...
                </div>
            </div>
        );
    }

    if (projects.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-mid-blue/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
                <p className="font-fira-code text-mid-blue/50 text-sm">Nenhum projeto cadastrado ainda.</p>
            </div>
        );
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            {isReorderMode && (
                <p className="font-fira-code text-mid-blue/50 text-xs mb-2 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-bright-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20A10 10 0 0112 2z" />
                    </svg>
                    Arraste as linhas pela alça ⠿ para reordenar. A ordem é salva automaticamente.
                </p>
            )}
            <div className="overflow-x-auto rounded-lg border border-mid-blue/10">
                <table className="w-full text-sm font-fira-code">
                    <thead>
                        <tr className="border-b border-mid-blue/10 bg-dark-green/30">
                            <th className="text-left px-4 py-3 text-mid-blue/70 font-normal text-xs tracking-wider uppercase hidden lg:table-cell">ID</th>
                            <th className="text-left px-4 py-3 text-mid-blue/70 font-normal text-xs tracking-wider uppercase">Capa</th>
                            <th className="text-left px-4 py-3 text-mid-blue/70 font-normal text-xs tracking-wider uppercase">Título</th>
                            <th className="text-left px-4 py-3 text-mid-blue/70 font-normal text-xs tracking-wider uppercase hidden lg:table-cell">Tecnologias</th>
                            <th className="text-left px-4 py-3 text-mid-blue/70 font-normal text-xs tracking-wider uppercase hidden md:table-cell">Ordem</th>
                            <th className="text-right px-4 py-3 text-mid-blue/70 font-normal text-xs tracking-wider uppercase">Ações</th>
                        </tr>
                    </thead>
                    <SortableContext
                        items={projects.map((p) => p.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        <tbody>
                            {projects.map((project, index) => (
                                <SortableRow
                                    key={project.id}
                                    project={project}
                                    index={index}
                                    isReorderMode={isReorderMode}
                                    onEdit={onEdit}
                                    onDelete={onDelete}
                                    deletingId={deletingId}
                                />
                            ))}
                        </tbody>
                    </SortableContext>
                </table>
            </div>
        </DndContext>
    );
}

export default ProjectsTable;
