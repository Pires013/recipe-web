import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./pages/LoginPage";
import CadastroPage from "./pages/CadastroPage"; // cadastro de usuário
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import CadastroReceitaPage from "./pages/CadastroReceitaPage"; // novo cadastro de receitas
import Navbar from "./components/Navbar";

export default function App() {
  const [logado, setLogado] = useState(false);

  return (
    <Router>
      {/* Navbar só aparece se o usuário estiver logado */}
      {logado && <Navbar />}

      <Routes>
        {/* Tela de login só aparece se NÃO estiver logado */}
        <Route
          path="/"
          element={
            logado ? (
              <Navigate to="/home" replace /> // redireciona pra home
            ) : (
              <LoginPage onLogin={() => setLogado(true)} />
            )
          }
        />

        {/* Tela de cadastro de usuário */}
        <Route path="/cadastro" element={<CadastroPage />} />

        {/* Rotas visíveis apenas após login */}
        {logado && (
          <>
            <Route path="/home" element={<HomePage />} />
            <Route path="/receitas" element={<RecipePage />} />
            <Route path="/cadastro-receita" element={<CadastroReceitaPage />} />
          </>
        )}

        {/* Se tentar acessar qualquer rota sem estar logado, volta pro login */}
        {!logado && <Route path="*" element={<Navigate to="/" replace />} />}
      </Routes>
    </Router>
  );
}
