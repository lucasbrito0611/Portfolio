import logo from '../../assets/logo.png';

function AdminFooter() {
    return (
        <footer className="flex items-center justify-center py-4 bg-dark-blue border-t border-mid-blue/10 shadow-footer">
            <img src={logo} alt="Logo do projeto" className="w-8 opacity-50" />
        </footer>
    );
}

export default AdminFooter;
