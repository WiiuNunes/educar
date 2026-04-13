import styles from "./CardODS.module.css"

export default function CardODS({ numero, titulo, descricao, variante }) {
  return (
    <article className={`${styles.card} ${styles[variante]}`}>
      <span
        className={styles.numero}
        aria-label={`Objetivo de Desenvolvimento Sustentável número ${numero.replace("ODS ", "")}`}
      >
        {numero}
      </span>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </article>
  )
}
