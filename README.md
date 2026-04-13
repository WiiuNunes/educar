# 🎓 Aplicação Educar - Atividade Extensionista II

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Curso](https://img.shields.io/badge/Curso-Análise%20e%20Desenvolvimento%20de%20Sistemas-blue)
![Tech](https://img.shields.io/badge/Tech-Next.js%20%7C%20React%20%7C%20JavaScript-blueviolet)

## 📌 Sobre o Projeto
O **Educar** é um produto de software desenhado e desenvolvido integralmente como MVP (Produto Mínimo Viável) do front-end para a entrega da disciplina de **Atividade Extensionista II**. 
O objetivo principal da plataforma é promover a educação voltada para práticas de sustentabilidade e ecossistemas (foco acadêmico), incentivando metodologias de ensino digital entre docentes e alunos.

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

## ⚙️ Como executar o projeto localmente
Para a banca examinadora ou professores que farão a revisão do código local:

1. Realize o clone deste repositório na sua máquina:
   ```bash
   git clone https://github.com/WiiuNunes/educar.git
   ```
2. Acesse a pasta recém criada:
   ```bash
   cd educar
   ```
3. Instale os módulos de dependências e dependências de desenvolvimento do Node.js:
   ```bash
   npm install
   ```
4. Suba o servidor de desenvolvimento na sua porta local:
   ```bash
   npm run dev
   ```
5. Abra o navegador acessando [http://localhost:3000](http://localhost:3000) e teste a plataforma.

---
> *Software documentado e codificado como trabalho universitário em Análise e Desenvolvimento de Sistemas. Finalizado com sucesso para entrega à banca.* 🧑‍💻📚
