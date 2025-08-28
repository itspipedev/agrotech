import FeatureCard from '../2-molecules/FeatureCard';
import Image from '../1-atoms/Image';

function Features() {
  return (
    <section className="features">
      <div className="features__top">
        <FeatureCard 
          title="Monitoreo inteligente" 
          description="Realice un seguimiento de la salud sus cultivos en tiempo real" 
        />
        <FeatureCard 
          title="Gestión de recursos" 
          description="Gestione eficientemente los insumos y los recursos" 
        />
        <FeatureCard 
          title="Análisis de datos" 
          description="Realice análisis basados en datos para obtener mejores rendimientos" 
        />
      </div>

      {/* Línea separadora */}
      <hr className="features__divider" />

      {/* Logos */}
      <div className="features__logos">
        <Image src="/LogoTic.png" alt="Logo TIC Yamboró" className="footer__logo" />
        <Image src="/logoSena.png" alt="Logo SENA" className="footer__logo" />
      </div>
    </section>
  );
}

export default Features;
