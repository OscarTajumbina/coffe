import './Home.css';

export default function Home() {
  return (
    <section className="home">
      <h1>Bienvenido a Café Aroma</h1>
      <p>Disfruta del mejor café artesanal con nosotros.</p>

      <article>
        <h2>Nuestra misión</h2>
        <p>
          En Café Aroma buscamos brindar una experiencia única a cada amante del café, ofreciendo granos seleccionados
          y tostados con pasión para garantizar calidad y sabor en cada taza.
        </p>
      </article>

      <article>
        <h2>Nuestros productos</h2>
        <p>
          Contamos con una variedad de blends y cafés de origen, preparados por baristas expertos que combinan tradición
          y técnicas modernas para sorprender tu paladar.
        </p>
      </article>

      <article>
        <h2>Visítanos</h2>
        <p>
          Nuestra cafetería está ubicada en el corazón de la ciudad, un espacio acogedor para que disfrutes momentos
          especiales acompañado de tu bebida favorita.
        </p>
      </article>
    </section>
  );
}
