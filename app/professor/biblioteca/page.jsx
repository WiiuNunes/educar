"use client";

import { useState } from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import styles from "./page.module.css";

// Dados simulados da biblioteca
const bibliotecaData = [
    {
        id: 1,
        titulo: "Guia de Energia Renovável",
        disciplina: "Ciências",
        data: "01/03/2026",
        tipo: "Documento",
        descricao: "Um guia completo sobre fontes de energia renovável e seu impacto no meio ambiente.",
        tags: ["sustentabilidade", "energia", "meio ambiente"],
        img: "https://picsum.photos/seed/energia/400/200"
    },
    {
        id: 2,
        titulo: "Consumo Consciente na Prática",
        disciplina: "Geografia",
        data: "02/03/2026",
        tipo: "Documento",
        descricao: "Manual prático com dicas para reduzir o consumo e adotar práticas sustentáveis no dia a dia.",
        tags: ["sustentabilidade", "consumo", "reciclagem"],
        img: "https://picsum.photos/seed/consumo/400/200"
    },
    {
        id: 3,
        titulo: "Biodiversidade Brasileira",
        disciplina: "Biologia",
        data: "03/03/2026",
        tipo: "Vídeo",
        descricao: "Documentário sobre a rica biodiversidade brasileira e a importância da sua conservação.",
        tags: ["biodiversidade", "ecossistemas", "conservação"],
        img: "https://picsum.photos/seed/biodiversidade/400/200"
    },
    {
        id: 4,
        titulo: "Matemática da Sustentabilidade",
        disciplina: "Matemática",
        data: "04/03/2026",
        tipo: "Apresentação",
        descricao: "Apresentação com dados estatísticos e gráficos sobre sustentabilidade global.",
        tags: ["sustentabilidade", "estatísticas", "gráficos"],
        img: "https://picsum.photos/seed/matematica/400/200"
    },
    {
        id: 5,
        titulo: "Água: Recurso Vital",
        disciplina: "Ciências",
        data: "05/03/2026",
        tipo: "Documento",
        descricao: "Estudo sobre a importância da água e estratégias para sua conservação.",
        tags: ["água", "recursos hídricos", "conservação"],
        img: "https://picsum.photos/seed/agua/400/200"
    },
    {
        id: 6,
        titulo: "Literatura e Meio Ambiente",
        disciplina: "Português",
        data: "06/03/2026",
        tipo: "Documento",
        descricao: "Análise de obras literárias que abordam temas ambientais.",
        tags: ["literatura", "meio ambiente", "análise"],
        img: "https://picsum.photos/seed/literatura/400/200"
    }
];

export default function BibliotecaDigital() {
    const [busca, setBusca] = useState("");
    const [tipoFiltro, setTipoFiltro] = useState("Todos os Tipos");
    const [disciplinaFiltro, setDisciplinaFiltro] = useState("Todas as Disciplinas");

    // Filtros em tempo real
    const notasFiltradas = bibliotecaData.filter((item) => {
        const combinaBusca = item.titulo.toLowerCase().includes(busca.toLowerCase()) ||
            item.descricao.toLowerCase().includes(busca.toLowerCase());
        const combinaTipo = tipoFiltro === "Todos os Tipos" || item.tipo === tipoFiltro;
        const combinaDisciplina = disciplinaFiltro === "Todas as Disciplinas" || item.disciplina === disciplinaFiltro;

        return combinaBusca && combinaTipo && combinaDisciplina;
    });

    return (
        <DashboardLayout userType="professor">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Biblioteca Digital</h1>
                    <p>Explore nossa coleção de materiais educacionais sobre sustentabilidade e temas interdisciplinares.</p>
                </div>

                {/* Barra de pesquisa e filtros */}
                <div className={styles.filtersBar}>
                    <div className={styles.searchInput}>
                        <span className={styles.searchIcon}>🔍</span>
                        <input
                            type="text"
                            placeholder="Pesquisar por título, descrição..."
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                        />
                    </div>

                    <div className={styles.filterGroup}>
                        <label>Filtrar por Tipo</label>
                        <select value={tipoFiltro} onChange={(e) => setTipoFiltro(e.target.value)}>
                            <option value="Todos os Tipos">Todos os Tipos</option>
                            <option value="Documento">Documento</option>
                            <option value="Vídeo">Vídeo</option>
                            <option value="Apresentação">Apresentação</option>
                        </select>
                    </div>

                    <div className={styles.filterGroup}>
                        <label>Filtrar por Disciplina</label>
                        <select value={disciplinaFiltro} onChange={(e) => setDisciplinaFiltro(e.target.value)}>
                            <option value="Todas as Disciplinas">Todas as Disciplinas</option>
                            <option value="Ciências">Ciências</option>
                            <option value="Geografia">Geografia</option>
                            <option value="Biologia">Biologia</option>
                            <option value="Matemática">Matemática</option>
                            <option value="Português">Português</option>
                        </select>
                    </div>
                </div>

                {/* Grid de Cards */}
                <div className={styles.grid}>
                    {notasFiltradas.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.cardImgContainer}>
                                <img src={item.img} alt={item.titulo} className={styles.cardImg} />
                                <span className={styles.badgeTipo}>{item.tipo}</span>
                            </div>

                            <div className={styles.cardBody}>
                                <h3>{item.titulo}</h3>
                                <div className={styles.metaInfo}>
                                    {item.disciplina} | {item.data}
                                </div>
                                <p className={styles.descricao}>{item.descricao}</p>

                                <div className={styles.tagsContainer}>
                                    {item.tags.map((tag, idx) => (
                                        <span key={idx} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>

                                <div className={styles.cardActions}>
                                    <button><span className={styles.actionIcon}>🔖</span> SALVAR</button>
                                    <button><span className={styles.actionIcon}>⬇️</span> BAIXAR</button>
                                    <button><span className={styles.actionIcon}>🔗</span> COMPARTILHAR</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </DashboardLayout>
    );
}
