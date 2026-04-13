"use client";

import DashboardLayout from "../../components/DashboardLayout";
import Link from "next/link";
import styles from "./page.module.css";

/**
 * Dashboard View (Logotipo Dashboard Aluno).
 * Aproveitando do Roteamento Aninhado / Router Folder tree do Next13+ (App Router).
 * Os layouts aqui são unificados e hidratados junto da raiz em Page Request.
 */
export default function AlunoDashboard() {
    return (
        <DashboardLayout userType="aluno">
            <div className={styles.dashboardContainer}>

                <div className={styles.welcomeSection}>
                    <h1>Bem-vindo, Willian Nunes</h1>
                </div>

                {/* Cards de estatísticas */}
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <div className={styles.statHeader}>
                            <span className={styles.statIcon}>📖</span>
                            <h3>Meus Cursos</h3>
                        </div>
                        <div className={styles.statValue}>2</div>
                        <div className={styles.statDesc}>Cursos matriculados</div>
                        <Link href="/aluno/cursos" className={styles.statLink}>VER TODOS</Link>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statHeader}>
                            <span className={styles.statIcon}>📋</span>
                            <h3>Atividades</h3>
                        </div>
                        <div className={styles.statValue}>3</div>
                        <div className={styles.statDesc}>Atividades pendentes</div>
                        <Link href="/aluno/cursos?tab=atividades" className={styles.statLink}>VER TODAS</Link>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statHeader}>
                            <span className={styles.statIcon}>🔔</span>
                            <h3>Notificações</h3>
                        </div>
                        <div className={styles.statValue}>2</div>
                        <div className={styles.statDesc}>Novas notificações</div>
                        <Link href="#" className={styles.statLink}>VER TODAS</Link>
                    </div>
                </div>

                {/* Listas (Atividades e Materiais) */}
                <div className={styles.listsGrid}>
                    <div className={styles.listCard}>
                        <h3>Atividades Pendentes</h3>

                        <div className={styles.listItem}>
                            <div className={styles.listTitle}>
                                Pesquisa sobre Biomas Brasileiros
                                <span className={styles.tagVerde}>Trabalho</span>
                            </div>
                            <div className={styles.listSubtitle}>| Prazo: 25/03/2026</div>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill} style={{ width: "0%" }}></div>
                                <span className={styles.progressText}>0%</span>
                            </div>
                        </div>

                        <div className={styles.listItem}>
                            <div className={styles.listTitle}>
                                Quiz sobre Ecossistemas
                                <span className={styles.tagVerdeEscuro}>Questionário</span>
                            </div>
                            <div className={styles.listSubtitle}>| Prazo: 26/03/2026</div>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill} style={{ width: "0%" }}></div>
                                <span className={styles.progressText}>0%</span>
                            </div>
                        </div>

                        <div className={styles.listItem}>
                            <div className={styles.listTitle}>
                                Análise de Impactos Ambientais
                                <span className={styles.tagVerde}>Projeto</span>
                            </div>
                            <div className={styles.listSubtitle}>| Prazo: 27/03/2026</div>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill} style={{ width: "0%" }}></div>
                                <span className={styles.progressText}>0%</span>
                            </div>
                        </div>

                        <Link href="/aluno/cursos?tab=atividades" className={styles.btnOutline} style={{ textAlign: 'center', display: 'block', textDecoration: 'none' }}>VER TODAS AS ATIVIDADES</Link>
                    </div>

                    <div className={styles.listCard}>
                        <h3>Materiais Recentes</h3>

                        <div className={styles.materialItem}>
                            <div className={styles.materialIcon}>📄</div>
                            <div className={styles.materialInfo}>
                                <div className={styles.materialTitle}>O Método Científico</div>
                                <div className={styles.materialType}>| Apresentação</div>
                            </div>
                            <button className={styles.btnAcessar}>ACESSAR</button>
                        </div>

                        <div className={styles.materialItem}>
                            <div className={styles.materialIcon}>🎥</div>
                            <div className={styles.materialInfo}>
                                <div className={styles.materialTitle}>Ciclos Biogeoquímicos</div>
                                <div className={styles.materialType}>| Vídeo</div>
                            </div>
                            <button className={styles.btnAcessar}>ACESSAR</button>
                        </div>

                        <div className={styles.materialItem}>
                            <div className={styles.materialIcon}>📄</div>
                            <div className={styles.materialInfo}>
                                <div className={styles.materialTitle}>Introdução aos Ecossistemas</div>
                                <div className={styles.materialType}>| Documento</div>
                            </div>
                            <button className={styles.btnAcessar}>ACESSAR</button>
                        </div>

                        <div className={styles.materialItem}>
                            <div className={styles.materialIcon}>📄</div>
                            <div className={styles.materialInfo}>
                                <div className={styles.materialTitle}>Mudanças Climáticas</div>
                                <div className={styles.materialType}>| Documento</div>
                            </div>
                            <button className={styles.btnAcessar}>ACESSAR</button>
                        </div>

                        <button className={styles.btnOutline}>VER BIBLIOTECA COMPLETA</button>
                    </div>
                </div>

                {/* Trilhas de Aprendizagem */}
                <div className={styles.trilhasSection}>
                    <h3>Trilhas de Aprendizagem sobre Sustentabilidade</h3>

                    <div className={styles.trilhasGrid}>
                        <div className={styles.trilhaCard}>
                            <div className={styles.trilhaImg} style={{ backgroundImage: 'url("https://picsum.photos/seed/energia_solar/400/200")' }}></div>
                            <div className={styles.trilhaContent}>
                                <h4>Energia Renovável</h4>
                                <p>Aprenda sobre fontes de energia renovável e seu impacto no meio ambiente.</p>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressFillOrange} style={{ width: "65%" }}></div>
                                    <span className={styles.progressText}>65%</span>
                                </div>
                                <div className={styles.trilhaActions}>
                                    <Link href="#">CONTINUAR</Link>
                                    <Link href="#">VER DETALHES</Link>
                                </div>
                            </div>
                        </div>

                        <div className={styles.trilhaCard}>
                            <div className={styles.trilhaImg} style={{ backgroundImage: 'url("https://picsum.photos/seed/lixo_eco/400/200")' }}></div>
                            <div className={styles.trilhaContent}>
                                <h4>Consumo Consciente</h4>
                                <p>Descubra práticas de consumo consciente e como reduzir seu impacto ambiental.</p>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressFillOrange} style={{ width: "30%" }}></div>
                                    <span className={styles.progressText}>30%</span>
                                </div>
                                <div className={styles.trilhaActions}>
                                    <Link href="#">CONTINUAR</Link>
                                    <Link href="#">VER DETALHES</Link>
                                </div>
                            </div>
                        </div>

                        <div className={styles.trilhaCard}>
                            <div className={styles.trilhaImg} style={{ backgroundImage: 'url("https://picsum.photos/seed/floresta_bio/400/200")' }}></div>
                            <div className={styles.trilhaContent}>
                                <h4>Biodiversidade</h4>
                                <p>Explore a importância da biodiversidade para o equilíbrio dos ecossistemas.</p>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressFillRed} style={{ width: "10%" }}></div>
                                    <span className={styles.progressText}>10%</span>
                                </div>
                                <div className={styles.trilhaActions}>
                                    <Link href="#">CONTINUAR</Link>
                                    <Link href="#">VER DETALHES</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
}
