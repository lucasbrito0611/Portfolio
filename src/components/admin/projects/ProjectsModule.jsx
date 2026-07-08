import { useState, useEffect, useCallback } from 'react';
import { getAllProjects, createProject, updateProject, deleteProject, reorderProjects } from '../../../services/projects.service';
import ProjectsTable from './ProjectsTable';
import ProjectForm from './ProjectForm';

function ProjectsModule() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [saving, setSaving] = useState(false);
    const [formError, setFormError] = useState(null);

    const [deletingId, setDeletingId] = useState(null);

    // Estado do modo de reordenação (ativado pelo botão ↕)
    const [isReorderMode, setIsReorderMode] = useState(false);

    const fetchProjects = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getAllProjects();
            setProjects(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    // ─── Handlers ──────────────────────────────────────────────────────────────

    const handleOpenCreate = () => {
        setEditingProject(null);
        setFormError(null);
        setIsFormOpen(true);
    };

    const handleOpenEdit = (project) => {
        setEditingProject(project);
        setFormError(null);
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
        setEditingProject(null);
        setFormError(null);
    };

    const handleSave = async (formData) => {
        try {
            setSaving(true);
            setFormError(null);

            if (editingProject) {
                await updateProject(editingProject.id, formData);
            } else {
                await createProject(formData);
            }

            await fetchProjects();
            handleCloseForm();
        } catch (err) {
            setFormError(err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Tem certeza que deseja excluir este projeto?')) return;

        try {
            setDeletingId(id);
            await deleteProject(id);
            setProjects((prev) => prev.filter((p) => p.id !== id));
        } catch (err) {
            alert(`Erro ao excluir: ${err.message}`);
        } finally {
            setDeletingId(null);
        }
    };

    const handleReorder = async (newOrderIds) => {
        const reordered = newOrderIds.map((id) => projects.find((p) => p.id === id));
        const previousProjects = projects;
        setProjects(reordered);

        const items = newOrderIds.map((id, index) => ({ id, order: index }));

        try {
            await reorderProjects(items);
        } catch (err) {
            setProjects(previousProjects);
            alert(`Erro ao reordenar: ${err.message}`);
        }
    };

    // ─── Render ────────────────────────────────────────────────────────────────

    return (
        <div>
            {/* Cabeçalho do módulo */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="font-fira-code text-light-blue text-lg font-semibold">
                        Projetos
                    </h1>
                    <p className="font-fira-code text-mid-blue/60 text-xs mt-0.5">
                        {projects.length} {projects.length === 1 ? 'projeto cadastrado' : 'projetos cadastrados'}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    {/* Botão toggle para ativar/desativar modo de reordenação */}
                    <button
                        onClick={() => setIsReorderMode((prev) => !prev)}
                        title={isReorderMode ? 'Desativar reordenação' : 'Ativar reordenação'}
                        className={`
                            flex items-center gap-2 px-4 py-2 rounded-md
                            font-fira-code text-xs font-semibold
                            transition-all duration-150 cursor-pointer
                            ${
                                isReorderMode
                                    ? 'bg-bright-green/20 text-bright-green border border-bright-green/40 hover:bg-bright-green/30'
                                    : 'bg-transparent text-mid-blue border border-mid-blue/20 hover:border-mid-blue/40 hover:text-light-blue'
                            }
                        `}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18M16 17l-4 4m0 0l-4-4m4 4V3" />
                        </svg>
                        {isReorderMode ? 'Reordenando...' : 'Reordenar'}
                    </button>
                    <button
                        onClick={handleOpenCreate}
                        className="
                            flex items-center gap-2 px-4 py-2 rounded-md
                            bg-bright-green text-dark-blue font-fira-code text-xs font-semibold
                            hover:bg-bright-green/90 transition-all duration-150 cursor-pointer
                        "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Novo Projeto
                    </button>
                </div>
            </div>

            {error && (
                <div className="mb-4 px-4 py-3 rounded-md bg-red-500/10 border border-red-500/20 font-fira-code text-red-400 text-xs flex items-center justify-between">
                    <span>{error}</span>
                    <button onClick={fetchProjects} className="underline hover:no-underline cursor-pointer">
                        Tentar novamente
                    </button>
                </div>
            )}

            <ProjectsTable
                projects={projects}
                loading={loading}
                onEdit={handleOpenEdit}
                onDelete={handleDelete}
                deletingId={deletingId}
                isReorderMode={isReorderMode}
                onReorder={handleReorder}
            />

            <ProjectForm
                project={editingProject}
                isOpen={isFormOpen}
                saving={saving}
                error={formError}
                onSave={handleSave}
                onClose={handleCloseForm}
            />
        </div>
    );
}

export default ProjectsModule;
