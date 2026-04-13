import styles from "./AtividadeCard.module.css"

export default function AtividadeCard({ atividade }) {
  return (
    <div className={styles.card}>
      <h4>{atividade.titulo}</h4>
      <p className={styles.descricao}>{atividade.descricao}</p>
      <p className={styles.escola}>📍 {atividade.escola}</p>
      <div className={styles.tags}>
        {atividade.tags.map((tag) => (
          <span
            key={tag}
            className={`${styles.tag} ${tag === "ODS 04" ? styles.tagOds04 : styles.tagOds12}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
