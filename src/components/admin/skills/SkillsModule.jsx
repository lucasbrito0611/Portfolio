import { useState, useEffect, useCallback } from 'react';
import { getAllSkills, createSkill, updateSkill, deleteSkill, reorderSkills } from '../../../services/skills.service';
import SkillsTable from './SkillsTable';
import SkillForm from './SkillForm';

function SkillsModule() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Estado do modal de formulário
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingSkill, setEditingSkill] = useState(null);
    const [saving, setSaving] = useState(false);
    const [formError, setFormError] = useState(null);

    // Estado de exclusão (guarda o ID sendo excluído para o loading por linha)
    const [deletingId, setDeletingId] = useState(null);

    // Estado do modo de reordenação (ativado pelo botão ↕)
    const [isReorderMode, setIsReorderMode] = useState(false);

    const fetchSkills = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getAllSkills();
            setSkills(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchSkills();
    }, [fetchSkills]);

    // ─── Handlers ──────────────────────────────────────────────────────────────

    const handleOpenCreate = () => {
        setEditingSkill(null);
        setFormError(null);
        setIsFormOpen(true);
    };

    const handleOpenEdit = (skill) => {
        setEditingSkill(skill);
        setFormError(null);
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
        setEditingSkill(null);
        setFormError(null);
    };

    const handleSave = async (formData) => {
        try {
            setSaving(true);
            setFormError(null);

            if (editingSkill) {
                await updateSkill(editingSkill.id, formData);
            } else {
                await createSkill(formData);
            }

            await fetchSkills();
            handleCloseForm();
        } catch (err) {
            setFormError(err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Tem certeza que deseja excluir esta skill?')) return;

        try {
            setDeletingId(id);
            await deleteSkill(id);
            setSkills((prev) => prev.filter((s) => s.id !== id));
        } catch (err) {
            alert(`Erro ao excluir: ${err.message}`);
        } finally {
            setDeletingId(null);
        }
    };

    const handleReorder = async (newOrderIds) => {
        const reordered = newOrderIds.map((id) => skills.find((s) => s.id === id));
        const previousSkills = skills; 
        setSkills(reordered);

        const items = newOrderIds.map((id, index) => ({ id, order: index }));

        try {
            await reorderSkills(items);
        } catch (err) {
            setSkills(previousSkills);
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
                        Skills
                    </h1>
                    <p className="font-fira-code text-mid-blue/60 text-xs mt-0.5">
                        {skills.length} {skills.length === 1 ? 'skill cadastrada' : 'skills cadastradas'}
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
                        {/* Ícone de duas setas */}
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
                        Nova Skill
                    </button>
                </div>
            </div>

            {/* Erro de carregamento global */}
            {error && (
                <div className="mb-4 px-4 py-3 rounded-md bg-red-500/10 border border-red-500/20 font-fira-code text-red-400 text-xs flex items-center justify-between">
                    <span>{error}</span>
                    <button onClick={fetchSkills} className="underline hover:no-underline cursor-pointer">
                        Tentar novamente
                    </button>
                </div>
            )}

            <SkillsTable
                skills={skills}
                loading={loading}
                onEdit={handleOpenEdit}
                onDelete={handleDelete}
                deletingId={deletingId}
                isReorderMode={isReorderMode}
                onReorder={handleReorder}
            />

            <SkillForm
                skill={editingSkill}
                isOpen={isFormOpen}
                saving={saving}
                error={formError}
                onSave={handleSave}
                onClose={handleCloseForm}
            />
        </div>
    );
}

export default SkillsModule;
