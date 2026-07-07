import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';

function AdminAppLayout() {
    const [activeModule, setActiveModule] = useState('skills');

    return (
        <>
            <AdminHeader activeModule={activeModule} onModuleChange={setActiveModule} />
            <Outlet context={{ activeModule, setActiveModule }} />
            <AdminFooter />
        </>
    );
}

export default AdminAppLayout;
