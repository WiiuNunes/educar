import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <p>
        <strong>Projeto Educar</strong> &mdash; Atividade Extensionista I
      </p>
      <p>Análise e Desenvolvimento de Sistemas &mdash; 2025/2026</p>
      <p className={styles.parceiros}>
        Parceria com CMEI Alcides Restelli Tedesco e Escola de Referência em Ensino Médio
        &mdash; Recife/PE
      </p>
    </footer>
  )
}
