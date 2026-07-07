import api from '../lib/api';

/** Retorna todos os projetos cadastrados (GET público). */
export const getAllProjects = () => api.get('/projects').then((r) => r.data);

/** Retorna um projeto pelo ID. */
export const getProjectById = (id) => api.get(`/projects/${id}`).then((r) => r.data);

/** Cria um novo projeto (requer JWT). */
export const createProject = (data) => api.post('/projects', data).then((r) => r.data);

/** Atualiza parcialmente um projeto pelo ID (requer JWT). */
export const updateProject = (id, data) => api.patch(`/projects/${id}`, data).then((r) => r.data);

/** Remove um projeto pelo ID (requer JWT). */
export const deleteProject = (id) => api.delete(`/projects/${id}`);