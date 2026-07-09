import AdminSidebar from './AdminSidebar';

function AdminLayout({ activeModule, onModuleChange, children }) {
    return (
        <div className="flex flex-1 min-h-[calc(100vh-56px)] bg-dark-blue overflow-hidden">
            <div className="hidden md:flex">
                <AdminSidebar activeModule={activeModule} onModuleChange={onModuleChange} />
            </div>

            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    );
}

export default AdminLayout;
