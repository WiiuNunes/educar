import styles from "./EscolasList.module.css"

export default function EscolasList({ escolas }) {
  return (
    <ul className={styles.lista}>
      {escolas.map((escola) => (
        <li key={escola.id} className={styles.item}>
          <span className={styles.icone} aria-hidden="true">🏫</span>
          <div>
            <span className={styles.nome}>{escola.nome}</span>
            <span className={styles.nivel}>
              {escola.nivel} &mdash; {escola.cidade}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}
