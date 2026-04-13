"use client";

import DashboardLayout from "../../../components/DashboardLayout";
import styles from "./page.module.css";

// Como não havia imagem no anexo, construí uma área de Gerenciamento baseada no padrão que vi nas aulas.
const MEUS_CURSOS = [
    { id: 1, nome: "Estudo dos ecossistemas", alunos: 42, status: "Fechado", capa: "https://picsum.photos/seed/ecossistema/400/200" },
    { id: 2, nome: "Introdução à Sustentabilidade", alunos: 120, status: "Aberto", capa: "https://picsum.photos/seed/sustentavel/400/200" },
    { id: 3, nome: "Gestão de Resíduos", alunos: 15, status: "Aberto", capa: "https://picsum.photos/seed/reciclagem/400/200" },
];

export default function GerenciarCursosPage() {
    return (
        <DashboardLayout userType="professor">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Gerenciar Cursos</h1>
                    <p>Módulos, turmas e disciplinas sob sua supervisão.</p>
                </div>

                <div className={styles.grid}>
                    {MEUS_CURSOS.map(curso => (
                        <div key={curso.id} className={styles.card}>
                            <div className={styles.cardImg} style={{ backgroundImage: `url(${curso.capa})` }}></div>
                            <div className={styles.cardBody}>
                                <h3>{curso.nome}</h3>
                                <p>Alunos Matriculados: <strong>{curso.alunos}</strong></p>
                                <div className={styles.statusBox}>
                                    Status: <span className={curso.status === "Aberto" ? styles.statusAberto : styles.statusFechado}>{curso.status}</span>
                                </div>
                                <div className={styles.actions}>
                                    <button className={styles.btnSolid}>EDITAR</button>
                                    <button className={styles.btnOutline}>VER ALUNOS</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
