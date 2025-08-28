import React from 'react';
import Field from '../2-molecules/Field';
import Input from '../1-atoms/Input';
import Select, { type SelectOption } from '../1-atoms/Select';
import Button from '../1-atoms/Button';
import Image from '../1-atoms/Image';

const REGISTER_DOCUMENT_TYPES: SelectOption[] = [
  { value: "CC", label: "Cédula de ciudadanía" },
  { value: "CE", label: "Cédula de extranjería" },
  { value: "TI", label: "Tarjeta de identidad" }
];


function RegisterForm({ onSwitch }: { onSwitch: () => void }) {
  const [docType, setDocType] = React.useState<string>("");
  const [docNumber, setDocNumber] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(
      "Registro exitoso:",
      JSON.stringify({ docType, docNumber, name, email }, null, 2)
    );
  }

  return (
    <section className="card" aria-labelledby="register-title">
      <h1 id="register-title" className="card__title">
        Regístrate
      </h1>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="grid">
          <Field label="Tipo de documento">
            <Select
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              options={REGISTER_DOCUMENT_TYPES}
              placeholder="Selecciona una opción"
            />
          </Field>
          <Field label="Número de documento">
            <Input
              inputMode="numeric"
              pattern="\d*"
              placeholder="Ej: 1234567890"
              value={docNumber}
              onChange={(e) => setDocNumber(e.target.value.replace(/\D/g, ""))}
            />
          </Field>
          <Field label="Nombre">
            <Input
              placeholder="Tu nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </Field>
         <Field label="Número de telefono">
            <Input
              inputMode="numeric"
              pattern="\d*"
              placeholder="Ej: 1234567890"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            />
          </Field>
          <Field label="Correo electrónico">
            <Input
              type="email"
              placeholder="usuario@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </Field>
          <Field label="Contraseña">
            <Input
              type="password"
              placeholder="Mínimo 8 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </Field>
        </div>
        <Button type="submit" className="btn primary">
          Registrarse
        </Button>
        <p className="muted">
          ¿Ya tienes cuenta?{" "}
          <button type="button" className="link" onClick={onSwitch}>
            Inicia sesión
          </button>
        </p>
        <div className="logo-tic-container">
          <Image src="/LogoTic.png" alt="tic yamboró" className="logo tic large" />
        </div>
      </form>
    </section>
  );
}

export default RegisterForm;