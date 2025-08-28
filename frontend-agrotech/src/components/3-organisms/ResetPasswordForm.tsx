import { useState } from "react";
import Field from "../2-molecules/Field";
import Input from "../1-atoms/Input";
import Button from "../1-atoms/Button";
import Image from "../1-atoms/Image";

function ResetPasswordForm({ onSubmit }: { onSubmit: () => void }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password && password === confirmPassword) {
      console.log("Contraseña cambiada exitosamente.");
      onSubmit();
    } else {
      console.error("Las contraseñas no coinciden o están vacías.");
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
        Cambiar contraseña
      </h1>
      <form className="form" onSubmit={handleSubmit}>
        <Field label="">
          <Input
            type="password"
            placeholder="Nueva contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Field>
        <Field label="">
          <Input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Field>
        <Button
          type="submit"
          className="btn primary"
          style={{ width: "200px", marginTop: "0.5rem", margin: '2rem auto 0', borderRadius: '50px', display: 'block' }}
        >
          Cambiar
        </Button>
      </form>
    </>
  );
}

export default ResetPasswordForm;
