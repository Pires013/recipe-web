import { Link } from "react-router-dom";
import "../assets/Navbar.css";

const Navbar = () => {
  return (
    <nav className="sidebar">
      <h3 className="sidebar-title">Livro de Receitas</h3>
      <div className="sidebar-links">
        <Link to="/home"> Home</Link>
        <Link to="/cadastro-receita"> Cadastrar Receita</Link>
        <Link to="/receitas"> Todas as Receitas</Link>
        <Link to="/favoritos"> Favoritos</Link>
      </div>
    </nav>
  );
};

export default Navbar;
