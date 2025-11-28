import RecipeForm from "../components/RecipeForm";
import useRecipe from "../hooks/useRecipe";
import "../pages/CadastroReceitaPage.css";

const CadastroReceitaPage = () => {
  const { addRecipe } = useRecipe();

  const handleAdd = async (novaReceita) => {
    await addRecipe(novaReceita);
    alert("Receita cadastrada com sucesso!");
  };

  return (
    <div className="cadastro-receita-container">
      <h2>Cadastrar Nova Receita</h2>
      <RecipeForm onAdd={handleAdd} />
    </div>
  );
};

export default CadastroReceitaPage;
