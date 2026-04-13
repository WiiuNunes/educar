# 🎓 Aplicação Educar - Atividade Extensionista II

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Curso](https://img.shields.io/badge/Curso-Análise%20e%20Desenvolvimento%20de%20Sistemas-blue)
![Tech](https://img.shields.io/badge/Tech-Next.js%20%7C%20React%20%7C%20JavaScript-blueviolet)

## 📌 Sobre o Projeto
Tornar o conteúdo educacional de sustentabilidade e curricular acessível aos alunos do ensino fundamental e médio, de forma interdisciplinar, sustentável e integradora, por meio de uma plataforma digital.

**Objetivos específicos:**
- Desenvolver a conscientização ambiental.
- Implementar a produção do conhecimento interdisciplinar pelos professores.
- Tornar o conteúdo educacional acessível para alunos com dificuldades de acesso à cultura digital.
- Incentivar o engajamento da comunidade escolar em ações sustentáveis.

## 🚀 Arquitetura e Linguagens Utilizadas
Como estudante concluinte de Análise e Desenvolvimento de Sistemas (ADS), decidi fugir do básico e implementar um front-end moderno, robusto e flexível. As principais tecnologias implementadas na codificação foram:
- **Next.js 13+ (App Router)**: Framework adotado para garantir um roteamento aninhado (nested routing) e suporte eficiente para Server-Side e Client-Side Rendering (SSR/CSR).
- **React.js**: Biblioteca principal de UI onde apliquei intensamente o uso de Hooks (`useState`, `useEffect`) para o lifecycle do DOM e gerenciamento de estado reativo (Abas, Alertas, Fóruns).
- **JavaScript (ES6+)**: Linguagem "core" utilizada nas validações e nos scripts de negócio cliente-servidor.
- **CSS Modules**: Técnica de modularização para o design do projeto. Ela garante a imutabilidade das classes, seguindo o padrão Clean Code (impede conflitos em folhas de estilos globais).

## 🏗 Estrutura e Features (Desenvolvimento)
Separei a experiência de uso usando o esqueleto clássico do RBAC (Role-Based Access Control) simulado:
1. **Login e Cadastro (Wizard UI)**: Fluxos com validação direta nas inputs. O Cadastro foi dividido em 3 passos contendo máquina de estado finita (melhorando a heurística de navegação de Nielsen para o usuário final).
2. **Dashboard do Aluno**: Acesso direto a materiais em Query Params nativos, filtros computacionais da base de dados executando em O(n), barra de progresso em tempo real e guias unificadas (`Meus Cursos > Atividades`).
3. **Dashboard do Professor**: CRUD estrutural simulado (Criar Atividade, Gerenciar Cursos) mapeando o Painel do Docente via HOC (Higher-Order Component).
4. **Sistema de Notificações**: Dropdown customizado de feed de avisos isolado em um componente pai na camada mais funda do Layout (respeitando o princípio DRY - *Don't Repeat Yourself*).

