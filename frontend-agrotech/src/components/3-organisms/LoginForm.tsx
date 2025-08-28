import { useState } from "react";
import Field from "../2-molecules/Field";
import Select from "../1-atoms/Select";
import Input from "../1-atoms/Input";
import Button from "../1-atoms/Button";
import Image from "../1-atoms/Image";
import type { SelectOption } from "../1-atoms/Select";
import BackButton from "../1-atoms/BackButton";

type DocumentType = "CC" | "CE" | "TI";
const DOCUMENT_TYPES: SelectOption[] = [
  { value: "CC", label: "Cédula de ciudadanía" },
  { value: "CE", label: "Cédula de extranjería" },
  { value: "TI", label: "Tarjeta de identidad" },
];

function LoginForm({
  onSwitch,
  onForgotPassword,
  onBack,
}: {
  onSwitch: () => void;
  onForgotPassword: () => void;
  onBack: () => void;
}) {
  const [docType, setDocType] = useState<DocumentType | "">("");
  const [docNumber, setDocNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="login-form" aria-labelledby="login-title">
      <BackButton onClick={onBack} />

      <div className="logo-tic-container">
        <Image
          src="/LogoTic.png"
          alt="tic yamboró"
          className="logo tic large"
        />
      </div>

      <h1 id="login-title" className="login-title">
        Iniciar sesión
      </h1>

      <form className="form" noValidate>
        <div className="grid">
          <Field label="">
            <Select
              value={docType}
              onChange={(e) => setDocType(e.target.value as DocumentType)}
              options={DOCUMENT_TYPES}
              placeholder="Tipo de documento"
            />
          </Field>
          <Field label="">
            <Input
              inputMode="numeric"
              placeholder="Número de documento"
              value={docNumber}
              onChange={(e) => setDocNumber(e.target.value.replace(/\D/g, ""))}
            />
          </Field>
          <Field label="">
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>
        </div>

          <p className="link" onClick={onForgotPassword}>
            ¿Olvidaste tu Contraseña?
          </p>
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
          Iniciar sesión
        </Button>


        <p className="muted">
          ¿No tienes una cuenta?{" "}
          <button type="button" className="link" onClick={onSwitch}>
            Regístrate
          </button>
        </p>
      </form>
    </section>
  );
}

export default LoginForm;
