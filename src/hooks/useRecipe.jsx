import { useState, useEffect } from "react";

const useRecipe = () => {
  const [receitas, setReceitas] = useState([]);

  const loadRecipe = async () => {
    try {
      const resp = await fetch("http://localhost:8080/receitas");
      if (!resp.ok) throw new Error("Erro ao carregar receitas");
      setReceitas(await resp.json());
    } catch (error) {
      console.error("Erro ao carregar receitas:", error);
    }
  };

  const addRecipe = async (newRecipe) => {
    try {
      const response = await fetch("http://localhost:8080/receitas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRecipe),
      });

      if (!response.ok)
        throw new Error(`Erro ao adicionar receita: ${response.statusText}`);

      await loadRecipe();
    } catch (error) {
      console.error("Erro ao adicionar receita:", error);
      throw error;
    }
  };

  const removeRecipe = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/receitas/${id}`, {
        method: "DELETE",
      });

      if (!response.ok)
        throw new Error(`Erro ao remover receita: ${response.statusText}`);

      await loadRecipe();
    } catch (error) {
      console.error("Erro ao remover receita:", error);
    }
  };

  const updateRecipe = async (id, updatedRecipe) => {
    try {
      const response = await fetch(`http://localhost:8080/receitas/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedRecipe),
      });

      if (!response.ok)
        throw new Error(`Erro ao atualizar receita: ${response.statusText}`);

      await loadRecipe();
    } catch (error) {
      console.error("Erro ao atualizar receita:", error);
    }
  };

  useEffect(() => {
    loadRecipe();
  }, []);

  return { receitas, addRecipe, removeRecipe, updateRecipe };
};

export default useRecipe;
