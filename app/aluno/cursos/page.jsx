"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import styles from "./page.module.css";

export default function MeusCursosPage() {
    const [activeTab, setActiveTab] = useState("materiais");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tab = urlParams.get('tab');
        if (tab) {
            setActiveTab(tab);
        }
    }, []);

    return (
        <DashboardLayout userType="aluno">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.turmaInfo}>
                        <span className={styles.label}>| Turma:</span>
                        <h2 className={styles.turmaName}>Estudo dos ecossistemas e práticas sustentáveis</h2>
                    </div>
                </div>

                <div className={styles.tabsContainer}>
                    <button
                        className={`${styles.tab} ${activeTab === 'materiais' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('materiais')}
                    >
                        MATERIAIS DE ESTUDO
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'atividades' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('atividades')}
                    >
                        ATIVIDADES
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'forum' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('forum')}
                    >
                        FÓRUM DE DISCUSSÃO
                    </button>
                </div>

                <div className={styles.tabContent}>
                    {activeTab === 'materiais' && (
                        <div className={styles.materiaisGrid}>
                            <div className={styles.materialCard}>
                                <h3>Introdução aos Ecossistemas</h3>
                                <span className={styles.tagCinza}>Documento</span>
                                <p>Material introdutório sobre ecossistemas e biodiversidade</p>
                                <div className={styles.date}>Adicionado em: 15/03/2026</div>
                                <button className={styles.btnAcessar}>ACESSAR</button>
                            </div>

                            <div className={styles.materialCard}>
                                <h3>Ciclos Biogeoquímicos</h3>
                                <span className={styles.tagCinza}>Vídeo</span>
                                <p>Vídeo-aula explicativa sobre os ciclos da natureza</p>
                                <div className={styles.date}>Adicionado em: 16/03/2026</div>
                                <button className={styles.btnAcessar}>ACESSAR</button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'atividades' && (
                        <div className={styles.atividadesColumns}>
                            <div className={styles.columnLeft}>
                                <h4>Atividades Pendentes</h4>

                                <div className={styles.atividadeCard}>
                                    <div className={styles.atividadeHeader}>
                                        <h3 className={styles.atvTitle}>Pesquisa sobre Biomas Brasileiros</h3>
                                        <span className={styles.tagVerde}>Trabalho</span>
                                    </div>
                                    <p>Realizar uma pesquisa sobre os principais biomas brasileiros e suas características</p>
                                    <div className={styles.atividadeProgress}>
                                        <div className={styles.progressTrack}>
                                            <div className={styles.progressFill} style={{ width: '0%' }}></div>
                                        </div>
                                        <span className={styles.progressText}>0%</span>
                                    </div>
                                    <div className={styles.atividadeFooter}>
                                        <div className={styles.atividadeMeta}>
                                            <div>Prazo: 23/03/2026</div>
                                            <div>Pontos: 10</div>
                                        </div>
                                        <div className={styles.atividadeActions}>
                                            <button className={styles.btnOutline}>VER DETALHES</button>
                                            <button className={styles.btnSolid}>INICIAR</button>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.atividadeCard}>
                                    <div className={styles.atividadeHeader}>
                                        <h3 className={styles.atvTitle}>Quiz sobre Ecossistemas</h3>
                                        <span className={styles.tagVerdeEscuro}>Questionário</span>
                                    </div>
                                    <p>Teste seus conhecimentos sobre os diferentes tipos de ecossistemas</p>
                                    <div className={styles.atividadeProgress}>
                                        <div className={styles.progressTrack}>
                                            <div className={styles.progressFill} style={{ width: '0%' }}></div>
                                        </div>
                                        <span className={styles.progressText}>0%</span>
                                    </div>
                                    <div className={styles.atividadeFooter}>
                                        <div className={styles.atividadeMeta}>
                                            <div>Prazo: 24/03/2026</div>
                                            <div>Pontos: 5</div>
                                        </div>
                                        <div className={styles.atividadeActions}>
                                            <button className={styles.btnOutline}>VER DETALHES</button>
                                            <button className={styles.btnSolid}>INICIAR</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className={styles.columnRight}>
                                <h4>Atividades Concluídas</h4>
                                <div className={styles.emptyState}>
                                    Nenhuma atividade concluída.
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'forum' && (
                        <div className={styles.forumContainer}>
                            <div className={styles.novaDiscussaoCard}>
                                <div className={styles.novaDiscussaoHeader}>
                                    <h3>Iniciar Nova Discussão</h3>
                                    <button className={styles.btnSolidNova}>NOVA DISCUSSÃO</button>
                                </div>
                                <p>Compartilhe suas dúvidas, ideias ou reflexões sobre o curso com seus colegas e professores.</p>
                            </div>

                            <div className={styles.discussoesRecentes}>
                                <h4>Discussões Recentes</h4>

                                <div className={styles.discussaoItem}>
                                    <div className={styles.discussaoInfo}>
                                        <h3 className={styles.discTitle}>Dúvida sobre o conceito de energia renovável</h3>
                                        <p className={styles.discMeta}>Iniciado por Maria Silva em 17/03/2026</p>
                                        <p className={styles.discSubMeta}>Última atividade: 18/03/2026</p>
                                    </div>
                                    <div className={styles.discussaoActions}>
                                        <span className={styles.respostasCount}>6 respostas</span>
                                        <button className={styles.btnOutlineDisc}>VER DISCUSSÃO</button>
                                    </div>
                                </div>

                                <div className={styles.discussaoItem}>
                                    <div className={styles.discussaoInfo}>
                                        <h3 className={styles.discTitle}>Compartilhando um artigo interessante sobre sustentabilidade</h3>
                                        <p className={styles.discMeta}>Iniciado por João Santos em 19/03/2026</p>
                                        <p className={styles.discSubMeta}>Última atividade: 20/03/2026</p>
                                    </div>
                                    <div className={styles.discussaoActions}>
                                        <span className={styles.respostasCount}>3 respostas</span>
                                        <button className={styles.btnOutlineDisc}>VER DISCUSSÃO</button>
                                    </div>
                                </div>

                                <div className={styles.discussaoItem}>
                                    <div className={styles.discussaoInfo}>
                                        <h3 className={styles.discTitle}>Sugestão de projeto para a feira de ciências</h3>
                                        <p className={styles.discMeta}>Iniciado por Ana Oliveira em 21/03/2026</p>
                                        <p className={styles.discSubMeta}>Última atividade: 22/03/2026</p>
                                    </div>
                                    <div className={styles.discussaoActions}>
                                        <span className={styles.respostasCount}>8 respostas</span>
                                        <button className={styles.btnOutlineDisc}>VER DISCUSSÃO</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                </div>

            </div>
        </DashboardLayout>
    );
}
