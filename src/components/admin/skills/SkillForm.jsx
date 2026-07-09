import { useState, useEffect } from 'react';
import { uploadImageToCloudinary } from '../../../lib/cloudinary';

const EMPTY_FORM = {
    name: '',
    description: '',
    imageUrl: '',
    docUrl: '',
    className: '',
    order: 0,
};

function SkillForm({ skill, isOpen, saving, error, onSave, onClose }) {
    const [form, setForm] = useState(EMPTY_FORM);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    // Sincroniza o formulário quando a skill muda (edição) ou reseta (criação)
    useEffect(() => {
        if (skill) {
            setForm({
                name: skill.name ?? '',
                description: skill.description ?? '',
                imageUrl: skill.imageUrl ?? '',
                docUrl: skill.docUrl ?? '',
                className: skill.className ?? '',
                order: skill.order ?? 0,
            });
        } else {
            setForm(EMPTY_FORM);
        }
    }, [skill, isOpen]);

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
            // Preenche o formulário com a URL retornada
            setForm((prev) => ({ ...prev, imageUrl: url }));
        } catch (err) {
            setUploadError(err.message);
        } finally {
            setIsUploading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(form);
    };

    if (!isOpen) return null;

    return (
        // Overlay escuro
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="w-full max-w-lg bg-dark-blue border border-mid-blue/15 rounded-xl shadow-2xl flex flex-col max-h-[90vh]">
                {/* Cabeçalho do modal */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-mid-blue/10">
                    <h2 className="font-fira-code text-light-blue text-sm font-semibold">
                        {skill ? '✏️  Editar Skill' : '✦  Nova Skill'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-mid-blue hover:text-light-blue transition-colors cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Corpo do formulário */}
                <form onSubmit={handleSubmit} className="overflow-y-auto px-6 py-5 space-y-4 flex-1">
                    {/* Erro genérico da API ou do Upload */}
                    {(error || uploadError) && (
                        <div className="px-4 py-3 rounded-md bg-red-500/10 border border-red-500/20 font-fira-code text-red-400 text-xs">
                            {error || uploadError}
                        </div>
                    )}

                    <Field label="Nome *" id="name">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="TypeScript"
                            className={inputClass}
                        />
                    </Field>

                    <Field label="Descrição" id="description">
                        <textarea
                            id="description"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            rows={2}
                            placeholder="Linguagem tipada que compila para JavaScript"
                            className={`${inputClass} resize-none`}
                        />
                    </Field>

                    <Field label="URL do Ícone *" id="imageUrl">
                        <div className="flex items-center gap-2">
                            <input
                                type="url"
                                id="imageUrl"
                                name="imageUrl"
                                value={form.imageUrl}
                                onChange={handleChange}
                                required
                                placeholder="https://cdn.example.com/typescript.svg"
                                className={`${inputClass} flex-1`}
                            />
                            {/* Botão customizado para o input file */}
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
                            Dimensão recomendada: 115x115. Máximo: 3 MB.
                        </p>
                    </Field>

                    <Field label="URL da Documentação *" id="docUrl">
                        <input
                            type="url"
                            id="docUrl"
                            name="docUrl"
                            value={form.docUrl}
                            onChange={handleChange}
                            required
                            placeholder="https://www.typescriptlang.org/docs/"
                            className={inputClass}
                        />
                    </Field>

                    <Field label="Classe CSS *" id="className">
                        <input
                            type="text"
                            id="className"
                            name="className"
                            value={form.className}
                            onChange={handleChange}
                            required
                            placeholder="devicon-typescript-plain"
                            className={inputClass}
                        />
                    </Field>

                    <Field label="Ordem de exibição" id="order">
                        <input
                            type="number"
                            id="order"
                            name="order"
                            value={form.order}
                            onChange={handleChange}
                            min={0}
                            className={inputClass}
                        />
                    </Field>
                </form>

                {/* Rodapé com ações */}
                <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-mid-blue/10">
                    <button
                        type="button"
                        onClick={onClose}
                        className="font-fira-code text-xs text-mid-blue hover:text-light-blue px-4 py-2 rounded-md border border-mid-blue/20 hover:border-mid-blue/40 transition-all duration-150 cursor-pointer"
                    >
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
                        {saving ? 'Salvando...' : isUploading ? 'Aguarde o upload...' : skill ? 'Salvar alterações' : 'Criar skill'}
                    </button>
                </div>
            </div>
        </div>
    );
}

/** Componente auxiliar para rótulo + input (mantém consistência visual) */
function Field({ label, id, children }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="font-fira-code text-xs text-mid-blue">
                {label}
            </label>
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

export default SkillForm;