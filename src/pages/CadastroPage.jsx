import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "../pages/LoginPage.css";  

export const CadastroPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { mensagem, cadastrar } = useAuth();
  const navigate = useNavigate();

  const handleCadastro = async () => {
    await cadastrar(email, senha);
    navigate("/"); 
  };

  return (
    <div className="login-page">
      <h2>Cadastro</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu e-mail"
      />

      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Digite sua senha"
      />

      <button onClick={handleCadastro}>Cadastrar</button>
      <button onClick={() => navigate("/")}>Voltar</button>

      <p>{mensagem}</p>
    </div>
  );
};

export default CadastroPage;
