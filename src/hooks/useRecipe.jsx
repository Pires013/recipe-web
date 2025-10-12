import { useState, useEffect } from "react"

const useRecipe = () => {
    const [receitas, setReceitas] = useState([]);

    const loadRecipe = async () => {
        const resp = await fetch ("http://localhost:8080/receitas");
        setReceitas(await resp.json());
    }

   const addRecipe = async (newRecipe) => {
    const response = await fetch("http://localhost:8080/receitas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRecipe),
    });

    if (!response.ok) {
        throw new Error(`Erro ao adicionar receita: ${response.status} ${response.statusText}`);
    }

    loadRecipe();
};
    const removeRecipe = async (id) => {
        await fetch(`http://localhost:8080/receitas/${id}`, 
            {method: "DELETE"})
            loadRecipe();
        }

    useEffect(() => {
        loadRecipe();
    }, [])


  return {receitas, addRecipe, removeRecipe};
}

export default useRecipe
