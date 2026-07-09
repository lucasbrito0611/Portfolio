# 🗂️ Portfolio — Frontend

Interface do meu portfólio pessoal, desenvolvida em React com animações sofisticadas, internacionalização (PT/EN) e integração dinâmica com a API REST.

## ✨ Destaques

- Portfólio público com projetos e skills carregados dinamicamente da API
- Área administrativa protegida por JWT para gerenciar conteúdo (CRUD)
- Internacionalização (Português 🇧🇷 / Inglês 🇺🇸) via `i18next`
- Animações de entrada com **GSAP** e transições fluidas com **Framer Motion**
- Drag-and-drop para reordenar projetos e skills no painel admin (`@dnd-kit`)
- Upload de imagens integrado ao **Cloudinary**
- Formulário de contato via **EmailJS** (sem backend próprio)
- Roteamento SPA com `vercel.json` para suporte ao F5 em produção

## 🧭 Visão Geral

- **Framework:** React 19 + Vite 6
- **Estilização:** Tailwind CSS v4
- **Roteamento:** React Router DOM v7
- **Animações:** GSAP + Framer Motion
- **HTTP Client:** Axios
- **i18n:** i18next + react-i18next
- **Deploy:** Vercel

## 📂 Estrutura do Projeto

```
portfolio-frontend/
├── src/
│   ├── animations/          # Variantes e hooks de animação GSAP/Framer Motion
│   ├── assets/              # Imagens e recursos estáticos
│   ├── components/          # Componentes reutilizáveis (Header, Cards, etc.)
│   ├── context/             # React Context (autenticação, estado global)
│   ├── data/                # Dados estáticos auxiliares
│   ├── i18n/                # Configuração e arquivos de tradução (pt/en)
│   ├── lib/                 # Utilitários e helpers
│   ├── pages/
│   │   ├── Home.jsx         # Página pública do portfólio
│   │   └── Admin.jsx        # Painel administrativo (protegido)
│   ├── services/            # Módulos de chamada à API (Axios)
│   ├── App.jsx
│   └── main.jsx
├── .env.example             # Variáveis de ambiente necessárias
├── vercel.json              # Configuração de SPA rewrite para o Vercel
└── vite.config.js
```

## 🚀 Como Rodar Localmente

**Pré-requisitos:** Node.js 20+, backend rodando (veja [portfolio-backend](https://github.com/lucasbrito0611/portfolio-backend))

```bash
# 1. Clone o repositório e entre na pasta
cd portfolio-frontend

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em `http://localhost:5173`.

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env` na raiz com base no `.env.example`:

| Variável | Descrição |
|---|---|
| `VITE_API_URL` | URL base da API (ex: `http://localhost:3000/api/v1`) |
| `VITE_CLOUDINARY_CLOUD_NAME` | Cloud name do Cloudinary para upload de imagens |
| `VITE_CLOUDINARY_UPLOAD_PRESET` | Upload preset do Cloudinary |
| `VITE_EMAILJS_SERVICE_ID` | Service ID do EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | Template ID do EmailJS |
| `VITE_EMAILJS_PUBLIC_KEY` | Public Key do EmailJS |

## ☁️ Deploy (Vercel)

O projeto está configurado para deploy automático no Vercel a partir da branch `main`.

1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente no painel do Vercel (Settings → Environment Variables)
3. Todo `git push` na `main` aciona um novo deploy automaticamente

> O `vercel.json` inclui um rewrite de `/*` para `/index.html`, garantindo que rotas como `/admin` funcionem corretamente ao dar F5.

## 🔗 Backend

Este projeto consome a API REST do [portfolio-backend](https://github.com/lucasbrito0611/portfolio-backend), construída com NestJS e hospedada no Render.
