import Button from "../1-atoms/Button";

function Hero() {
  return (
    <section
      className="hero-landing"
      style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/FondoLogin.jpeg")' }}
    >
      <h1 className="hero-landing__title">Gestiona Tus Cultivos Con Inteligencia</h1>
      <p className="hero-landing__subtitle">La Plataforma Perfecta Para Optimizar Y Supervisar La Producción Agrícola</p>
      <div className="btn-hero">
        <Button className="btn primary btn-comenzar">Comenzar</Button>
        <Button className="btn">Mas Informacion</Button>
      </div>
    </section>
  );
}

export default Hero;