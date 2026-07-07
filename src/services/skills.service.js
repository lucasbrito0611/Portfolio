import api from '../lib/api';

/** Retorna todas as skills cadastradas (GET público). */
export const getAllSkills = () => api.get('/skills').then((r) => r.data);

/** Retorna uma skill pelo ID. */
export const getSkillById = (id) => api.get(`/skills/${id}`).then((r) => r.data);

/** Cria uma nova skill (requer JWT). */
export const createSkill = (data) => api.post('/skills', data).then((r) => r.data);

/** Atualiza parcialmente uma skill pelo ID (requer JWT). */
export const updateSkill = (id, data) => api.patch(`/skills/${id}`, data).then((r) => r.data);

/** Remove uma skill pelo ID (requer JWT). */
export const deleteSkill = (id) => api.delete(`/skills/${id}`);