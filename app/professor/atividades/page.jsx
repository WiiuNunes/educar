"use client";

import DashboardLayout from "../../../components/DashboardLayout";
import styles from "./page.module.css";

/**
 * Componente CRUD: Módulo Responsável pelo Create (Insert)
 * Esta UI foi pensada para coletar payload e depois serializar via axios para POST /atividades.
 * Mock visual com Drag n Drop Placeholder e inputs padronizados para sanitização.
 */
export default function CriarAtividadesPage() {
    return (
        <DashboardLayout userType="professor">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Nova Atividade</h1>
                    <p>Crie questionários, entregas ou fóruns para suas turmas.</p>
                </div>

                <div className={styles.formCard}>
                    <form onSubmit={(e) => e.preventDefault()} className={styles.formObj}>

                        <div className={styles.inputGroup}>
                            <label>Título da Atividade</label>
                            <input type="text" placeholder="Ex: Prova 1 - Sustentabilidade" />
                        </div>

                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label>Turma / Curso</label>
                                <select>
                                    <option>Estudo dos ecossistemas</option>
                                    <option>Introdução à Sustentabilidade</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Data de Vencimento</label>
                                <input type="date" />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Pontos</label>
                                <input type="number" defaultValue="10" />
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Descrição</label>
                            <textarea rows="5" placeholder="Descreva o que os estudantes devem fazer..."></textarea>
                        </div>

                        <div className={styles.uploadBox}>
                            <span className={styles.uploadIcon}>📁</span>
                            <p>Arraste arquivos aqui ou clique para selecionar</p>
                            <button type="button" className={styles.btnAnexar}>ANEXAR MATERIAL</button>
                        </div>

                        <div className={styles.floatingActions}>
                            <button type="button" className={styles.btnSolid}>PUBLICAR ATIVIDADE</button>
                        </div>

                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
}
