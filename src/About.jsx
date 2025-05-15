import './About.css';

export default function About() {
  return (
    <section className="about">
      <h2>Sobre Nosotros</h2>
      <p>
        Somos una cafetería artesanal dedicada a ofrecer experiencias únicas a través del café.
        Nuestro compromiso es con la calidad, la sostenibilidad y la comunidad local.
      </p>

      <article>
        <h3>Nuestra Historia</h3>
        <p>
          Desde 2010, Café Aroma nace de la pasión por el café y la búsqueda constante de sabores excepcionales.
          Comenzamos como un pequeño proyecto familiar y hoy somos un referente para amantes del café en la ciudad.
        </p>
      </article>

      <article>
        <h3>Calidad y Origen</h3>
        <p>
          Trabajamos directamente con productores locales y cooperativas de comercio justo, asegurando un café
          cultivado de manera responsable y con técnicas que preservan la naturaleza.
        </p>
      </article>

      <article>
        <h3>Compromiso con la Comunidad</h3>
        <p>
          Más allá del café, apoyamos iniciativas sociales y eventos culturales para fomentar el crecimiento y
          la unión de nuestra comunidad.
        </p>
      </article>
    </section>
  );
}
