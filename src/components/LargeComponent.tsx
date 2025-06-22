export default function LargeComponent() {
  return (
    <div style={{ padding: "1rem", backgroundColor: "#222", color: "#fff" }}>
      <h2>Este es un componente grande cargado con Lazy Loading</h2>
      <p>Se carga solo cuando es necesario.</p>
    </div>
  );
}
