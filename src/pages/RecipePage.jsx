import useRecipe from "../hooks/useRecipe"
import RecipeForm from "../components/RecipeForm"
import RecipeItem from "../components/RecipeItem"

import "../pages/RecipePage.css"

const RecipePage = () => {
  const { receitas, addRecipe, removeRecipe } = useRecipe();

  return (
    <div className="receitas-page">
      <h2>Receitas</h2>
      <RecipeForm onAdd={addRecipe} />
      <ul>
        {receitas.map(r => (
          <RecipeItem key={r.id} recipe={r} onDelete={removeRecipe} />
        ))}
      </ul>
    </div>
  )
}

export default RecipePage
