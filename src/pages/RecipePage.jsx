import { useState } from "react";
import useRecipe from "../hooks/useRecipe";
import "../pages/RecipePage.css";

const RecipePage = () => {
  const { receitas, removeRecipe, updateRecipe } = useRecipe();
  const [searchTerm, setSearchTerm] = useState("");
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [formData, setFormData] = useState({ nome: "", ingredientes: "", modoPreparo: "" });

  const filteredReceitas = receitas.filter((r) =>
    r.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (r) => {
    setEditingRecipe(r);
    setFormData({
      nome: r.nome,
      ingredientes: r.ingredientes,
      modoPreparo: r.modoPreparo,
    });
  };

  const handleSave = async () => {
    if (editingRecipe) {
      await updateRecipe(editingRecipe.id, formData);
      setEditingRecipe(null);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="receitas-page">
      <h2>🍲 Todas as Receitas</h2>

      <input
        type="text"
        placeholder="Pesquisar receita..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="barra-pesquisa"
      />

      <div className="receitas-grid">
        {filteredReceitas.length > 0 ? (
          filteredReceitas.map((r) => (
            <div key={r.id} className="receita-card">
              {editingRecipe && editingRecipe.id === r.id ? (
                <div className="receita-edicao">
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Nome da receita"
                  />
                  <textarea
                    name="ingredientes"
                    value={formData.ingredientes}
                    onChange={handleChange}
                    placeholder="Ingredientes"
                  />
                  <textarea
                    name="modoPreparo"
                    value={formData.modoPreparo}
                    onChange={handleChange}
                    placeholder="Modo de preparo"
                  />

                  <div className="botoes-edicao">
                    <button className="salvar-btn" onClick={handleSave}>
                      💾 Salvar
                    </button>
                    <button
                      className="cancelar-btn"
                      onClick={() => setEditingRecipe(null)}
                    >
                       Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="receita-info">
                    <h3>{r.nome}</h3>
                    <p>
                      <strong>Ingredientes:</strong> {r.ingredientes}
                    </p>
                    <p>
                      <strong>Modo de preparo:</strong> {r.modoPreparo}
                    </p>
                  </div>

                  <div className="receita-acoes">
                    <button
                      className="editar-btn"
                      onClick={() => handleEdit(r)}
                    >
                      ✏️ Editar
                    </button>
                    <button
                      className="excluir-btn"
                      onClick={() => removeRecipe(r.id)}
                    >
                       Excluir
                    </button>
                    <button
                      className="favoritar-btn"
                      onClick={() =>
                        alert(`"${r.nome}" adicionado aos favoritos!`)
                      }
                    >
                       Favoritar
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p className="nenhuma">Nenhuma receita encontrada 😕</p>
        )}
      </div>
    </div>
  );
};

export default RecipePage;
