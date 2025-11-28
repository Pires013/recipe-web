import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./pages/LoginPage";
import CadastroPage from "./pages/CadastroPage";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import CadastroReceitaPage from "./pages/CadastroReceitaPage";
import Navbar from "./components/Navbar";

export default function App() {
  const [logado, setLogado] = useState(false);

  return (
    <Router>

      {logado && <Navbar />}

      <Routes>

        <Route
          path="/"
          element={
            logado ? (
              <Navigate to="/home" replace />
            ) : (
              <LoginPage onLogin={() => setLogado(true)} />
            )
          }
        />


        <Route path="/cadastro" element={<CadastroPage />} />


        {logado && (
          <>
            <Route path="/home" element={<HomePage />} />
            <Route path="/receitas" element={<RecipePage />} />
            <Route path="/cadastro-receita" element={<CadastroReceitaPage />} />
          </>
        )}


        {!logado && <Route path="*" element={<Navigate to="/" replace />} />}
      </Routes>
    </Router>
  );
}
