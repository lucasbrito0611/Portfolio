import { useState, useEffect, useCallback } from 'react';
import { getAllProjects, createProject, updateProject, deleteProject } from '../../../services/projects.service';
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
