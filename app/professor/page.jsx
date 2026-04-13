"use client";

import DashboardLayout from "../../components/DashboardLayout";
import Link from "next/link";
import styles from "./page.module.css";

// View do professor logado
// Copiei algumas classes do aluno pq o prazo tava apertado pra entregar 
export default function ProfessorDashboard() {
    return (
        <DashboardLayout userType="professor">
            <div className={styles.dashboardContainer}>

                <div className={styles.welcomeSection}>
                    <h1>Bem-vindo, Eduardo Henrique</h1>
                </div>

                {/* Cards de estatísticas */}
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <div className={styles.statHeader}>
                            <span className={styles.statIcon}>👥</span>
                            <h3>Minhas Turmas</h3>
                        </div>
                        <div className={styles.statValue}>0</div>
                        <div className={styles.statDesc}>Turmas ativas</div>
                        <Link href="#" className={styles.statLink}>VER DETALHES</Link>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statHeader}>
                            <span className={styles.statIcon}>📋</span>
                            <h3>Atividades</h3>
                        </div>
                        <div className={styles.statValue}>0</div>
                        <div className={styles.statDesc}>Atividades pendentes</div>
                        <Link href="#" className={styles.statLink}>VER DETALHES</Link>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statHeader}>
                            <span className={styles.statIcon}>▶️</span>
                            <h3>Materiais</h3>
                        </div>
                        <div className={styles.statValue}>12</div>
                        <div className={styles.statDesc}>Materiais publicados</div>
                        <Link href="#" className={styles.statLinkBtn}>VER DETALHES</Link>
                    </div>
                </div>

                {/* Listas (Atividades Recentes, Alunos Recentes, Próximas Aulas) */}
                <div className={styles.listsGridProf}>

                    <div className={styles.listCard}>
                        <h3>Atividades Recentes</h3>
                        <div className={styles.emptyState}>
                            <p>Nenhuma atividade pendente</p>
                        </div>
                        <button className={styles.btnOutlineCentered}>CRIAR NOVA ATIVIDADE</button>
                    </div>

                    <div className={styles.listCard}>
                        <h3>Alunos Recentes</h3>
                        <div className={styles.emptyState}>
                            <p>Nenhum aluno encontrado</p>
                        </div>
                        <button className={styles.btnOutlineCentered}>VER TODOS OS ALUNOS</button>
                    </div>

                    <div className={styles.listCardExtra}>
                        <h3>Próximas Aulas</h3>
                        {/* Espaço reservado para futuras implementações da API */}
                    </div>

                </div>

            </div>
        </DashboardLayout>
    );
}
