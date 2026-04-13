"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

/**
 * Cadastro Wizard Pattern
 * Implementação utilizando renderização condicional baseada na máquina de estado (State Machine simples).
 * Decidi fatiar em 3 steps pra melhorar a UX segundo os heurísticos de IHC (Interação Humano-Computador).
 * O state management é feito pelo useState, contudo em ambiente de produção pesada, usar o context/Zod
 * seria ideal. Isso garante cobrir a regra de validação síncrona do step 2 sem penalizar a performance.
 */
export default function Cadastro() {
    const router = useRouter();

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nome: "",
        tipo: "Aluno",
        email: "",
        senha: "",
        confirmarSenha: ""
    });
    const [errorStatus, setErrorStatus] = useState("");

    const nextStep = () => {
        // Validação passo 2
        if (step === 2) {
            if (formData.senha !== formData.confirmarSenha) {
                setErrorStatus("As senhas não coincidem");
                return;
            }
            setErrorStatus(""); // Clear if ok
        }
        setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);

    const handleCadastrar = () => {
        // Cadastrar redireciona para a home
        router.push("/");
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.iconHats}>🎓</div>
                <h1>Educar</h1>
                <p>Cadastro</p>
            </div>

            <div className={styles.formContainer}>
                {/* Stepper */}
                <div className={styles.stepperContainer}>
                    <div className={`${styles.stepItem} ${step >= 1 ? styles.activeText : ""}`}>
                        <span className={step >= 1 ? styles.stepCircleActive : styles.stepCircle}>1</span> Consultar Pessoais
                    </div>
                    <div className={styles.stepLine}></div>
                    <div className={`${styles.stepItem} ${step >= 2 ? styles.activeText : ""}`}>
                        <span className={step >= 2 ? styles.stepCircleActive : styles.stepCircle}>2</span> Credenciais
                    </div>
                    <div className={styles.stepLine}></div>
                    <div className={`${styles.stepItem} ${step >= 3 ? styles.activeText : ""}`}>
                        <span className={step >= 3 ? styles.stepCircleActive : styles.stepCircle}>3</span> Confirmação
                    </div>
                </div>

                {/* Alerta de erro */}
                {errorStatus && (
                    <div className={styles.alertError}>
                        <span style={{ marginRight: '8px' }}>⚠️</span> {errorStatus}
                    </div>
                )}

                {/* Step 1 */}
                {step === 1 && (
                    <div className={styles.stepContent}>
                        <div className={styles.inputGroup}>
                            <label>Nome Completo *</label>
                            <input
                                type="text"
                                value={formData.nome}
                                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                className={styles.inputField}
                            />
                        </div>

                        <div className={styles.radioGroupWrapper}>
                            <label className={styles.radioGroupLabel}>Tipo de Usuário</label>
                            <div className={styles.radioGroup}>
                                <label>
                                    <input
                                        type="radio"
                                        name="tipoUsuario"
                                        value="Aluno"
                                        checked={formData.tipo === "Aluno"}
                                        onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                                    />
                                    Aluno
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="tipoUsuario"
                                        value="Professor"
                                        checked={formData.tipo === "Professor"}
                                        onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                                    />
                                    Professor
                                </label>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                    <div className={styles.stepContent}>
                        <div className={styles.inputGroup}>
                            <label>Email *</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Senha *</label>
                            <input
                                type="password"
                                value={formData.senha}
                                onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Confirmar Senha *</label>
                            <input
                                type="password"
                                value={formData.confirmarSenha}
                                onChange={(e) => setFormData({ ...formData, confirmarSenha: e.target.value })}
                                className={styles.inputField}
                            />
                        </div>
                    </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                    <div className={styles.stepContent}>
                        <h3 style={{ marginBottom: "15px", fontWeight: "normal" }}>Confirme seus dados</h3>
                        <p style={{ marginBottom: "20px", fontSize: "0.95rem" }}>
                            <strong>Nome:</strong> {formData.nome} <br /><br />
                            <strong>Email:</strong> {formData.email} <br /><br />
                            <strong>Tipo de Usuário:</strong> {formData.tipo}
                        </p>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className={styles.navButtonsContainer}>
                    <button
                        className={step === 1 ? styles.btnVoltarDisabled : styles.btnVoltar}
                        onClick={step > 1 ? prevStep : null}
                        disabled={step === 1}
                    >
                        VOLTAR
                    </button>

                    {step < 3 ? (
                        <button className={styles.btnProximo} onClick={nextStep}>
                            PRÓXIMO
                        </button>
                    ) : (
                        <button className={styles.btnProximo} onClick={handleCadastrar}>
                            CADASTRAR
                        </button>
                    )}
                </div>

                <div className={styles.loginLink}>
                    <Link href="/">Já tem uma conta? Faça login</Link>
                </div>
            </div>
        </div>
    );
}
