import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "../pages/LoginPage.css";

export const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { mensagem, login } = useAuth(onLogin);
  const navigate = useNavigate(); 

  return (
    <div className="login-page">
      <h2>Login</h2>

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

      <button onClick={() => login(email, senha)}>Login</button>

      <button onClick={() => navigate("/cadastro")}>Cadastrar</button>

      <p>{mensagem}</p>
    </div>
  );
};

export default LoginPage;
