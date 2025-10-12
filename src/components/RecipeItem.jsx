import "../assets/RecipeItem.css"

export const RecipeItem = ({ recipe, onDelete }) => {
  return (
    <li className="receita-item">
      <p>{recipe.nome}</p>
      <p>Ingredientes: {recipe.ingredientes}</p>
      <p>Preparo: {recipe.modoPreparo}</p>
      <button onClick={() => onDelete(recipe.id)}>Excluir</button>
    </li>
  );
};


export default RecipeItem
