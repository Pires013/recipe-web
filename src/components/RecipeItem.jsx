import "../assets/RecipeItem.css";

const RecipeItem = ({ recipe, onDelete, onEdit }) => {
  return (
    <li className="recipe-item">
      <h3>{recipe.nome}</h3>
      <p><strong>Ingredientes:</strong> {recipe.ingredientes}</p>
      <p><strong>Modo de preparo:</strong> {recipe.modoPreparo}</p>

      <div className="botoes">
        <button onClick={onEdit}>Editar</button>
        <button onClick={() => onDelete(recipe.id)}>Excluir</button>
      </div>
    </li>
  );
};

export default RecipeItem;
