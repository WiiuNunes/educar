"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

/**
 * Componente principal de Login (Ponto de Entrada da aplicação)
 * Optei por 'use client' devido à necessidade do bind de eventos sintéticos para formulários.
 * Para a próxima entrega acadêmica, o fluxo exigirá um middleware JWT acoplado no NextAuth pra fechar o RBAC real.
 * Por ora mantive os botões de de Bypass (Mock/Demo) pra banca conseguir testar o mockup em Vercel sem o bando de dados MySQL ligado.
 */
export default function LoginPage() {
  const router = useRouter();

  // Controle de estado pro formulário (aprendi nas aulas de front-end)
  const [tipoUsuario, setTipoUsuario] = useState("aluno");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setErro("");

    // Barreira de autenticação
    if (!email || !senha) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }
    if (senha !== "123456") {
      setErro("Credenciais inválidas. (Dica: a senha mockada é 123456)");
      return;
    }

    // Simulação do backend
    if (tipoUsuario === "aluno") {
      router.push("/aluno");
    } else {
      router.push("/professor");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* Usando um ícone simples importando como texto ou apenas um cap de formado 🎓 pra representar a educação */}
        <h1>🎓 Educar</h1>
        <p>Plataforma Educacional Sustentável</p>
      </div>

      <div className={styles.formContainer}>
        <h2>Login</h2>

        {erro && (
          <div style={{ backgroundColor: '#ffebee', color: '#c62828', padding: '10px', borderRadius: '4px', marginBottom: '15px', fontSize: '0.9rem', border: '1px solid #ef9a9a' }}>
            ⚠️ {erro}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className={styles.radioGroup}>
            <span>Entrar como:</span>
            <label>
              <input
                type="radio"
                name="tipoUsuario"
                value="aluno"
                checked={tipoUsuario === "aluno"}
                onChange={() => setTipoUsuario("aluno")}
              />
              Aluno
            </label>
            <label>
              <input
                type="radio"
                name="tipoUsuario"
                value="professor"
                checked={tipoUsuario === "professor"}
                onChange={() => setTipoUsuario("professor")}
              />
              Professor
            </label>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.btnEntrar}>
            ENTRAR
          </button>
        </form>

        {/* Botões para facilitar a avaliação do professor */}
        <div className={styles.demoButtonsRow}>
          <button type="button" className={styles.btnDemo} onClick={() => router.push("/aluno")}>
            DEMO ALUNO
          </button>
          <button type="button" className={styles.btnDemo} onClick={() => router.push("/professor")}>
            DEMO PROFESSOR
          </button>
        </div>

        <div className={styles.links}>
          <Link href="/cadastro">Não tem uma conta? Cadastre-se</Link>
          <br />
          <Link href="#">Esqueceu sua senha?</Link>
        </div>
      </div>
    </div>
  );
}
