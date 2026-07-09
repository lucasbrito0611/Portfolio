import { useState, useEffect } from 'react';
import { uploadImageToCloudinary } from '../../../lib/cloudinary';

const EMPTY_FORM = {
    title_pt: '',
    title_en: '',
    description_pt: '',
    description_en: '',
    imageUrl: '',
    technologies: '',  
    siteUrl: '',
    githubUrl: '',
    githubUrlBackend: '',
    order: 0,
};

function ProjectForm({ project, isOpen, saving, error, onSave, onClose }) {
    const [form, setForm] = useState(EMPTY_FORM);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    useEffect(() => {
        if (project) {
            setForm({
                title_pt: project.title_pt ?? '',
                title_en: project.title_en ?? '',
                description_pt: project.description_pt ?? '',
                description_en: project.description_en ?? '',
                imageUrl: project.imageUrl ?? '',
                // Converte array → string para exibir no textarea
                technologies: Array.isArray(project.technologies)
                    ? project.technologies.join(', ')
                    : '',
                siteUrl: project.siteUrl ?? '',
                githubUrl: project.githubUrl ?? '',
                githubUrlBackend: project.githubUrlBackend ?? '',
                order: project.order ?? 0,
            });
        } else {
            setForm(EMPTY_FORM);
        }
    }, [project, isOpen]);

    // Bloqueia o scroll da página quando o modal estiver aberto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: name === 'order' ? Number(value) : value,
        }));
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > 3 * 1024 * 1024) {
            setUploadError('A imagem excede o limite máximo de 3 MB.');
            return;
        }

        try {
            setIsUploading(true);
            setUploadError(null);
            const url = await uploadImageToCloudinary(file);
            setForm((prev) => ({ ...prev, imageUrl: url }));
        } catch (err) {
            setUploadError(err.message);
        } finally {
            setIsUploading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Converte tecnologias: "React, Node.js, TypeScript" → ["React", "Node.js", "TypeScript"]
        const payload = {
            ...form,
            technologies: form.technologies
                .split(',')
                .map((t) => t.trim())
                .filter(Boolean),
            // Remove campos opcionais vazios para não enviar strings vazias
            siteUrl: form.siteUrl || undefined,
            githubUrl: form.githubUrl || undefined,
            githubUrlBackend: form.githubUrlBackend || undefined,
        };
        onSave(payload);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="w-full max-w-2xl bg-dark-blue border border-mid-blue/15 rounded-xl shadow-2xl flex flex-col max-h-[90vh]">
                {/* Cabeçalho */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-mid-blue/10">
                    <h2 className="font-fira-code text-light-blue text-sm font-semibold">
                        {project ? '✏️  Editar Projeto' : '✦  Novo Projeto'}
                    </h2>
                    <button onClick={onClose} className="text-mid-blue hover:text-light-blue transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Formulário */}
                <form onSubmit={handleSubmit} className="overflow-y-auto px-6 py-5 flex-1">
                    {(error || uploadError) && (
                        <div className="mb-4 px-4 py-3 rounded-md bg-red-500/10 border border-red-500/20 font-fira-code text-red-400 text-xs">
                            {error || uploadError}
                        </div>
                    )}

                    {/* Títulos em grid lado a lado */}
                    <SectionLabel>Títulos</SectionLabel>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <Field label="Título PT *" id="title_pt">
                            <input type="text" id="title_pt" name="title_pt" value={form.title_pt} onChange={handleChange} required placeholder="Portfólio Pessoal" className={inputClass} />
                        </Field>
                        <Field label="Título EN *" id="title_en">
                            <input type="text" id="title_en" name="title_en" value={form.title_en} onChange={handleChange} required placeholder="Personal Portfolio" className={inputClass} />
                        </Field>
                    </div>

                    {/* Descrições */}
                    <SectionLabel>Descrições</SectionLabel>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <Field label="Descrição PT *" id="description_pt">
                            <textarea id="description_pt" name="description_pt" value={form.description_pt} onChange={handleChange} required rows={3} placeholder="Site de portfólio..." className={`${inputClass} resize-none`} />
                        </Field>
                        <Field label="Descrição EN *" id="description_en">
                            <textarea id="description_en" name="description_en" value={form.description_en} onChange={handleChange} required rows={3} placeholder="Portfolio website..." className={`${inputClass} resize-none`} />
                        </Field>
                    </div>

                    {/* Mídia */}
                    <SectionLabel>Mídia &amp; Links</SectionLabel>
                    <div className="space-y-3 mb-4">
                        <Field label="URL da Imagem de Capa *" id="imageUrl">
                            <div className="flex items-center gap-2">
                                <input type="url" id="imageUrl" name="imageUrl" value={form.imageUrl} onChange={handleChange} required placeholder="https://cdn.example.com/preview.png" className={`${inputClass} flex-1`} />
                                <label
                                    className={`
                                        flex items-center justify-center px-4 py-2 rounded-md
                                        font-fira-code text-xs cursor-pointer transition-colors
                                        ${isUploading 
                                            ? 'bg-mid-blue/20 text-mid-blue opacity-50 cursor-not-allowed' 
                                            : 'bg-dark-green/50 text-bright-green border border-bright-green/30 hover:bg-bright-green/10'}
                                    `}
                                >
                                    {isUploading ? 'Enviando...' : 'Fazer Upload'}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileUpload}
                                        disabled={isUploading}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                            <p className="text-mid-blue/40 text-xs font-fira-code mt-0.5">
                                Dimensão recomendada: 420x270. Máximo: 3 MB.
                            </p>
                        </Field>
                        <Field label="URL do Site" id="siteUrl">
                            <input type="url" id="siteUrl" name="siteUrl" value={form.siteUrl} onChange={handleChange} placeholder="https://meusite.com" className={inputClass} />
                        </Field>
                        <div className="grid grid-cols-2 gap-3">
                            <Field label="GitHub (Frontend)" id="githubUrl">
                                <input type="url" id="githubUrl" name="githubUrl" value={form.githubUrl} onChange={handleChange} placeholder="https://github.com/user/repo-frontend" className={inputClass} />
                            </Field>
                            <Field label="GitHub (Backend)" id="githubUrlBackend">
                                <input type="url" id="githubUrlBackend" name="githubUrlBackend" value={form.githubUrlBackend} onChange={handleChange} placeholder="https://github.com/user/repo-backend" className={inputClass} />
                            </Field>
                        </div>
                    </div>

                    {/* Tecnologias + Ordem */}
                    <SectionLabel>Metadados</SectionLabel>
                    <div className="space-y-3">
                        <Field label="Tecnologias * (separadas por vírgula)" id="technologies">
                            <input
                                type="text"
                                id="technologies"
                                name="technologies"
                                value={form.technologies}
                                onChange={handleChange}
                                required
                                placeholder="NestJS, TypeScript, PostgreSQL"
                                className={inputClass}
                            />
                            <p className="text-mid-blue/40 text-xs font-fira-code mt-0.5">
                                Ex: React, Node.js, Tailwind CSS
                            </p>
                        </Field>
                        <Field label="Ordem de exibição" id="order">
                            <input type="number" id="order" name="order" value={form.order} onChange={handleChange} min={0} className={inputClass} />
                        </Field>
                    </div>
                </form>

                {/* Rodapé */}
                <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-mid-blue/10">
                    <button type="button" onClick={onClose} className="font-fira-code text-xs text-mid-blue hover:text-light-blue px-4 py-2 rounded-md border border-mid-blue/20 hover:border-mid-blue/40 transition-all duration-150 cursor-pointer">
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        disabled={saving || isUploading}
                        onClick={handleSubmit}
                        className="font-fira-code text-xs text-dark-blue bg-bright-green px-5 py-2 rounded-md hover:bg-bright-green/90 transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-semibold flex items-center gap-2"
                    >
                        {(saving || isUploading) && (
                            <svg className="animate-spin w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                        )}
                        {saving ? 'Salvando...' : isUploading ? 'Aguarde o upload...' : project ? 'Salvar alterações' : 'Criar projeto'}
                    </button>
                </div>
            </div>
        </div>
    );
}

function SectionLabel({ children }) {
    return (
        <p className="font-fira-code text-bright-green/60 text-xs uppercase tracking-widest mb-2">
            {children}
        </p>
    );
}

function Field({ label, id, children }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="font-fira-code text-xs text-mid-blue">{label}</label>
            {children}
        </div>
    );
}

const inputClass = `
    w-full bg-dark-green/30 border border-mid-blue/15 rounded-md
    px-3 py-2 font-fira-code text-xs text-light-blue
    placeholder:text-mid-blue/30
    focus:outline-none focus:border-bright-green/40 focus:bg-dark-green/50
    transition-colors duration-150
`;

export default ProjectForm;
