import { Link } from "react-router-dom";
import './NavBar.module.css';

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/create">Criar Usuário</Link>
                </li>
                <li className="nav-item">
                    <Link to="/get">Obter Usuário</Link>
                </li>
                <li className="nav-item">
                    <Link to="/update">Atualizar Usuário</Link>
                </li>
                <li className="nav-item">
                    <Link to="/delete">Deletar Usuário</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;