import { useState } from "react";
import Field from "../2-molecules/Field";
import Input from "../1-atoms/Input";
import Button from "../1-atoms/Button";
import Image from "../1-atoms/Image";

function ForgotPasswordForm({ onSubmit }: { onSubmit: () => void }) {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === confirmEmail) {
      console.log("Verificando correo:", email);
      onSubmit();
    } else {
      console.error("Los correos no coinciden.");
    }
  };

  return (
    <>
    <div className="logo-tic-container">
        <Image
          src="/LogoTic.png"
          alt="tic yamboró"
          className="logo tic forgot"
        />
      </div>
      <h1 className="card__title" style={{ textAlign: "center" }}>
        Verificación
      </h1>
      <form className="form" onSubmit={handleSubmit}>
        <Field label="">
          <Input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Field>
        <Field label="">
          <Input
            type="email"
            placeholder="Confirmar correo electrónico"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
        </Field>
        <Button
          type="submit"
          className="btn primary"
          style={{ width: "200px", marginTop: "0.3rem", margin: '2rem auto 0', borderRadius: '50px', display: 'block' }}
        >
          Verificar
        </Button>
        
      </form>
    </>
  );
}

export default ForgotPasswordForm;
