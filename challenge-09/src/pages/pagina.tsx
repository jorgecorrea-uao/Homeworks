export const pagina = (titulo: string) => {
  const Pagina = () => (
    <section>
      <h2>{titulo}</h2>
      <p>Contenido de la sección {titulo}.</p>
    </section>
  );
  return Pagina;
};