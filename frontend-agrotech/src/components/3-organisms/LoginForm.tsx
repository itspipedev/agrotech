import { useState } from "react";
import Field from "../2-molecules/Field";
import Select from "../1-atoms/Select";
import Input from "../1-atoms/Input";
import Button from "../1-atoms/Button";
import Image from "../1-atoms/Image";
import type { SelectOption } from "../1-atoms/Select";

type DocumentType = "CC" | "CE" | "TI";
const DOCUMENT_TYPES: SelectOption[] = [
  { value: "CC", label: "Cédula de ciudadanía" },
  { value: "CE", label: "Cédula de extranjería" },
  { value: "TI", label: "Tarjeta de identidad" },
];

function LoginForm({ onSwitch }: { onSwitch: () => void }) {
  const [docType, setDocType] = useState<DocumentType | "">("");
  const [docNumber, setDocNumber] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="card" aria-labelledby="login-title">
      <h1 id="login-title" className="card__title">
        ¡Bienvenido!
      </h1>
      <form className="form" noValidate>
        <div className="grid">
          <Field label="Tipo de documento">
            <Select
              value={docType}
              onChange={(e) => setDocType(e.target.value as DocumentType)}
              options={DOCUMENT_TYPES}
              placeholder="Selecciona una opción"
            />
          </Field>
          <Field label="Número de documento">
            <Input
              inputMode="numeric"
              placeholder="Ej: 1234567890"
              value={docNumber}
              onChange={(e) => setDocNumber(e.target.value.replace(/\D/g, ""))}
            />
          </Field>
          <Field label="Contraseña">
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>
        </div>
        <div className="row">
          <Button type="button" className="btn ghost">
            Restablecer contraseña
          </Button>
          <Button type="submit" className="btn primary">
            Iniciar sesión
          </Button>
        </div>
        <p className="muted">
          ¿No tienes una cuenta?{" "}
          <button type="button" className="link" onClick={onSwitch}>
            Regístrate
          </button>
        </p>
        <div className="logo-tic-container">
          <Image
            src="/LogoTic.png"
            alt="tic yamboró"
            className="logo tic large"
          />
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
