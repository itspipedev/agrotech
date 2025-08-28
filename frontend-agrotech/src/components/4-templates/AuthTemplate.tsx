import type { ReactNode } from "react";
import Image from "../1-atoms/Image";

function AuthTemplate({ children }: { children: ReactNode }) {
  return (
    <div className="page">
      <aside
        className="hero-login"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.35)), url("/SeñoraLogin.jpeg")',
        }}
      >
        <div className="logo-sena-outside right">
          <Image src="/logoSena.png" alt="SENA" className="logo sena large" />
        </div>
      </aside>
      <main className="panel">{children}</main>
    </div>
  );
}

export default AuthTemplate;
