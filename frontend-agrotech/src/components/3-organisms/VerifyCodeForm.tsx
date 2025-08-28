import { useState } from 'react';
import OtpInput from '../2-molecules/OtpInput';
import Button from '../1-atoms/Button';
import Image from "../1-atoms/Image";

function VerifyCodeForm({ onSubmit }: { onSubmit: () => void }) {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para verificar el código OTP
    console.log("Código ingresado:", otp);
    if (otp.length === 6) {
      onSubmit();
    } else {
      console.error("El código debe tener 6 dígitos.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="otp-form-container">
        <div className="logo-tic-container">
        <Image
          src="/LogoTic.png"
          alt="tic yamboró"
          className="logo tic large"
        />
      </div>
      <h1 className="card__title" style={{ textAlign: 'center' }}>
        Código de verificación
      </h1>
      <OtpInput
        value={otp}
        onValueChange={setOtp}
        length={6}
      />
      <Button
        type="submit"
          className="btn primary"
          style={{
            width: "200px",
            marginTop: "0.2rem",
            margin: "0.5rem auto auto",
            borderRadius: "50px",
            display: "block",
          }}
      >
        Enviar
      </Button>
    </form>
  );
}

export default VerifyCodeForm;