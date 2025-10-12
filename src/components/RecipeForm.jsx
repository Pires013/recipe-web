import { useState } from "react";
import "../assets/RecipeForm.css";

const RecipeForm = ({ onAdd }) => {
  const [nome, setNome] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [modoPreparo, setModoPreparo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome.trim() || !ingredientes.trim() || !modoPreparo.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    const novaReceita = {
      nome,
      ingredientes,
      modoPreparo,
    };

    try {
      await onAdd(novaReceita); 
      setNome("");
      setIngredientes("");
      setModoPreparo("");
    } catch (error) {
      console.error("Erro ao salvar receita:", error);
      alert("Erro ao salvar receita. Tente novamente.");
    }
  };

  return (
    <form className="receita-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome da receita"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="text"
        placeholder="Ingredientes"
        value={ingredientes}
        onChange={(e) => setIngredientes(e.target.value)}
      />

      <textarea
        placeholder="Modo de preparo"
        value={modoPreparo}
        onChange={(e) => setModoPreparo(e.target.value)}
      ></textarea>

      <button type="submit">Salvar</button>
    </form>
  );
};

export default RecipeForm;