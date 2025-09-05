import Image from '../1-atoms/Image';

function Footer() {
  return (
    <footer className="footer">
      <Image src="/LogoTic.png" alt="Logo TIC Yamboró" className="footer__logo" />
      <Image src="/logoSena.png" alt="Logo SENA" className="footer__logo" />
    </footer>
  );
}

export default Footer;