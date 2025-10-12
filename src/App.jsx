import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./pages/LoginPage";
import RecipePage from "./pages/RecipePage";
import CadastroPage from "./pages/CadastroPage";

export default function App() {
  const [logado, setLogado] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !logado ? (
              <LoginPage onLogin={() => setLogado(true)} />
            ) : (
              <RecipePage />
            )
          }
        />

        <Route path="/cadastro" element={<CadastroPage />} />
      </Routes>
    </Router>
  );
}
