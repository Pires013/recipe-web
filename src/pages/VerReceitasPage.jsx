export default function VerReceitasPage({ receitas, onDelete, onEdit }) {
  return (
    <div style={{ maxWidth: "700px", margin: "40px auto" }}>
      <h2>Minhas Receitas</h2>
      {receitas.length === 0 ? (
        <p>Nenhuma receita cadastrada.</p>
      ) : (
        receitas.map((r, i) => (
          <div key={i} style={{
            background: "#fff5ee",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            <h3>{r.nome}</h3>
            <p><strong>Ingredientes:</strong> {r.ingredientes}</p>
            <p><strong>Modo de preparo:</strong> {r.modoPreparo}</p>
            <button onClick={() => onEdit(r)}>Editar</button>
            <button onClick={() => onDelete(i)}>Excluir</button>
          </div>
        ))
      )}
    </div>
  );
}
