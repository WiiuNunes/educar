import styles from "./Header.module.css"

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>🌱 Projeto Educar</h1>
        <p>Plataforma de Aprendizado Sustentável &mdash; Recife/PE</p>
      </header>

      <nav className={styles.nav} aria-label="Menu principal">
        <a href="#ods">ODS</a>
        <a href="#escolas">Escolas</a>
        <a href="#atividades">Atividades</a>
        <a href="#contato">Contato</a>
      </nav>
    </>
  )
}
