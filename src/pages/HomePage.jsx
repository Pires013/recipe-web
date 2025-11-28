import { Link } from "react-router-dom";
import "../pages/HomePage.css";
import arrozImg from "../assets/arroz.jpg";
import boloCenouraImg from "../assets/bolo-de-cenoura.webp";
import feijoadaImg from "../assets/feijoada.jpg";

export default function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1> Bem-vindo ao Livro de Receitas!</h1>
        <p>Descubra, crie e salve suas receitas favoritas </p>
      </header>

      <section className="home-actions">
        <Link to="/receitas" className="card-action">
          Ver Receitas
        </Link>

        <Link to="/cadastro-receita" className="card-action">
          Cadastrar Receita
        </Link>

        <Link to="/favoritos" className="card-action">
          Favoritos
        </Link>
      </section>

      <section className="home-popular">
        <h2>Receitas Populares</h2>
        <div className="recipe-cards">
          <div className="recipe-card">
            <img src={boloCenouraImg} alt="Bolo de Cenoura" />
            <h3>Bolo de Cenoura</h3>
          </div>
          <div className="recipe-card">
            <img src={arrozImg} alt="Arroz" />
            <h3>Arroz</h3>
          </div>
          <div className="recipe-card">
            <img src={feijoadaImg} alt="Feijoada" />
            <h3>Feijoada</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
