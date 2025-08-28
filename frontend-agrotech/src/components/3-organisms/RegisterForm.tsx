import React from "react";
import Field from "../2-molecules/Field";
import Input from "../1-atoms/Input";
import Select, { type SelectOption } from "../1-atoms/Select";
import Button from "../1-atoms/Button";
import Image from "../1-atoms/Image";
import BackButton from "../1-atoms/BackButton";
import Checkbox from "../1-atoms/Checkbox";

const REGISTER_DOCUMENT_TYPES: SelectOption[] = [
  { value: "CC", label: "Cédula de ciudadanía" },
  { value: "CE", label: "Cédula de extranjería" },
  { value: "TI", label: "Tarjeta de identidad" },
];

function RegisterForm({
  onSwitch,
  onBack,
}: {
  onSwitch: () => void;
  onBack: () => void;
}) {
  const [docType, setDocType] = React.useState<string>("");
  const [docNumber, setDocNumber] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [acepta, setAcepta] = React.useState(false); 

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!acepta) {
      alert("Debes aceptar los términos y condiciones");
      return;
    }
    console.log(
      "Registro exitoso:",
      JSON.stringify({ docType, docNumber, name, email }, null, 2)
    );
  }

  return (
    <section className="register-form" aria-labelledby="register-title">
      <BackButton onClick={onBack} />

      <div className="logo-tic-container">
        <Image
          src="/LogoTic.png"
          alt="tic yamboró"
          className="logo tic large"
        />
      </div>

      <h1 id="register-title" className="register-title">
        Registro
      </h1>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="grid">
          <Field label="">
            <Select
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              options={REGISTER_DOCUMENT_TYPES}
              placeholder="Selecciona una opción"
            />
          </Field>
          <Field label="">
            <Input
              inputMode="numeric"
              pattern="\d*"
              placeholder="Ej: 1234567890"
              value={docNumber}
              onChange={(e) => setDocNumber(e.target.value.replace(/\D/g, ""))}
            />
          </Field>
          <Field label="">
            <Input
              placeholder="Tu nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </Field>
          <Field label="">
            <Input
              placeholder="Tu apellido completo"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="name"
            />
          </Field>
          <Field label="">
            <Input
              inputMode="numeric"
              pattern="\d*"
              placeholder="Ej: 1234567890"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            />
          </Field>
          <Field label="">
            <Input
              type="email"
              placeholder="usuario@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </Field>
          <Field label="">
            <Input
              type="password"
              placeholder="Mínimo 8 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </Field>
        </div>

        {/* Checkbox de términos */}
          <Checkbox
            id="terminos"
            label="Acepto términos y condiciones"
            checked={acepta}
            onChange={(e) => setAcepta(e.target.checked)}
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
          Registrarse
        </Button>

        <p className="muted">
          ¿Ya tienes cuenta?{" "}
          <button type="button" className="link" onClick={onSwitch}>
            Inicia sesión
          </button>
        </p>
      </form>
    </section>
  );
}

export default RegisterForm;

