"use client";

import styles from "./DashboardLayout.module.css";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Wrapper de Layout Base (HOC Model)
 * Aplicado o princípio de Solid/Clean Code: DRY (Don't Repeat Yourself).
 * Injeta via 'children' pra compor o DOM, modularizando Menu Lateral de todo o resto pra reuso e reaproveitamento.
 * A lógica de navegação simula um RBAC básico em runtime através da propriedade `userType`.
 */
export default function DashboardLayout({ children, userType, userName }) {
    const pathname = usePathname();
    const [showNotif, setShowNotif] = useState(false);

    const isAluno = userType === "aluno";

    // Itens de menu variam dependendo do tipo de usuário
    const menuItems = isAluno ? [
        { label: "Dashboard", path: "/aluno", icon: "🏠" },
        { label: "Meus Cursos", path: "/aluno/cursos", icon: "🎓" },
        { label: "Biblioteca Digital", path: "/aluno/biblioteca", icon: "📚" },
    ] : [
        { label: "Dashboard", path: "/professor", icon: "🏠" },
        { label: "Gerenciar Cursos", path: "/professor/cursos", icon: "⚙️" },
        { label: "Criar Atividades", path: "/professor/atividades", icon: "📋" },
        { label: "Biblioteca Digital", path: "/professor/biblioteca", icon: "📚" },
    ];

    const avatarName = isAluno ? "W+N" : "E+H";

    return (
        <div className={styles.layout}>
            {/* Sidebar - Lateral Esquerda */}
            <aside className={styles.sidebar}>
                <div className={styles.logoArea}>
                    <h2>🎓 Educar</h2>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.path} className={`${styles.navItem} ${pathname === item.path ? styles.active : ''}`}>
                                    <span className={styles.icon}>{item.icon}</span>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className={styles.mainWrapper}>
                <header className={styles.header}>
                    <div className={styles.headerTitle}>
                        {isAluno ? "Área do Aluno" : "Área do Professor"}
                    </div>
                    <div className={styles.headerProfile}>
                        <div className={styles.notificationWrapper}>
                            <span className={styles.notification} onClick={() => setShowNotif(!showNotif)}>
                                🔔{isAluno && <span className={styles.badge}>2</span>}
                            </span>

                            {showNotif && (
                                <div className={styles.notifDropdown}>
                                    {isAluno ? (
                                        <>
                                            <div className={styles.notifGroup}>
                                                <div className={styles.notifHeader}>Nova atividade disponível</div>
                                                <div className={styles.notifBody}>O professor Eduardo Henrique publicou uma nova lista de exercícios de Ciclos Biogeoquímicos.</div>
                                            </div>
                                            <div className={styles.notifGroup}>
                                                <div className={styles.notifHeader}>Prazo de entrega se aproximando</div>
                                                <div className={styles.notifBody}>Lembrete: A lista de exercícios de Ciclos Biogeoquímicos deve ser entregue até 28/03/2026.</div>
                                            </div>
                                            <div className={styles.notifFooter}>Ver todas as notificações</div>
                                        </>
                                    ) : (
                                        <div className={styles.notifGroup} style={{ textAlign: "center", padding: "20px", color: "#888" }}>
                                            Não há Notificações
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className={styles.avatar}>
                            <img src={`https://ui-avatars.com/api/?name=${avatarName}&background=043c6c&color=fff`} alt="Avatar" />
                        </div>
                    </div>
                </header>

                <main className={styles.content}>
                    {children}
                </main>
            </div>
        </div>
    );
}
