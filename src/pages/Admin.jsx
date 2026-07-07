import { useOutletContext } from 'react-router-dom';
import AdminLayout from '../components/admin/AdminLayout';
import SkillsModule from '../components/admin/skills/SkillsModule';
import ProjectsModule from '../components/admin/projects/ProjectsModule';

function AdminPage() {
    const { activeModule, setActiveModule } = useOutletContext();

    return (
        <AdminLayout activeModule={activeModule} onModuleChange={setActiveModule}>
            {activeModule === 'skills' && <SkillsModule />}
            {activeModule === 'projects' && <ProjectsModule />}
        </AdminLayout>
    );
}

export default AdminPage;