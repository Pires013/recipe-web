import { useState, useEffect } from "react";
import "../assets/RecipeForm.css";

const RecipeForm = ({ onAdd, receitaEdit }) => {
  const [nome, setNome] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [modoPreparo, setModoPreparo] = useState("");

  useEffect(() => {
    if (receitaEdit) {
      setNome(receitaEdit.nome);
      setIngredientes(receitaEdit.ingredientes);
      setModoPreparo(receitaEdit.modoPreparo);
    } else {
      setNome("");
      setIngredientes("");
      setModoPreparo("");
    }
  }, [receitaEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome.trim() || !ingredientes.trim() || !modoPreparo.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    const novaReceita = { nome, ingredientes, modoPreparo };
    await onAdd(novaReceita);
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

      <button type="submit">
        {receitaEdit ? "Atualizar Receita" : "Salvar"}
      </button>
    </form>
  );
};

export default RecipeForm;
